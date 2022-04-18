import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherCon(props){
    const iconsMapping = {
      "01d": "CLEAR_DAY",
      "01n": "CLEAR_DAY",
      "02d": "PARTLY_CLOUDLY_DAY",
      "02n": "PARTLY_CLOUDLY_NIGHT",
      "03d": "PARTLY_CLOUDLY_DAY",
      "03n": "PARTLY_CLOUDLY_NIGHT",
      "04d": "CLOUDLY",
      "04n": "CLOUDLY",
      "09d": "RAIN",
      "09n": "RAIN",
      "10d": "RAIN",
      "10n": "RAIN",
      "11d": "RAIN",
      "11n": "RAIN",
      "13d": "SNOW",
      "13n": "SNOW",
      "50d": "FOG",
      "50n": "FOG",
    };

    return (
      <ReactAnimatedWeather
        icon={iconsMapping[props.code]}
        color= "black"
        size={52}
        animate={true}
      />
    );
}


