import { useState, useEffect } from 'react'

const Weather = ( {cityName} ) => {
  const [ weatherData, setWeatherData ] = useState()

  useEffect( () => {
    const apiKey = process.env.REACT_APP_API_KEY

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&mode=JSON`)
      .then(response => {
        response.json()
          .then(data => {
            setWeatherData(data)
          })
      })
  }, [cityName])

  if (weatherData) {
    return (
      <div>
        <h3><b>Weather in {cityName}</b></h3>
        <div><b>temperature: </b> {weatherData.main.temp} Kelvin</div>
        <div>description: {weatherData.weather[0].description}</div>
        <div>wind speed: {weatherData.wind.speed} kph &emsp; wind direction: {weatherData.wind.deg} deg</div>
      </div>
    )
  }

  return (
    <div>
    </div>
  )
}

export default Weather
