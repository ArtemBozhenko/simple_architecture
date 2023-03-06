import { axiosBaseQuery } from '#/api/axios';
import { createApi } from '@reduxjs/toolkit/query/react';
import env from 'react-native-config';
import sheme from './sheme';

export const charactersRtk = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: env.API,
  }),
  endpoints: (build) => ({
    getCharacters: build.query(sheme.getCharacters)
  }),
  reducerPath: 'charactersRtk',
});
