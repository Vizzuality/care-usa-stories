import React from "react";
import Box from "./box.component";
import DetailSwitch from "./detail-switch.component";

function DetailBanner (props) {
  const { url, filename } = props;
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
          <Box/>
        </div>
      </div>
      <DetailSwitch/>
    </section>
  );
}

export default DetailBanner;
