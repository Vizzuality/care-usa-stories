import { normalize } from 'normalizr';
import { createReducer } from 'store';
import contentful from 'contentful-client';
import { storiesSchema } from 'schemas';

const GET_STORIES = 'stories/GET_STORIES';

const initialState = {
  stories: {}
};

const homeReducer = {
  [GET_STORIES](state, action) {
    return { ...state, stories: action.payload };
  }
};

function getStories() {
  return (dispatch) => {
    contentful.getEntries({ content_type: 'story', order: 'fields.title' })
      .then((entries) => {
        dispatch({ type: GET_STORIES, payload: normalize(entries, storiesSchema) })
      });
  };
}

export default createReducer(initialState, homeReducer);