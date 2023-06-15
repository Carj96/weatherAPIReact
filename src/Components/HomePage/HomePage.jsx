import React, { useState } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import './Home.style.css';
import WeatherData from '../WeatherData/WeatherData';

function HomePage() {
  const [weatherData, setWeatherData] = useState();
  return (
    <div className="container">
      <h1>openweathermap</h1>
      <SearchInput setWeatherData={setWeatherData} />
      <WeatherData data={weatherData} />
    </div>
  );
}

export default HomePage;
