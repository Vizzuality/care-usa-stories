import { normalize } from 'normalizr';
import { createReducer } from 'store';
import contentful from 'contentful-client';
import { categories as categoriesSchema, countries as coutriesSchema } from 'schemas';

const GET_CATEGORIES = 'filters/GET_CATEGORIES';
const GET_COUNTRIES = 'filters/GET_COUNTRIES';

const initialState = {
  categories: {},
  countries: {}
};

const filtersReducer = {
  [GET_CATEGORIES](state, action) {
    return { ...state, categories: action.payload };
  },
  [GET_COUNTRIES](state, action) {
    return { ...state, countries: action.payload };
  }
};


// Navigation pre-fetching thunks
export async function getCategories(dispatch) {
  const { items } = await contentful.getEntries({ content_type: 'sectors', order: 'fields.name'});
  dispatch({
    type: GET_CATEGORIES,
    payload: normalize(items, categoriesSchema)
  })
}

export async function getCountries(dispatch) {
  const { items } = await contentful.getEntries({ content_type: 'country', order: 'fields.name' });
  dispatch({
    type: GET_COUNTRIES,
    payload: normalize(items, coutriesSchema)
  })
}

export default createReducer(initialState, filtersReducer);