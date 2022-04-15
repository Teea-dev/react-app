
import "./App.css";

function App() {
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
                    autocomplete="off"
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
                  <span id="date">wednesday</span>
                </li>
                <li id="description">cloudy</li>
              </ul>
            </div>
            <div className="row">
              <div className="col-8 weather-temperature">
              
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt="Clear"
                    id="icon"
                    className="float-left"
                  />
                  
                    <strong id="temperature">6</strong>
                    <span className="units"> °C</span>
                 
                </div>
              <div className="col-4">
                <ul>
                  <li>
                    Humidity: <span id="humidity">50</span>%
                  </li>
                  <li>
                    Wind: <span id="wind">2</span> m/h
                  </li>
                </ul>
              </div>
            </div>
              </div>

            <div className="weather-forecast" id="forecast"></div>
          </div>
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
  );
}

export default App;
