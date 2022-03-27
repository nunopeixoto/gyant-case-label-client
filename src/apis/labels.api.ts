import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const labelsApi = createApi({
  reducerPath: "labelsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/labels",
  }),
  endpoints: (build) => ({
    getAllLabels: build.query<any, undefined>({
      query: () => ({ url: "/" })
    }),
  }),
});

export const { useGetAllLabelsQuery } = labelsApi;