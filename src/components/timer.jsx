import React, { useState, useEffect } from 'react';

function SetAlarm({ time }) {

  let [timeLeft, setTimeLeft] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(value => value - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  const outputTimeStamp = timeValue => {
    let minutes = timeValue >= 60 ? Math.floor(timeValue / 60) : 0;
    let seconds = timeValue % 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return timeValue > 0 ? `${minutes}:${seconds}` : ( <div>
      <audio src="../../content/timer/bird_alarm.mp3" autoPlay loop/>
    </div> );
  }

  return (
    <div className="timeleft ">
      <span>{outputTimeStamp(timeLeft)}</span>
    </div>
  );
}

export default SetAlarm;