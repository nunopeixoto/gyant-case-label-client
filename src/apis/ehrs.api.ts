import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ehrsApi = createApi({
  reducerPath: "ehrsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/ehrs",
  }),
  endpoints: (build) => ({
    getNextEhr: build.query<any, undefined>({
      query: () => ({ url: "/" })
    }),
  }),
});

export const { useGetNextEhrQuery } = ehrsApi;