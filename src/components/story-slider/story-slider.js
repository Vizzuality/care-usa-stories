import { connect } from 'react-redux';
import { getStory } from 'utils/entities';
import StorySlider from './story-slider.component';

function mapStateToProps({ stories, location }) {
  const slides = stories.entities.story && stories.result.slice(0, 6) // We grab twice as many stories as we need
    .map(id => stories.entities.story[id])
    .filter(story => story.pictures && story.pictures.length > 0) // Filter all that don't have images
    .slice(0, 3) // return the remaining right amount
    .map(story => getStory(story, stories.entities));

  return { slides };
}

export default connect(mapStateToProps)(StorySlider);

