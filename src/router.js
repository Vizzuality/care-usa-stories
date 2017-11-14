import { connectRoutes, redirect, NOT_FOUND } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import querySerializer from 'query-string';
import restoreScroll from 'redux-first-router-restore-scroll'

// thunks
import { getCategoriesThunk, getCountriesThunk } from 'components/filters/filters.duck';
import { getStoriesThunk } from 'pages/stories/stories.duck';
import { getStoryThunk } from 'pages/story/story.duck';

// pages
import Stories from 'pages/stories/stories'
import Story from 'pages/story/story'
import Placeholder from 'pages/placeholder.component'

const history = createHistory();

// route names
export const HOME = 'location/HOME';
export const STORIES = 'location/STORIES';
export const STORY = 'location/STORY';
export const MAP = 'location/MAP';
export const ABOUT = 'location/ABOUT';
export const DONATE = 'location/DONATE';

const dispatchPreFetchThunks = (...thunks) => async (...params) => thunks.forEach(thunk => thunk(...params));

export const routes = {
  [HOME]: {
    path: '/',
    thunk: async dispatch => dispatch(redirect({ type: STORIES }))
  },
  [STORIES]: {
    path: '/stories',
    thunk: dispatchPreFetchThunks(getStoriesThunk, getCategoriesThunk, getCountriesThunk),
    component: Stories
  },
  [STORY]: {
    path: '/stories/:slug',
    thunk: dispatchPreFetchThunks(getStoryThunk),
    component: Story
  },
  [MAP]: {
    path: '/map',
    thunk: async () => window.location.replace('http://worldofimpact.care.org')
  },
  [ABOUT]: {
    path: '/about',
    component: Placeholder
  },
  [DONATE]: {
    path: '/donate',
    component: Placeholder
  },
  [NOT_FOUND]: {
    path: '/404',
    thunk: async dispatch => dispatch(redirect({ type: HOME }))
  }
};

export default connectRoutes(history, routes, { querySerializer, restoreScroll: restoreScroll() });
