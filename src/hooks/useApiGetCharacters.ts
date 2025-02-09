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

      setOk(apiResponse.isOk);

      setCharactersPage(apiResponse.payload);
      console.log(apiResponse?.payload?.info);
      if (apiResponse.payload) {
        setPagesTotal(apiResponse.payload.info.pages);
        setPageNum(1);
      }

      setErrorMsg(apiResponse.errorMsg);

      setLoading(false);
    };

    const loadPage = async () => {
      const apiResponse: ApiResponse<Character> =
        await apiService.getPage(pageUrl);

      setOk(apiResponse.isOk);

      setCharactersPage(apiResponse.payload);
      console.log(apiResponse?.payload?.info);
      if (apiResponse.payload) {
        setPagesTotal(apiResponse.payload.info.pages);
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
