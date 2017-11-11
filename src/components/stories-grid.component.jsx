import React from "react";
import StoryCard from "./story-card.component";
import Masonry from 'react-masonry-infinite';

class StoriesGrid extends React.Component {
  getImage = (pictures) => {
    if (!pictures) return;
    const images = this.props.stories ? this.props.stories.picture : {};
    const files = this.props.stories ? this.props.stories.file : {};
    const file = images[pictures[0]].file;
    return files[file].file;
  };

  render() {
    const stories = this.props.stories ? this.props.stories.story : {};
    const cards = stories ? Object.values(stories) : [];
    return (
      <section className="article-container">
        <h3>Total Stories</h3>
        <span className="group">({cards.length} Stories)</span>
        <div className="grid">
          <Masonry
            loadMore={() => (null)}
            pack={true}
            className="article-list"
          >
            {
              [...cards.map((storycard, key) => (
                <StoryCard
                  key={`${key}-story-card`}
                  {...storycard}
                  image={this.getImage(storycard.pictures)}
                  sectorList={storycard.sectorList}
                />
              )),
              (<form
                key="quickDonate"
                id="quickDonate"
                className="donate-form box"
                action="#"
                method="post"
              >
                <h4 className="form-heading">Quick Donate</h4>
                <fieldset className="holder">
                  <input
                    id="donateField"
                    name="donateInput"
                    placeholder="$"
                  />
                  <button
                    id="donateSubmit"
                    className="button"
                    type="button"
                    name="donateBtn"
                  >
                    DONATE
                  </button>
                </fieldset>
              </form>)]
            }
          </Masonry>
          {false && <a className="more">
            SHOW MORE STORIES
          </a>
          }
        </div>
      </section>
    );
  }
}

export default StoriesGrid;
