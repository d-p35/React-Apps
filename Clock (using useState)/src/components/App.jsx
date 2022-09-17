import React, { useState } from "react";

function App() {
  setInterval(refreshTime, 1000);

  const current = new Date().toLocaleTimeString();

  const [time, setTime] = useState(current);

  function refreshTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={refreshTime}>Get Time</button>
    </div>
  );
}

export default App;
