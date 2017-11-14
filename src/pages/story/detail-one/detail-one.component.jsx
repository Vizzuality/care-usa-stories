import React from "react";
import DetailBanner from "components/detail-banner.component";
import RecentStories from "components/recent-stories.component";
import Newsletter from "components/newsletter.component";

function DetailOne ({ story }) {

  return (
    <main id="pageContent" className="page-wrapper">
      <DetailBanner story={story} />
      <RecentStories />
      <Newsletter />
    </main>
  );
}

export default DetailOne;
