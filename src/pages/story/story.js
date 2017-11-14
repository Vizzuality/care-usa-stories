import { connect } from 'react-redux';
import camelCase from 'lodash/camelCase';
import StoryComponent from './story.component';
import { getImage } from 'utils/stories';

function mapStateToProps({ stories, location }) {
  const { slug } = location.payload;
  const story = stories.entities.story && stories.entities.story[slug];
  const template = story && camelCase(story.template);
  const image = story && getImage(story.pictures, stories.entities);

  return { story, template, image };
}

export default connect(mapStateToProps)(StoryComponent);