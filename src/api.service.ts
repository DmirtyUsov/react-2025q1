import { Character, Page } from './models';

export type ApiResponse<T> = {
  isOk: boolean;
  errorMsg: string;
  payload?: Page<T> | T | undefined;
};

const API_URL = 'https://rickandmortyapi.com/api';
const ENDPOINT_CHARACTER = 'character';

class ApiService {
  private async getData(url: string): Promise<ApiResponse<unknown>> {
    const apiResponse: ApiResponse<unknown> = {
      isOk: true,
      errorMsg: 'No errors',
      payload: undefined,
    };

    return await fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Status ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data: unknown) => {
        apiResponse.payload = data;
        return apiResponse;
      })
      .catch((error: Error) => {
        apiResponse.isOk = false;
        console.log(error);
        apiResponse.errorMsg = error.message;
        return apiResponse;
      });
  }

  async getPage(url: string): Promise<ApiResponse<Character>> {
    let apiUrl = url;
    if (!url) {
      apiUrl = `${API_URL}/${ENDPOINT_CHARACTER}`;
    }
    return (await this.getData(apiUrl)) as ApiResponse<Character>;
  }

  async searchCharacters(query: string): Promise<ApiResponse<Character>> {
    const apiUrl = `${API_URL}/${ENDPOINT_CHARACTER}?name=${query}`;
    return (await this.getData(apiUrl)) as ApiResponse<Character>;
  }

  async getCharacters(query: string): Promise<ApiResponse<Character>> {
    if (query) {
      return await this.searchCharacters(query);
    }
    return this.getPage('');
  }

  async getCharacter(id: string): Promise<ApiResponse<Character>> {
    if (!id) {
      const error: ApiResponse<Character> = {
        isOk: false,
        errorMsg: 'Empty id',
      };
      return Promise.resolve(error);
    }
    const apiUrl = `${API_URL}/${ENDPOINT_CHARACTER}/${id}`;
    return (await this.getData(apiUrl)) as ApiResponse<Character>;
  }

  convertCharacters2Csv(characters: Character[]): string {
    const header = ['name', 'status', 'species', 'type', 'gender', 'origin'];
    const rows = characters.map((character) => [
      character.name,
      character.status,
      character.species,
      character.type,
      character.gender,
      character.origin.name,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [header.join(';'), ...rows.map((e) => e.join(';'))].join('\n');
    return encodeURI(csvContent);
  }
}

export const apiService = new ApiService();
