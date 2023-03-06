// eslint-disable-next-line import/no-unresolved
import { AppRegistry } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { name as appName } from './app.json';
// eslint-disable-next-line import/no-unresolved, import/extensions
import App from './src/index';

AppRegistry.registerComponent(appName, () => App);
