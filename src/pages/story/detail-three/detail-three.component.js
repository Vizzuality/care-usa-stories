import React from "react";
import DetailHeader from "components/detail-header.component";
import ArticleSidebar from "components/article-sidebar.component";
import ArticlePost from "components/article-post.component";
import RecentStories from "components/recent-stories.component";
import Newsletter from "components/newsletter.component";

class DetailThree extends React.Component {
  render() {
    return (
      <main id="pageContent" className="page-wrapper">
        <DetailHeader />
        <article className="article-expanded-container gallery-widget-content">
          <ArticleSidebar />
          <ArticlePost />
        </article>
        <RecentStories />
        <Newsletter />
      </main>
    );
  }
}

export default DetailThree;
