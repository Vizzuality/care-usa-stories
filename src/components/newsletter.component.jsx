import React from "react";

class Newsletter extends React.Component {
  render() {
    return (
      <form
        id="mainNewsletter"
        className="newsletter-form box"
        action="#"
        method="post"
      >
        <h4>The lastest from Care</h4>
        <input
          id="newsletterEmail"
          name="newsletterInput"
          placeholder="Enter email address"
        />
        <button
          id="newsletterSubmit"
          className="button"
          type="button"
          name="newsletterBtn"
          title="JOIN"
        >
          JOIN
        </button>
      </form>
    );
  }
}

export default Newsletter;
