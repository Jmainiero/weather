const axios = require('axios');

const weatherData = async (zipCode) => {
  try {
    const query = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=e07fdcbfcc218eb6cfbdeb7fec313fab
  `
      )
      .then((res) => res.data);
    return query;
  } catch (e) {
    return e;
  }
}

const forecastData = async (zipCode) => {
  const query = await axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&units=imperial&appid=e07fdcbfcc218eb6cfbdeb7fec313fab
`
    )
    .then((res) => res.data);
  query.list = query.list.filter(e => {
    if (e.dt_txt.split(' ')[1] === '12:00:00') return e;
  })
  return query;
};

const weather_api = async (props) => {
  try {
    const r_weatherData = await weatherData(props.zipCode);
    const r_forecastData = await forecastData(props.zipCode);
    const r = Object.assign({}, r_weatherData, r_forecastData);
    console.log(r);
    return r;
  } catch (e) {
    console.log(e);
    return 'Not Found';
  }
};

export default weather_api;