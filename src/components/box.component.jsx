import React from "react";

class Box extends React.Component {
  render() {
    return (
      <div className="banner-box">
        <div className="banner-content">
          <h1>Rehena and Her Solar Lamp.</h1>
          <section className="story-data">
            <div className="author-area">
              <p className="author-avatar">
                <a>
                  <img
                    className="rounded-img"
                    src="../src/images/author.png"
                    alt="By Anguparu Monica"
                  />
                </a>
              </p>
              <p className="author-data">
                <span className="author">By Anguparu Monica</span>
                <span className="country">CARE Uganda</span>
              </p>
              <p className="datetime-area">
                <span>Emergency & disaster</span>
                <span className="datetime">
                  <time dateTime="2017-03-22">22 March 2017</time>
                </span>
              </p>
            </div>
            <div className="story-preview">
              <p>
                Before Rehema leaves for school every morning, she has to
                perform chores around the house. "I wake up around 4 a.m., do
                the cleaning, make breakfast for me and my younger brother, get
                ready for school and by 6:15, I leave for school."
              </p>
            </div>
          </section>
        </div>
        <a className="map-link" title="SHOW THIS ON THE MAP">
          <i className="icon-world-map" />
          <span>SHOW THIS ON THE MAP</span>
        </a>
      </div>
    );
  }
}

export default Box;
