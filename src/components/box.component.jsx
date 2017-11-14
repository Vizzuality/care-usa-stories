import React from "react";
import PropTypes from 'prop-types';
import Link from 'redux-first-router-link';
import moment from 'moment';
import { MAP } from 'router';

function Box (props) {
  const { title, sectorList, summary, authors, story_date, countries } = props;
  const mapLink = { type: MAP };
  const date = story_date && moment(story_date).format('Do MMM YYYY');
  const avatar = author => (author.photo && author.photo.file.url);
  const countriesMarkup = countries.map(country => (
    <span key={country.iso} className="country">
      {country.name}
    </span>
  ));
  console.log(props);
  return (
    <div className="banner-box">
      <div className="banner-content">
        <h1>{title}</h1>
        <section className="story-data">
          <div className="author-area">
            {authors.map(author => [
                <p key="avatar" className="author-avatar">
                  <a>
                    {avatar(author) &&
                      <img
                        className="rounded-img"
                        src={`http:${avatar(author)}`}
                        alt={`By ${author.name}`}
                      />
                    }
                  </a>
                </p>,
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
            <p className="datetime-area">
              <span>{sectorList.join(', ')}</span>
              {date &&
                <span className="datetime">
                  <time dateTime={date}>{date}</time>
                </span>
              }
            </p>
          </div>
          <div className="story-preview">
            <p>
              {summary}
            </p>
          </div>
        </section>
      </div>
      <Link
        to={mapLink}
        className="map-link"
        title="SHOW THIS ON THE MAP"
      >
        <i className="icon-world-map"/>
        <span>SHOW THIS ON THE MAP</span>
      </Link>
    </div>
  );
}
Box.propTypes = {
  title: PropTypes.string,
  sectorList: PropTypes.array,
  summary: PropTypes.string,
  authors: PropTypes.array,
  story_date: PropTypes.string
};

Box.defaultProps = {
  authors: []
};

export default Box;
