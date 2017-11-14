import React from "react";

function ArticleQuote (props) {
  const { cite, quote, picture } = props;
  return (
    <figure className="quote-area">
      {picture &&
        <div
          className="quote-picture"
          style={{ backgroundImage: `url(http:${picture.url})`}}
        />
      }
      {quote &&
        <figcaption>
          <blockquote className="quote">
            <p>
              "{quote}"
            </p>
            <footer>
              {cite && <cite>{cite}</cite>}
            </footer>
          </blockquote>
        </figcaption>
      }
    </figure>
  );
}

export default ArticleQuote;
