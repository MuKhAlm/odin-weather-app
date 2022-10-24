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
