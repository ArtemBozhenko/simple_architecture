// // import { RootState } from '#/api/store';
// import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
// import { AxiosRequestHeaders } from 'axios';
// import * as R from 'ramda';
// import env from 'react-native-config';

// export type iGetState = Pick<
//   BaseQueryApi,
//   'getState' | 'type' | 'extra' | 'endpoint' | 'forced'
// >;

// const prepareHeaders = (
//   headers: AxiosRequestHeaders,
//   {getState}: iGetState,
// ): AxiosRequestHeaders => {
//   const token = getState() as any;
//   if (
//     R.pipe(
//       R.path(['userProfile', 'token', 'access_token']),
//       R.anyPass([R.isNil, R.isEmpty]),
//       R.not,
//     )(token)
//   ) {
//     headers.authorization = `Bearer ${R.path<string>([
//       'userProfile',
//       'token',
//       'access_token',
//     ])(token)}`;
//   }

//   headers['x-corporate-partner-id'] = env.CORPATE_PARTNER_ID;

//   return headers;
// };

// export { prepareHeaders };
