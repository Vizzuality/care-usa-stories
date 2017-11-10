import React from "react";

class Header extends React.Component {
  render() {
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
              <span />
            </div>
            <div className="close">
              <span />
            </div>
          </section>
          <nav className="main-menu">
            <ul className="main-menu-list">
              <li className="menu-list-item">
                <a href="worldofimpact.care.org" className="menu-link">
                  MAP OF IMPACT
                </a>
              </li>
              <li className="menu-list-item">
                <a href="/" className="menu-link active">
                  STORIES
                </a>
              </li>
              <li className="menu-list-item">
                <a className="menu-link">
                  ABOUT
                </a>
              </li>
              <li className="menu-list-item">
                <a className="menu-link button" title="Donate">
                  DONATE
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
