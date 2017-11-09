import React, { Component } from 'react';

import Stories from 'pages/stories/stories.component';
import Header from 'components/header.component';
import Footer from 'components/footer.component';
import './style.css';

class App extends Component {
  render() {
    return [
      <Header key="header" />,
      <Stories key="content" />,
      <Footer key="footer" />
    ];
  }
}

export default App;
