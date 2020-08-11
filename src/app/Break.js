import React from 'react';

function Break({breakLength, setBreakLength, isTimerActive}) {
  return (
    <div id='break'>
      <h2 id='break-label'>Break Length</h2>
      <div id='break-increment' onClick={() => {
        if(!isTimerActive) {
          setBreakLength(prevState => prevState < 60 && prevState > 0 ? prevState + 1 : prevState);
        }
      }}>
        <i className='fas fa-arrow-up'></i>
      </div>
      {<span id='break-length'>{breakLength}</span>}
      <div id='break-decrement' onClick={() => {
        if(!isTimerActive) {
          setBreakLength(prevState => prevState < 60 && prevState > 1 ? prevState - 1 : prevState);
        }
      }}>
        <i className='fas fa-arrow-down'></i>
      </div>
    </div>
  );
}

export default Break;