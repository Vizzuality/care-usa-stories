import React from "react";
import DetailBanner from "components/detail-banner.component";
import RecentStories from "components/recent-stories.component";
import Newsletter from "components/newsletter.component";

function DetailOne (props) {
  return (
    <main id="pageContent" className="page-wrapper">
      <DetailBanner {...props} />
      <RecentStories />
      <Newsletter />
    </main>
  );
}

export default DetailOne;
