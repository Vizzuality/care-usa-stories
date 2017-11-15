import React from "react";
import Box from 'components/box.component';
import DetailSwitch from 'components/detail-switch/detail-switch';

function DetailHeader ({ story }) {
  return (
    <section className="banner-story-container no-image expanded">
      <div className="banner-holder">
        <div className="banner">
          <Box {...story} />
        </div>
      </div>
      <DetailSwitch/>
    </section>
  );
}
export default DetailHeader;
