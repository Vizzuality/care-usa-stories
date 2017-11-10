import React from "react";
import Box from "./box.component";
import DetailSwitch from "./detail-switch.component";

class DetailBanner extends React.Component {
  render() {
    return (
      <section className="banner-story-container collapse">
        <div className="banner-holder">
          <div className="banner">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet="/images/story/story1-m.png"
              />
              <img
                className="banner-img"
                src="/images/story/story1.png"
                alt="Rehena and Her Solar Lamp."
              />
            </picture>
            <Box />
          </div>
        </div>
        <DetailSwitch />
      </section>
    );
  }
}

export default DetailBanner;
