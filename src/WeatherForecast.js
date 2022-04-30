import axios from "axios";
import React ,{useState ,useEffect} from "react";
import ForecastDay from "./ForecastDay";

import "./WeatherForecast.css";




const WeatherForecast = (props) => {
     
 const[load,setLoad] = useState(false);
 const[forecast,setForecast] = useState(null);

 useEffect(()=>{
   setLoad(false)
 },[props.coordinate]);

    function forecastResponse(response) {
        setForecast(response.data.daily);
        setLoad(true);
    }
    if (load) {
        return ( 
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function(dailForecast,index){
if (index <6 ) {
    return(

        <div className="col" key={index}>
    <ForecastDay day = {dailForecast} />
        </div>
        );
        }else{
            return null;
        }
           })}
       </div>
    </div>
 )

    ;} else {
        
                let lat = props.coordinate.lat;
                let lon = props.coordinate.lon;
                const key = "9941e27eb40543810ee2a95e3ea433af";
            
                let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${ key}&units=metric`;
            
                axios.get(apiUrl).then(forecastResponse);
    }
}
 
export default WeatherForecast;