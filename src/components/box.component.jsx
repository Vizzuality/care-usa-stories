import React from "react";
import PropTypes from 'prop-types';
import moment from 'moment';

function Box (props) {
  const { title, sectorList, summary, authors, story_date, countries, showSummary } = props;
  const date = story_date && moment(story_date).format('Do MMM YYYY');
  const avatar = author => (author.photo && author.photo.url);
  const countriesMarkup = countries.map(country => (
    <span key={country.iso} className="country">
      {country.name}
    </span>
  ));

  return (
      <div className="banner-content">
        <h1>{title}</h1>
        <section className="story-data">
          <div className="author-area">
            {authors.map(author => [
                <p key="avatar" className="author-avatar">
                  <a className="author-avatar-image">
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
          {showSummary &&
            <div className="story-preview">
              <p>
                {summary}
              </p>
            </div>
          }
        </section>
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
  authors: [],
  showSummary: false
};

export default Box;
