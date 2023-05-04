import axios from 'axios';
import { getAuthToken, removeAuthToken } from './token';
import { useState, useCallback } from 'react';
import type { SearchParamOptions } from './types';
import { RestEndpoint } from '../helpers/const';
// TODO: Due to windows timeout was set to 15000
const Axios = axios.create({
  baseURL: RestEndpoint,
  // timeout: 150000000,
  headers: {
    'Content-Type': 'application/json',
  },
});
axios.interceptors.request.use((config) => {
  // stuff
  if (!config.url?.includes('nftstorage.link')) {
    const token = getAuthToken();
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token ? token : ''}`,
    };
  }

  return config;
});
// Change request data/error here
Axios.interceptors.request.use(
  (config) => {
    if (!config.url?.includes('nftstorage.link')) {
      const token = getAuthToken();
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token ? token : ''}`,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      (error.response && error.response.status === 401) ||
      (error.response && error.response.status === 403) ||
      (error.response &&
        error.response.data.message === 'PIXER_ERROR.NOT_AUTHORIZED')
    ) {
      removeAuthToken();
    }
    return Promise.reject(error);
  }
);

export class HttpClient {
  static async get<T>(url: string, params?: unknown) {
    const response = await Axios.get<T>(url, { params });
    return response.data;
  }

  static async post<T>(url: string, data: unknown, options?: any) {
    const response = await Axios.post<T>(url, data, options);
    return response.data;
  }

  static async put<T>(url: string, data: unknown) {
    const response = await Axios.put<T>(url, data);
    return response.data;
  }

  static async delete<T>(url: string) {
    const response = await Axios.delete<T>(url);
    return response.data;
  }
  static formatSearchParams(params: Partial<SearchParamOptions>) {
    return Object.entries(params)
      .filter(([, value]) => Boolean(value))
      .map(([k, v]) =>
        ['type', 'categories', 'tags', 'author', 'manufacturer'].includes(k)
          ? `${k}.slug:${v}`
          : `${k}:${v}`
      )
      .join(';');
  }
}

export function useHTTPReq() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async function (reqConfig, executeFn) {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios({
        url: reqConfig.url,
        method: reqConfig.method ? reqConfig.method : 'GET',
        data: reqConfig.data ? reqConfig.data : {},
      });

      executeFn(response.data);
    } catch (err: any) {
      if (err.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        setError(err.message || 'Request failed!');
      } else {
        // Something happened in setting up the request that triggered an Error
        setError(err.message || 'Something went wrong!');
      }
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
}
