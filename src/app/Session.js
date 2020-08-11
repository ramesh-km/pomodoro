import React from 'react';

function Session({sessionLength, setSessionLength, isTimerActive}) {
  return (
    <div id='session'>
      <h2 id='session-label'>Session Length</h2>
      <div id='session-increment' onClick={() => {
        if(!isTimerActive) {
          setSessionLength(prevState => prevState < 60 && prevState > 0 ? prevState + 1 : prevState);
        }
      }}>
        <i className='fas fa-arrow-up'></i>
      </div>
      {<span id='session-length'>{sessionLength}</span>}
      <div id='session-decrement' onClick={() => {
        if(!isTimerActive) {
          setSessionLength(prevState => prevState < 60 && prevState > 1 ? prevState - 1 : prevState);
        }
      }}>
        <i className='fas fa-arrow-down'></i>
      </div>
    </div>
  );
}

export default Session;