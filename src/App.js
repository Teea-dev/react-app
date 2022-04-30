import React , {useState} from "react";
import axios from "axios";
import ActualDate  from "./ActualDate"; 
import "./App.css";
import WeatherIcon from "./WeatherIcon";
import WeatherUnits from "./WeatherUnits";
import WeatherForecast from "./WeatherForecast";

function App(props) {
  const [temperature, setTemperature] = useState({ ready:false});
  const[state, setState] =useState (props.defaultCity)

  function apiResponse (response){
    
    
    setTemperature({
      ready: true ,
      coordinate: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date (response.data.dt * 1000),
    });
    
 }

 function search() {
const key = "9941e27eb40543810ee2a95e3ea433af";

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state} &appid=${key}&units=metric`;
axios.get(apiUrl).then(apiResponse);
 }

 function submit(event){
   event.preventDefault();
    search();
 }

  function change(event){
    
setState(event.target.value);
  }

  if (temperature.ready) {


    return (
      <div className="App">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              <form id="search-form" className="mb-3" onSubmit={submit}>
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Type a city.."
                      className="form-control"
                      id="city-input"
                      autoComplete="off"
                      autoFocus="on"
                      onChange={change}
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
                <h1 id="city"> {temperature.city} </h1>
                <ul>
                  <li>
                    <span id="date">
                      {" "}
                      <ActualDate date={temperature.date} />{" "}
                    </span>
                  </li>
                  <li className="text-capitlize">{temperature.description}</li>
                </ul>
              </div>
              <div className="row">
                <div className="col-8 weather-temperature">
                  <WeatherIcon code = {temperature.icon}/>
                  <WeatherUnits metric = {temperature.temperature} />


                </div>
                <div className="col-4">
                  <ul>
                    <li>
                      Humidity:{" "}
                      <span id="humidity">{temperature.humidity}</span>%
                    </li>
                    <li>
                      Wind: <span id="wind">{temperature.wind}</span> m/h
                    </li>
                  </ul>
                </div>
              </div>
           <div>
             <WeatherForecast coordinate = {temperature.coordinate} />
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
    search();
  return "Efile e je ko load ";
  }
 
}

export default App;
