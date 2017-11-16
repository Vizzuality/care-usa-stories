import { createReducer } from 'store';

const OPEN_MODAL = 'modal/OPEN_MODAL';

const initialState = {
  open: false
};

const modalReducer = {
  [OPEN_MODAL](state, action) {
    return { ...state, open: action.payload };
  }
};

export function toggleModal(isOpen) {
  return {
    type: OPEN_MODAL,
    payload: isOpen
  };
}

export default createReducer(initialState, modalReducer);