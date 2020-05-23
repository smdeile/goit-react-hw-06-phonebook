import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './base.css';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {
  addContactToContacts,
  filterContacts,
} from './redux/phonebook/phopnebookReducer';

const rootReducer = combineReducers({
  contacts: addContactToContacts,
  filterContacts,
});
const store = configureStore({ reducer: rootReducer });
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
