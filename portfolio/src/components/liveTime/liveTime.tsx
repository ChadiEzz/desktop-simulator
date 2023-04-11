import React, { useState, useEffect } from "react";
import './liveTime.css';

function LiveTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], {hour: 'numeric', minute: 'numeric'}));

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString([], {hour: 'numeric', minute: 'numeric'}));
    }, 1000);
  }, []);

  return <div className="LiveTime">{time}</div>;
}

export default LiveTime;