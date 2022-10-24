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
