const axios = require("axios");
const pool = require("../services/db");
const NodeCache = require("node-cache");
require("dotenv").config();

// Initialize cache (expires in 1 hour)
const weatherCache = new NodeCache({ stdTTL: 3600 }); // Cache for 1 hour

async function getWeather(req, res) {
  const city = req.query.city;

  if (!city) {
    return res.status(400).json({ error: "City parameter is required" });
  }

  // Check if weather data for this city is in cache
  let cachedWeather = weatherCache.get(city);

  // Temporarily disable cache for testing
  if (true) { // Disable cache temporarily for testing
    console.log("Cache disabled for testing");
    cachedWeather = null;
  }

  if (cachedWeather) {
    console.log("Serving from cache");
    return res.json(cachedWeather); // Send cached data
  }

  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    const response = await axios.get(url);
    console.log("Raw weather data:", response.data); // Log the raw data to check structure

    const data = response.data;

    const weatherData = {
      city,
      country: data.sys.country,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      source: "Live from OpenWeather",
    };

    // Store in PostgreSQL
    await pool.query(
      `INSERT INTO weather_queries (city, country, temperature, humidity, wind_speed)
       VALUES ($1, $2, $3, $4, $5)`,
      [city, weatherData.country, weatherData.temperature, weatherData.humidity, weatherData.windSpeed]
    );

    // Store in cache for 1 hour
    weatherCache.set(city, weatherData);

    res.json(weatherData);
  } catch (error) {
    console.error("Weather API error:", error.response ? error.response.data : error.message); // Detailed error logging
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
}

module.exports = { getWeather };
