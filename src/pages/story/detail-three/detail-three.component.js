import React from "react";
import DetailHeader from "components/detail-header.component";
import DetailBanner from "components/detail-banner.component";
import ArticleSidebar from "components/article-sidebar/article-sidebar";
import ArticlePost from "components/article-post.component";
import RecentStories from "components/recent-stories/recent-stories";
import Modal from 'components/modal/modal';
import ImageGallery from 'components/image-gallery/image-gallery';

function DetailThree ({ story }) {
  const { cover, quote, body, pictures = [] } = story;
  const [sidebarPicture] = pictures;
  return (
    <main id="pageContent" className="page-wrapper">
      {cover
        ? <DetailBanner showOnMap={false} story={story}/>
        : <DetailHeader story={story} />
      }
      <article className="article-expanded-container gallery-widget-content">
        <ArticleSidebar
          quote={(sidebarPicture && sidebarPicture.quote) || quote}
          picture={sidebarPicture}
          showGallery={pictures.length > 0}
        />
        <ArticlePost body={body} />
      </article>
      <RecentStories />
      <Modal>
        <ImageGallery slides={pictures} />
      </Modal>
    </main>
  );
}

export default DetailThree;
