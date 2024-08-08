import { EnhancedStore, configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer';

const makeStore = (): EnhancedStore => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: false,
        serializableCheck: false,
      }),
    devTools: __DEV__,
  });

  return store;
};

const store = makeStore();
const persistor = persistStore(store);

export { store, persistor };
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
