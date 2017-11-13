import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FiltersComponent from './filters.component';
import filtersDuck, { updateFilters } from './filters.duck';

function mapStateToProps({ filters, location }) {
  const categories = filters.categories.entities.category || {};
  const countries = filters.countries.entities.country || {};
  return {
    categories,
    countries,
    query: location.query
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateFilters }, dispatch);
}

export { filtersDuck }
export default connect(mapStateToProps, mapDispatchToProps)(FiltersComponent);