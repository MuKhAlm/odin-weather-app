import Form from './form'
import { getWeatherData, getProcessedWeatherData } from './utils'
import './styles.css'

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
    locationName.textContent = location[0].toUpperCase() + location.slice(1)
    locationName.id = 'location'

    const condition = document.createElement('p')
    condition.textContent = `Weather condition: ${data.condition}`
    condition.id = 'condition'

    const temp = document.createElement('p')
    temp.textContent = `Temperature: ${data.temp.toFixed(1)}°C`
    temp.id = 'temp'

    const feelsLike = document.createElement('p')
    feelsLike.textContent = `Feels like: ${data.feelsLike.toFixed(1)}°C`
    feelsLike.id = 'feals-like'

    const humidity = document.createElement('p')
    humidity.textContent = `Humidity: ${data.humidity}%`
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
    const data = await getWeatherData(location)
    const processedData = getProcessedWeatherData(data)

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
