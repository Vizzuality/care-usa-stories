import React from "react";
import Slider from 'react-slick';

const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    adaptiveHeight: true,
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

class RecentStories extends React.Component {
  render() {
    return (
      <section className="recent-stories-container">
        <h3>Most Recent Stories</h3>
        <span className="group">(12 Stories)</span>
        <div className="recent-slides-holder">
          <Slider {...settings}>
            <div className="slide-item">
              <a href>
                <img
                  className="recent-slide"
                  src="/images/recent-stories/img1.png"
                  alt="Recent story"
                />
              </a>
            </div>
            <div className="slide-item">
              <a href>
                <img
                  className="recent-slide"
                  src="/images/recent-stories/img2.png"
                  alt="Recent story"
                />
              </a>
            </div>
            <div className="slide-item">
              <a href>
                <img
                  className="recent-slide"
                  src="/images/recent-stories/img3.png"
                  alt="Recent story"
                />
              </a>
            </div>
            <div className="slide-item">
              <a href>
                <img
                  className="recent-slide"
                  src="/images/recent-stories/img4.png"
                  alt="Recent story"
                />
              </a>
            </div>
            <div className="slide-item">
              <a href>
                <img
                  className="recent-slide"
                  src="/images/recent-stories/img5.png"
                  alt="Recent story"
                />
              </a>
            </div>
            <div className="slide-item">
              <a href>
                <img
                  className="recent-slide"
                  src="/images/recent-stories/img6.png"
                  alt="Recent story"
                />
              </a>
            </div>
            <div className="slide-item">
              <a href>
                <img
                  className="recent-slide"
                  src="/images/recent-stories/img1.png"
                  alt="Recent story"
                />
              </a>
            </div>
            <div className="slide-item">
              <a href>
                <img
                  className="recent-slide"
                  src="/images/recent-stories/img2.png"
                  alt="Recent story"
                />
              </a>
            </div>
            <div className="slide-item">
              <a href>
                <img
                  className="recent-slide"
                  src="/images/recent-stories/img3.png"
                  alt="Recent story"
                />
              </a>
            </div>
            <div className="slide-item">
              <a href>
                <img
                  className="recent-slide"
                  src="/images/recent-stories/img4.png"
                  alt="Recent story"
                />
              </a>
            </div>
            <div className="slide-item">
              <a href>
                <img
                  className="recent-slide"
                  src="/images/recent-stories/img5.png"
                  alt="Recent story"
                />
              </a>
            </div>
            <div className="slide-item">
              <a href>
                <img
                  className="recent-slide"
                  src="/images/recent-stories/img6.png"
                  alt="Recent story"
                />
              </a>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}

export default RecentStories;
