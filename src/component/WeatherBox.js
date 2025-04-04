import React from 'react'

const WeatherBox = ({weather}) => {
    let fahrenheit = 0
    if(weather){
        fahrenheit = weather.main.temp * 1.8 + 32
    }
//http://openweathermap.org/img/wn/13d@2x.png
  return (
    <div className="weather-box">
        <h5 align="center">{weather?.name} </h5>
        <h4>섭씨 : {weather?.main.temp} ℉</h4>
        <h4>화씨 : {fahrenheit} ℃</h4>
        <h5>날씨 : {weather?.weather[0].description}</h5>
    </div>
  )
}

export default WeatherBox
