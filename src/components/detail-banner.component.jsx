import React from "react";
import Box from "./box.component";
import DetailSwitch from "./detail-switch.component";

function DetailBanner (props) {
  const { alt, src } = props;
  return (
    <section className="banner-story-container collapse">
      <div className="banner-holder">
        <div className="banner">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={src}
            />
            <img
              className="banner-img"
              src={src}
              alt={alt}
            />
          </picture>
          <Box/>
        </div>
      </div>
      <DetailSwitch/>
    </section>
  );
}

export default DetailBanner;
