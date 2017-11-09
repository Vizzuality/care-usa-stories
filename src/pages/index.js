import { createElement } from 'react';
import { connect } from 'react-redux';
import { STORIES, STORIES_SLUG } from 'router';
import Stories from './stories/stories';

const pages = {
  [STORIES]: Stories,
  [STORIES_SLUG]: Stories
};

const mapStateToProps = ({ location }) => ({ page: location.type });

const Pages = ({ page }) => createElement(pages[page]);

export default connect(mapStateToProps)(Pages);