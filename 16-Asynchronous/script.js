'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

let lang;
let cur;
let neighbours;

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}" >
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data['population'] / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${lang}</p>
    <p class="country__row"><span>💰</span>${cur}</p>
  </div>
</article>`;
  countriesContainer.insertAdjacentHTML('beforeEnd', html);
  countriesContainer.style.opacity = 1;
};

function getCountryAndNeighbourData(country) {
  // old school ways of AJAX call
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    for (let key in data.languages) {
      lang = data.languages[key];
    }
    for (let key in data.currencies) {
      cur = data.currencies[key].name;
    }
    renderCountry(data);

    // getting neighbour country
    const [neighbour] = data.borders;
    if (!neighbour) return;
    console.log(neighbour);

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      renderCountry(data2, 'neighbour');
    });
  });
}

getCountryAndNeighbourData('israel');
