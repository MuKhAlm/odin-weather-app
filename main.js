/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const openWeatherKey = 'cb500be0c41e81f297b89263ec67329a'

/**
 * Hits 'Open Weather' APIs to get weather data for a given location,
 *
 * @param {String} location  a name of a city, zipcode or country,
 *
 * @return {Object} weather data for the given location.
 */
async function getWeatherData (location) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${openWeatherKey}`, {
      mode: 'cors'
    }
  )
  const data = await response.json()
  return data
}

/**
 * Process given weather data and returns an object containing the data required by the app,
 *
 * The data to be returned contains the weather condition, temp (temprature), feelsLike(the Temp perceived by humans) and humidity (in percent),
 *
 * @param {Object} data  weather data,
 *
 * @return {Object} processed weather data.
 */
function processWeatherData (data) {
  // Temperature properties are converted from Kelvin to Celcius
  const processedData = {
    condition: data.weather.main,
    temp: data.main.temp - 273.15,
    feelsLike: data.main.feels_like - 273.15,
    humidity: data.main.humidity
  }
  return processedData
}

/**
 * Console logs weather data object,
 *
 * @param {string} location   name of the desired location.
 */
async function clgWeatherData (location) {
  const data = await getWeatherData(location)
  console.log(data)
}
clgWeatherData('baghdad')

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsU0FBUyxTQUFTLGVBQWU7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBvcGVuV2VhdGhlcktleSA9ICdjYjUwMGJlMGM0MWU4MWYyOTdiODkyNjNlYzY3MzI5YSdcblxuLyoqXG4gKiBIaXRzICdPcGVuIFdlYXRoZXInIEFQSXMgdG8gZ2V0IHdlYXRoZXIgZGF0YSBmb3IgYSBnaXZlbiBsb2NhdGlvbixcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbG9jYXRpb24gIGEgbmFtZSBvZiBhIGNpdHksIHppcGNvZGUgb3IgY291bnRyeSxcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IHdlYXRoZXIgZGF0YSBmb3IgdGhlIGdpdmVuIGxvY2F0aW9uLlxuICovXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YSAobG9jYXRpb24pIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPSR7b3BlbldlYXRoZXJLZXl9YCwge1xuICAgICAgbW9kZTogJ2NvcnMnXG4gICAgfVxuICApXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgcmV0dXJuIGRhdGFcbn1cblxuLyoqXG4gKiBQcm9jZXNzIGdpdmVuIHdlYXRoZXIgZGF0YSBhbmQgcmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgZGF0YSByZXF1aXJlZCBieSB0aGUgYXBwLFxuICpcbiAqIFRoZSBkYXRhIHRvIGJlIHJldHVybmVkIGNvbnRhaW5zIHRoZSB3ZWF0aGVyIGNvbmRpdGlvbiwgdGVtcCAodGVtcHJhdHVyZSksIGZlZWxzTGlrZSh0aGUgVGVtcCBwZXJjZWl2ZWQgYnkgaHVtYW5zKSBhbmQgaHVtaWRpdHkgKGluIHBlcmNlbnQpLFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhICB3ZWF0aGVyIGRhdGEsXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBwcm9jZXNzZWQgd2VhdGhlciBkYXRhLlxuICovXG5mdW5jdGlvbiBwcm9jZXNzV2VhdGhlckRhdGEgKGRhdGEpIHtcbiAgLy8gVGVtcGVyYXR1cmUgcHJvcGVydGllcyBhcmUgY29udmVydGVkIGZyb20gS2VsdmluIHRvIENlbGNpdXNcbiAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IHtcbiAgICBjb25kaXRpb246IGRhdGEud2VhdGhlci5tYWluLFxuICAgIHRlbXA6IGRhdGEubWFpbi50ZW1wIC0gMjczLjE1LFxuICAgIGZlZWxzTGlrZTogZGF0YS5tYWluLmZlZWxzX2xpa2UgLSAyNzMuMTUsXG4gICAgaHVtaWRpdHk6IGRhdGEubWFpbi5odW1pZGl0eVxuICB9XG4gIHJldHVybiBwcm9jZXNzZWREYXRhXG59XG5cbi8qKlxuICogQ29uc29sZSBsb2dzIHdlYXRoZXIgZGF0YSBvYmplY3QsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uICAgbmFtZSBvZiB0aGUgZGVzaXJlZCBsb2NhdGlvbi5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY2xnV2VhdGhlckRhdGEgKGxvY2F0aW9uKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbilcbiAgY29uc29sZS5sb2coZGF0YSlcbn1cbmNsZ1dlYXRoZXJEYXRhKCdiYWdoZGFkJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==