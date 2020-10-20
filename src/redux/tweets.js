import { createAction, createReducer } from '@reduxjs/toolkit';

export const ADD_TWEETS = 'tweets/ADD_TWEETS';
export const addTweets = createAction(ADD_TWEETS, (tweets) => ({
  payload: tweets,
}));

export const initialState = {
  tweets: [],
};

export const tweetsReducer = createReducer(initialState, {
  [ADD_TWEETS]: (state, { payload }) => {
    state.tweets = [...payload, ...state.tweets];
  },
});
