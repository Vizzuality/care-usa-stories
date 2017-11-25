import isEmpty from 'lodash/isEmpty';
import { normalize } from 'normalizr';
import { createReducer } from 'store';
import contentful from 'contentful-client';
import { stories as storiesSchema } from 'schemas';
import { buildFilters } from 'utils/stories';

const GET_STORIES = 'stories/GET_STORIES';
const GET_FILTERED_STORIES = 'stories/GET_FILTERED_STORIES';
const SET_FITERS_ACTIVE = 'stories/SET_FITERS_ACTIVE';

const initialState = {
  all: {
    entities: {},
    result: []
  },
  filtered: {
    entities: {},
    result: []
  },
  filtersActive: false
};

const storiesReducer = {
  [GET_STORIES](state, action) {
    return { ...state, all: action.payload };
  },
  [GET_FILTERED_STORIES](state, action) {
    return { ...state, filtered: action.payload };
  },
  [SET_FITERS_ACTIVE](state, action) {
    return { ...state, filtersActive: action.payload };
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
  let filtersActive = false;

  if (!isEmpty(query)) {
    filtersActive = true;
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

  dispatch({
    type: SET_FITERS_ACTIVE,
    payload: filtersActive
  });
}

export default createReducer(initialState, storiesReducer);