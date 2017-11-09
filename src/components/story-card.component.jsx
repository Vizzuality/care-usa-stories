import React from 'react';
import cx from 'classnames';

const StoryCard =  ({ link, image, category, location, heading, description }) => (
  <article className="article-item box">
    <a className="holder" href={link}>
      <figure className="article-content">
        <div className={cx('article-layer', { 'no-image': !image })}>
          {image &&
            <img src={image.src} alt={image.alt}/>
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
              <span>{category}</span>
            </p>
            <span className="country">{location}</span>
          </div>
          <h4>{heading}</h4>
          <p>{description}</p>
        </figcaption>
      </figure>
    </a>
  </article>
);

export default StoryCard;
