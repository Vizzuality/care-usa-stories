import { connect } from 'react-redux';
import camelCase from 'lodash/camelCase';
import StoryComponent from './story.component';


function mapStateToProps({ stories, location }) {
  const { slug } = location.payload;
  const story = stories.entities.story && stories.entities.story[slug];
  const template = story && camelCase(story.template);
  return { story, template };
}

export default connect(mapStateToProps)(StoryComponent);