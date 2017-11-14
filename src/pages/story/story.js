import { connect } from 'react-redux';
import camelCase from 'lodash/camelCase';
import StoryComponent from './story.component';
import { getPictures, getAuthors } from 'utils/stories';

function mapStateToProps({ stories, location }) {
  const { slug } = location.payload;
  const currentStory = stories.entities.story && stories.entities.story[slug];
  const template = currentStory && camelCase(currentStory.template);
  const pictures = currentStory && getPictures(currentStory.pictures, stories.entities);
  const authors = currentStory && getAuthors(currentStory.authors, stories.entities);
  const story = {
    ...currentStory,
    pictures,
    authors
  };
  return { story, template };
}

export default connect(mapStateToProps)(StoryComponent);