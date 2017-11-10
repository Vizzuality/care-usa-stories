import { connect } from 'react-redux';
import FiltersComponent from './filters.component';
import filtersDuck from './filters.duck';


function mapStateToProps({ filters }) {
  return { categories: filters.categories };
}
export { filtersDuck }
export default connect(mapStateToProps)(FiltersComponent);