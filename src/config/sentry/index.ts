// import * as Sentry from "@sentry/react-native";
// import env from 'react-native-config';

// Sentry.init({
//     attachStacktrace: true,
//     autoSessionTracking: true,
//     dsn: env.SENTRY_DSN || '',
//     enabled: true,
//     maxBreadcrumbs: 50,
//     tracesSampleRate: 1.0,

// });
// export default Sentry

// export const sentrySelect = {
//     mistake: (name: string, message: string) => {
//         try {
//             Sentry.captureMessage(`${name}_${message}`);
//         } catch (e) {
//             console.error('Sentry', e)
//         }
//     }
// }
