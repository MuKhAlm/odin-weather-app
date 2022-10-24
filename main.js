/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const openWeatherKey = 'cb500be0c41e81f297b89263ec67329a'

/**
 * Hits Open Weather APIs to get weather data for a given location,
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsU0FBUyxTQUFTLGVBQWU7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBvcGVuV2VhdGhlcktleSA9ICdjYjUwMGJlMGM0MWU4MWYyOTdiODkyNjNlYzY3MzI5YSdcblxuLyoqXG4gKiBIaXRzIE9wZW4gV2VhdGhlciBBUElzIHRvIGdldCB3ZWF0aGVyIGRhdGEgZm9yIGEgZ2l2ZW4gbG9jYXRpb24sXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGxvY2F0aW9uICBhIG5hbWUgb2YgYSBjaXR5LCB6aXBjb2RlIG9yIGNvdW50cnksXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSB3ZWF0aGVyIGRhdGEgZm9yIHRoZSBnaXZlbiBsb2NhdGlvbi5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEgKGxvY2F0aW9uKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZBUFBJRD0ke29wZW5XZWF0aGVyS2V5fWAsIHtcbiAgICAgIG1vZGU6ICdjb3JzJ1xuICAgIH1cbiAgKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gIHJldHVybiBkYXRhXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=