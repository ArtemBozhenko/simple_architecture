import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {color} from '#/config/theme/colors';
import {hScale, mScale, wScale} from '#/helpers/utils/metrics';

import ImageView from '#/ui/ImageView';
import Male from '#/assets/icons/Male.svg';
import Female from '#/assets/icons/Female.svg';

const HomeCard = ({image, name, status, species, onSeeMore, gender}) => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>
        {name} - {species}
      </Text>
      <ImageView style={styles.image} uri={image} />
      <View style={styles.infoBar}>
        {gender === 'Male' ? (
          <Male width={wScale(18)} height={hScale(18)} style={styles.gender} />
        ) : (
          <Female
            width={wScale(18)}
            height={hScale(18)}
            style={styles.gender}
          />
        )}
        {status === 'Alive' ? (
          <View
            style={[styles.status, {backgroundColor: color.PALLET.GREEN}]}
          />
        ) : (
          <View style={[styles.status, {backgroundColor: color.PALLET.GREY}]} />
        )}
      </View>
      <TouchableOpacity onPress={onSeeMore}>
        <Text style={styles.moreTxt}>See more</Text>
      </TouchableOpacity>
    </View>
  );
};

export const styles = StyleSheet.create({
  content: {
    height: hScale(250),
    width: '45%',
    marginHorizontal: '2.5%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: hScale(130),
    width: '80%',
  },
  title: {
    fontSize: mScale(18),
    color: color.GRAY[30],
    marginBottom: wScale(10),
  },
  infoBar: {
    marginTop: wScale(10),
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },
  gender: {
    flex: 0.5,
    width: wScale(18),
    height: hScale(18),
  },
  status: {
    width: wScale(18),
    height: hScale(18),
    borderRadius: 20,
  },
  moreTxt: {
    marginTop: wScale(10),
    fontSize: mScale(14),
    color: color.PALLET.LIGHT_BLUE,
  },
});

export default HomeCard;
