import React from 'react';
import ForecastDay from '../components/ForecastDay';
import { useWeatherApi } from '../hooks/useWeatherApi';

export default function Forecast() {
  const [city, setCity] = React.useState('');
  const { forecastData, loading, error, fetchForecast } = useWeatherApi();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchForecast(city);
  };

  return (
    <div className="forecast">
      <h1>Прогноз погоды</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Введите город"
        />
        <button type="submit">Поиск</button>
      </form>
      {loading && <p>Загрузка...</p>}
      {error && <p className="error">{error}</p>}
      <div className="forecast-days">
        {forecastData && forecastData.length > 0 ? (
          forecastData.map((day, index) => (
            day && day.main && day.weather ? (
              <ForecastDay 
                key={index} 
                day={{
                  date: new Date(day.dt * 1000).toLocaleDateString(),
                  temp: day.main.temp,
                  description: day.weather[0].description,
                  humidity: day.main.humidity,
                  windSpeed: day.wind.speed
                }} 
              />
            ) : null
          ))
        ) : (
          <p>Нет данных для отображения</p>
        )}
      </div>
    </div>
  );
}