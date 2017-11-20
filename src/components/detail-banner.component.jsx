import React from "react";
import Box from "./box.component";
import DetailSwitch from "components/detail-switch/detail-switch";
import ShowOnMap from 'components/show-on-map.component';

function DetailBanner ({ story, showSummary, showOnMap }) {

  const { cover } = story;

  return (
    <section className="banner-story-container collapse">
      <div className="banner-holder">
        <div className="banner">
          {cover &&
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={`https://${cover.url}`}
              />
              <img
                className="banner-img"
                src={`https://${cover.url}`}
                alt={cover.title}
              />
            </picture>
          }
          <div className="banner-box">
            <Box showSummary={showSummary} {...story} />
          </div>
          {showOnMap && <ShowOnMap />}
        </div>
      </div>
      <DetailSwitch/>
    </section>
  );
}

export default DetailBanner;
