import React from "react";
import DetailOne from './detail-one/detail-one.component';
import DetailTwo from './detail-two/detail-two.component';
import DetailThree from './detail-three/detail-three.component';

function Story(props) {
  const { template, ...rest } = props;
  const Detail = {
    photoStory: DetailOne,
    videoStory: DetailTwo
  }[template];
  return (
    <main id="pageContent" className="page-wrapper home">
      {template && <Detail {...rest} />}
    </main>
  );
}

export default Story;
