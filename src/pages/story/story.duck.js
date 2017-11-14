import { getStoriesThunk } from 'pages/stories/stories.duck';

// Navigation pre-fetching thunks
export async function getStoryThunk(dispatch, getState) {
  const { stories } = getState();
  if (!stories.result.length) {
    dispatch(getStoriesThunk);
  }
}