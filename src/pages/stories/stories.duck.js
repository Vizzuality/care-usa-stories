import { normalize } from 'normalizr';
import { createReducer } from 'store';
import contentful from 'contentful-client';
import { storiesSchema } from 'schemas';

const GET_STORIES = 'stories/GET_STORIES';

const initialState = {
  data: {}
};

const storiesReducer = {
  [GET_STORIES](state, action) {
    return { ...state, data: action.payload };
  }
};

export function getStories() {
  return (dispatch) => {
    contentful.getEntries({ content_type: 'story', order: 'fields.title' })
      .then(({ items }) => dispatch({
        type: GET_STORIES,
        payload: normalize(items, storiesSchema)
      }));
  };
}

export default createReducer(initialState, storiesReducer);