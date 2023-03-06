import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';

import MainNavigationStack from './stack/MainNavigationStack';

import theme from '#/config/theme';

export default function Navigation() {
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <NavigationContainer theme={theme}>
        <MainNavigationStack />
      </NavigationContainer>
    </View>
  );
}
