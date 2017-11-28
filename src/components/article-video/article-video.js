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

  componentDidMount() {
    this.video.addEventListener('ended', this.toggleVideoButton)
  }

  componentWillUnmount() {
    this.video.removeEventListener('ended', this.toggleVideoButton)
  }

  getVideoRef = (ref) => {
    this.video = ref;
  };

  toggleVideoButton = () => {
    this.setState(state => ({ paused: !state.paused }));
  };

  onClickPlay() {
    if (this.video.paused) {
      // TODO: move this to store
      this.toggleVideoButton();
      this.video.play();
    } else {
      this.toggleVideoButton();
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