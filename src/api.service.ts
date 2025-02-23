import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const API_URL = 'https://rickandmortyapi.com/api';
export const ENDPOINT_CHARACTER = 'character';
export enum ACTIONS {
  NewSearch,
  LoadPage,
}
type ArgGetPage = { searchQuery: string; pageUrl: string; action: ACTIONS };
export const apiService = createApi({
  reducerPath: 'apiService',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getPage: builder.query<unknown, ArgGetPage>({
      query: (arg) => {
        const { searchQuery, pageUrl, action } = arg;
        if (action === ACTIONS.NewSearch) {
          return `/${ENDPOINT_CHARACTER}?name=${searchQuery}`;
        }
        return pageUrl;
      },
    }),
    getCharacter: builder.query({
      query: (id: string) => `/${ENDPOINT_CHARACTER}/${id}`,
    }),
  }),
});

export const { useGetPageQuery, useGetCharacterQuery } = apiService;
