# 🌦️ Weather Dashboard

A sleek and real-time weather analytics dashboard built with React, Node.js, and PostgreSQL, featuring dynamic weather visualizations, caching, and OpenWeather API integration.

## 🚀 Features
- 🔍 Search weather by city (worldwide)
- 📡 Real-time weather data using OpenWeather API
- 💾 Smart caching (1 hour) to reduce API calls
- 🗃️ Logs all weather queries into PostgreSQL
- 🌐 RESTful backend with Express.js
- 🎨 Stylish modern UI using custom CSS

## 🛠️ Tech Stack

| Frontend     | Backend         | Database   | API                    |
|--------------|-----------------|------------|------------------------|
| React, Axios | Node.js, Express| PostgreSQL | OpenWeatherMap API      |

## 📁 Folder Structure

| Folder/File        | Description                                |
|--------------------|--------------------------------------------|
| `weather-dashboard/` | Root project folder                       |
| `backend/`          | Node.js backend                           |
| `backend/controllers/` | Controllers for backend logic            |
| `backend/routes/`    | Routes for backend endpoints              |
| `backend/services/`  | Services for backend logic                |
| `backend/.env`       | Environment variables for the backend     |
| `backend/index.js`   | Main server file                          |
| `frontend/`         | React frontend                             |
| `frontend/src/`     | React source files                        |
| `frontend/public/`  | Static assets, including images and icons  |
| `frontend/.env`     | Environment variables for the frontend    |
| `README.md`         | Project documentation                     |

## 🚀 Getting Started

### Prerequisites

Before running the project, make sure you have the following installed:

- Node.js
- PostgreSQL

### Installing

1. Clone the repository:
    ```bash
    git clone https://github.com/DEVanshDEVS/weather-dashboard.git
    ```

2. Install backend dependencies:
    ```bash
    cd weather-dashboard/backend
    npm install
    ```

3. Install frontend dependencies:
    ```bash
    cd weather-dashboard/frontend
    npm install
    ```

4. Set up your `.env` files in both the `backend` and `frontend` directories with appropriate environment variables.

5. Run the backend:
    ```bash
    cd weather-dashboard/backend
    node index.js
    ```

6. Run the frontend:
    ```bash
    cd weather-dashboard/frontend
    npm start
    ```

## 🔧 Contributing

Feel free to fork this repository and submit pull requests. Contributions are always welcome!
