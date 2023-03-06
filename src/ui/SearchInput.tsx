import {color} from '#/config/theme/colors';
import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {mScale} from '#/helpers/utils/metrics';

import CloseSvg from '#/assets/icons/Close.svg';

const SearchInput = ({value, onChange, placeholder, onClose, style}) => {
  return (
    <View style={[style, styles.container]}>
      <TextInput
        placeholder={placeholder}
        value={value}
        style={styles.input}
        onChange={onChange}
      />
      {value && (
        <TouchableOpacity onPress={onClose}>
          <CloseSvg style={styles.svg} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: mScale(15),
    backgroundColor: color.GRAY[10],
  },
  input: {
    flex: 0.9,
    padding: 5,
  },
  svg: {
    padding: 10,
  },
});

export default SearchInput;
