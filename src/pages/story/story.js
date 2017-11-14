import { connect } from 'react-redux';
import camelCase from 'lodash/camelCase';
import StoryComponent from './story.component';
import { getPictures, getAuthors, getEntity } from 'utils/entities';

function mapStateToProps({ stories, location }) {
  const { slug } = location.payload;
  const currentStory = stories.entities.story && stories.entities.story[slug];
  const template = currentStory && camelCase(currentStory.template);
  const pictures = currentStory && getPictures(currentStory.pictures, stories.entities);
  const videos = currentStory && getEntity(currentStory.videos, stories.entities, 'video');
  const authors = currentStory && getAuthors(currentStory.authors, stories.entities);
  const countries = currentStory && getEntity(currentStory.countries, stories.entities, 'country');

  const story = {
    ...currentStory,
    pictures,
    videos,
    authors,
    countries
  };
  return { story, template };
}

export default connect(mapStateToProps)(StoryComponent);