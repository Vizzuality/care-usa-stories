import React from "react";
import DetailHeader from "components/detail-header.component";
import ArticleSidebar from "components/article-sidebar/article-sidebar";
import ArticlePost from "components/article-post.component";
import RecentStories from "components/recent-stories/recent-stories";
import Newsletter from "components/newsletter.component";
import Modal from 'components/modal/modal';
import ImageGallery from 'components/image-gallery/image-gallery';

function DetailThree ({ story }) {
  const { quote, body, pictures = [] } = story;
  const [sidebarPicture] = pictures;
  return (
    <main id="pageContent" className="page-wrapper">
      <DetailHeader story={story} />
      <article className="article-expanded-container gallery-widget-content">
        <ArticleSidebar
          quote={(sidebarPicture && sidebarPicture.quote) || quote}
          picture={sidebarPicture}
          showGallery={pictures.length > 0}
        />
        <ArticlePost body={body} />
      </article>
      <RecentStories />
      <Newsletter />
      <Modal>
        <ImageGallery slides={pictures} />
      </Modal>
    </main>
  );
}

export default DetailThree;
