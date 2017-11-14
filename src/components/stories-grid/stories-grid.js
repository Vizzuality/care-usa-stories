import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { STORY } from 'router';
import { getPictures } from 'utils/entities';
import storiesGridDuck, { setCardOffset }  from './stories-grid.duck';
import StoriesGrid from './stories-grid.component';

class StoriesGridContainer extends React.Component {

  static propTypes = {
    entities: PropTypes.object,
    cardOffset: PropTypes.number,
    cardLimit: PropTypes.number
  };

  getLink(story, id) {
    return { type: STORY, payload: { slug: id } };
  }

  render() {
    const stories = this.props.entities ? this.props.entities.story : {};
    const cards = (stories ? Object.keys(stories) : [])
      .map(id => {
        const story = stories[id];
        const pictures = getPictures(story.pictures, this.props.entities);
        return {
          ...story,
          image: pictures && pictures[0],
          link: this.getLink(story, id)
        };
      })
      .slice(0, this.props.cardOffset);

    return createElement(StoriesGrid, { ...this.props, cards });
  }
}

function mapStateToProps({ storiesGrid }) {
  return { cardOffset: storiesGrid.cardOffset };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCardOffset }, dispatch);
}

export { storiesGridDuck };

export default connect(mapStateToProps, mapDispatchToProps)(StoriesGridContainer);