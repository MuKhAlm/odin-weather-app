/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Form {
  /**
   * Creates form,
   */
  static getForm = () => {
    const div = document.createElement('div')
    div.id = 'form'

    const textInput = document.createElement('input')
    textInput.type = 'text'
    textInput.placeholder = 'Enter a location name'

    const buttonInput = document.createElement('input')
    buttonInput.type = 'button'
    buttonInput.value = 'Search'
    buttonInput.id = 'search-button'

    div.append(textInput, buttonInput)
    return div
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProcessedWeatherData": () => (/* binding */ getProcessedWeatherData),
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData)
/* harmony export */ });
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./src/form.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");



/**
 * The class responsible for rendering the page,
 */
class Render {
  header
  main
  footer

  constructor () {
    this.createHeader()
    this.createMain()
    this.createFooter()
  }

  /**
   * Creates a header element, populates it and appands it to the body,
   */
  createHeader = () => {
    this.header = document.createElement('header')

    const h1 = document.createElement('h1')
    h1.textContent = 'Weather App'
    this.header.appendChild(h1)

    document.querySelector('body').appendChild(this.header)
  }

  /**
   * Creates a main element, populates with form it and appands it to the body,
   */
  createMain = () => {
    this.main = document.createElement('main')

    const form = _form__WEBPACK_IMPORTED_MODULE_0__["default"].getForm()
    this.main.appendChild(form)

    document.querySelector('body').appendChild(this.main)
  }

  /**
   * Creates a footer element, populates with form it and appands it to the body,
   */
  createFooter = () => {
    this.footer = document.createElement('footer')

    const a = document.createElement('a')
    a.href = 'https://github.com/MuKhAlt/odin-weather-app.git'

    const gitHubIcon = document.createElement('i')
    a.appendChild(gitHubIcon)

    this.footer.appendChild(a)
    document.querySelector('body').appendChild(this.footer)
  }
}

/**
 * The class responsible for controlling the state of the page
 */
class Controller {
  weatherData

  /**
   * @param {Object} wd Weather data instance
   */
  constructor (wd) {
    this.weatherData = wd

    // Add an onclick event to form button
    const btn = document.getElementById('search-button')
    btn.addEventListener('click', () => {
      this.search()
    })
  }

  /**
   * Gets weather data for searched location, and updates the weatherData class
   */
  search = async () => {
    // Checks input validity
    const location = document.getElementById('form').querySelector('input').value
    if (!location) { return null }

    // Fetch data
    const data = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(location)
    const processedData = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getProcessedWeatherData)(data)

    // Update WD
    this.weatherData.updateData(processedData, location)
  }
}

class WeatherData {
  data
  location

  /**
   * Updates the weather data and location, and triggers Render to render a weatherData card
   *
   * @param {Object} data     Processed weather data
   * @param {String} location Location name
   */
  updateData = (data, location) => {
    this.data = data
    this.location = location

    Render.displayWeatherData(data, location)
  }
}

/**
 * The function responsible for setting up the website
 */
function main () {
  const weatherData = new WeatherData()
  const render = new Render()
  const controller = new Controller(weatherData)
}

