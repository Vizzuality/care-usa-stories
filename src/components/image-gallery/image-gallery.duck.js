import { createReducer } from 'store';

const SET_CURRENT_SLIDE = 'imageGallery/SET_CURRENT_SLIDE';

const initialState = {
  currentSlide: false
};

const imageGalleryReducer = {
  [SET_CURRENT_SLIDE](state, action) {
    return { ...state, currentSlide: action.payload };
  }
};

export function setCurrentSlide(index) {
  return {
    type: SET_CURRENT_SLIDE,
    payload: index
  };
}

export default createReducer(initialState, imageGalleryReducer);