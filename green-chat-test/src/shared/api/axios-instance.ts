import axios from "axios";
import { BaseUrl } from "./config/constants";

export const axiosInstance = (idInstance: string, apiTokenInstance: string) => {
  return axios.create({
    baseURL: `${BaseUrl}${idInstance}`,
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      token: apiTokenInstance
    }
  })
}