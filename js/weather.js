// API key. Replace with your API key
import  API_KEY  from "./config.js";

const APIKEY = API_KEY;
// City
const city = 'Spokane';
// Units for Farenheit
const units = 'imperial';

// URL query string
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;

let currentTemp = 0.0;
let currentConvertedTemp = 0.0;

//capitalize first letter of every word
const capitalize = (s) => {
  return s.replace(/\w\S*/g, function(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

//convert kelvin to farenheit
const kelvinToFarenheit = (k) => {
  let f = (k - 273.15) * 9/5 + 32;
  return f;
}

//convert kelvin to celsius
const kelvinToCelsius = (k) => {
  return Math.round(k - 273.15);
}


// Using fetch to get data
fetch(url)
.then( response => response.json() )
.then( data => {

  // Check-check: Is data good? 
  console.log( data );
  console.log( data.weather[0].main);
  
  // Get Container for Weather   
  const weatherContainer = document.querySelector('.weather');
  currentTemp = data.main.temp;
  
  // Template to output
  //<h1 class="weather-heading" >Weather</h1>
  //<data value="${data.name}" class="city">${data.name}</data>
  //<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Placeholder">
  const template = `
    <img src="/icons/${data.weather[0].icon}.png" alt="Placeholder">
    <div class="btn-container">
      <button class="temp-button" id="f-btn">F&#176</button>
      <button class="temp-button" id="c-btn">C&#176</button>
    </div>
    <data value="${data.main.temp}" class="temp">${parseInt(kelvinToFarenheit(currentTemp))}&#176;</data>
    <div class="information">
      <data value="${data.weather[0].description}" class="description">${capitalize(data.weather[0].description)}</data>
      <data value="${data.name}" class="city">${data.name}</data>
      <data value="${data.main.feels_like}" class="feels-like">Feels like ${parseInt(data.main.feels_like)}&#176;</data>
    </div>
  `;
  
  // Insert dynamic template to container
  weatherContainer.insertAdjacentHTML("afterbegin", template);
  
}).then( () => {
  const farenheitBtn = document.querySelector('#f-btn');
console.log(farenheitBtn);
const celsiusBtn = document.querySelector('#c-btn');
console.log(celsiusBtn);
farenheitBtn.classList.add('btn-selected');

//listen for click event on farenheit button
farenheitBtn.addEventListener('click', () => {

  //convert current temp to farenheit
  currentConvertedTemp = kelvinToFarenheit(currentTemp);
  //update temp
  document.querySelector('.temp').innerText = parseInt(currentConvertedTemp);
  //add class to farenheit button
  farenheitBtn.classList.add('btn-selected');
  //remove class from celsius button
  celsiusBtn.classList.remove('btn-selected');

});

celsiusBtn.addEventListener('click', () => {

  //convert current temp to farenheit
  currentConvertedTemp = kelvinToCelsius(currentTemp);
  //update temp
  document.querySelector('.temp').innerText = parseInt(currentConvertedTemp);
  //add class to celsius button
  celsiusBtn.classList.add('btn-selected');
  //remove class from farenheit button
  farenheitBtn.classList.remove('btn-selected');
});

});




