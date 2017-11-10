import { normalize } from 'normalizr';
import { createReducer } from 'store';
import contentful from 'contentful-client';
import { categories as categoriesSchema } from 'schemas';

const GET_CATEGORIES = 'filters/GET_CATEGORIES';

const initialState = {
  categories: {}
};

const filtersReducer = {
  [GET_CATEGORIES](state, action) {
    return { ...state, categories: action.payload };
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

export default createReducer(initialState, filtersReducer);