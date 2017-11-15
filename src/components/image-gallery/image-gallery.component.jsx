import React from 'react';
import ThumbnailGallery from './thumbnail-gallery.component';

function ImageGallery(props) {
  return (
    <section id="mainGallery" className="main-gallery">
      <div className="main-gallery-container">
        <div className="main-gallery-holder">
          <div className="switchers-area">
            <p className="switcher-close">
              <button className="gallery-btn"
                      title="close">
                <i className="icon-close-bold" />
              </button>
            </p>
          </div>
          <section className="main-gallery-box">
            <figure className="gallery-box-item">
              <img
                className="slide-banner"
                src="images/gallery/image.png"
                alt="Name of the Photo" />
              <figcaption className="slide-content">
                <h5>Name of the Photo</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </figcaption>
            </figure>
          </section>
        </div>
      </div>
    </section>
  );
}

export default ImageGallery;