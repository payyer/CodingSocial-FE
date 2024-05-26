import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ILogOutRespone,
  ILogin,
  ILogout,
  ISignInRespone,
  ISignUpInput,
} from "../types/access";
import Cookies from "js-cookie";
// Define a service using a base URL and expected endpoints
export const accessApi = createApi({
  reducerPath: "accessApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/v1/api/",
    prepareHeaders: (headers) => {
      const accessToken = Cookies.get("accessToken");
      // If we have a token set in state, let's assume that we should be passing it.
      if (accessToken) {
        headers.set("bearer", accessToken);
      }
      return headers;
    },
  }),
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
    logout: build.mutation<ILogOutRespone, ILogout>({
      query(body) {
        return {
          url: "user/logout",
          headers: {
            bearer: body.accessToken,
            "user-id": body.userId,
          },
          method: "DELETE",
          body,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSignUpMutation, useLoginMutation, useLogoutMutation } =
  accessApi;
