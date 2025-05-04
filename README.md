# 🌦️ Weather Dashboard

A sleek and real-time weather analytics dashboard built with **React**, **Node.js**, and **PostgreSQL**, featuring dynamic weather visualizations, caching, and OpenWeather API integration.

## 📸 Demo

![App Screenshot](assets/demo-screenshot.png) <!-- Replace with actual image path or link -->

## 🚀 Features

- 🔍 Search weather by city (worldwide)
- 📡 Real-time weather data using OpenWeather API
- 💾 Smart caching (1 hour) to reduce API calls
- 🗃️ Logs all weather queries into PostgreSQL
- 🌐 RESTful backend with Express.js
- 🎨 Stylish modern UI using custom CSS

## 🛠️ Tech Stack

| Frontend         | Backend         | Database     | API                     |
|------------------|------------------|--------------|--------------------------|
| React, Axios     | Node.js, Express | PostgreSQL   | OpenWeatherMap API       |

---

## 📁 Folder Structure

weather-dashboard/
├── backend/ # Node.js backend
│ ├── controllers/
│ ├── routes/
│ ├── services/
│ ├── .env
│ └── index.js
├── frontend/ # React frontend
│ ├── src/
│ ├── public/
│ └── .env
└── README.md