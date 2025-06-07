import React from 'react';
import { ThemeProvider } from './Contexts/ThemeContext';
import { WeatherProvider } from './Contexts/WeatherContext'; 
import Proj1 from './Components/Proj1';
import Proj2 from './Components/Proj2';
import Proj3 from './Components/Proj3';
import Proj4 from './Components/Proj4';
import Proj5 from './Components/Proj5';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <WeatherProvider>
        <Proj1 />
        <Proj2 />
        <Proj3 />
        <Proj4 />
        <Proj5 />
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;
