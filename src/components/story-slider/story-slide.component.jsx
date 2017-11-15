import React from 'react';
import cx from 'classnames';
import Link from 'redux-first-router-link';

function StorySlide (props) {
  const { link, title, authors = [], pictures = [], sectorList = [], countries = [] } = props;
  const [bannerPicture] = pictures;
  const avatar = author => (author.photo && author.photo.url);
  const countriesMarkup = countries.map(country => (
    <span key={country.iso} className="country">
      {country.name}
    </span>
  ));
  const bannerBackground = bannerPicture ? `http:${bannerPicture.url}` : '/images/banner-image.png';
  return (
    <Link to={link}>
      <figure className={cx('slide', { veil: !!bannerPicture })}>
        <div
          className="slide-banner"
          style={{ backgroundImage: `url(${bannerBackground})` }}
        />
        <figcaption className="slide-content">
          <div className="tag">
            <span>LAST STORIES</span>
            <i className="icon-flag" />
          </div>
          <span>{sectorList.join(', ')}</span>
          <h1>{title}</h1>
          <div className="clearfix">
            {authors.map(author => [
              <div className="author-avatar-image" key="authorAvatar">
                {avatar(author) &&
                <img
                  className="rounded-img"
                  src={`http:${avatar(author)}`}
                  alt={`By ${author.name}`}
                />
                }
              </div>,
              <p key="authorName" className="author-data">
                <span className="author">By {author.name}</span>
                {countriesMarkup}
              </p>
            ])
            }
            {!authors.length && countries.length &&
            <p key="authorName" className="author-data">
              {countriesMarkup}
            </p>
            }
          </div>
        </figcaption>
      </figure>
    </Link>
  );
}

export default StorySlide;