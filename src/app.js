import React, { Component } from 'react';

import Header from 'components/header.component';
import Home from 'pages/home/home';
import Footer from 'components/footer.component';
import './style.css';

class App extends Component {
  render() {
    return [
      <Header key="header" />,
      <Home key="content" />,
      <Footer key="footer" />
    ];
  }
}

export default App;
