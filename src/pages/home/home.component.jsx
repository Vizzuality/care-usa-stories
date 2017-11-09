import React from "react";
import PropTypes from 'prop-types';
import Banner from "components/banner.component";
import Filters from "components/filters.component";
import Stories from "components/stories.component";
import RecentStories from "components/recent-stories.component";
import ContactForm from "components/contact-form.component";

class Home extends React.Component {

  static propTypes = {
    getStories: PropTypes.func
  };

  componentWillMount() {
    this.props.getStories();
  }

  render() {
    return (
      <main id="pageContent" className="page-wrapper home">
        <Banner />
        <Filters />
        <Stories stories={this.props.stories} />
        <RecentStories />
        <ContactForm />
      </main>
    );
  }
}

export default Home;
