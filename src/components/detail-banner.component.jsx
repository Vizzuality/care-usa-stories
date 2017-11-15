import React from "react";
import Box from "./box.component";
import DetailSwitch from "components/detail-switch/detail-switch";
import ShowOnMap from 'components/show-on-map.component';

function DetailBanner ({ story, showSummary }) {

  const { pictures: [picture] = [] } = story;

  return (
    <section className="banner-story-container collapse">
      <div className="banner-holder">
        <div className="banner">
          {picture &&
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={`https://${picture.url}`}
              />
              <img
                className="banner-img"
                src={`https://${picture.url}`}
                alt={picture.title}
              />
            </picture>
          }
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
