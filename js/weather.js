// API key. Replace with your API key
import  API_KEY  from "./config.js";

const APIKEY = API_KEY;
// City
const city = 'Spokane';
// Units for Farenheit
const units = 'imperial';

// URL query string
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=${units}`;

// Using fetch to get data
fetch(url)
.then( response => response.json() )
.then( data => {

  // Check-check: Is data good? 
  console.log( data );
  console.log( data.weather[0].main);
  
  // Get Container for Weather   
  const weatherContainer = document.querySelector('.weather');
  
  // Template to output
  //<h1 class="weather-heading" >Weather</h1>
  //<data value="${data.name}" class="city">${data.name}</data>
  //<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Placeholder">
  const template = `
    <img src="/icons/${data.weather[0].icon}.png" alt="Placeholder">
    <data value="${data.main.temp}" class="temp">${parseInt(data.main.temp)}&#176;</data>
    <div class="information">
      <data value="${data.weather[0].description}" class="description">${data.weather[0].description}</data>
      <data value="${data.name}" class="city">${data.name}</data>
      <data value="${data.main.feels_like}" class="feels-like">Feels like ${parseInt(data.main.feels_like)}&#176;</data>
    </div>
  `;
  
  // Insert dynamic template to container
  weatherContainer.insertAdjacentHTML("afterbegin", template);
  
});
