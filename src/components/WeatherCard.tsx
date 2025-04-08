import React from 'react';
import './WeatherCard.css';
import { WeatherData } from '../types/weather';

interface WeatherCardProps {
  weather: WeatherData;
}

export default function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <div className="weather-card">
      <h2>{weather.city}</h2>
      <div className="weather-info">
        <span className="temperature">{weather.temp}°C</span>
        <span className="description">{weather.description}</span>
      </div>
      <div className="weather-details">
        <p>Влажность: {weather.humidity}%</p>
        <p>Ветер: {weather.windSpeed} м/с</p>
      </div>
    </div>
  );
}