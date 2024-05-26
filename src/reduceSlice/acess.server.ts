import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ILogin, ISignInRespone, ISignUpInput } from "../types/access";

// Define a service using a base URL and expected endpoints
export const accessApi = createApi({
  reducerPath: "accessApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/v1/api/" }),
  endpoints: (build) => ({
    signUp: build.mutation<ISignInRespone, ISignUpInput>({
      query(body) {
        return {
          url: "user/signup",
          method: "POST",
          body,
        };
      },
    }),
    login: build.mutation<ISignInRespone, ILogin>({
      query(body) {
        return {
          url: "user/login",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSignUpMutation, useLoginMutation } = accessApi;
