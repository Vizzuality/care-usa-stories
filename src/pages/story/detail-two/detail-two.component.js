import React from "react";
import DetailBanner from "components/detail-banner.component";
import ArticleVideo from "components/article-video.component";
import ArticleQuote from "components/article-quote.component";
import RecentStories from "components/recent-stories.component";
import Newsletter from "components/newsletter.component";

function DetailTwo ({ story }) {
  return (
    <main id="pageContent" className="page-wrapper">
      <DetailBanner story={story}/>
      <article className="article-expanded-container">
        <ArticleVideo/>
        <ArticleQuote/>
      </article>
      <RecentStories/>
      <Newsletter/>
    </main>
  );
}

export default DetailTwo;
