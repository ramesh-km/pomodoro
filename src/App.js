import React from 'react';
import './App.scss';
import PomodoroClock from './app/PomodoroClock';
import '@fortawesome/fontawesome-free/css/all.css'

function App() {
  return (
    <div className="App">
      <h1>Pomodoro Clock</h1> 
      <PomodoroClock />
    </div>
  );
}

export default App;
