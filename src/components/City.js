import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureHalf } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faTemperatureArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
import { faGaugeSimple } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';

const City = (props) => {

    
    return ( 
        <>
            {props.city.cod === "404" ?
            <div >
                <h1>No Results Found!</h1>
            </div>:
            <>
            <div>
            <h2 className="city-name">{props.city.name + ', ' + props.city.sys.country}</h2>
            </div>
            <div>
                <div className="weather-type">
                <h4><FontAwesomeIcon icon={faTemperatureHalf } /> Temp : {Math.round(props.city.main.temp - 273.15)} &#8451;</h4>
                    <div style={{display:"flex"}}>
                        <h3>{props.city.weather[0].main}</h3>
                        <img src={"http://openweathermap.org/img/w/" + props.city.weather[0].icon + ".png"} alt="" />
                    </div>
                </div>
       
            <div className="weather-indicators">
                <h4><FontAwesomeIcon icon={faDroplet } /> Humidity: {props.city.main.humidity} %</h4>
                <h4><FontAwesomeIcon icon={faGaugeSimple } /> Pressure: {props.city.main.pressure} hPa</h4>
                <h4><FontAwesomeIcon icon={faWind} /> Wind Speed: {props.city.wind.speed} m/s</h4>
            </div>
            <h3>Feels Like : {Math.round(props.city.main.feels_like- 273.15)} &#8451;</h3>
            <div className="min-max">
                <p><FontAwesomeIcon icon={faTemperatureArrowDown } /> Min Temp : {Math.round(props.city.main.temp_min- 273.15)} &#8451;</p>
                <p><FontAwesomeIcon icon={faTemperatureArrowUp } /> Max Temp : {Math.round(props.city.main.temp_max- 273.15)} &#8451;</p>
            </div>
        </div>
        </>} 
            
        </>
     );
}
 
export default City;