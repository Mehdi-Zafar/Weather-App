import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureHalf } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
import { faGaugeSimple } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';


const HourlyWeather = (props) => {

    const dt = props.hourly.dt_txt.split(" ");
    const d = new Date(dt[0]);
    const time = dt[1];
    return ( 
        <div className="card">
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <h2>{d.toDateString("MMMM yyyy")}</h2>
                <h2>{time} UTC</h2>
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
                <h3>{props.hourly.weather[0].main}</h3>
                <img src={"http://openweathermap.org/img/w/" + props.hourly.weather[0].icon + ".png"} alt="" />
            </div>
            <h1><FontAwesomeIcon icon={faTemperatureHalf } /> Temp: {Math.round(props.hourly.main.temp - 273.15)} &#8451;</h1>
            <h4><FontAwesomeIcon icon={faDroplet } /> Humidity: {props.hourly.main.humidity} %</h4>
            <h4><FontAwesomeIcon icon={faGaugeSimple } /> Pressure: {props.hourly.main.pressure} hPa</h4>
            <h4><FontAwesomeIcon icon={faWind} /> Wind Speed: {props.hourly.wind.speed} m/s</h4>
        </div>
     );
}
 
export default HourlyWeather;