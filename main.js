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
  constructor () {
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
  }
}

/**
 * The function responsible for setting up the website
 */
function main () {
  const render = new Render()
  const controller = new Controller()
}

main()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELFNBQVMsU0FBUyxlQUFlO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtEOzs7Ozs7O1VDdkNsRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ055QjtBQUN3Qzs7QUFFakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHFEQUFZO0FBQzdCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQSx1QkFBdUIsc0RBQWM7QUFDckMsMEJBQTBCLCtEQUF1Qjs7QUFFakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRm9ybSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGZvcm0sXG4gICAqL1xuICBzdGF0aWMgZ2V0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpdi5pZCA9ICdmb3JtJ1xuXG4gICAgY29uc3QgdGV4dElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRleHRJbnB1dC50eXBlID0gJ3RleHQnXG4gICAgdGV4dElucHV0LnBsYWNlaG9sZGVyID0gJ0VudGVyIGEgbG9jYXRpb24gbmFtZSdcblxuICAgIGNvbnN0IGJ1dHRvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGJ1dHRvbklucHV0LnR5cGUgPSAnYnV0dG9uJ1xuICAgIGJ1dHRvbklucHV0LnZhbHVlID0gJ1NlYXJjaCdcbiAgICBidXR0b25JbnB1dC5pZCA9ICdzZWFyY2gtYnV0dG9uJ1xuXG4gICAgZGl2LmFwcGVuZCh0ZXh0SW5wdXQsIGJ1dHRvbklucHV0KVxuICAgIHJldHVybiBkaXZcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtXG4iLCJjb25zdCBvcGVuV2VhdGhlcktleSA9ICdjYjUwMGJlMGM0MWU4MWYyOTdiODkyNjNlYzY3MzI5YSdcblxuLyoqXG4gKiBIaXRzICdPcGVuIFdlYXRoZXInIEFQSXMgdG8gZ2V0IHdlYXRoZXIgZGF0YSBmb3IgYSBnaXZlbiBsb2NhdGlvbixcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbG9jYXRpb24gIGEgbmFtZSBvZiBhIGNpdHksIHppcGNvZGUgb3IgY291bnRyeSxcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IHdlYXRoZXIgZGF0YSBmb3IgdGhlIGdpdmVuIGxvY2F0aW9uLlxuICovXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YSAobG9jYXRpb24pIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPSR7b3BlbldlYXRoZXJLZXl9YCwge1xuICAgICAgbW9kZTogJ2NvcnMnXG4gICAgfVxuICApXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgcmV0dXJuIGRhdGFcbn1cblxuLyoqXG4gKiBQcm9jZXNzIGdpdmVuIHdlYXRoZXIgZGF0YSBhbmQgcmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgZGF0YSByZXF1aXJlZCBieSB0aGUgYXBwLFxuICpcbiAqIFRoZSBkYXRhIHRvIGJlIHJldHVybmVkIGNvbnRhaW5zIHRoZSB3ZWF0aGVyIGNvbmRpdGlvbiwgdGVtcCAodGVtcHJhdHVyZSksIGZlZWxzTGlrZSh0aGUgVGVtcCBwZXJjZWl2ZWQgYnkgaHVtYW5zKSBhbmQgaHVtaWRpdHkgKGluIHBlcmNlbnQpLFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhICB3ZWF0aGVyIGRhdGEsXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBwcm9jZXNzZWQgd2VhdGhlciBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRQcm9jZXNzZWRXZWF0aGVyRGF0YSAoZGF0YSkge1xuICAvLyBUZW1wZXJhdHVyZSBwcm9wZXJ0aWVzIGFyZSBjb252ZXJ0ZWQgZnJvbSBLZWx2aW4gdG8gQ2VsY2l1c1xuICBjb25zdCBwcm9jZXNzZWREYXRhID0ge1xuICAgIGNvbmRpdGlvbjogZGF0YS53ZWF0aGVyWzBdLm1haW4sXG4gICAgdGVtcDogZGF0YS5tYWluLnRlbXAgLSAyNzMuMTUsXG4gICAgZmVlbHNMaWtlOiBkYXRhLm1haW4uZmVlbHNfbGlrZSAtIDI3My4xNSxcbiAgICBodW1pZGl0eTogZGF0YS5tYWluLmh1bWlkaXR5XG4gIH1cbiAgcmV0dXJuIHByb2Nlc3NlZERhdGFcbn1cblxuZXhwb3J0IHsgZ2V0V2VhdGhlckRhdGEsIGdldFByb2Nlc3NlZFdlYXRoZXJEYXRhIH1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEZvcm0gZnJvbSAnLi9mb3JtJ1xuaW1wb3J0IHsgZ2V0V2VhdGhlckRhdGEsIGdldFByb2Nlc3NlZFdlYXRoZXJEYXRhIH0gZnJvbSAnLi91dGlscydcblxuLyoqXG4gKiBUaGUgY2xhc3MgcmVzcG9uc2libGUgZm9yIHJlbmRlcmluZyB0aGUgcGFnZSxcbiAqL1xuY2xhc3MgUmVuZGVyIHtcbiAgaGVhZGVyXG4gIG1haW5cbiAgZm9vdGVyXG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuY3JlYXRlSGVhZGVyKClcbiAgICB0aGlzLmNyZWF0ZU1haW4oKVxuICAgIHRoaXMuY3JlYXRlRm9vdGVyKClcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgaGVhZGVyIGVsZW1lbnQsIHBvcHVsYXRlcyBpdCBhbmQgYXBwYW5kcyBpdCB0byB0aGUgYm9keSxcbiAgICovXG4gIGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICB0aGlzLmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBoMS50ZXh0Q29udGVudCA9ICdXZWF0aGVyIEFwcCdcbiAgICB0aGlzLmhlYWRlci5hcHBlbmRDaGlsZChoMSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZCh0aGlzLmhlYWRlcilcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbWFpbiBlbGVtZW50LCBwb3B1bGF0ZXMgd2l0aCBmb3JtIGl0IGFuZCBhcHBhbmRzIGl0IHRvIHRoZSBib2R5LFxuICAgKi9cbiAgY3JlYXRlTWFpbiA9ICgpID0+IHtcbiAgICB0aGlzLm1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcblxuICAgIGNvbnN0IGZvcm0gPSBGb3JtLmdldEZvcm0oKVxuICAgIHRoaXMubWFpbi5hcHBlbmRDaGlsZChmb3JtKVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKHRoaXMubWFpbilcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgZm9vdGVyIGVsZW1lbnQsIHBvcHVsYXRlcyB3aXRoIGZvcm0gaXQgYW5kIGFwcGFuZHMgaXQgdG8gdGhlIGJvZHksXG4gICAqL1xuICBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5mb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuXG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGEuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vTXVLaEFsdC9vZGluLXdlYXRoZXItYXBwLmdpdCdcblxuICAgIGNvbnN0IGdpdEh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgICBhLmFwcGVuZENoaWxkKGdpdEh1Ykljb24pXG5cbiAgICB0aGlzLmZvb3Rlci5hcHBlbmRDaGlsZChhKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZCh0aGlzLmZvb3RlcilcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBjbGFzcyByZXNwb25zaWJsZSBmb3IgY29udHJvbGxpbmcgdGhlIHN0YXRlIG9mIHRoZSBwYWdlXG4gKi9cbmNsYXNzIENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLy8gQWRkIGFuIG9uY2xpY2sgZXZlbnQgdG8gZm9ybSBidXR0b25cbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ1dHRvbicpXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZWFyY2goKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogR2V0cyB3ZWF0aGVyIGRhdGEgZm9yIHNlYXJjaGVkIGxvY2F0aW9uLCBhbmQgdXBkYXRlcyB0aGUgd2VhdGhlckRhdGEgY2xhc3NcbiAgICovXG4gIHNlYXJjaCA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBDaGVja3MgaW5wdXQgdmFsaWRpdHlcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJykucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZVxuICAgIGlmICghbG9jYXRpb24pIHsgcmV0dXJuIG51bGwgfVxuXG4gICAgLy8gRmV0Y2ggZGF0YVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbilcbiAgICBjb25zdCBwcm9jZXNzZWREYXRhID0gZ2V0UHJvY2Vzc2VkV2VhdGhlckRhdGEoZGF0YSlcblxuICAgIC8vIFVwZGF0ZSBXRFxuICB9XG59XG5cbi8qKlxuICogVGhlIGZ1bmN0aW9uIHJlc3BvbnNpYmxlIGZvciBzZXR0aW5nIHVwIHRoZSB3ZWJzaXRlXG4gKi9cbmZ1bmN0aW9uIG1haW4gKCkge1xuICBjb25zdCByZW5kZXIgPSBuZXcgUmVuZGVyKClcbiAgY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKClcbn1cblxubWFpbigpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=