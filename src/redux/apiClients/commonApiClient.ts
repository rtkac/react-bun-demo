import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const commonApiClient = createApi({
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://localhost:3000/api/common',
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => {
    return {
      users: builder.query<unknown, void>({
        query: () => ({
          url: '/users',
        }),
      }),
    };
  },
});
