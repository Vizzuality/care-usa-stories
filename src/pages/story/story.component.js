import React from "react";
import DetailOne from './detail-one/detail-one.component';
import DetailTwo from './detail-two/detail-two.component';
import DetailThree from './detail-three/detail-three.component';

function Story(props) {
  const { template, image, story } = props;
  const Detail = (template && image) ? {
    photoStory: DetailOne,
    videoStory: DetailTwo
  }[template] : DetailThree;
  return (
    <main id="pageContent" className="page-wrapper home">
      {template && <Detail image={image} story={story} />}
    </main>
  );
}

export default Story;
