import React from "react";
import StoryCard from "../story-card.component";
import Masonry from 'react-masonry-infinite';

function StoriesGrid({ cards, setCardOffset, cardOffset, cardLimit }) {
  return (
    <section className="article-container">
      <h3>Total Stories</h3>
      <span className="group">({cards.length} Stories)</span>
      <div className="grid">
        <Masonry
          pack={true}
          hasMore={false}
          loadMore={() => (null)}
          className="article-list"
        >
          {
            [...cards.map((storycard, key) => (
              <StoryCard
                key={`${key}-story-card`}
                {...storycard}
              />
            )),
              (<div
                key="quickDonate"
                className="donate-form box"
              >
                <h4 className="form-heading">Quick Donate</h4>
                <fieldset className="holder">
                  <button
                    id="donateSubmit"
                    className="button"
                    type="button"
                    name="donateBtn"
                  >
                    DONATE
                  </button>
                </fieldset>
              </div>)]
          }
        </Masonry>
        {(cardOffset < cardLimit) &&
          <a className="more" onClick={() => setCardOffset(cardOffset + 5)}>
          SHOW MORE STORIES
        </a>
        }
      </div>
    </section>
  );
}

export default StoriesGrid;
