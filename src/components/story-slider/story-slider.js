import { connect } from 'react-redux';
import { getStory } from 'utils/entities';
import StorySlider from './story-slider.component';
import { STORY } from 'router';

function mapStateToProps({ stories }) {
  const slides = stories.entities.story && stories.result.slice(0, 3)
    .map(id => ({ id, ...stories.entities.story[id] }))
    .map(({ id, ...story}) => ({
      ...getStory(story, stories.entities),
      link: { type: STORY, payload: { slug: id }}
    }));

  return { slides };
}

export default connect(mapStateToProps)(StorySlider);

