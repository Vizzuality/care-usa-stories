import { createReducer } from 'store';

const GET_STORIES = 'stories/GET_STORIES';

const initialState = {
  stories: {}
};

const homeReducer = {
  [GET_STORIES](state, action) {
    return { ...state, stories: action.payload };
  }
};

export default createReducer(initialState, homeReducer);