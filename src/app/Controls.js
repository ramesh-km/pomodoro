import React from 'react';

function Controls({
  isTimerActive,
  setIsTimerActive,
  setTimer,
  setSessionLength,
  setBreakLength}) {
  return (
    <div id='controls'>
      <div id='start_stop' onClick={() => setIsTimerActive(prevState => !prevState)}>
        {isTimerActive ?
          <i className="fas fa-pause"></i> :
          <i className="fas fa-play"></i>
        }
      </div>
      <div
        id='reset'
        onClick={() => {
          setSessionLength(25);
          setBreakLength(5);
          setIsTimerActive(false);
        }}
      >
        <i className="fas fa-sync-alt"></i>
      </div>
    </div>
  );
}

export default Controls;