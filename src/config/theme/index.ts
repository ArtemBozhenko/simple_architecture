import {DefaultTheme} from '@react-navigation/native';


import { color } from './colors';

export default {
  ...(DefaultTheme || {}),
  color,
  colors: {
    ...DefaultTheme?.colors,
    background: color.BACKGROUND,
  },
  dark: false
};