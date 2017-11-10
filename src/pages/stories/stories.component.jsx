import React from "react";
import PropTypes from 'prop-types';
import Banner from "components/banner.component";
import Filters from "components/filters.component";
import StoriesGrid from "components/stories-grid.component";
import RecentStories from "components/recent-stories.component";
import Newsletter from "components/newsletter.component";

class Stories extends React.Component {

  static propTypes = {
    data: PropTypes.object
  };

  render() {
    return (
      <main id="pageContent" className="page-wrapper home">
        <Banner />
        <Filters />
        <StoriesGrid stories={this.props.data} />
        <RecentStories />
        <Newsletter />
      </main>
    );
  }
}

export default Stories;
