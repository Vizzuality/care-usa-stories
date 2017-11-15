import React from 'react';

function StorySlide (props) {
  const { title, authors = [], pictures = [], sectorList = [], countries = [] } = props;
  const [bannerPicture] = pictures;
  const avatar = author => (author.photo && author.photo.url);
  const countriesMarkup = countries.map(country => (
    <span key={country.iso} className="country">
      {country.name}
    </span>
  ));
  return (
    <figure className="slide">
      {bannerPicture &&
        <div className="slide-banner" style={{ backgroundImage: `url(http:${bannerPicture.url})` }} />
      }
      <figcaption className="slide-content">
        <div className="tag">
          <span>LAST STORIES</span>
          <i className="icon-flag" />
        </div>
        <span>{sectorList.join(', ')}</span>
        <h1>{title}</h1>
        <div>
          {authors.map(author => [
            <a key="authorAvatar">
              {avatar(author) &&
              <img
                className="rounded-img"
                src={`http:${avatar(author)}`}
                alt={`By ${author.name}`}
              />
              }
            </a>,
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
  );
}

export default StorySlide;