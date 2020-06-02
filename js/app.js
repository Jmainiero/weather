//GLOBAL SELECTORS
const defaultSide = document.querySelector('.card__side-default');
const resultsSide = document.querySelector('.card__side-results');
// console.log(defaultSide);
// console.log(resultsSide);

// defaultSide.style.transform = 'rotateX(-180deg)';
// resultsSide.style.transform = 'rotateX(0)';

console.log(defaultSide);
console.log(resultsSide);

document.querySelector(".form__weather").addEventListener("submit", function (event) {
  const zip = document.querySelector('.form__weather--input');
  console.log(zip.value);

  printData(fetchData(zip));
  defaultSide.style.transform = 'rotateX(-180deg)';
  resultsSide.style.transform = 'rotateX(0)';
  event.preventDefault()
});