import React from 'react';
import '../styles/GetStarted.css';

function GetStarted() {
  return (
    <div className="get-started">
      <a href="/register" className="start-button">Get started for free</a>
      <a href="/dashboard" className="goto-dash">Go to dashboard →</a>
    </div>
  )
}

export default GetStarted;
