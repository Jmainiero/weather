import Logo from '../logo.svg';
const weatherDetails = (weather) => {
  console.log(weather.weather.weather);
  return (
    <div className='weatherbox-container--values'>
      <h1> {weather.weather.weather.name} </h1>{' '}
      <h2> {weather.weather.weather.main.temp}&deg; </h2>
      <img src={Logo} alt='logo' />
      <p className='time-and-date'> Thursday, 4:30 pm </p>
    </div>
  );
};

export default weatherDetails;
