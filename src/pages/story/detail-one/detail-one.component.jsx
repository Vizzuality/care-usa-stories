import React from "react";
import DetailBanner from "components/detail-banner.component";
import RecentStories from "components/recent-stories.component";
import Newsletter from "components/newsletter.component";

class DetailOne extends React.Component {
  render() {
    return (
      <main id="pageContent" className="page-wrapper">
        <DetailBanner />
        <RecentStories />
        <Newsletter />
      </main>
    );
  }
}

export default DetailOne;
