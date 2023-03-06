// import {prepareHeaders} from './headers';
// import {sentrySelect} from '../config/sentry';
import {BaseQueryFn} from '@reduxjs/toolkit/dist/query';
import axios, {AxiosError, AxiosRequestConfig} from 'axios';

// axios.interceptors.request.use(
//   (config: AxiosRequestConfig<any>) => {
//     config.headers = prepareHeaders(config.headers, store);
//     return config;
//   },
//   error => Promise.reject(error),
// );

export const axiosBaseQuery =
  (
    {baseUrl}: {baseUrl: string} = {baseUrl: ''},
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown
  > =>
  async ({url, method, data, params}) => {
    try {
      console.log('baseUrl + url', baseUrl + url)
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
      });

      return {data: result.data};
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      console.log('axiosError', axiosError)
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
