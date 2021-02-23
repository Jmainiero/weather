import './css/main.scss';
import Weatherbox from './components/weather_box';
import SearchLocation from './components/search_location';
import React, { useState, useEffect, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import weather_api from './components/weather_api';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const weatherdata = (index = {}) => {
    setLoading(index.loading);
    setWeather(index.data);
    console.log(index.data);
  };

  useEffect(() => {
    <SearchLocation />;
  }, [setWeather]);

  document.title = 'Weather App';
  return (
    <div className='App'>
      <SearchLocation weatherdata={weatherdata} />
      <header className='App-header'>
        <div>
          {loading ? (
            <div className='loading-container'>
              <Spinner animation='border' />
            </div>
          ) : (
            <Weatherbox weather={weather} />
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
