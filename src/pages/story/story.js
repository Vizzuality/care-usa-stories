import { connect } from 'react-redux';
import camelCase from 'lodash/camelCase';
import StoryComponent from './story.component';
import { getStory } from 'utils/entities';

function mapStateToProps({ stories, location }) {
  const { slug } = location.payload;
  const currentStory = stories.entities.story && stories.entities.story[slug];
  const template = currentStory && camelCase(currentStory.template);
  const story = getStory(currentStory, stories.entities);
  return { story, template };
}

export default connect(mapStateToProps)(StoryComponent);