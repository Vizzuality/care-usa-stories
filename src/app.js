import React, { Component } from 'react';

import Pages from 'pages';
import Header from 'components/header/header';
import Footer from 'components/footer.component';
import './style.css';

class App extends Component {
  render() {
    return [
      <Header key="header" />,
      <Pages key="pages" />,
      <Footer key="footer" />
    ];
  }
}

export default App;
