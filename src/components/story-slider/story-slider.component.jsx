import React from "react";
import Slider from 'react-slick';
import StorySlide from './story-slide.component';

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  adaptiveHeight: true
};

function StorySlider (props) {
  const { slides } = props;
  return (
    <section className="banner">
      <div className="slides-holder">
        {slides &&
          <Slider {...settings}>
            {
              slides.map((story, key) => (
                <div key={`slide-${key}`} className="slide-item">
                  <StorySlide {...story} />
                </div>
              ))
            }
          </Slider>
        }
      </div>
    </section>
  );
}

export default StorySlider;
