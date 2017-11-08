import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-container">
        <div className="footer-holder">
          <section className="social-links">
            <a href className="social-links-item facebook-link">
              <i className="icon-facebook" />
            </a>
            <a href className="social-links-item twitter-link">
              <i className="icon-twitter" />
            </a>
            <a href className="social-links-item instagram-link">
              <i className="icon-instagram" />
            </a>
          </section>
          <section className="footer-menu">
            <a href className="footer-link">
              Map
            </a>
            <span>❘</span>
            <a href className="footer-link">
              Stories
            </a>
            <span>❘</span>
            <a href className="footer-link">
              About
            </a>
          </section>
        </div>
      </footer>
    );
  }
}

export default Footer;
