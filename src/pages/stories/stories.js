import { connect } from 'react-redux';
import StoriesComponent from './stories.component';
import storiesDuck from './stories.duck';


function mapStateToProps({ stories }) {
  return { data: stories.entities };
}
export { storiesDuck }
export default connect(mapStateToProps)(StoriesComponent);