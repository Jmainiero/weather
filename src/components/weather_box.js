import React, { Fragment } from 'react';
import WeatherDetails from './weather_details';
import WeatherForecast from './weather_forcast';
import 'bootstrap/dist/css/bootstrap.min.css';

const Weatherbox = (weather) => {
  return (
    <div>
      <Fragment>
        <div className='weatherbox-container'>
          <WeatherDetails weather={weather} />
          <WeatherForecast weather={weather.weather.list} />
        </div>
      </Fragment>
    </div>
  );
};

export default Weatherbox;
