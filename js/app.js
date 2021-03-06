//GLOBAL SELECTORS
const defaultSide = document.querySelector('.card__side-default');
const resultsSide = document.querySelector('.card__side-results');
// console.log(defaultSide);
// console.log(resultsSide);

//ROTATE THE APP TO SHOW RESULTS - FOR TESTING
// defaultSide.style.transform = 'rotateX(-180deg)';
// resultsSide.style.transform = 'rotateX(0)';

console.log(defaultSide);
console.log(resultsSide);

document.querySelector(".form__weather").addEventListener("submit", function (event) {
  const zip = document.querySelector('.form__weather--input');
  console.log(zip.value);

  fetchData(zip.value);
  // printData(fetchData(zip));
  defaultSide.style.transform = 'rotateX(-180deg)';
  resultsSide.style.transform = 'rotateX(0)';
  event.preventDefault()
});


document.querySelector('a.search-location').addEventListener('click', function (evt) {
  defaultSide.style.transform = 'rotateX(0)';
  resultsSide.style.transform = 'rotateX(180deg)';
  let zip = document.querySelector('.form__weather--input').value = '';

});


const fetchData = (zip) => {
  const apiKey = 'e07fdcbfcc218eb6cfbdeb7fec313fab';
  const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=${apiKey}`;
  console.log(url);

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.querySelector('.results--cTemp').innerHTML = `${data.main.temp}&deg`;
      document.querySelector('.results--loc').innerHTML = data.name + ", " + data.sys.country;
      document.querySelector('.results_details--min').innerHTML = `${data.main.temp_min}&deg`;
      document.querySelector('.results_details--max').innerHTML = `${data.main.temp_max}&deg`;
      document.querySelector('.results_details--humid').innerHTML = `${data.main.humidity}&percnt;`;
      document.querySelector('.results_details--feelsLike').innerHTML = `${data.main.feels_like}&deg`;
      document.querySelector('.results_grid--one').innerHTML = `<img src='http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' alt='weather-icon'>`;
    });
};