main()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELFNBQVMsU0FBUyxlQUFlO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtEOzs7Ozs7O1VDdkNsRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ055QjtBQUN3Qzs7QUFFakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHFEQUFZO0FBQzdCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBLHVCQUF1QixzREFBYztBQUNyQywwQkFBMEIsK0RBQXVCOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEZvcm0ge1xuICAvKipcbiAgICogQ3JlYXRlcyBmb3JtLFxuICAgKi9cbiAgc3RhdGljIGdldEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYuaWQgPSAnZm9ybSdcblxuICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0ZXh0SW5wdXQudHlwZSA9ICd0ZXh0J1xuICAgIHRleHRJbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciBhIGxvY2F0aW9uIG5hbWUnXG5cbiAgICBjb25zdCBidXR0b25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBidXR0b25JbnB1dC50eXBlID0gJ2J1dHRvbidcbiAgICBidXR0b25JbnB1dC52YWx1ZSA9ICdTZWFyY2gnXG4gICAgYnV0dG9uSW5wdXQuaWQgPSAnc2VhcmNoLWJ1dHRvbidcblxuICAgIGRpdi5hcHBlbmQodGV4dElucHV0LCBidXR0b25JbnB1dClcbiAgICByZXR1cm4gZGl2XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybVxuIiwiY29uc3Qgb3BlbldlYXRoZXJLZXkgPSAnY2I1MDBiZTBjNDFlODFmMjk3Yjg5MjYzZWM2NzMyOWEnXG5cbi8qKlxuICogSGl0cyAnT3BlbiBXZWF0aGVyJyBBUElzIHRvIGdldCB3ZWF0aGVyIGRhdGEgZm9yIGEgZ2l2ZW4gbG9jYXRpb24sXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGxvY2F0aW9uICBhIG5hbWUgb2YgYSBjaXR5LCB6aXBjb2RlIG9yIGNvdW50cnksXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSB3ZWF0aGVyIGRhdGEgZm9yIHRoZSBnaXZlbiBsb2NhdGlvbi5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEgKGxvY2F0aW9uKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZBUFBJRD0ke29wZW5XZWF0aGVyS2V5fWAsIHtcbiAgICAgIG1vZGU6ICdjb3JzJ1xuICAgIH1cbiAgKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gIHJldHVybiBkYXRhXG59XG5cbi8qKlxuICogUHJvY2VzcyBnaXZlbiB3ZWF0aGVyIGRhdGEgYW5kIHJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGRhdGEgcmVxdWlyZWQgYnkgdGhlIGFwcCxcbiAqXG4gKiBUaGUgZGF0YSB0byBiZSByZXR1cm5lZCBjb250YWlucyB0aGUgd2VhdGhlciBjb25kaXRpb24sIHRlbXAgKHRlbXByYXR1cmUpLCBmZWVsc0xpa2UodGhlIFRlbXAgcGVyY2VpdmVkIGJ5IGh1bWFucykgYW5kIGh1bWlkaXR5IChpbiBwZXJjZW50KSxcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSAgd2VhdGhlciBkYXRhLFxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gcHJvY2Vzc2VkIHdlYXRoZXIgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0UHJvY2Vzc2VkV2VhdGhlckRhdGEgKGRhdGEpIHtcbiAgLy8gVGVtcGVyYXR1cmUgcHJvcGVydGllcyBhcmUgY29udmVydGVkIGZyb20gS2VsdmluIHRvIENlbGNpdXNcbiAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IHtcbiAgICBjb25kaXRpb246IGRhdGEud2VhdGhlclswXS5tYWluLFxuICAgIHRlbXA6IGRhdGEubWFpbi50ZW1wIC0gMjczLjE1LFxuICAgIGZlZWxzTGlrZTogZGF0YS5tYWluLmZlZWxzX2xpa2UgLSAyNzMuMTUsXG4gICAgaHVtaWRpdHk6IGRhdGEubWFpbi5odW1pZGl0eVxuICB9XG4gIHJldHVybiBwcm9jZXNzZWREYXRhXG59XG5cbmV4cG9ydCB7IGdldFdlYXRoZXJEYXRhLCBnZXRQcm9jZXNzZWRXZWF0aGVyRGF0YSB9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBGb3JtIGZyb20gJy4vZm9ybSdcbmltcG9ydCB7IGdldFdlYXRoZXJEYXRhLCBnZXRQcm9jZXNzZWRXZWF0aGVyRGF0YSB9IGZyb20gJy4vdXRpbHMnXG5cbi8qKlxuICogVGhlIGNsYXNzIHJlc3BvbnNpYmxlIGZvciByZW5kZXJpbmcgdGhlIHBhZ2UsXG4gKi9cbmNsYXNzIFJlbmRlciB7XG4gIGhlYWRlclxuICBtYWluXG4gIGZvb3RlclxuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmNyZWF0ZUhlYWRlcigpXG4gICAgdGhpcy5jcmVhdGVNYWluKClcbiAgICB0aGlzLmNyZWF0ZUZvb3RlcigpXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGhlYWRlciBlbGVtZW50LCBwb3B1bGF0ZXMgaXQgYW5kIGFwcGFuZHMgaXQgdG8gdGhlIGJvZHksXG4gICAqL1xuICBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgaDEudGV4dENvbnRlbnQgPSAnV2VhdGhlciBBcHAnXG4gICAgdGhpcy5oZWFkZXIuYXBwZW5kQ2hpbGQoaDEpXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQodGhpcy5oZWFkZXIpXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG1haW4gZWxlbWVudCwgcG9wdWxhdGVzIHdpdGggZm9ybSBpdCBhbmQgYXBwYW5kcyBpdCB0byB0aGUgYm9keSxcbiAgICovXG4gIGNyZWF0ZU1haW4gPSAoKSA9PiB7XG4gICAgdGhpcy5tYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG5cbiAgICBjb25zdCBmb3JtID0gRm9ybS5nZXRGb3JtKClcbiAgICB0aGlzLm1haW4uYXBwZW5kQ2hpbGQoZm9ybSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZCh0aGlzLm1haW4pXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGZvb3RlciBlbGVtZW50LCBwb3B1bGF0ZXMgd2l0aCBmb3JtIGl0IGFuZCBhcHBhbmRzIGl0IHRvIHRoZSBib2R5LFxuICAgKi9cbiAgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICAgIHRoaXMuZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcblxuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBhLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL011S2hBbHQvb2Rpbi13ZWF0aGVyLWFwcC5naXQnXG5cbiAgICBjb25zdCBnaXRIdWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gICAgYS5hcHBlbmRDaGlsZChnaXRIdWJJY29uKVxuXG4gICAgdGhpcy5mb290ZXIuYXBwZW5kQ2hpbGQoYSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQodGhpcy5mb290ZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgY2xhc3MgcmVzcG9uc2libGUgZm9yIGNvbnRyb2xsaW5nIHRoZSBzdGF0ZSBvZiB0aGUgcGFnZVxuICovXG5jbGFzcyBDb250cm9sbGVyIHtcbiAgd2VhdGhlckRhdGFcblxuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R9IHdkIFdlYXRoZXIgZGF0YSBpbnN0YW5jZVxuICAgKi9cbiAgY29uc3RydWN0b3IgKHdkKSB7XG4gICAgdGhpcy53ZWF0aGVyRGF0YSA9IHdkXG5cbiAgICAvLyBBZGQgYW4gb25jbGljayBldmVudCB0byBmb3JtIGJ1dHRvblxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnV0dG9uJylcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnNlYXJjaCgpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHdlYXRoZXIgZGF0YSBmb3Igc2VhcmNoZWQgbG9jYXRpb24sIGFuZCB1cGRhdGVzIHRoZSB3ZWF0aGVyRGF0YSBjbGFzc1xuICAgKi9cbiAgc2VhcmNoID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vIENoZWNrcyBpbnB1dCB2YWxpZGl0eVxuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlXG4gICAgaWYgKCFsb2NhdGlvbikgeyByZXR1cm4gbnVsbCB9XG5cbiAgICAvLyBGZXRjaCBkYXRhXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKVxuICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSBnZXRQcm9jZXNzZWRXZWF0aGVyRGF0YShkYXRhKVxuXG4gICAgLy8gVXBkYXRlIFdEXG4gICAgdGhpcy53ZWF0aGVyRGF0YS51cGRhdGVEYXRhKHByb2Nlc3NlZERhdGEsIGxvY2F0aW9uKVxuICB9XG59XG5cbmNsYXNzIFdlYXRoZXJEYXRhIHtcbiAgZGF0YVxuICBsb2NhdGlvblxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSB3ZWF0aGVyIGRhdGEgYW5kIGxvY2F0aW9uLCBhbmQgdHJpZ2dlcnMgUmVuZGVyIHRvIHJlbmRlciBhIHdlYXRoZXJEYXRhIGNhcmRcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgICAgIFByb2Nlc3NlZCB3ZWF0aGVyIGRhdGFcbiAgICogQHBhcmFtIHtTdHJpbmd9IGxvY2F0aW9uIExvY2F0aW9uIG5hbWVcbiAgICovXG4gIHVwZGF0ZURhdGEgPSAoZGF0YSwgbG9jYXRpb24pID0+IHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhXG4gICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uXG5cbiAgICBSZW5kZXIuZGlzcGxheVdlYXRoZXJEYXRhKGRhdGEsIGxvY2F0aW9uKVxuICB9XG59XG5cbi8qKlxuICogVGhlIGZ1bmN0aW9uIHJlc3BvbnNpYmxlIGZvciBzZXR0aW5nIHVwIHRoZSB3ZWJzaXRlXG4gKi9cbmZ1bmN0aW9uIG1haW4gKCkge1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IG5ldyBXZWF0aGVyRGF0YSgpXG4gIGNvbnN0IHJlbmRlciA9IG5ldyBSZW5kZXIoKVxuICBjb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIod2VhdGhlckRhdGEpXG59XG5cbm1haW4oKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9