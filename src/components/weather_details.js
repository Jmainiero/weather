import Logo from '../logo.svg';
import WeatherCodes from './weathermapping';
const weatherDetails = (weather) => {
  const d_map = {
    0: 'SUN',
    1: 'MON',
    2: 'TUES',
    3: 'WED',
    4: 'THURS',
    5: 'FRI',
    6: 'SAT',
  };
  return (
    <div className='weatherbox-container--values'>
      <h1> {weather.weather.weather.name} </h1>
      <div className='weatherbox-container--values__left'>
        <h2> {Math.floor(weather.weather.weather.main.temp)}&deg; </h2>
        <p>{WeatherCodes[weather.weather.weather.weather[0].icon].status}</p>
        <p className='weatherbox-container--values__left__humid'>
          Humidity <br></br>
          {Math.floor(weather.weather.weather.main.humidity)}%
        </p>
        <p className='weatherbox-container--values__left__feels'>
          Feels Like <br></br>
          {Math.floor(weather.weather.weather.main.feels_like)}&deg;
        </p>
      </div>
      <div className='weatherbox-container--values__right'>
        <img
          src={WeatherCodes[weather.weather.weather.weather[0].icon].icon}
          alt='logo'
        />
      </div>
    </div>
  );
};

export default weatherDetails;
