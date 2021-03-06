import React from 'react';
import cx from 'classnames';
import Link from 'redux-first-router-link';

const getHeight = (w,h) => {
  const delta = w && h ? (Math.round((w/h) * 10) / 10) : null;
  if (delta) {
    if (delta <= 1) return 350;
    if (delta >= 1.5) return 200;
    return 270;
  }
  return 172;
};

const StoryCard =  ({ link, sectorList, location, title, summary, cover }) => {
  const dimensions = {
    width: (cover && cover.details && cover.details.image.width) || 0,
    height: (cover && cover.details && cover.details.image.height) || 0
  };
  const height = getHeight(dimensions.width, dimensions.height);
  return (
    <article className="article-item box" style={{ height: (height + 285) }}>
      <Link className="holder" to={link}>
        <figure className="article-content">
          <div
            className={cx('article-layer', { 'no-image': !cover })}
            style={{ maxHeight: height }}
          >
            {cover &&
            <img src={`http:${cover.url}`} alt={cover.title}/>
            }
            <p>
              <button className="btn" type="button">
                GO TO STORY
              </button>
            </p>
          </div>
          <figcaption>
            <div className="article-data">
              <p className="cat">
                <span>{sectorList && sectorList.join(', ')}</span>
              </p>
              <span className="country">{location}</span>
            </div>
            <h4>{title}</h4>
            <p>{summary}</p>
          </figcaption>
        </figure>
      </Link>
    </article>
  );
}

export default StoryCard;
