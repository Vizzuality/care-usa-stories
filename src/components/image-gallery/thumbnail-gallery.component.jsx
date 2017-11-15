import React from 'react';

function ThumbnailGallery(props) {
  return (
    <section className="slider-nav-thumbnails">
      <div className="slider-nav-thumbnails-item">
        <img
          className="slide-banner"
          src="images/gallery/image.png"
          alt="Name of the Photo"/>
        <div className="layer">
          <i className="icon-arrow-left" />
        </div>
      </div>
    </section>
  );
}

export default ThumbnailGallery;