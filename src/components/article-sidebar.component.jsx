import React from "react";

function ArticleSidebar ({ picture, quote }) {
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
          <p className="view-gallery">
            <button id="viewBtn" className="gallery-btn" type="button">
              <i className="icon-plus-circle" />
            </button>
            <span>View Gallery</span>
          </p>
        </figure>
      </div>
    </section>
  );
}

export default ArticleSidebar;
