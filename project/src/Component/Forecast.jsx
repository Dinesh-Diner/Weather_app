import React from 'react';

const Forecast = ({ data, unit ,cityName}) => {
  return (
    <div className="forecast">
      <h2>5-Days Forecast for {cityName}</h2>
      {data.map((item) => (
        
        <div key={item.dt} className="forecast-item">
          <p>Date: {item.dt_txt.split(' ')[0]}</p>
          <p>Average Temperature: {item.main.temp} {unit === 'metric' ? '°C' : '°F'}</p>
          <p>Description: {item.weather[0].description}</p>
          <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="Weather Icon" />
        </div>
      ))}
    </div>
  );
};

export default Forecast;
