import isEmpty from 'lodash/isEmpty';
import { normalize } from 'normalizr';
import { createReducer } from 'store';
import contentful from 'contentful-client';
import { stories as storiesSchema } from 'schemas';
import { buildFilters } from 'utils/stories';

const GET_STORIES = 'stories/GET_STORIES';
const GET_FILTERED_STORIES = 'stories/GET_FILTERED_STORIES';

const initialState = {
  all: {
    entities: {},
    result: []
  },
  filtered: {
    entities: {},
    result: []
  }
};

const storiesReducer = {
  [GET_STORIES](state, action) {
    return { ...state, all: action.payload };
  },
  [GET_FILTERED_STORIES](state, action) {
    return { ...state, filtered: action.payload };
  }
};


// Navigation pre-fetching thunks
export async function getStoriesThunk(dispatch, getState) {
  const { all } = getState().stories;
  if (all.result.length === 0) {
    const { items } = await contentful.getEntries({
      content_type: 'story',
      order: 'fields.story_date'
    });

    dispatch({
      type: GET_STORIES,
      payload: normalize(items, storiesSchema)
    });
  }
}

export async function getFilteredStoriesThunk(dispatch, getState) {
  const { query = {} } = getState().location;
  if (!isEmpty(query)) {
    const filters = buildFilters(query);
    const { items } = await contentful.getEntries({
      ...filters,
      content_type: 'story',
      order: 'fields.story_date'
    });
    dispatch({
      type: GET_FILTERED_STORIES,
      payload: normalize(items, storiesSchema)
    });
  }
}

export default createReducer(initialState, storiesReducer);