import React from "react";
import Slider from 'react-slick';
import Link from 'redux-first-router-link';

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  adaptiveHeight: true,
  draggable: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

function RecentStories (props) {
  const { slides } = props;
  const getPicture = story => story.pictures && story.pictures[0];
   return (
    <section className="recent-stories-container">
      <h3>Most Recent Stories</h3>
      <span className="group">(12 Stories)</span>
      <div className="recent-slides-holder">
        {slides &&
          <Slider {...settings}>
            {
              slides.map((story, key) => (
                <div key={`recent-story-${key}`} className="slide-item">
                <Link to={story.link}>
                  <div
                    className="recent-slide-img"
                    style={{ backgroundImage: `url(http:${getPicture(story).url})`}}
                  />
                </Link>
                </div>
              ))
            }
          </Slider>
        }
      </div>
    </section>
    );
}


export default RecentStories;
