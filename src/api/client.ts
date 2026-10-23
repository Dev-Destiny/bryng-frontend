import axios, { type AxiosRequestConfig } from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

type RequestOptions = Omit<AxiosRequestConfig, "url"> & {
  body?: AxiosRequestConfig["data"];
};

export async function apiRequest<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { body, ...config } = options;
  const response = await apiClient.request<T>({
    ...config,
    ...(body !== undefined ? { data: body } : {}),
    url: path,
  });

  return response.data;
}
