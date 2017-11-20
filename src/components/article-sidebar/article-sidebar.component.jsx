import React from "react";

function ArticleSidebar ({ picture, quote, openGallery, showGallery }) {
  return (
    <section className="gallery-widget-container">
      <div className="gallery-widget-holder">
        <figure className="gallery-widget-box">
          <figcaption>
            <p>
              {quote}
            </p>
          </figcaption>
          {picture &&
            <div className="gallery-widget-image">
              <img
                src={`http:${picture.url}`}
                alt={picture.title}
              />
            </div>
          }
          {showGallery &&
            <button className="view-gallery" onClick={openGallery}>
              <div id="viewBtn" className="gallery-btn">
                <i className="icon-plus-circle" />
              </div>
              <span>View Gallery</span>
            </button>
          }
        </figure>
      </div>
    </section>
  );
}

export default ArticleSidebar;
