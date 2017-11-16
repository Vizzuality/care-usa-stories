export function createReducer(initialState, reducers) {
  return function reducer(state = initialState, action) {
    if (typeof reducers[action.type] === 'undefined') return state;
    return reducers[action.type](state, action);
  }
}

export { storiesDuck as stories } from 'pages/stories/stories';
export { filtersDuck as filters } from 'components/filters/filters';
export { storiesGridDuck as storiesGrid } from 'components/stories-grid/stories-grid';
export { modalDuck as modal } from 'components/modal/modal';
export { imageGalleryDuck as imageGallery } from 'components/image-gallery/image-gallery';