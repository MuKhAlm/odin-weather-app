import Form from './form'
import { getWeatherData, getProcessedWeatherData } from './utils'

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

    const form = Form.getForm()
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
    const data = await getWeatherData(location)
    const processedData = getProcessedWeatherData(data)

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
