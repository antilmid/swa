import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'http://api.steampowered.com/',
  timeout: 6e4, // 60s
});

export const get = async <T = any>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  const response: AxiosResponse<T> = await instance.get(url, config);
  return response.data;
}

export const post = async <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
  const response: AxiosResponse<T> = await instance.post(url, data, config);
  return response.data;
}