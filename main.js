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

  /**
   * Displays given weather data as a card
   *
   * @param {Object} data     Processed weather data
   * @param {String} location Location name
   */
  displayWeatherData = (data, location) => {
    const prevCard = document.getElementById('card')
    if (prevCard) {
      this.main.removeChild(prevCard)
    }

    // Create weather-data card (div)
    const card = document.createElement('div')
    card.id = 'card'

    // Create details (paragraphs)
    const locationName = document.createElement('p')
    locationName.textContent = location
    locationName.id = 'location'

    const condition = document.createElement('p')
    condition.textContent = data.condition
    condition.id = 'condition'

    const temp = document.createElement('p')
    temp.textContent = data.temp
    temp.id = 'temp'

    const feelsLike = document.createElement('p')
    feelsLike.textContent = data.feelsLike
    feelsLike.id = 'feals-like'

    const humidity = document.createElement('p')
    humidity.textContent = data.humidity
    humidity.id = 'humidity'

    // Add details to card
    card.append(locationName, condition, temp, feelsLike, humidity)

    // Add card to main
    this.main.append(card)
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
  render

  constructor (render) {
    this.render = render
  }

  /**
   * Updates the weather data and location, and triggers Render to render a weatherData card
   *
   * @param {Object} data     Processed weather data
   * @param {String} location Location name
   */
  updateData = (data, location) => {
    this.data = data
    this.location = location

    this.render.displayWeatherData(data, location)
  }
}

/**
 * The function responsible for setting up the website
 */
function main () {
  const render = new Render()
  const weatherData = new WeatherData(render)
  // eslint-disable-next-line no-unused-vars
  const controller = new Controller(weatherData)
}

