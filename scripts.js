$('#submitBtn').click(function (e) {
  const zipCode = document.querySelector('input[type="text"]').value;
  e.preventDefault();
  var values = zipCode;
  console.log(values);
  $.ajax({
    type: 'POST',
    url: 'backend.php',
    dataType: 'JSON',
    data: {
      values,
    },
    success: function (data) {
      console.log(data);
      drawWeather(data.retrieveWeather);
      // drawForecast(data.forecastApi);
    },
  });
});

const getMiles = (i) => {
  return i * 0.000621371192;
};

const drawWeather = (data) => {
  // console.log(data);
  const imgLoc = document.querySelector('#icon-set');
  const wTLoc = document.querySelector('#wT-set');
  const wTCurr = document.querySelector('#wT-curr');
  const titleLoc = document.querySelector('#title-loc');
  const iconSet = [
    'cloudy-day-1.svg',
    'rainy-1.svg',
    'cloudy-night-1.svg',
    'day.svg',
  ];
  const wC = data.weather[0].main;
  const wT = Math.floor(data.main.temp);
  const wTmin = Math.floor(data.main.temp_min);
  const wTmax = Math.floor(data.main.temp_max);
  const wTfl = Math.floor(data.main.feels_like);
  titleLoc.innerHTML = `<h1>${data.name}</h1>`;
  //Print Icon 
  // if (wC == 'Clear') {
  imgLoc.innerHTML = `<img src='http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'>`;
  // } else {
  //   imgLoc.innerHTML = '<img src="resources/img/animated/' + iconSet[0] + '">';
  // }
  wTCurr.innerHTML = `<p id ='currTmpt'>${wT}&deg;F</p>`;
  wTCurr.innerHTML += `<p class ="wTfl minMax">Feels Like: ${wTfl}&deg;F</p>`;
  wTLoc.innerHTML = `<p class ="minMax"><strong>Min:</strong> ${wTmin}&deg;F / <strong>Max:</strong> ${wTmax}&deg;F</p>`;
  wTLoc.innerHTML += `<p class ="minMax"><strong>Humidity:</strong> ${data.main.humidity}%</p>`;
  wTLoc.innerHTML += `<p class ="minMax"><strong>Visibility:</strong> ${Math.ceil(getMiles(data.visibility))}mi</p>`;

  document.querySelector('#primary-container').style.visibility = "Visible";

};