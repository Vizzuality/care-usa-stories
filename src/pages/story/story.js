import { connect } from 'react-redux';
import camelCase from 'lodash/camelCase';
import StoryComponent from './story.component';
import { getPictures, getAuthors, getCountries } from 'utils/entities';

function mapStateToProps({ stories, location }) {
  const { slug } = location.payload;
  const currentStory = stories.entities.story && stories.entities.story[slug];
  const template = currentStory && camelCase(currentStory.template);
  const pictures = currentStory && getPictures(currentStory.pictures, stories.entities);
  const authors = currentStory && getAuthors(currentStory.authors, stories.entities);
  const countries = currentStory && getCountries(currentStory.countries, stories.entities);
  const story = {
    ...currentStory,
    pictures,
    authors,
    countries
  };
  return { story, template };
}

export default connect(mapStateToProps)(StoryComponent);