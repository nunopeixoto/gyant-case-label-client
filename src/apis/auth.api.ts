import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginRequest } from "../dto/login-request.dto";
import { User } from "../models/user.model";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/auth",
  }),
  endpoints: (build) => ({
    login: build.mutation<User, LoginRequest>({
      query: (loginRequest) => ({
        url: "/login",
        method: "POST",
        body: loginRequest,
      }),
    }),
    logout: build.mutation<[], []>({
      query: () => ({
        url: "/logout",
        method: "POST"
      })
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;