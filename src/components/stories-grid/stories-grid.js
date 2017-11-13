import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import { STORY } from 'router';
import StoriesGrid from './stories-grid.component';
class StoriesGridContainer extends React.Component {

  static propTypes = {
    stories: PropTypes.object
  };

  getImage(pictures) {
    if (!pictures) return;
    const { stories = {} } = this.props;
    const [image] = pictures;
    const images = stories.picture || {};
    const files = stories.file || {};
    const file = images[image] && images[image].file;
    return files[file] && files[file].file;
  };

  getLink(story, id) {
    return { type: STORY, payload: { slug: id } };
  }

  render() {
    const stories = this.props.stories ? this.props.stories.story : {};
    const cards = (stories ? Object.keys(stories) : [])
      .map(id => {
        const story = stories[id];
        return {
          ...story,
          image: this.getImage(story.pictures),
          link: this.getLink(story, id)
        };
      });

    return createElement(StoriesGrid, { ...this.props, cards });
  }
}

export default StoriesGridContainer;