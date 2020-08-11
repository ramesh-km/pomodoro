import React, {useState, useEffect, useRef } from 'react';
import ringtone from './airtelRingtone.mp3'

function Timer({
  breakLength,
  sessionLength,
  isTimerActive,
  }) {

  const [current, setCurrent] = useState('session');
  const [timer, setTimer] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    setTimer(
      current === 'session' ?
      toMillis(sessionLength) :
      toMillis(breakLength)
    );
  }, [sessionLength, breakLength, current, isTimerActive]);

  useEffect(() => {
    if (!isTimerActive) {
      return;
    }
    const intervalId = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1000);
      if (timer === 0) {
        setCurrent(current === 'session' ? 'break' : 'session');
        setTimer(
          current === 'session' ?
          toMillis(sessionLength) :
          toMillis(breakLength)
        );
      }
    }, 1000);

    return () => clearInterval(intervalId);
  });

  useEffect(() => {
    if (timer === 0) {
      audioRef.current.src = ringtone;
      setTimeout(() => {
        audioRef.current.src = '#';
      }, 15000);
    }
  });

  return (
    <div id='timer'>
      <p id='timer-label'>{current[0].toUpperCase() + current.slice(1)}</p>
      <span id='time-left'>{toMinutes(timer)}</span>
      <audio
        id='beep'
        ref={audioRef}
        autoPlay
        loop
      />
    </div>
  )
}

function toMinutes(millis) {
  const sec = Math.floor(millis / 1000);
  return `${Math.floor(sec / 60).toString().padStart(2, '0')}:${(sec % 60).toString().padStart(2, '0')}`;
}

function toMillis(minutes) {
  return ((parseInt(minutes) * 60 * 1000));
}

export default Timer;