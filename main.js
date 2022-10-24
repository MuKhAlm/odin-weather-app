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
function getProcessedWeatherData (data) {
  // Temperature properties are converted from Kelvin to Celcius
  const processedData = {
    condition: data.weather[0].main,
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
clgWeatherData('London')

/**
 * Console logs weather data object,
 *
 * @param {string} location   name of the desired location.
 */
async function clgProcessedWeatherData (location) {
  const data = await getWeatherData(location)
  console.log(getProcessedWeatherData(data))
}
clgProcessedWeatherData('London')

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsU0FBUyxTQUFTLGVBQWU7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG9wZW5XZWF0aGVyS2V5ID0gJ2NiNTAwYmUwYzQxZTgxZjI5N2I4OTI2M2VjNjczMjlhJ1xuXG4vKipcbiAqIEhpdHMgJ09wZW4gV2VhdGhlcicgQVBJcyB0byBnZXQgd2VhdGhlciBkYXRhIGZvciBhIGdpdmVuIGxvY2F0aW9uLFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBsb2NhdGlvbiAgYSBuYW1lIG9mIGEgY2l0eSwgemlwY29kZSBvciBjb3VudHJ5LFxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gd2VhdGhlciBkYXRhIGZvciB0aGUgZ2l2ZW4gbG9jYXRpb24uXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhIChsb2NhdGlvbikge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mQVBQSUQ9JHtvcGVuV2VhdGhlcktleX1gLCB7XG4gICAgICBtb2RlOiAnY29ycydcbiAgICB9XG4gIClcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICByZXR1cm4gZGF0YVxufVxuXG4vKipcbiAqIFByb2Nlc3MgZ2l2ZW4gd2VhdGhlciBkYXRhIGFuZCByZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBkYXRhIHJlcXVpcmVkIGJ5IHRoZSBhcHAsXG4gKlxuICogVGhlIGRhdGEgdG8gYmUgcmV0dXJuZWQgY29udGFpbnMgdGhlIHdlYXRoZXIgY29uZGl0aW9uLCB0ZW1wICh0ZW1wcmF0dXJlKSwgZmVlbHNMaWtlKHRoZSBUZW1wIHBlcmNlaXZlZCBieSBodW1hbnMpIGFuZCBodW1pZGl0eSAoaW4gcGVyY2VudCksXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEgIHdlYXRoZXIgZGF0YSxcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IHByb2Nlc3NlZCB3ZWF0aGVyIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldFByb2Nlc3NlZFdlYXRoZXJEYXRhIChkYXRhKSB7XG4gIC8vIFRlbXBlcmF0dXJlIHByb3BlcnRpZXMgYXJlIGNvbnZlcnRlZCBmcm9tIEtlbHZpbiB0byBDZWxjaXVzXG4gIGNvbnN0IHByb2Nlc3NlZERhdGEgPSB7XG4gICAgY29uZGl0aW9uOiBkYXRhLndlYXRoZXJbMF0ubWFpbixcbiAgICB0ZW1wOiBkYXRhLm1haW4udGVtcCAtIDI3My4xNSxcbiAgICBmZWVsc0xpa2U6IGRhdGEubWFpbi5mZWVsc19saWtlIC0gMjczLjE1LFxuICAgIGh1bWlkaXR5OiBkYXRhLm1haW4uaHVtaWRpdHlcbiAgfVxuICByZXR1cm4gcHJvY2Vzc2VkRGF0YVxufVxuXG4vKipcbiAqIENvbnNvbGUgbG9ncyB3ZWF0aGVyIGRhdGEgb2JqZWN0LFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiAgIG5hbWUgb2YgdGhlIGRlc2lyZWQgbG9jYXRpb24uXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNsZ1dlYXRoZXJEYXRhIChsb2NhdGlvbikge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pXG4gIGNvbnNvbGUubG9nKGRhdGEpXG59XG5jbGdXZWF0aGVyRGF0YSgnTG9uZG9uJylcblxuLyoqXG4gKiBDb25zb2xlIGxvZ3Mgd2VhdGhlciBkYXRhIG9iamVjdCxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gICBuYW1lIG9mIHRoZSBkZXNpcmVkIGxvY2F0aW9uLlxuICovXG5hc3luYyBmdW5jdGlvbiBjbGdQcm9jZXNzZWRXZWF0aGVyRGF0YSAobG9jYXRpb24pIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKVxuICBjb25zb2xlLmxvZyhnZXRQcm9jZXNzZWRXZWF0aGVyRGF0YShkYXRhKSlcbn1cbmNsZ1Byb2Nlc3NlZFdlYXRoZXJEYXRhKCdMb25kb24nKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9