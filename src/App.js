import React from 'react';
import './App.css';
import Weather from './Weather'; // Import the Weather component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Dashboard</h1>
        <Weather />
      </header>
    </div>
  );
}

export default App;
