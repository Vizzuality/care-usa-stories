import React from 'react';
import cx from 'classnames';

const getHeight = (w,h) => {
  let height = 270;
  const delta = w && h ? (Math.round((w/h) * 10) / 10) : null;
  if (delta === null) height = 172;
  if (delta && delta <= 1) height = 350;
  if (delta && delta >= 1.5) height = 200;
  return height;
};

const StoryCard =  ({ link, image, sectorList, location, title, summary }) => {
  const dimensions = {
    width: (image && image.details && image.details.image.width) || 0,
    height: (image && image.details && image.details.image.height) || 0
  };
  const height = getHeight(dimensions.width, dimensions.height);
  return (
    <article className="article-item box" style={{ height: (height + 285) }}>
      <a className="holder" href={link}>
        <figure className="article-content">
          <div
            className={cx('article-layer', { 'no-image': !image })}
            style={{ maxHeight: height }}
          >
            {image &&
            <img src={`http:${image.url}`} alt={image.filename}/>
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
      </a>
    </article>
  );
}

export default StoryCard;
