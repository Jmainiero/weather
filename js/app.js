//GLOBAL SELECTORS
const defaultSide = document.querySelector('.card__side-default');
const resultsSide = document.querySelector('.card__side-results');
// console.log(defaultSide);
// console.log(resultsSide);

//ROTATE THE APP TO SHOW RESULTS
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


const fetchData = (zip) => {
  const apiKey = 'e07fdcbfcc218eb6cfbdeb7fec313fab';
  const url = `api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}`;
  console.log(url);

  fetch('http://api.openweathermap.org/data/2.5/weather?zip=10306&appid=e07fdcbfcc218eb6cfbdeb7fec313fab')
    .then(response => response.json())
    .then(data => console.log(data));
};