import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
