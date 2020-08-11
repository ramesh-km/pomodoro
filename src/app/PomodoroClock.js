import React, { useState } from 'react';
import Timer from './Timer';
import Session from './Session';
import Break from './Break';
import Controls from './Controls'

function PomodoroClock() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [isTimerActive, setIsTimerActive] = useState(false);

  return (
    <div>
      <div id='labels'>
        <Break
          breakLength={breakLength}
          setBreakLength={setBreakLength}
          isTimerActive={isTimerActive}
        />
        <Session
          sessionLength={sessionLength}
          setSessionLength={setSessionLength}
          isTimerActive={isTimerActive}
        />
      </div>
      <Timer
        breakLength={breakLength}
        sessionLength={sessionLength}
        isTimerActive={isTimerActive}
      />
      <Controls
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
        setBreakLength={setBreakLength}
        setSessionLength={setSessionLength}
      />
    </div>
  );
}

export default PomodoroClock;