import React from 'react';
import Slider from 'react-slick';

const settings = {
  slidesToShow: 2,
  slidesToScroll: 1,
  vertical: true,
  dots: false,
  arrows: false,
  focusOnSelect: true
};

function ThumbnailGallery(props) {
  return (
    <div className="slider-nav-thumbnails">
      <Slider {...settings}>
        <div className="slider-nav-thumbnails-item">
          <div
            className="thumbnail-slide"
            style={{ backgroundImage: 'url("/images/recent-stories/img1.png")' }}
          />
        </div>
      </Slider>
    </div>
  );
}

export default ThumbnailGallery;