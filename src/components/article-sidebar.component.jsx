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
                src="/images/otim.png"
                alt="My name is Otim Peter and I am 34 years of age and married. Lillian, and I have six children, ranging in age from 6 months."
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
