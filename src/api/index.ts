import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";

const config: AxiosRequestConfig = {
  headers: {
    // "Content-Type": "application/json",
    "x-api-key":
      "7b0b074e2143c884b50a44e0ac03a38cba5a849b31f0772cc931e7fb381fb76077c8fdac96daae5bbeb38ddea610e28cf99c84f20cddda17ab41424733785af7",
  } as RawAxiosRequestHeaders,
  withCredentials: true,
};

const client = axios.create({
  baseURL: "http://localhost:8080/v1/api/",
});

export { client, config };
