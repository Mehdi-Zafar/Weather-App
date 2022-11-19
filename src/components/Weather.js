import { useState } from "react";
import City from "./City"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {Circles} from "react-loader-spinner"
import HourlyWeather from "./HourlyWeather";


const Weather = () => {

    const [weather,setWeather] = useState(null)
    const [hourlyWeather,setHourlyWeather] = useState(null)
    const [city,setCity] = useState(null)
    const [loading,setLoading] = useState(false)

    const searchCity = async (e)=>{
        e.preventDefault()
        setLoading(true)
        const response1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_WEATHER_API_KEY}`)
        const data1 = await response1.json()
        const response2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data1.coord.lat}&lon=${data1.coord.lon}&cnt=8&appid=${REACT_APP_WEATHER_API_KEY}`)
        const data2 = await response2.json()
        console.log(data1)
        console.log(data2)
        setLoading(false)
        setWeather(data1)
        setHourlyWeather(data2)
    } 
    
    return ( 
        <div>
            <div className="searchField">
                <form onSubmit={searchCity}>
                    <input type="text" placeholder="Enter City Name" onChange={(e)=>setCity(e.target.value)}/>
                    <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </form><br />
            </div>
            {loading ?
            <div className="loader">
            <Circles
            height="80"
            width="80"
            color="burlywood"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          </div>:
          <div className="container">
                {weather && <City city={weather}/>}
            </div>}
            {hourlyWeather && <h1 className="hour-heading">Hourly Weather</h1>}
            <div className="hour-card">
                {hourlyWeather && hourlyWeather.list.map((h)=>(
                    <HourlyWeather hourly={h}/>
                ))}
            </div>
        </div>
     );
}
 
export default Weather;