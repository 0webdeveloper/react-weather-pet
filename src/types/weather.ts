export interface WeatherData {
  city: string;
  temp: number;
  description: string;
  humidity: number;
  windSpeed: number;
}

export interface ForecastDay {
  date: string;
  temp: number;
  description: string;
  humidity: number;
  windSpeed: number;
}

export interface WeatherApiResponse {
  weatherData: WeatherData | null;
  forecastData: ForecastDay[] | null;
  loading: boolean;
  error: string | null;
  fetchCurrentWeather: (city: string) => Promise<void>;
  fetchForecast: (city: string) => Promise<void>;
}