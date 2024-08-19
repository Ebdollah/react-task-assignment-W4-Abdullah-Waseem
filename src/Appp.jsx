import { useEffect } from "react";
import { useState } from "react"
import axios from 'axios';
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const apiUrl = import.meta.env.VITE_WEATHER_API_URL;

export default function Appp() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);  
    useEffect(() => {
      const fetchWeatherData = async () => {
        try {
          const response = await axios.get(`${apiUrl}weather`, {
            params: {
              q: 'lahore,pk',
              APPID: apiKey,
            },
          });
          setWeatherData(response.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchWeatherData();
    }, []);
  
    if (loading) return <div className="text-center mt-8 text-gray-700">Loading...</div>;
    if (error) return <div className="text-center mt-8 text-red-600">Error: {error.message}</div>;
  
    return (
      <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg mt-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Weather in {weatherData.name}
        </h2>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg text-gray-600">Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
            <p className="text-lg text-gray-600">Humidity: {weatherData.main.humidity}%</p>
            <p className="text-lg text-gray-600">Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
          <div>
            <img
              src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt={weatherData.weather[0].description}
              className="w-16 h-16"
            />
            <p className="text-lg text-gray-600">{weatherData.weather[0].description}</p>
          </div>
        </div>
      </div>
    );
}