import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import FastImage from 'react-native-fast-image';

const ImageView = ({uri, style}) => {
  return (
    <View style={style}>
      <FastImage
        style={styles.image}
        source={{
          uri: uri,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: undefined,
    height: undefined,
    flex: 1,
    borderRadius: 10,
  },
});

export default ImageView;
