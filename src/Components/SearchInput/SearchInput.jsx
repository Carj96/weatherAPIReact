import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchInput.style.css';
import { handleSelectSuggestion, handleChangeInput, handleSearch } from '../../core/utils/handlers/handlers';

function SearchInput({ setWeatherData }) {
  const [inputData, setInputData] = useState({ searchString: '' });
  const [suggestions, setSuggestions] = useState([]);

  return (
    <div>
      <input name="searchString" value={inputData.searchString} onKeyUp={() => handleSearch(inputData, setSuggestions)} onChange={(e) => handleChangeInput(e, inputData, setInputData)} className="search-string" type="text" placeholder="enter your city" />
      {suggestions.length > 0 && (
      <div className="suggestions-container">
        {suggestions.map((suggestion) => (
          <div className="suggestion" key={suggestion.lat} onClick={() => handleSelectSuggestion(suggestion, setSuggestions, setInputData, setWeatherData)}>
            {' '}
            {suggestion.name}
          </div>
        ))}
      </div>
      )}
    </div>
  );
}

SearchInput.propTypes = {
  setWeatherData: PropTypes.func.isRequired,
};

export default SearchInput;
