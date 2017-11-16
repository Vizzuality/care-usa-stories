import React, { createElement } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ImageGallery from './image-gallery.component';
import imageGalleryDuck, { setCurrentSlide } from './image-gallery.duck';

function mapStateToProps({ imageGallery }) {
  return { currentSlide: imageGallery.currentSlide };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCurrentSlide }, dispatch);
}

class ImageGalleryContainer extends React.PureComponent {

  componentDidUpdate() {
    const { currentSlide } = this.props;
    this.gallerySlider.slickGoTo(currentSlide);
    this.thumbnailSlider.slickGoTo(currentSlide + 1);
  }

  getImageGalleryRef = (el) => {
    this.gallerySlider = el;
  };
  getThumbnailsRef = (el) => {
    this.thumbnailSlider = el;
  };

  render() {
    const { getImageGalleryRef, getThumbnailsRef } = this;
    return createElement(ImageGallery, {
      ...this.props,
      getImageGalleryRef,
      getThumbnailsRef
    });
  }
}

export { imageGalleryDuck };
export default connect(mapStateToProps, mapDispatchToProps)(ImageGalleryContainer);