import React, { useState, useEffect } from "react";
import './liveDate.css';

function LiveDate() {
  const [time, setTime] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleDateString());
    }, 1000);
  }, []);

  return <div className="LiveDate">{time}</div>;
}

export default LiveDate;