main()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELFNBQVMsU0FBUyxlQUFlO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtEOzs7Ozs7O1VDdkNsRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ055QjtBQUN3Qzs7QUFFakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHFEQUFZO0FBQzdCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0EsdUJBQXVCLHNEQUFjO0FBQ3JDLDBCQUEwQiwrREFBdUI7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGb3JtIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgZm9ybSxcbiAgICovXG4gIHN0YXRpYyBnZXRGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2LmlkID0gJ2Zvcm0nXG5cbiAgICBjb25zdCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdGV4dElucHV0LnR5cGUgPSAndGV4dCdcbiAgICB0ZXh0SW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgYSBsb2NhdGlvbiBuYW1lJ1xuXG4gICAgY29uc3QgYnV0dG9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgYnV0dG9uSW5wdXQudHlwZSA9ICdidXR0b24nXG4gICAgYnV0dG9uSW5wdXQudmFsdWUgPSAnU2VhcmNoJ1xuICAgIGJ1dHRvbklucHV0LmlkID0gJ3NlYXJjaC1idXR0b24nXG5cbiAgICBkaXYuYXBwZW5kKHRleHRJbnB1dCwgYnV0dG9uSW5wdXQpXG4gICAgcmV0dXJuIGRpdlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1cbiIsImNvbnN0IG9wZW5XZWF0aGVyS2V5ID0gJ2NiNTAwYmUwYzQxZTgxZjI5N2I4OTI2M2VjNjczMjlhJ1xuXG4vKipcbiAqIEhpdHMgJ09wZW4gV2VhdGhlcicgQVBJcyB0byBnZXQgd2VhdGhlciBkYXRhIGZvciBhIGdpdmVuIGxvY2F0aW9uLFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBsb2NhdGlvbiAgYSBuYW1lIG9mIGEgY2l0eSwgemlwY29kZSBvciBjb3VudHJ5LFxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gd2VhdGhlciBkYXRhIGZvciB0aGUgZ2l2ZW4gbG9jYXRpb24uXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhIChsb2NhdGlvbikge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mQVBQSUQ9JHtvcGVuV2VhdGhlcktleX1gLCB7XG4gICAgICBtb2RlOiAnY29ycydcbiAgICB9XG4gIClcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICByZXR1cm4gZGF0YVxufVxuXG4vKipcbiAqIFByb2Nlc3MgZ2l2ZW4gd2VhdGhlciBkYXRhIGFuZCByZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBkYXRhIHJlcXVpcmVkIGJ5IHRoZSBhcHAsXG4gKlxuICogVGhlIGRhdGEgdG8gYmUgcmV0dXJuZWQgY29udGFpbnMgdGhlIHdlYXRoZXIgY29uZGl0aW9uLCB0ZW1wICh0ZW1wcmF0dXJlKSwgZmVlbHNMaWtlKHRoZSBUZW1wIHBlcmNlaXZlZCBieSBodW1hbnMpIGFuZCBodW1pZGl0eSAoaW4gcGVyY2VudCksXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEgIHdlYXRoZXIgZGF0YSxcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IHByb2Nlc3NlZCB3ZWF0aGVyIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldFByb2Nlc3NlZFdlYXRoZXJEYXRhIChkYXRhKSB7XG4gIC8vIFRlbXBlcmF0dXJlIHByb3BlcnRpZXMgYXJlIGNvbnZlcnRlZCBmcm9tIEtlbHZpbiB0byBDZWxjaXVzXG4gIGNvbnN0IHByb2Nlc3NlZERhdGEgPSB7XG4gICAgY29uZGl0aW9uOiBkYXRhLndlYXRoZXJbMF0ubWFpbixcbiAgICB0ZW1wOiBkYXRhLm1haW4udGVtcCAtIDI3My4xNSxcbiAgICBmZWVsc0xpa2U6IGRhdGEubWFpbi5mZWVsc19saWtlIC0gMjczLjE1LFxuICAgIGh1bWlkaXR5OiBkYXRhLm1haW4uaHVtaWRpdHlcbiAgfVxuICByZXR1cm4gcHJvY2Vzc2VkRGF0YVxufVxuXG5leHBvcnQgeyBnZXRXZWF0aGVyRGF0YSwgZ2V0UHJvY2Vzc2VkV2VhdGhlckRhdGEgfVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgRm9ybSBmcm9tICcuL2Zvcm0nXG5pbXBvcnQgeyBnZXRXZWF0aGVyRGF0YSwgZ2V0UHJvY2Vzc2VkV2VhdGhlckRhdGEgfSBmcm9tICcuL3V0aWxzJ1xuXG4vKipcbiAqIFRoZSBjbGFzcyByZXNwb25zaWJsZSBmb3IgcmVuZGVyaW5nIHRoZSBwYWdlLFxuICovXG5jbGFzcyBSZW5kZXIge1xuICBoZWFkZXJcbiAgbWFpblxuICBmb290ZXJcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5jcmVhdGVIZWFkZXIoKVxuICAgIHRoaXMuY3JlYXRlTWFpbigpXG4gICAgdGhpcy5jcmVhdGVGb290ZXIoKVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBoZWFkZXIgZWxlbWVudCwgcG9wdWxhdGVzIGl0IGFuZCBhcHBhbmRzIGl0IHRvIHRoZSBib2R5LFxuICAgKi9cbiAgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICAgIHRoaXMuaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIGgxLnRleHRDb250ZW50ID0gJ1dlYXRoZXIgQXBwJ1xuICAgIHRoaXMuaGVhZGVyLmFwcGVuZENoaWxkKGgxKVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKHRoaXMuaGVhZGVyKVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBtYWluIGVsZW1lbnQsIHBvcHVsYXRlcyB3aXRoIGZvcm0gaXQgYW5kIGFwcGFuZHMgaXQgdG8gdGhlIGJvZHksXG4gICAqL1xuICBjcmVhdGVNYWluID0gKCkgPT4ge1xuICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxuXG4gICAgY29uc3QgZm9ybSA9IEZvcm0uZ2V0Rm9ybSgpXG4gICAgdGhpcy5tYWluLmFwcGVuZENoaWxkKGZvcm0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQodGhpcy5tYWluKVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBmb290ZXIgZWxlbWVudCwgcG9wdWxhdGVzIHdpdGggZm9ybSBpdCBhbmQgYXBwYW5kcyBpdCB0byB0aGUgYm9keSxcbiAgICovXG4gIGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgICB0aGlzLmZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXG5cbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgYS5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9NdUtoQWx0L29kaW4td2VhdGhlci1hcHAuZ2l0J1xuXG4gICAgY29uc3QgZ2l0SHViSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICAgIGEuYXBwZW5kQ2hpbGQoZ2l0SHViSWNvbilcblxuICAgIHRoaXMuZm9vdGVyLmFwcGVuZENoaWxkKGEpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKHRoaXMuZm9vdGVyKVxuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIGdpdmVuIHdlYXRoZXIgZGF0YSBhcyBhIGNhcmRcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgICAgIFByb2Nlc3NlZCB3ZWF0aGVyIGRhdGFcbiAgICogQHBhcmFtIHtTdHJpbmd9IGxvY2F0aW9uIExvY2F0aW9uIG5hbWVcbiAgICovXG4gIGRpc3BsYXlXZWF0aGVyRGF0YSA9IChkYXRhLCBsb2NhdGlvbikgPT4ge1xuICAgIGNvbnN0IHByZXZDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQnKVxuICAgIGlmIChwcmV2Q2FyZCkge1xuICAgICAgdGhpcy5tYWluLnJlbW92ZUNoaWxkKHByZXZDYXJkKVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSB3ZWF0aGVyLWRhdGEgY2FyZCAoZGl2KVxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNhcmQuaWQgPSAnY2FyZCdcblxuICAgIC8vIENyZWF0ZSBkZXRhaWxzIChwYXJhZ3JhcGhzKVxuICAgIGNvbnN0IGxvY2F0aW9uTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGxvY2F0aW9uTmFtZS50ZXh0Q29udGVudCA9IGxvY2F0aW9uXG4gICAgbG9jYXRpb25OYW1lLmlkID0gJ2xvY2F0aW9uJ1xuXG4gICAgY29uc3QgY29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgY29uZGl0aW9uLnRleHRDb250ZW50ID0gZGF0YS5jb25kaXRpb25cbiAgICBjb25kaXRpb24uaWQgPSAnY29uZGl0aW9uJ1xuXG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRlbXAudGV4dENvbnRlbnQgPSBkYXRhLnRlbXBcbiAgICB0ZW1wLmlkID0gJ3RlbXAnXG5cbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBkYXRhLmZlZWxzTGlrZVxuICAgIGZlZWxzTGlrZS5pZCA9ICdmZWFscy1saWtlJ1xuXG4gICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGRhdGEuaHVtaWRpdHlcbiAgICBodW1pZGl0eS5pZCA9ICdodW1pZGl0eSdcblxuICAgIC8vIEFkZCBkZXRhaWxzIHRvIGNhcmRcbiAgICBjYXJkLmFwcGVuZChsb2NhdGlvbk5hbWUsIGNvbmRpdGlvbiwgdGVtcCwgZmVlbHNMaWtlLCBodW1pZGl0eSlcblxuICAgIC8vIEFkZCBjYXJkIHRvIG1haW5cbiAgICB0aGlzLm1haW4uYXBwZW5kKGNhcmQpXG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgY2xhc3MgcmVzcG9uc2libGUgZm9yIGNvbnRyb2xsaW5nIHRoZSBzdGF0ZSBvZiB0aGUgcGFnZVxuICovXG5jbGFzcyBDb250cm9sbGVyIHtcbiAgd2VhdGhlckRhdGFcblxuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R9IHdkIFdlYXRoZXIgZGF0YSBpbnN0YW5jZVxuICAgKi9cbiAgY29uc3RydWN0b3IgKHdkKSB7XG4gICAgdGhpcy53ZWF0aGVyRGF0YSA9IHdkXG5cbiAgICAvLyBBZGQgYW4gb25jbGljayBldmVudCB0byBmb3JtIGJ1dHRvblxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnV0dG9uJylcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnNlYXJjaCgpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHdlYXRoZXIgZGF0YSBmb3Igc2VhcmNoZWQgbG9jYXRpb24sIGFuZCB1cGRhdGVzIHRoZSB3ZWF0aGVyRGF0YSBjbGFzc1xuICAgKi9cbiAgc2VhcmNoID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vIENoZWNrcyBpbnB1dCB2YWxpZGl0eVxuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlXG4gICAgaWYgKCFsb2NhdGlvbikgeyByZXR1cm4gbnVsbCB9XG5cbiAgICAvLyBGZXRjaCBkYXRhXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKVxuICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSBnZXRQcm9jZXNzZWRXZWF0aGVyRGF0YShkYXRhKVxuXG4gICAgLy8gVXBkYXRlIFdEXG4gICAgdGhpcy53ZWF0aGVyRGF0YS51cGRhdGVEYXRhKHByb2Nlc3NlZERhdGEsIGxvY2F0aW9uKVxuICB9XG59XG5cbmNsYXNzIFdlYXRoZXJEYXRhIHtcbiAgZGF0YVxuICBsb2NhdGlvblxuICByZW5kZXJcblxuICBjb25zdHJ1Y3RvciAocmVuZGVyKSB7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXJcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSB3ZWF0aGVyIGRhdGEgYW5kIGxvY2F0aW9uLCBhbmQgdHJpZ2dlcnMgUmVuZGVyIHRvIHJlbmRlciBhIHdlYXRoZXJEYXRhIGNhcmRcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgICAgIFByb2Nlc3NlZCB3ZWF0aGVyIGRhdGFcbiAgICogQHBhcmFtIHtTdHJpbmd9IGxvY2F0aW9uIExvY2F0aW9uIG5hbWVcbiAgICovXG4gIHVwZGF0ZURhdGEgPSAoZGF0YSwgbG9jYXRpb24pID0+IHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhXG4gICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uXG5cbiAgICB0aGlzLnJlbmRlci5kaXNwbGF5V2VhdGhlckRhdGEoZGF0YSwgbG9jYXRpb24pXG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgZnVuY3Rpb24gcmVzcG9uc2libGUgZm9yIHNldHRpbmcgdXAgdGhlIHdlYnNpdGVcbiAqL1xuZnVuY3Rpb24gbWFpbiAoKSB7XG4gIGNvbnN0IHJlbmRlciA9IG5ldyBSZW5kZXIoKVxuICBjb25zdCB3ZWF0aGVyRGF0YSA9IG5ldyBXZWF0aGVyRGF0YShyZW5kZXIpXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBjb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIod2VhdGhlckRhdGEpXG59XG5cbm1haW4oKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9