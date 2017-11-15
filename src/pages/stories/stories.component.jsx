import React from "react";
import PropTypes from 'prop-types';
import Banner from "components/story-slider/story-slider";
import Filters from "components/filters/filters";
import StoriesGrid from "components/stories-grid/stories-grid";
import RecentStories from "components/recent-stories.component";
import Newsletter from "components/newsletter.component";

class Stories extends React.Component {

  static propTypes = {
    entities: PropTypes.object
  };

  render() {
    const cardLimit = Object.values((this.props.entities.story || {})).length;
    return (
      <main id="pageContent" className="page-wrapper home">
        <Banner />
        <Filters />
        <StoriesGrid cardLimit={cardLimit} entities={this.props.entities} />
        <RecentStories />
        <Newsletter />
      </main>
    );
  }
}

export default Stories;
