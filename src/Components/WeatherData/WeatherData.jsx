import React from 'react';
import PropTypes from 'prop-types';
import './Weather.style.css';

function WeatherData({ data }) {
  return (
    <div>
      {data
      && (
      <div className="data-container">
        <h3>{data.name}</h3>
        <div className="weather-container">
          <div className="temperature">
            <h4>Temperature</h4>
            <p>
              temperature now:
              {' '}
              {Math.round(data.main?.temp)}
            </p>
            <p>
              feels like:
              {' '}
              {Math.round(data.main?.feels_like)}
            </p>
          </div>
          <div className="weather">
            <h4>Weather</h4>
            <img src={data.weather?.icon} alt="icon" />
            <p>{data.weather?.main}</p>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

WeatherData.propTypes = {
  data: PropTypes.object,
};

WeatherData.defaultProps = {
  data: null,
};

export default WeatherData;
