import React from "react";
import Link from 'redux-first-router-link';

function DetailSwitch (props) {
  const { previous, next, grid } = props;
  return (
    <div className="switchers-area">
      <p className="switcher-grid">
        <Link to={grid} title="Back to article grid">
          <i className="icon-grid" />
        </Link>
      </p>
      <p className="switcher-arrow">
        {previous &&
          <Link to={previous} title="Previous article">
            <i className="icon-arrow-left" />
          </Link>
        }
        {next &&
          <Link to={next} title="Next Article">
            <i className="icon-arrow-right" />
          </Link>
        }
      </p>
    </div>
  );
}

export default DetailSwitch;
