import React from "react";
import { NavLink } from 'redux-first-router-link';
import { MAP, STORIES, ABOUT, DONATE } from 'router';

function Header (props) {
  const links = {
    map: { type: MAP },
    stories: { type: STORIES },
    about: { type: ABOUT },
    donate: { type: DONATE }
  };
  return (
    <header id="home" className="main-head-holder">
      <div className="main-head  container">
        <div className="logo-wrap">
          <a className="logo">
            <span className="hidden">CARE USA</span>
            <img
              alt="Care"
              src="/images/care-logo.png"
              title="Care-logo"
            />
          </a>
        </div>
        <section className="mob-menu">
          <div className="open">
            <span/>
          </div>
          <div className="close">
            <span/>
          </div>
        </section>
        <nav className="main-menu">
          <ul className="main-menu-list">
            <li className="menu-list-item">
              <NavLink
                to={links.map}
                className="menu-link"
              >
                MAP OF IMPACT
              </NavLink>
            </li>
            <li className="menu-list-item">
              <NavLink
                strict={false}
                to={links.stories}
                className="menu-link"
              >
                STORIES
              </NavLink>
            </li>
            <li className="menu-list-item">
              <NavLink
                to={links.about}
                className="menu-link"
              >
                ABOUT
              </NavLink>
            </li>
            <li className="menu-list-item">
              <NavLink
                to={links.donate}
                className="menu-link"
              >
                DONATE
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
