import React from "react";

class DetailSwitch extends React.Component {
  render() {
    return (
      <div className="switchers-area">
        <p className="switcher-grid">
          <a title="Back to article grid">
            <i className="icon-grid" />
          </a>
        </p>
        <p className="switcher-arrow">
          <a title="Previous article">
            <i className="icon-arrow-left" />
          </a>
          <a title="Next Article">
            <i className="icon-arrow-right" />
          </a>
        </p>
      </div>
    );
  }
}

export default DetailSwitch;
