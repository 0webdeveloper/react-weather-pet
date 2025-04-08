import { useState } from 'react';
import { WeatherData, ForecastDay, WeatherApiResponse } from '../types/weather';

export function useWeatherApi(): WeatherApiResponse {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastDay[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCurrentWeather = async (city: string): Promise<void> => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4cb2a06b3d6eddb795aac575a32260c4`);
      const data = await response.json();
      if (response.ok) {
        setWeatherData({
          city: data.name,
          temp: data.main.temp,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed
        });
        setError(null);
      } else {
        setWeatherData(null);
        setError(data.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchForecast = async (city: string): Promise<void> => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=4cb2a06b3d6eddb795aac575a32260c4`);
      const data = await response.json();
      if (response.ok) {
        // Фильтруем прогноз на полдень каждого дня
        const noonForecasts = data.list.filter(item => {
          const date = new Date(item.dt * 1000);
          return date.getHours() === 12;
        });
        
        setForecastData(noonForecasts);
        setError(null);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    weatherData,
    forecastData,
    loading,
    error,
    fetchCurrentWeather,
    fetchForecast
  };
}