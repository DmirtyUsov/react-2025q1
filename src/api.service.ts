import { Character, Page } from './models';

export type ApiResponse<T> = {
  isOk: boolean;
  errorMsg: string;
  payload?: Page<T> | null;
};

const API_URL = 'https://rickandmortyapi.com/api';

class ApiService {
  private async getData(url: string): Promise<ApiResponse<unknown>> {
    const apiResponse: ApiResponse<unknown> = {
      isOk: true,
      errorMsg: 'No errors',
      payload: null,
    };

    return await fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Status ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data: Page<unknown>) => {
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
      apiUrl = `${API_URL}/character`;
    }
    return (await this.getData(apiUrl)) as ApiResponse<Character>;
  }

  async searchCharacter(query: string): Promise<ApiResponse<Character>> {
    const apiUrl = `${API_URL}/character?name=${query}`;
    return (await this.getData(apiUrl)) as ApiResponse<Character>;
  }

  async getCharacter(query: string): Promise<ApiResponse<Character>> {
    if (query) {
      return await this.searchCharacter(query);
    }
    return this.getPage('');
  }
}

export const apiService = new ApiService();
