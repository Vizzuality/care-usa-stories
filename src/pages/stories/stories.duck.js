import { normalize } from 'normalizr';
import { createReducer } from 'store';
import contentful from 'contentful-client';
import { storiesSchema } from 'schemas';

const GET_STORIES = 'stories/GET_STORIES';

const initialState = {
  entities: {},
  result: []
};

const storiesReducer = {
  [GET_STORIES](state, action) {
    return { ...state, ...action.payload };
  }
};

export async function getStoriesThunk(dispatch) {
  const { items } = await contentful.getEntries({ content_type: 'story', order: 'fields.title' });
  dispatch({
    type: GET_STORIES,
    payload: normalize(items, storiesSchema)
  });
}

export default createReducer(initialState, storiesReducer);