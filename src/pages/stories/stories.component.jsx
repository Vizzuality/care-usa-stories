import React from "react";
import Banner from "components/story-slider/story-slider";
import Filters from "components/filters/filters";
import StoriesGrid from "components/stories-grid/stories-grid";
import RecentStories from "components/recent-stories/recent-stories";
import Newsletter from "components/newsletter.component";

function Stories () {
  return (
    <main id="pageContent" className="page-wrapper home">
      <Banner />
      <Filters />
      <StoriesGrid />
      <RecentStories />
      <Newsletter />
    </main>
  );
}

export default Stories;
