import { useEffect, useState } from 'react';
import { Character, Page } from '../models';
import { ApiResponse, apiService } from '../api.service';

export const useApiGetCharacters = (searchQuery: string) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [isOk, setOk] = useState<boolean>(false);
  const [charactersPage, setCharactersPage] = useState<Page<Character>>();

  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);

      const apiResponse: ApiResponse<Character> =
        await apiService.getCharacters(searchQuery);
      setOk(apiResponse.isOk);
      if (apiResponse.payload) {
        setCharactersPage(apiResponse.payload);
      }
      setErrorMsg(apiResponse.errorMsg);

      setLoading(false);
    };
    getCharacters();
  }, [searchQuery]);

  return { isLoading, isOk, errorMsg, charactersPage };
};
