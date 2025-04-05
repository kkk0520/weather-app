import React from 'react'
import { Button } from 'react-bootstrap'

const WeatherButton = ({cities, setCity, city}) => {

  return (
    <div className="weather-button">
        <Button variant={city == "" ? "light" : "primary"} onClick={()=>setCity("")}>current Location</Button>
        {cities.map((item)=>(
            <Button
              variant={city == item ? "light" : "primary"}
              onClick={()=>setCity(item)}
            >
              {item}
            </Button>
        ))}
    </div>
  )
}

export default WeatherButton