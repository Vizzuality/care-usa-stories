import React from "react";
import ShowOnMap from 'components/show-on-map.component';
import TextContent from 'components/text-content.component';

function ArticlePost (props) {
  const { body } = props;

  return (
    <div className="article-expanded-holder">
      <ShowOnMap className="__in-article" />
      <TextContent>
        {body}
      </TextContent>
    </div>
  );
}

export default ArticlePost;
