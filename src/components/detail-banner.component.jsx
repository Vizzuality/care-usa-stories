import React from "react";
import Box from "./box.component";
import DetailSwitch from "./detail-switch.component";

function DetailBanner ({ story }) {

  const { pictures: [{ url, filename }] } = story;

  return (
    <section className="banner-story-container collapse">
      <div className="banner-holder">
        <div className="banner">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={`https://${url}`}
            />
            <img
              className="banner-img"
              src={`https://${url}`}
              alt={filename}
            />
          </picture>
          <Box {...story} />
        </div>
      </div>
      <DetailSwitch/>
    </section>
  );
}

export default DetailBanner;
