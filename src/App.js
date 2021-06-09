import './css/main.scss';
import Weatherbox from './components/weather_box';
import SearchLocation from './components/search_location';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';

function App() {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(null);

  document.title = 'Weather App';
  return (
    <div className='App'>
      <SearchLocation setWeather={setWeather} setLoading={setLoading} />
      <header className='App-header'>
        <div>
          {loading === true ? (
            <div className='loading-container'>
              <Spinner animation='border' />
            </div>
          ) : (
            console.log()
          )}
          {loading === false && loading !== null ? (
            <Weatherbox weather={weather} />
          ) : (
            console.log()
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
