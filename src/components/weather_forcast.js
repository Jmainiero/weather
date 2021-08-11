import WeatherCodes from './weathermapping';
const weatherForecast = (weather) => {
  const d_map = {
    0: 'SUN',
    1: 'MON',
    2: 'TUES',
    3: 'WED',
    4: 'THURS',
    5: 'FRI',
    6: 'SAT',
  };
  const r = weather.weather.map((e) => {
    return (
      <div className='weatherbox-forecast__box'>
        <h1>{d_map[new Date(`${e.dt_txt}`).getDay()]} </h1>
        <img
          src={window.location + WeatherCodes[e.weather[0].icon].icon}
          alt='logo'
        />
        <h2> {Math.floor(e.main.temp)}&deg; </h2>
        <p> {WeatherCodes[e.weather[0].icon].status}</p>
      </div>
    );
  });
  return <div className='weatherbox-forecast'>{r}</div>;
};

export default weatherForecast;
