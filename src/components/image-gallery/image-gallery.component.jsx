import React from 'react';
import ThumbnailGallery from './thumbnail-gallery.component';
import Slider from 'react-slick';

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false
};

function ImageGallery(props) {
  return (
    <section className="main-gallery-container">
      <div className="main-gallery-holder">
        <div className="main-gallery-box">
          <Slider {...settings}>
            <div className="gallery-box-item">
              <div className="gallery-slide" style={{ backgroundImage: 'url("/images/article/img4.png")' }} />
            </div>
          </Slider>
        </div>
        <div className="slide-content">
          <h5>Name of the Photo</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <div className="switchers-area">
          <div className="preview-container">
            <p className="switcher-close">
              <button className="gallery-btn"
                      title="close">
                <i className="icon-close-bold" />
              </button>
            </p>
            <ThumbnailGallery/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageGallery;