import { createElement } from 'react';
import { connect } from 'react-redux';
import { redirect, NOT_FOUND } from 'redux-first-router';

import { HOME, STORIES, STORIES_SLUG } from 'router';
import Stories from './stories/stories';

const pages = {
  [STORIES]: Stories,
  [STORIES_SLUG]: Stories,
  [NOT_FOUND]: Stories
};

const mapDispatchToProps = dispatch => ({
  onNotFound: () => dispatch(redirect({ type: HOME }))
});
const mapStateToProps = ({ location }) => ({ page: location.type });

const Pages = ({ page, onNotFound }) => {
  if (page === NOT_FOUND) onNotFound();
  return createElement(pages[page]);
};

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
