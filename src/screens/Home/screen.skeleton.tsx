import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {View} from 'react-native';

const ScreenSkeleton = () => (
  <View>
    <SkeletonPlaceholder borderRadius={20}>
      <SkeletonPlaceholder.Item height={40} marginTop={10} marginHorizontal={12} />
    </SkeletonPlaceholder>
    {['', '', ''].map((_, index) => (
      <SkeletonPlaceholder key={index}>
        <SkeletonPlaceholder.Item
          flexDirection="row"
          justifyContent="space-evenly"
          marginTop={10}>
          <SkeletonPlaceholder.Item
            height={250}
            width="45%"
            borderRadius={10}
          />
          <SkeletonPlaceholder.Item
            height={250}
            width="45%"
            borderRadius={10}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    ))}
  </View>
);

export default ScreenSkeleton;
