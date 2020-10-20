import { combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { tweetsReducer } from './tweets';

export const createRootReducer = () =>
  combineReducers({
    tweets: tweetsReducer,
  });

export const store = createStore(
  createRootReducer(),
  compose(composeWithDevTools())
);
