import React from "react";
import StoryCard from "./story-card.component";
import Masonry from 'react-masonry-infinite';

const cards = [
  {
    image: {
      src: '/images/article/img1.png',
      alt: 'Rehena and Her Solar Lamp.'
    },
    category: 'Climate Change',
    heading: 'Rehena and Her Solar Lamp.',
    description: 'Like many young girls, she dreams of becoming a doctor.',
    location: 'CARE UGANDA',
  },
  {
    image: {
      src: '/images/article/img2.png',
      alt: 'Reaping the benefits of training..'
    },
    category: 'Emergency & disaster',
    heading: 'Reaping the benefits of training.',
    description: 'Like many young girls, she dreams of becoming a doctor.',
    location: 'CARE UGANDA',
  },
  {
    image: {
      src: ' /images/article/img3.png',
      alt: 'Rebuilding Respect One Tree a Time.'
    },
    category: 'Climate Change',
    heading: 'Rebuilding Respect One Tree a Time.',
    description: 'Like many young girls, she dreams of becoming a doctor.',
    location: 'CARE UGANDA',
  },
  {
    image: {
      src: '/images/article/img5.png',
      alt: 'The Promise to shield the birth right'
    },
    category: 'Climate Change',
    heading: 'The Promise to shield the birth right',
    description: 'Like many young girls, she dreams of becoming a doctor.',
    location: 'CARE INDIA',
  },
  {
    image: {
      src: '/images/article/img6.png',
      alt: 'Yes, School Reintegration is possible'
    },
    category: 'Education',
    heading: 'Yes, School Reintegration is possible when you get money.',
    description: 'Like many young girls, she dreams of becoming a doctor.',
    location: 'CARE UGANDA',

  },
  {
    image: {
      src: '/images/article/img4.png',
      alt: 'Haiyan Survivor Takes Lead in Community Transformation'
    },
    category: 'Education',
    heading: 'Haiyan Survivor Takes Lead in Community Transformation',
    description: 'Like many young girls, she dreams of becoming a doctor.',
    location: 'CARE PHILLIPINES',
  },{
    category: 'Education',
    heading: 'Haiyan Survivor Takes Lead in Community Transformation',
    description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled\n',
    location: 'CARE NIGERIA',
  },{
    category: 'Education',
    heading: 'Haiyan Survivor Takes Lead in Community Transformation',
    description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled\n',
    location: 'CARE PHILLIPINES',
  }
];

class Stories extends React.Component {
  render() {
    return (
      <section className="article-container">
        <h3>Total Stories</h3>
        <span className="group">(20 Stories)</span>
        <div className="grid">
          <Masonry
            pack={true}
            className="article-list"
          >
            {
              [...cards.map((storycard, key) => (
                <StoryCard key={`${key}-story-card`} {...storycard} />)),
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
                    defaultValue
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
          <a className="more" href="#">
            SHOW MORE STORIES
          </a>
        </div>
      </section>
    );
  }
}

export default Stories;
