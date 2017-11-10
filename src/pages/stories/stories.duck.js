import { normalize } from 'normalizr';
import { createReducer } from 'store';
import contentful from 'contentful-client';
import { stories as storiesSchema } from 'schemas';

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


// Navigation pre-fetching thunks
export async function getStoriesThunk(dispatch, getState) {
  const { query = {} } = getState().location;
  const keyMap = {
    category: 'fields.sectorList[in]',
    country: 'fields.countryList[in]',
    q: 'query'
  };
  const filters = Object.keys(query).reduce((acc, next) => {
    const value = query[next];
    const key = keyMap[next];
    if (key && value) return { ...acc, [key]: value };
    return acc;
  }, {});
  const { items } = await contentful.getEntries({
    ...filters,
    content_type: 'story',
    order: 'fields.story_date',
    limit: 20
  });
  dispatch({
    type: GET_STORIES,
    payload: normalize(items, storiesSchema)
  });
}

export default createReducer(initialState, storiesReducer);