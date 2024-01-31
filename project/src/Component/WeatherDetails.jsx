import React from 'react';

const WeatherDetails = ({ data, unit }) => {
  return (
    <div className="weather-details">
      <div className="details">
      <h2>{data.name}, {data.sys.country}</h2>
      <p>Temperature: {data.main.temp} {unit === 'metric' ? '°C' : '°F'}</p>
      <p>Min Temperature: {data.main.temp_min} {unit === 'metric' ? '°C' : '°F'}</p>
      <p>Max Temperature: {data.main.temp_max} {unit === 'metric' ? '°C' : '°F'}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
      <p>Wind Direction: {data.wind.deg}°</p>
      <p>Description: {data.weather[0].description}</p>
      <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="Weather Icon" />
      </div>
    </div>
  );
};

export default WeatherDetails;
