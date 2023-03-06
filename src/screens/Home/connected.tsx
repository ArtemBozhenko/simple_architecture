import React from 'react';

import Screen from './screen';
import {useCharacters} from '#/hooks/api/useCharacters';

const Connected = () => {
  const characters = useCharacters();

  return <Screen data={characters.data} loading={characters.loading} />;
};

export default Connected;
