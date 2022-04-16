import React , {useState} from "react";
import axios from "axios";
import ActualDate  from "./ActualDate"; 
import "./App.css";

function App(props) {
  const [temperature, setTemperature] = useState({ ready:false});
  

  function apiResponse (response){
    
    
    setTemperature({
      ready: true ,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
      date: new Date (response.data.dt * 1000),
    });
    
 }

  if (temperature.ready) {
    
    return (
      <div className="App">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              <form id="search-form" className="mb-3">
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Type a city.."
                      className="form-control"
                      id="city-input"
                      autoComplete="off"
                      autoFocus="on"
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      value="Search"
                      className="btn btn-primary w-100"
                    />
                  </div>
                </div>
              </form>
              <div className="overview">
                <h1 id="city">Lagos</h1>
                <ul>
                  <li>
                    <span id="date"> <ActualDate date= {temperature.date} /> </span>
                  </li>
                  <li className="text-capitlize">{temperature.description}</li>
                </ul>
              </div>
              <div className="row">
                <div className="col-8 weather-temperature">
                
                    <img
                      src={temperature.icon}
                      alt="Clear"
                      id="icon"
                      className="float-left"
                    />
                    
                      <strong id="temperature"> { temperature.temperature} </strong>
                      <span className="units"> °C</span>
                   
                  </div>
                <div className="col-4">
                  <ul>
                    <li>
                      Humidity: <span id="humidity">{temperature.humidity}</span>%
                    </li>
                    <li>
                      Wind: <span id="wind">{temperature.wind}</span> m/h
                    </li>
                  </ul>
                </div>
              </div>
                </div>
  
              <div className="weather-forecast" id="forecast"></div>
              <small>
                <a
                  href="https://github.com/Teea-dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open-source code
                </a>
                <span className="author"> by Ogunnoiki Adetokunbo</span>
              </small>
            </div>
            </div>
            </div>
            );
  } else {
    
  const key = "9941e27eb40543810ee2a95e3ea433af";
  
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity} &appid=${key}&units=metric`;
  axios.get(apiUrl).then(apiResponse)
  return "Efile e je ko load "
  }
 
}

export default App;
