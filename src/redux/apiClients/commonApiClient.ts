import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commonApiClient = createApi({
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://localhost:3000/api/common',
    baseUrl: "https://api.bond-card.com",
  }),
  endpoints: (builder) => {
    return {
      profile: builder.query<unknown, string>({
        query: (id) => ({
          url: `/detail/${id}`,
        }),
      }),
    };
  },
});
