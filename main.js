/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const openWeatherKey = 'cb500be0c41e81f297b89263ec67329a'

/**
 * Hits Open Weather APIs to get weather data for a given location,
 *
 * @param {string} location  a name of a city, zipcode or country,
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
 * Console logs weather data object,
 *
 * @param {string} location   name of the desired location.
 */
async function clgWeatherData (location) {
  const data = await getWeatherData(location)
  console.log(data)
}
clgWeatherData('London')

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsU0FBUyxTQUFTLGVBQWU7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG9wZW5XZWF0aGVyS2V5ID0gJ2NiNTAwYmUwYzQxZTgxZjI5N2I4OTI2M2VjNjczMjlhJ1xuXG4vKipcbiAqIEhpdHMgT3BlbiBXZWF0aGVyIEFQSXMgdG8gZ2V0IHdlYXRoZXIgZGF0YSBmb3IgYSBnaXZlbiBsb2NhdGlvbixcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gIGEgbmFtZSBvZiBhIGNpdHksIHppcGNvZGUgb3IgY291bnRyeSxcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IHdlYXRoZXIgZGF0YSBmb3IgdGhlIGdpdmVuIGxvY2F0aW9uLlxuICovXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YSAobG9jYXRpb24pIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPSR7b3BlbldlYXRoZXJLZXl9YCwge1xuICAgICAgbW9kZTogJ2NvcnMnXG4gICAgfVxuICApXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgcmV0dXJuIGRhdGFcbn1cblxuLyoqXG4gKiBDb25zb2xlIGxvZ3Mgd2VhdGhlciBkYXRhIG9iamVjdCxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gICBuYW1lIG9mIHRoZSBkZXNpcmVkIGxvY2F0aW9uLlxuICovXG5hc3luYyBmdW5jdGlvbiBjbGdXZWF0aGVyRGF0YSAobG9jYXRpb24pIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKVxuICBjb25zb2xlLmxvZyhkYXRhKVxufVxuY2xnV2VhdGhlckRhdGEoJ0xvbmRvbicpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=