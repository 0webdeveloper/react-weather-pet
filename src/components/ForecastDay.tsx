import React from 'react';
import './ForecastDay.css';
import { ForecastDay } from '../types/weather';

interface ForecastDayProps {
  day: ForecastDay;
};

export default function ForecastDay({ day }: ForecastDayProps) {
  return (
    <div className="forecast-day">
      <h3>{day.date}</h3>
      <div className="day-weather">
        <span className="temp">{day.temp}°C</span>
        <span className="description">{day.description}</span>
      </div>
      <div className="day-details">
        <p>Влажность: {day.humidity}%</p>
        <p>Ветер: {day.windSpeed} м/с</p>
      </div>
    </div>
  );
}