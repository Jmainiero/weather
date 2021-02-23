import React, { useState, useEffect, Fragment } from 'react';
import WeatherDetails from './weather_details';
import WeatherForecast from './weather_forcast';
import 'bootstrap/dist/css/bootstrap.min.css';

const Weatherbox = (weather) => {
  console.log(weather);
  return (
    <div>
      <Fragment>
        <div className='weatherbox-container'>
          <WeatherDetails weather={weather} />
        </div>
        <WeatherForecast />
      </Fragment>
    </div>
  );
};

export default Weatherbox;
