import { People } from './models';

export type ApiResponse<T> = {
  isOk: boolean;
  errorMsg: string;
  payload?: T;
};

const API_URL = 'https://swapi.dev/api';

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

  async getPageOfPeople(url: string): Promise<ApiResponse<People>> {
    let apiUrl = url;
    if (!url) {
      apiUrl = `${API_URL}/people`;
    }
    return (await this.getData(apiUrl)) as ApiResponse<People>;
  }

  async searchPeople(query: string): Promise<ApiResponse<People>> {
    const apiUrl = `${API_URL}/people?search=${query}`;
    return (await this.getData(apiUrl)) as ApiResponse<People>;
  }

  async getPeople(query: string): Promise<ApiResponse<People>> {
    if (query) {
      return await this.searchPeople(query);
    }
    return this.getPageOfPeople('');
  }
}

export const apiService = new ApiService();
