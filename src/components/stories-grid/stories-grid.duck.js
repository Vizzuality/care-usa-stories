import { createReducer } from 'store';

const SET_CARD_OFFSET = 'stories/SET_CARD_LIMIT';

const initialState = {
  cardStart: 0,
  cardOffset: 20
};

const storiesGridReducer = {
  [SET_CARD_OFFSET](state, action) {
    return { ...state, cardOffset: action.payload };
  }
};

export function setCardOffset(offset) {
  return {
    type: SET_CARD_OFFSET,
    payload: offset
  };
}

export default createReducer(initialState, storiesGridReducer);