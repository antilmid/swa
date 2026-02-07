import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface SteamClientOptions {
  apiKey: string;
  baseURL?: string;
  timeout?: number;
}

export class SteamClient {
  private client: AxiosInstance;
  private apiKey: string;

  constructor(options: SteamClientOptions) {
    this.apiKey = options.apiKey;
    this.client = axios.create({
      baseURL: options.baseURL || 'https://api.steampowered.com',
      timeout: options.timeout || 10000,
    });

    // Add interceptor to inject API key if needed, or just use it in methods
    // Many Steam APIs require 'key' query parameter
    this.client.interceptors.request.use((config) => {
      if (!config.params) {
        config.params = {};
      }
      config.params.key = this.apiKey;
      return config;
    });
  }

  public async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.client.get(url, config);
    return response.data;
  }
  
  // Placeholder for specific API interfaces
  // public ISteamUser(): ISteamUser { ... }
}
