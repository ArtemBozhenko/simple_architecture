import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Navigation from './navigation';
import { persistor, store } from './store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <Navigation />
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
