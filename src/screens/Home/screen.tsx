import SearchInput from '#/ui/SearchInput';
import {hScale, wScale} from '#/helpers/utils/metrics';
import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import HomeCard from './components/HomeCard';
import ScreenSkeleton from './screen.skeleton';

export const ITEM_HEIGHT = hScale(250); // fixed height of item component

const HomeScreen = ({data, loading}) => {
  const [value, setValue] = useState('');

  const renderItem = ({item}) => <HomeCard {...item} />;
  const renderHeader = item => (
    <SearchInput
      style={styles.searchContainer}
      onClose={() => setValue('')}
      placeholder="Search"
      value={value}
      onChange={setValue}
    />
  );
  const keyExtractor = item => item.id;
  const getItemLayout = (data, index) => {
    return {
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * data.length,
      index,
    };
  };

  if (loading) return <ScreenSkeleton />;

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.flatlist}
        data={data}
        ListHeaderComponent={renderHeader}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatlist: {
    paddingBottom: 20,
  },
  searchContainer: {
    marginHorizontal: '5%',
    marginVertical: hScale(15),
    flex: 1,
  },
});

export default HomeScreen;
