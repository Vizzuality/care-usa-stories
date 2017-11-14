import React from "react";
import Link from 'redux-first-router-link';
import { MAP, STORIES, ABOUT } from 'router';

function Footer (props) {
  return (
    <footer className="footer-container">
      <div className="footer-holder">
        <section className="social-links">
          <a className="social-links-item facebook-link">
            <i className="icon-facebook" />
          </a>
          <a className="social-links-item twitter-link">
            <i className="icon-twitter" />
          </a>
          <a className="social-links-item instagram-link">
            <i className="icon-instagram" />
          </a>
        </section>
        <section className="footer-menu">
          <Link
            to={{ type: MAP }}
            className="footer-link"
          >
            Map
          </Link>
          <span>❘</span>
          <Link
            to={{ type: STORIES }}
            className="footer-link"
          >              Stories
          </Link>
          <span>❘</span>
          <Link
            to={{ type: ABOUT }}
            className="footer-link"
          >              About
          </Link>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
