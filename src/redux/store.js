import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './timer/timerReducer';

const rootReducer = combineReducers({
  phonebook: phonebookReducer,
});

const store = configureStore(
  { reducer: rootReducer },
  //   rootReducer,
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
