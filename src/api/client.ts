/* eslint-disable @typescript-eslint/no-explicit-any */
// api/client.ts
import { axiosInstance } from "./axios";

export const api = {
  get: <T>(url: string, config = {}) => axiosInstance.get<T>(url, config),
  post: <T>(url: string, data?: any, config = {}) => axiosInstance.post<T>(url, data, config),
  put: <T>(url: string, data?: any, config = {}) => axiosInstance.put<T>(url, data, config),
  delete: <T>(url: string, config = {}) => axiosInstance.delete<T>(url, config),
};
