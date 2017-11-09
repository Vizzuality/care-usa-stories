import { connect } from 'react-redux';
import HomeComponent from './home.component';
import homeDuck from './home.duck';

export { homeDuck }
export default connect(null, null)(HomeComponent);