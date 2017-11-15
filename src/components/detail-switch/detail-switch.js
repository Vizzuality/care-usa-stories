import { connect } from 'react-redux';
import DetailSwitch from './detail-switch.component';
import { STORIES, STORY } from 'router';

function mapStateToProps({ stories, location }) {
  const { slug } = location.payload;
  const currentIndex = stories.result.findIndex(value => value === slug);
  const nextSlug = (currentIndex !== -1) && stories.result[currentIndex + 1];
  const prevSlug = (currentIndex !== -1)  && stories.result[currentIndex - 1];

  const grid = { type: STORIES };
  const next = (nextSlug) && { type: STORY, payload: { slug: nextSlug } };
  const previous = (prevSlug) && { type: STORY, payload: { slug: prevSlug } };
  return { grid, next, previous };
}

export default connect(mapStateToProps)(DetailSwitch);