import React from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function Filters(props) {
  const {
    categories,
    countries,
    query,
    selectedDate,
    selectedDateText,
    onFilterChange,
    onDateChange
  } = props;
  return (
    <section className="multi-search-container">
      <input
        id="filterTrigger"
        className="hidden"
        type="checkbox"
        name="filterTrigger"
      />
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
              defaultValue={query.q}
              onInput={onFilterChange}
            />
            <button
              id="formSearchSubmit"
              className="search-btn"
              type="button"
              name="formSearchBtn"
              title="Search"
            >
              <i className="icon-search"/>
            </button>
          </div>
          <div className="field select">
            <select
              id="selectCategory"
              title="Select Category"
              name="category"
              placeholder="Category"
              value={query.category}
              onChange={onFilterChange}
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
              onChange={onFilterChange}
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
            <DatePicker
              dateFormat="YYYY-MM-DD"
              placeholderText={selectedDateText}
              selected={selectedDate}
              onChange={onDateChange}
            />
            <i className="icon-calendar"></i>
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

export default Filters;
