import { connect } from 'react-redux';
import HomeComponent from './home.component';
import homeDuck, { getStories } from './home.duck';


function mapStateToProps({ home }) {
  return { stories: home.stories.entities };
}
export { homeDuck }
export default connect(mapStateToProps, { getStories })(HomeComponent);