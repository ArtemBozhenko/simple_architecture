import AsyncStorage from '@react-native-async-storage/async-storage';
import { CombinedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import { BaseQueryFn, QueryDefinition, setupListeners } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { persistReducer, persistStore } from 'redux-persist';

import { charactersSlice } from './characters/slice';
import { charactersRtk } from './characters/rtk';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  // mainSlice: persistReducer(persistConfig, mainSlice.reducer),
  charactersSlice: charactersSlice.reducer,
  [charactersRtk.reducerPath]: charactersRtk.reducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const store: ToolkitStore<CombinedState<{
  charactersSlice: any;
  charactersRtk: CombinedState<any>;
}>> = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(charactersRtk.middleware),
  preloadedState: {},
  reducer: rootReducer,
});

// добавление персистора
const persistor = persistStore(store);

setupListeners(store.dispatch);

export { persistor, store };
