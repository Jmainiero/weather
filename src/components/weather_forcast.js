import Logo from '../logo.svg';
const weatherForecast = () => {
  return (
    <div className='weatherbox-forecast'>
      <div className='weatherbox-forecast__box'>
        <h1> Stockholm, SE </h1> <h2> 32&deg; </h2>{' '}
        <img src={Logo} alt='logo' />
        <p className='time-and-date'> Thursday, 4: 30 pm </p>
      </div>
    </div>
  );
};

export default weatherForecast;
