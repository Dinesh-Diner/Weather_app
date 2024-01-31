import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Forecast from './Component/Forecast'
import WeatherDetails from './Component/WeatherDetails'; 
import './styles.css'; 

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null); 
  const [forecastData, setForecastData] = useState([]);
  const [unit, setUnit] = useState('metric');
  const [error, setError] = useState(null);


  const API_KEY = 'e062be97446753e5f71a193aa23a533d';

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleUnitToggle = () => {
    setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric')); 
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
      );
      setWeatherData(response.data);
      setError(null); 

    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
      setError('City not found'); 
    }
  };

  const fetchForecast = async () => {
    try {
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`
      );
      setForecastData(forecastResponse.data.list);
    } catch (error) {
      console.error('Error fetching forecast data:', error);
      setForecastData([]);
    }
  };

  useEffect(() => {
    if (city) {
      fetchData();
      fetchForecast();
    }
  }, [city, unit]);

  return (
    <div className="App">
      <h1>WEATHER FORECAST</h1>
      <div id='btn'>
        <label htmlFor="city">City:</label>
        <input type="text" id="city" value={city}placeholder="Enter city name" onChange={handleCityChange} />
        <button onClick={fetchData}>Get Weather</button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {weatherData && (
        <div>
          <div id='unit' >
            <label>Unit:</label>
            <button onClick={handleUnitToggle}>
              {unit === 'metric' ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
            </button>
          </div>
          <h2 id='header2'>Current Weather</h2>
          <WeatherDetails data={weatherData} unit={unit} /> 
        </div>
      )}

      <div id='current'>
        
        <Forecast data={forecastData} unit={unit} cityName={city} />
      </div>
    </div>
  );
};

export default App;
