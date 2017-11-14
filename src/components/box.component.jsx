import React from "react";
import Link from 'redux-first-router-link';
import { MAP } from 'router';

function Box (props) {
  const { title, author, sectorList, summary } = props;
  const mapLink = { type: MAP };

  return (
    <div className="banner-box">
      <div className="banner-content">
        <h1>{title}</h1>
        <section className="story-data">
          <div className="author-area">
            {author &&
              [
                <p key="avatar" className="author-avatar">
                  <a>
                    <img
                      className="rounded-img"
                      src="../src/images/author.png"
                      alt="By Anguparu Monica"
                    />
                  </a>
                </p>,
                <p key="authorName" className="author-data">
                  <span className="author">By Anguparu Monica</span>
                  <span className="country">CARE Uganda</span>
                </p>
              ]
            }
            <p className="datetime-area">
              <span>{sectorList.join(', ')}</span>
              <span className="datetime">
                  <time dateTime="2017-03-22">22 March 2017</time>
                </span>
            </p>
          </div>
          <div className="story-preview">
            <p>
              {summary}
            </p>
          </div>
        </section>
      </div>
      <Link
        to={mapLink}
        className="map-link"
        title="SHOW THIS ON THE MAP"
      >
        <i className="icon-world-map"/>
        <span>SHOW THIS ON THE MAP</span>
      </Link>
    </div>
  );
}

export default Box;
