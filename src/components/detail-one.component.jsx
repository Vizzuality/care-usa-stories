import React from "react";
import DetailBanner from "./detail-banner.component";
import RecentStories from "./recent-stories.component";
import Newsletter from "./newsletter";

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
