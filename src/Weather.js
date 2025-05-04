import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('London');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      try {
        console.log(`Fetching weather data for city: ${city}`);  // Add this line
        const response = await axios.get(`http://localhost:3001/weather?city=${city}`);
        console.log("Response Data:", response.data);  // Log the response data
        setWeatherData(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching data:", err);  // Log the error
        setError('Failed to fetch weather data');
      }
      setLoading(false);
    };

    fetchWeatherData();
  }, [city]);

  const handleCityChange = (e) => setCity(e.target.value);

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Enter city"
      />
      <button onClick={() => setCity(city)}>Get Weather</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <h2>{weatherData.city}</h2>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Wind Speed: {weatherData.windSpeed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather; // Add this line
