import React, {useState} from "react";

export default function WeatherUnits(props){
 const [unit, setUnit] = useState("metric");

 function fahrenhiet (event){
     event.preventDefault();

     setUnit("fahrenhiet")
 }

 function celcius(event){
     event.preventDefault();
     setUnit("metric")
 }
 if (unit === "metric") {
     
     return (
       <div>
         <strong id="temperature"> {props.metric} </strong>
         <span className="units">
           {" "}
           °C | <a href="/" onClick={fahrenhiet}>°F</a>{" "}
         </span>
       </div>
     );
 } else{
     let fahrenhietTemperature = (props.metric * 9)/5 +32 ;
       return (
         <div>
           <strong id="temperature"> { Math.round (fahrenhietTemperature)} </strong>
           <span className="units">
             {" "}
             <a href="/" onClick={celcius}> °C </a> |{" "}
          
               °F
            {" "}
           </span>
         </div>
       );
 }
}