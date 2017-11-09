import React from 'react';
import cx from 'classnames';

const StoryCard =  ({ link, image, sectorsList, location, title, summary }) => (
  <article className="article-item box">
    <a className="holder" href={link}>
      <figure className="article-content">
        <div className={cx('article-layer', { 'no-image': !image })}>
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
              <span>{sectorsList && sectorsList.join(', ')}</span>
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

export default StoryCard;
