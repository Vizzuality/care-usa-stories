import React from "react";
import Box from "./box.component";
import DetailSwitch from "components/detail-switch/detail-switch";
import ShowOnMap from 'components/show-on-map.component';

function DetailBanner ({ story, showSummary }) {

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
          <div className="banner-box">
            <Box showSummary={showSummary} {...story} />
          </div>
          <ShowOnMap />
        </div>
      </div>
      <DetailSwitch/>
    </section>
  );
}

export default DetailBanner;
