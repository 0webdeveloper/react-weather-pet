import React from 'react';
import WeatherCard from '../components/WeatherCard';
import { useWeatherApi } from '../hooks/useWeatherApi';

export default function Home() {
  const [city, setCity] = React.useState<string>('');
  const { weatherData, loading, error, fetchCurrentWeather } = useWeatherApi();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCurrentWeather(city);
  };

  return (
    <div className="home">
      <h1>Текущая погода</h1>
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
      {weatherData && <WeatherCard weather={weatherData} />}
    </div>
  );
}