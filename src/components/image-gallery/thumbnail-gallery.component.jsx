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
  const { getThumbnailsRef, currentSlide, setCurrentSlide, slides = [] } = props;
  return (
    <div className="slider-nav-thumbnails">
      <Slider
        {...settings}
        initialSlide={(currentSlide + 1)}
        ref={getThumbnailsRef}
      >
        {
          slides.map((slide, i) => (
            <div key={`thumb-${i}`} className="slider-nav-thumbnails-item">
              <div
                onClick={() => setCurrentSlide(i)}
                className="thumbnail-slide"
                style={{ backgroundImage: `url(http:${slide.url})` }}
              >
                <div className="thumbnail-veil">
                  <i className="icon-arrow-left" />
                </div>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  );
}

export default ThumbnailGallery;