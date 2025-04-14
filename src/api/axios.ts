// api/axios.ts
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
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
