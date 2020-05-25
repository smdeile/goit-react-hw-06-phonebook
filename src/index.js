import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './base.css';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { Provider } from 'react-redux';
import {
  addContactToContacts,
  filterContacts,
} from './redux/phonebook/phopnebookReducer';
import { PersistGate } from 'redux-persist/integration/react';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};
const defaultMiddlewareConfig = {
  serializableCheck: {
    ignoredActions: ['persist/PERSIST'],
  },
};

const middleware = [...getDefaultMiddleware(defaultMiddlewareConfig)];

const rootReducer = combineReducers({
  contacts: addContactToContacts,
  filter: filterContacts,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,

  middleware,
});
let persistor = persistStore(store);
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
