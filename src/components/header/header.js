import React, { createElement } from 'react';
import Header from './header.component';
import { MAP, STORIES, ABOUT, DONATE } from 'router';

class HeaderContainer extends React.Component {

  static defaultProps = {
    links: {
      map: { type: MAP },
      stories: { type: STORIES },
      about: { type: ABOUT },
      donate: { type: DONATE }
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.openMobileMenu = this.openMobileMenu.bind(this);
    this.closeMobileMenu = this.closeMobileMenu.bind(this);
    document.addEventListener('click', this.closeMobileMenu);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closeMobileMenu)
  }

  // TODO: move to the store
  openMobileMenu() {
    this.setState({ open: true });
  }

  // TODO: move to the store
  closeMobileMenu() {
    this.setState({ open: false });
  }

  render() {
    const { closeMobileMenu, openMobileMenu } = this;
    const { open } = this.state;
    return createElement(Header, {
      ...this.props,
      openMobileMenu,
      closeMobileMenu,
      open
    });
  }
}

export default HeaderContainer;