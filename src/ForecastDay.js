import React from "react";
import  WeatherIcon  from "./WeatherIcon";

import "./WeatherForecast.css";
const ForecastDay =(props) =>{

 function minTemp() {
   let temperature = Math.round(props.day.temp.min);
   return `${temperature}°`;
 }

 function maxTemp() {
     let temperature = Math.round(props.day.temp.max);
     return `${temperature}°`
 }
 function day (){
     let date = new Date( props.day.dt * 1000);
     let day = date.getDay();

let days =[ 'Sun','Mon','Tue','Wed','Thur','Fri','Sat',];

     return days[day];
 }
 return(

      <div>

                         <div className="Forecast-day">
                         {day()}
                     </div>
                     <div> <WeatherIcon code={props.day.weather[0].icon} /> </div>
                     <span className="Max-temp"> {maxTemp()} </span>
                      <span className="Min-temp">{minTemp()} </span>
      </div>
 )
}


export default ForecastDay;