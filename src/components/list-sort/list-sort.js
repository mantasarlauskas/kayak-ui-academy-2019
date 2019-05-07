import React from 'react';
import PropTypes from 'prop-types';

const options = [
  {
    value: 'TITLE_ASC',
    text: 'Title ascending'
  },
  {
    value: 'TITLE_DESC',
    text: 'Title descending'
  },
  {
    value: 'DATE_ASC',
    text: 'Date ascending'
  },
  {
    value: 'DATE_DESC',
    text: 'Date descending'
  },
  {
    value: 'RATING_ASC',
    text: 'Rating ascending'
  },
  {
    value: 'RATING_DESC',
    text: 'Rating descending'
  }
];

const ListSort = ({ setSort }) => (
  <div className="form-group w-50 mb-3 float-left">
    <label htmlFor="list-sort">
      <span className="mr-1">Sort by:</span>
      <select
        className="form-control d-inline-block w-75"
        id="list-sort"
        onChange={({ target: { value } }) => setSort(value)}
      >
        {options.map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
    </label>
  </div>
);

ListSort.propTypes = {
  setSort: PropTypes.func.isRequired
};

export default ListSort;
