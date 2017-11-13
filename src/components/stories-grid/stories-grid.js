import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import StoriesGrid from './stories-grid.component';
import { STORIES_SLUG } from 'router';

class StoriesGridContainer extends React.Component {

  static propTypes = {
    stories: PropTypes.object
  };

  getImage(pictures) {
    if (!pictures) return;
    const images = this.props.stories ? this.props.stories.picture : {};
    const files = this.props.stories ? this.props.stories.file : {};
    const file = images[pictures[0]].file;
    return files[file].file;
  };

  getLink(story) {
    return { type: STORIES_SLUG, payload: { slug: 'story1' } };
  }

  render() {
    const stories = this.props.stories ? this.props.stories.story : {};
    const cards = (stories ? Object.values(stories) : [])
      .map(story => ({
        ...story,
        image: this.getImage(story.pictures),
        link: this.getLink(story)
      }));

    return createElement(StoriesGrid, { ...this.props, cards });
  }
}

export default StoriesGridContainer;