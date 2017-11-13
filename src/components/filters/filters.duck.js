import { normalize } from 'normalizr';
import { createReducer } from 'store';
import contentful from 'contentful-client';
import { categories as categoriesSchema, countries as coutriesSchema } from 'schemas';
import { STORIES } from 'router';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

const GET_CATEGORIES = 'filters/GET_CATEGORIES';
const GET_COUNTRIES = 'filters/GET_COUNTRIES';

const initialState = {
  categories: {
    entities: {},
    result: []
  },
  countries: {
    entities: {},
    result: []
  }
};

const filtersReducer = {
  [GET_CATEGORIES](state, action) {
    return { ...state, categories: action.payload };
  },
  [GET_COUNTRIES](state, action) {
    return { ...state, countries: action.payload };
  }
};

// Action creators
export function updateFilters(filters) {
  return {
    type: STORIES,
    payload: {
      query: pickBy(filters, identity)
    }
  };
}

// Navigation pre-fetching thunks
export async function getCategories(dispatch, getState) {
  const { categories } = getState().filters;
  if (!categories.result.length) {
    const { items } = await contentful.getEntries({ content_type: 'sectors', order: 'fields.name'});
    dispatch({
      type: GET_CATEGORIES,
      payload: normalize(items, categoriesSchema)
    })
  }
}

export async function getCountries(dispatch, getState) {
  const { countries } = getState().filters;
  if (!countries.result.length) {
    const { items } = await contentful.getEntries({
      content_type: 'country',
      order: 'fields.name'
    });
    dispatch({
      type: GET_COUNTRIES,
      payload: normalize(items, coutriesSchema)
    })
  }
}

export default createReducer(initialState, filtersReducer);