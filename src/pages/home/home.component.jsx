import React from "react";
import Banner from "components/banner.component";
import Filters from "components/filters.component";
import Stories from "components/stories.component";
import RecentStories from "components/recent-stories.component";
import ContactForm from "components/contact-form.component";

class Home extends React.Component {
  render() {
    return (
      <main id="pageContent" className="page-wrapper home">
        <Banner />
        <Filters />
        <Stories />
        <RecentStories />
        <ContactForm />
      </main>
    );
  }
}

export default Home;
