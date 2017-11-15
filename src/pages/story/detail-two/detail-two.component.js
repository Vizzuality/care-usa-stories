import React from 'react';
import cx from 'classnames';
import DetailBanner from 'components/detail-banner.component';
import ArticleVideo from 'components/article-video/article-video';
import ArticleQuote from 'components/article-quote.component';
import RecentStories from 'components/recent-stories/recent-stories';
import Newsletter from 'components/newsletter.component';

function DetailTwo ({ story }) {
  const { quote, cite, pictures, videos, summary, body } = story;
  const [, quotePicture] = pictures;
  const [video] = videos;
  const hasQuote = quotePicture || quote;

  return (
    <main id="pageContent" className="page-wrapper">
      <DetailBanner story={story}/>
      <article className="article-expanded-container">
        <div className="article-expanded-holder video-content">
          {video && <ArticleVideo video={video} />}
          <div className={cx(['std', { noMedia: !video }])}>
            <p className="marked">
              {summary}
            </p>
            <p>
              {body}
            </p>
          </div>
        </div>
        <div className="article-expanded-holder quote-content">
          {hasQuote &&
            <ArticleQuote
              picture={quotePicture}
              quote={quote}
              cite={cite}
            />
          }
          <div className={cx(['std', { noMedia: !hasQuote }])}>
            <p>
              CARE promotes the use of such technologies by empowering women
              entrepreneurs to become last-mile distributors of clean energy
              products to rural populations. When the training was completed in
              Rehema's village, each family received a small loan to purchase a
              clean energy product. Rehema's grandmother chose a solar lamp, which
              has transformed the lives of the entire family.
            </p>
            <p>
              And now that Rehema can do her studies at night, she is performing
              very well in school. She recently climbed to third position, out of
              75 pupils in her class!{" "}
            </p>
            <p>
              "I really enjoy studying nowadays," she says. "I have the option of
              waking up at midnight to study and do extra homework."Now, Rehema
              has gotten a shot in the arm to achieve her dream of becoming a
              doctor.
            </p>
          </div>
        </div>
      </article>
      <RecentStories/>
      <Newsletter/>
    </main>
  );
}

export default DetailTwo;
