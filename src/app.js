import React, { Component } from 'react';

import Header from './components/header.js';
import Content from './components/content.js';
import Footer from './components/footer.js';
import './style.css';

class App extends Component {
  render() {
    return [
      <Header key="header" />,
      <Content key="content" />,
      <Footer key="footer" />
    ];
  }
}

export default App;
