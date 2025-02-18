import { useEffect, useState } from 'react';
import { Character } from '../models';
import { ApiResponse, apiService } from '../api.service';
export const useApiGetCharacterById = (id: string) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [isOk, setOk] = useState<boolean>(false);
  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    const getCharacter = async () => {
      setLoading(true);

      const apiResponse: ApiResponse<Character> =
        await apiService.getCharacter(id);

      const payload: Character | undefined = apiResponse.payload as Character;

      setOk(apiResponse.isOk);

      setCharacter(payload);

      setErrorMsg(apiResponse.errorMsg);

      setLoading(false);
    };

    getCharacter();
  }, [id]);

  return { isLoading, isOk, errorMsg, character };
};
