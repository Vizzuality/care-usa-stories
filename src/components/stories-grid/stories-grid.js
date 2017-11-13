import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import { STORY } from 'router';
import StoriesGrid from './stories-grid.component';
import { getImage } from 'utils/stories';

class StoriesGridContainer extends React.Component {

  static propTypes = {
    entities: PropTypes.object
  };

  getLink(story, id) {
    return { type: STORY, payload: { slug: id } };
  }

  render() {
    const stories = this.props.entities ? this.props.entities.story : {};
    const cards = (stories ? Object.keys(stories) : [])
      .map(id => {
        const story = stories[id];
        return {
          ...story,
          image: getImage(story.pictures, this.props.entities),
          link: this.getLink(story, id)
        };
      });

    return createElement(StoriesGrid, { ...this.props, cards });
  }
}

export default StoriesGridContainer;