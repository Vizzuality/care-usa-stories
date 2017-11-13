import React from "react";
import PropTypes from 'prop-types';
import DetailOne from './detail-one/detail-one.component';

class Story extends React.Component {
  render() {
    return (
      <main id="pageContent" className="page-wrapper home">
        <DetailOne />
      </main>
    );
  }
}

export default Story;
