import './css/main.scss';
import Weatherbox from './components/weather_box';
import SearchLocation from './components/search_location';
import React, { useState, useEffect } from 'react';
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
            console.log(loading)
          )}
          {console.log('This is loading ', loading)}
          {console.log(loading !== false && loading !== null)}
          {console.log('This is weather ', weather)}
          {loading === false && loading !== null ? (
            <Weatherbox weather={weather} />
          ) : (
            console.log('Runnin gthis')
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
