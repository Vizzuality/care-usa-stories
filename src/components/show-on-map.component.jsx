import React from 'react';
import Link from 'redux-first-router-link';
import cx from 'classnames';
import { MAP } from 'router';

function ShowOnMap(props) {
  const { className } = props;
  return (
    <Link
      to={{ type: MAP }}
      className={cx('map-link', className)}
      title="SHOW THIS ON THE MAP"
    >
      <i className="icon-world-map"/>
      <span>SHOW THIS ON THE MAP</span>
    </Link>
  );
}

export default ShowOnMap;