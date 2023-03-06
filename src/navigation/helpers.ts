import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export const ModalSlideFunc = (header: boolean): NativeStackNavigationOptions => ({
  gestureEnabled: false,
  headerShown: header || false,
  presentation: 'modal',
});

export const SlideRightFunc = (header: boolean): NativeStackNavigationOptions => ({
  headerShown: header || false,
});

export const defaultOptions = (header: boolean) => ({
  headerShown: header || false,
});
