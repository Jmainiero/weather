const axios = require('axios');
const weather_api = async (props) => {
  const query = await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?zip=${props.zipCode}&units=imperial&appid=e07fdcbfcc218eb6cfbdeb7fec313fab
    `
    )
    .then((res) => res.data);
  return query;
};

export default weather_api;
