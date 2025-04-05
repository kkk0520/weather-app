import React from 'react'

const WeatherBox = ({weather}) => {
    let fahrenheit = 0
    if(weather){
        fahrenheit = Math.floor(weather.main.temp * 1.8 + 32)
    }

  return (
    <div className="weather-box">
        <div className='weather-info'>
          <img alt={weather?.weather[0].description} src={`https://openweathermap.org/img/wn/${[weather?.weather[0].icon]}@2x.png`}></img>
        </div>
        <div className='weather-info-location'>{weather?.name} </div>
        <div className='weather-info'>{Math.floor(weather?.main.temp)}℃ / {fahrenheit}℉</div>
        <div className='weather-info'>{weather?.weather[0].description}</div>
    </div>
  )
}

export default WeatherBox
