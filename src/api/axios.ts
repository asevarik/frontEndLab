// api/axios.ts
import axios from "axios";
import { BASE_URL } from "./processEnv";

export const axiosInstance = axios.create({
  baseURL: BASE_URL || "http://localhost:3000/api",
  withCredentials: true,
});

export const setupInterceptors = (logout: () => void) => {
  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      if (error.response?.status === 401) logout();
      return Promise.reject(error);
    }
  );
};
