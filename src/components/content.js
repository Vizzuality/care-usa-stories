import React from "react";
import Banner from "./banner";
import Filters from "./filters";
import Articles from "./articles";
import RecentStories from "./recent-stories";
import ContactForm from "./contact-form";

class Content extends React.Component {
  render() {
    return (
      <main id="pageContent" className="page-wrapper home">
        <Banner />
        <Filters />
        <Articles />
        <RecentStories />
        <ContactForm />
      </main>
    );
  }
}

export default Content;
