import {charactersRtk} from '#/store/characters/rtk';
import {useFocusEffect} from '@react-navigation/native';
import R from 'ramda';
import React from 'react';

// const charactersClass = data => ({
//   characters: R.pipe(
//     R.path(['data']),
//     R.defaultTo([]),
//     R.reject(R.anyPass([R.isEmpty, R.isNil])),
//     R.complement(R.isEmpty),
//   )(data),
// });

export const useCharacters = () => {
  const [getCharacters, characters] = charactersRtk.useLazyGetCharactersQuery({
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  useFocusEffect(
    React.useCallback(() => {
      getCharacters({force: true});
    }, []),
  );

  return {
    data: R.pipe(R.path(['data']), R.defaultTo([]))(characters),
    query: () => {
      getCharacters({force: true}).unwrap();
    },
    // ...charactersClass(characters),
    loading: characters.isLoading,
  };
};
