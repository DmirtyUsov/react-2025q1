import { useEffect, useState } from 'react';
import { Character, Page } from '../models';
import { ApiResponse, apiService } from '../api.service';

export enum ACTIONS {
  NewSearch,
  LoadPage,
}
export const useApiGetCharacters = (
  searchQuery: string,
  pageUrl: string,
  action: ACTIONS
) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [isOk, setOk] = useState<boolean>(false);
  const [pagesTotal, setPagesTotal] = useState<number>(0);
  const [pageNum, setPageNum] = useState<number>(0);
  const [charactersPage, setCharactersPage] = useState<Page<Character>>();

  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);

      const apiResponse: ApiResponse<Character> =
        await apiService.getCharacters(searchQuery);

      const payload: Page<Character> | undefined =
        apiResponse.payload as Page<Character>;

      setCharactersPage(payload);
      setOk(apiResponse.isOk);

      if (payload) {
        setPagesTotal(payload.info.pages);
        setPageNum(1);
      } else {
        setPageNum(0);
        setPagesTotal(0);
      }

      setErrorMsg(apiResponse.errorMsg);

      setLoading(false);
    };

    const loadPage = async () => {
      const apiResponse: ApiResponse<Character> =
        await apiService.getPage(pageUrl);

      const payload: Page<Character> | undefined =
        apiResponse.payload as Page<Character>;

      setOk(apiResponse.isOk);

      setCharactersPage(payload);

      if (payload) {
        setPagesTotal(payload.info.pages);
        const page = +pageUrl.split('page=')[1].split('&name')[0];
        setPageNum(page);
      }

      setErrorMsg(apiResponse.errorMsg);

      setLoading(false);
    };
    switch (action) {
      case ACTIONS.LoadPage: {
        loadPage();
        break;
      }
      case ACTIONS.NewSearch: {
        getCharacters();
        break;
      }
    }
  }, [pageUrl, searchQuery, action]);

  return { isLoading, isOk, errorMsg, charactersPage, pageNum, pagesTotal };
};
