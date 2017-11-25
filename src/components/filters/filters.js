import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import uniqBy from 'lodash/uniqBy';
import kebabCase from 'lodash/kebabCase';
import moment from 'moment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FiltersComponent from './filters.component';
import filtersDuck, { updateFilters } from './filters.duck';

function mapStateToProps({ filters, location, stories }) {
  const categories = Object.values(filters.categories.entities.category || {})
    .map(category => ({ value: kebabCase(category.name), label: category.name }));

  const countries = Object.values(filters.countries.entities.country || {})
    .map(country => ({ value: country.iso, label: country.name }));

  const templates = uniqBy(
    Object.values(stories.all.entities.story || {}),
    'template'
  ).map(story => (({ value: kebabCase(story.template), label: story.template })));

  return {
    categories,
    countries,
    templates,
    query: location.query
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateFilters }, dispatch);
}

class FiltersContainer extends React.Component {

  static defaultProps = {
    query: {},
    categories: [],
    countries: [],
    templates: []
  };

  static propTypes = {
    query: PropTypes.object,
    categories: PropTypes.array.isRequired,
    countries: PropTypes.array.isRequired,
    templates: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.updateFilters = debounce(this.props.updateFilters, 350);
    this.dateFormat = 'YYYY-MM-DD';
  }

  onDateChange(d) {
    const { query } = this.props;
    const date = d && d.format(this.dateFormat);
    this.updateFilters({ ...query, date })
  }

  onFilterChange(e) {
    const { query } = this.props;
    const { value, name } = e.target;
    this.updateFilters({ ...query, [name]: value });
  }
  render() {
    const { query } = this.props;
    const { onFilterChange, onDateChange, dateFormat } = this;

    const selectedDate = query.date ? moment(query.date, dateFormat) : moment();
    const selectedDateText = selectedDate.format(dateFormat);

    return createElement(FiltersComponent, {
      ...this.props,
      onFilterChange,
      selectedDate,
      onDateChange,
      selectedDateText
    });
  }
}

export { filtersDuck }
export default connect(mapStateToProps, mapDispatchToProps)(FiltersContainer);