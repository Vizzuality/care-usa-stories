import React from "react";
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

class Filters extends React.Component {

  static defaultProps = {
    query: {},
    categories: {},
    countries: {}
  };

  static propTypes = {
    query: PropTypes.object,
    categories: PropTypes.object.isRequired,
    countries: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.updateFilters = debounce(this.props.updateFilters, 350);
  }

  onFilterChange(e) {
    const { query } = this.props;
    const { value, name } = e.target;
    this.updateFilters({ ...query, [name]: value });
  }

  render() {
    const { categories, countries, query } = this.props;
    return (
      <section className="multi-search-container">
        <input
          id="filterTrigger"
          className="hidden"
          type="checkbox"
          name="filterTrigger"
        />
        <label className="label-trigger" htmlFor="filterTrigger">
          FILTER BY<span className="icon-chevron-down" />
        </label>
        <div
          className="multisearch-form box"
        >
          <div className="filters-holder">
            <div className="field">
              <input
                id="formSearch"
                type="search"
                name="q"
                placeholder="Search by..."
                onInput={this.onFilterChange}
              />
              <button
                id="formSearchSubmit"
                className="search-btn"
                type="button"
                name="formSearchBtn"
                title="Search"
              >
                <i className="icon-search" />
              </button>
            </div>
            <div className="field select">
              <select
                id="selectCategory"
                title="Select Category"
                name="category"
                placeholder="Category"
                value={query.category}
                onChange={this.onFilterChange}
              >
                <option value={''}>Category</option>
                {
                  Object.keys(categories).map(id => (
                    <option value={categories[id].name} key={id}>
                      {categories[id].name}
                    </option>
                  ))
                }
              </select>
            </div>
            <div className="field select">
              <select
                id="selectCountry"
                title="Select Country"
                placeholder="Country"
                name="country"
                value={query.country}
                onChange={this.onFilterChange}
              >
                <option value={''}>Country</option>
                {
                  Object.keys(countries).map(id => (
                    <option value={countries[id].iso} key={id}>
                      {countries[id].name}
                    </option>
                  ))
                }
              </select>
            </div>
            <div className="field date">
              <input
                id="dateFilter"
                name="dateInput"
                placeholder="20-04-2017"
              />
              <i className="icon-calendar" />
            </div>
            <div className="field select">
              <select id="mostRecentFilter" title="Most recent">
                <option value disabled>
                  Most Recent
                </option>
                <option value>Story 1</option>
                <option value>Story 2</option>
                <option value>Story3</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Filters;
