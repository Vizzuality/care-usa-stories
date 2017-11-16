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
  const {
    getImageGalleryRef,
    currentSlide,
    getThumbnailsRef,
    setCurrentSlide,
    slides = [],
    closeGallery
  } = props;
  const activeSlide = slides[currentSlide];
  return (
    <section className="main-gallery-container">
      <div className="main-gallery-holder">
        <div className="main-gallery-box">
          <Slider
            {...settings}
            ref={getImageGalleryRef}
            afterChange={setCurrentSlide}
          >
            {
              slides.map((slide, i) => (
                <div key={`image-${i}`} className="gallery-box-item">
                  <div
                    className="gallery-slide"
                    style={{ backgroundImage: `url(http:${slide.url})` }}
                  >
                    <cite>{slide.credits}</cite>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
        {activeSlide &&
          <div className="slide-content">
            <h5>{activeSlide.title}</h5>
            <p>{activeSlide.quote}</p>
          </div>
        }
        <div className="switchers-area">
          <div className="preview-container">
            <p className="switcher-close">
              <button
                className="gallery-btn"
                title="close"
                onClick={closeGallery}
              >
                <i className="icon-close-bold" />
              </button>
            </p>
            <ThumbnailGallery
              slides={slides}
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
              getThumbnailsRef={getThumbnailsRef}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

ImageGallery.defaultProps = {
  currentSlide: 0
};

export default ImageGallery;