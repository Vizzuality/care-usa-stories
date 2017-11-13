import { connectRoutes, redirect } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import querySerializer from 'query-string';

import { getCategories, getCountries } from 'components/filters/filters.duck';
import { getStoriesThunk } from 'pages/stories/stories.duck';

const history = createHistory();

const HOME = 'location/HOME';
const STORIES = 'location/STORIES';
const STORY = 'location/STORY';

const dispatchPreFetchThunks = (...thunks) => async (...params) => thunks.forEach(thunk => thunk(...params));

const routes = {
  [HOME]: {
    path: '/',
    thunk: async dispatch => dispatch(redirect({ type: STORIES }))
  },
  [STORIES]: {
    path: '/stories',
    thunk: dispatchPreFetchThunks(getStoriesThunk, getCategories, getCountries)
  },
  [STORY]: '/stories/:slug'
};

export { HOME, STORIES, STORY };
export default connectRoutes(history, routes, { querySerializer });
