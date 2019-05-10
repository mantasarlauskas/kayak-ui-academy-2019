import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import WithClickOutside from '../with-click-outside';
import ResultsList from '../results-list';

const Autocomplete = ({ setMovies, setGenres }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => setMovies(inputValue), 1000);
    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  useEffect(() => {
    setGenres();
  }, []);

  return (
    <WithClickOutside>
      {({ componentRef, setIsOpen, isOpen }) => (
        <div ref={componentRef} className="control control--has-icon-left">
          <i className="control__icon fas fa-film" />
          <input
            className="input"
            onChange={({ target: { value } }) => setInputValue(value)}
            onFocus={setIsOpen}
            value={inputValue}
            id="movies-autocomplete"
            type="search"
            autoComplete="off"
            name="q"
            placeholder="any text phrase to search"
            aria-label="Search through app content"
          />
          {isOpen && <div className="menu">{<ResultsList />}</div>}
        </div>
      )}
    </WithClickOutside>
  );
};

Autocomplete.propTypes = {
  setGenres: PropTypes.func.isRequired,
  setMovies: PropTypes.func.isRequired
};

export default withRouter(Autocomplete);
