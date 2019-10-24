import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./index.css";

const Weather = ({ country }) => {
  const [weather, setWeather] = useState([]);
  const [error2, setErr2] = useState(null);
  const { temperature, wind_speed, weather_icons, wind_dir } = weather;
  const { capital } = country;

  const API_KEY = process.env.REACT_APP_ACCESS_KEY;
  console.log(API_KEY);

  //this is causing some errors on countries that don't have a capital, that would need to be fixed at some point

  useEffect(() => {
    if (country) {
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${capital}`
        )
        .then(res => {
          console.log("Weather", res.data.current);
          setErr2(null);
          setWeather(res.data.current);
        })
        .catch(err => {
          setErr2(err.response.data.message);
          setWeather([]);
        });
    } else {
      setErr2(null);
      setWeather([]);
    }
  }, []);

  return (
    <div>
      <h2>
        Weather in {country.capital}
        {error2 && error2}
      </h2>
      <b>Current Temp: </b> <span>{temperature} Celsius</span>
      <div>
        <span>
          <img src={weather_icons} />
        </span>
        <p>
          <b>wind</b> {wind_speed} kph direction {wind_dir}{" "}
        </p>
      </div>
    </div>
  );
};

const Country = ({ country }) => {
  const { name, population, capital, languages, flag } = country;
  const [hideDiv, setHideDiv] = useState(false);

  const handleDisplay = () => setHideDiv(!hideDiv);

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={handleDisplay}>{hideDiv ? "hide" : "show"}</button>
      {hideDiv && (
        <>
          <div id="country">
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <h2>Languages</h2>
            <p>
              <ul>
                {languages.map(lang => (
                  <li key={lang.name}>{lang.name}</li>
                ))}
              </ul>
            </p>
            <img width="300" src={flag} />
          </div>
          <Weather country={country} />
        </>
      )}
    </div>
  );
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [query, setFiltered] = useState("");

  const handleSearch = event => {
    setFiltered(event.target.value);
  };

  useEffect(() => {
    if (query) {
      axios
        .get(`https://restcountries.eu/rest/v2/name/${query}`)
        .then(res => {
          setError(null);
          setCountries(res.data);
        })
        .catch(err => {
          setError(err.response.data.message);
          setCountries([]);
        });
    } else {
      setError(null);
      setCountries([]);
    }
  }, [query]);

  return (
    <div>
      <div>
        find countries <input onChange={handleSearch} value={query} />
      </div>
      {error && error}
      {countries.length > 10 ? (
        <p>"Please be more specific..too many countries"</p>
      ) : (
        countries.map(country => (
          <React.Fragment>
            <Country country={country} />
          </React.Fragment>
        ))
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
