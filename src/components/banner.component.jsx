
import React from "react";

class Banner extends React.Component {
  render() {
    return (
      <section className="banner">
        <div className="slides-holder">
          <div className="slide-item">
            <figure className="slide">
              <picture>
                <source
                  media="(max-width: 425px)"
                  srcSet="/images/banner-m.png"
                />
                <img
                  className="slide-banner"
                  src="/images/banner-image.png"
                  alt="Reaping the Benefits of training"
                />
              </picture>
              <figcaption className="slide-content">
                <div className="tag">
                  <span>LAST STORIES</span>
                  <i className="icon-flag" />
                </div>
                <span>Emergency & disaster</span>
                <h1>Reaping the Benefits of training.</h1>
                <div>
                  <a href>
                    <img
                      className="rounded-img"
                      src="/images/author.png"
                      alt="By Anguparu Monica"
                    />
                  </a>
                  <p className="author-data">
                    <span className="author">By Anguparu Monica</span>
                    <span className="country">CARE Uganda</span>
                  </p>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="slide-item">
            <figure className="slide">
              <picture>
                <source
                  media="(max-width: 425px)"
                  srcSet="/images/banner-m.png"
                />
                <img
                  className="slide-banner"
                  src="/images/banner-image.png"
                  alt="Reaping the Benefits of training"
                />
              </picture>
              <figcaption className="slide-content">
                <div className="tag">
                  <span>LAST STORIES</span>
                  <i className="icon-flag" />
                </div>
                <span>Emergency & disaster</span>
                <h1>Reaping the Benefits of training.</h1>
                <div>
                  <a href>
                    <img
                      className="rounded-img"
                      src="/images/author.png"
                      alt="By Anguparu Monica"
                    />
                  </a>
                  <p className="author-data">
                    <span className="author">By Anguparu Monica</span>
                    <span className="country">CARE Uganda</span>
                  </p>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="slide-item">
            <figure className="slide">
              <picture>
                <source
                  media="(max-width: 425px)"
                  srcSet="/images/banner-m.png"
                />
                <img
                  className="slide-banner"
                  src="/images/banner-image.png"
                  alt="Reaping the Benefits of training"
                />
              </picture>
              <figcaption className="slide-content">
                <div className="tag">
                  <span>LAST STORIES</span>
                  <i className="icon-flag" />
                </div>
                <span>Emergency & disaster</span>
                <h1>Reaping the Benefits of training.</h1>
                <div>
                  <a href>
                    <img
                      className="rounded-img"
                      src="/images/author.png"
                      alt="By Anguparu Monica"
                    />
                  </a>
                  <p className="author-data">
                    <span className="author">By Anguparu Monica</span>
                    <span className="country">CARE Uganda</span>
                  </p>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
