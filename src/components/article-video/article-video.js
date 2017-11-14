import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import ArticleVideo from './article-video.component';

class ArticleVideoContainer extends React.Component {

  static propTypes = {
    video: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.getVideoRef = this.getVideoRef.bind(this);
    this.onClickPlay = this.onClickPlay.bind(this);
    this.state = { paused: true };
  }

  getVideoRef = (ref) => {
    this.video = ref;
  };

  onClickPlay() {
    if (this.video.paused) {
      // TODO: move this to store
      this.setState({ paused: false });
      this.video.play();
    } else {
      this.setState({ paused: true });
      this.video.pause();
    }
  }

  render() {
    const { getVideoRef, onClickPlay } = this;
    const { paused } = this.state;
    return createElement(ArticleVideo, {
      ...this.props,
      getVideoRef,
      onClickPlay,
      paused
    });
  }
}

export default ArticleVideoContainer;