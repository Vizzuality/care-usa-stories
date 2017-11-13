import { connectRoutes, redirect } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import querySerializer from 'query-string';

import { getCategoriesThunk, getCountriesThunk } from 'components/filters/filters.duck';
import { getStoriesThunk } from 'pages/stories/stories.duck';
import { getStoryThunk } from 'pages/story/story.duck';

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
    thunk: dispatchPreFetchThunks(getStoriesThunk, getCategoriesThunk, getCountriesThunk)
  },
  [STORY]: {
    path: '/stories/:slug',
    thunk: dispatchPreFetchThunks(getStoryThunk)
  },
};

export { HOME, STORIES, STORY };
export default connectRoutes(history, routes, { querySerializer });
