import { connect } from 'react-redux';
import camelCase from 'lodash/camelCase';
import StoryComponent from './story.component';
import { getStory } from 'utils/entities';

function mapStateToProps({ stories, location }) {
  const { slug } = location.payload;
  const currentStory = stories.all.entities.story && stories.all.entities.story[slug];
  const template = currentStory && camelCase(currentStory.template);
  const story = getStory(currentStory, stories.all.entities);
  return { story, template };
}

export default connect(mapStateToProps)(StoryComponent);