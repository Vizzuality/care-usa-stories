import { createReducer } from 'store';

const SET_CARD_LIMIT = 'stories/SET_CARD_LIMIT';

const initialState = {
  cardOffset: 20
};

const storiesGridReducer = {
  [SET_CARD_LIMIT](state, action) {
    return { ...state, cardOffset: action.payload };
  }
};

export function setCardOffset(limit) {
  return {
    type: SET_CARD_LIMIT,
    payload: limit
  };
}

export default createReducer(initialState, storiesGridReducer);