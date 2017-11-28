import React from "react";
import DetailBanner from "components/detail-banner.component";
import RecentStories from "components/recent-stories/recent-stories.component";

function DetailOne ({ story }) {

  return (
    <main id="pageContent" className="page-wrapper">
      <DetailBanner showSummary story={story} />
      <RecentStories />
    </main>
  );
}

export default DetailOne;
