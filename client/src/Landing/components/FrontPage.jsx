import React from 'react';
import GetStarted from './GetStarted';
import '../styles/Frontpage.css';

function FrontPage() {
  const visible = false;

  return (
    <main className="frontpage">
      <div className="splash">
        <h1>Connected space for product teams</h1>
        <h2>It’s all about the details. Handoff designs and styleguides with accurate
          specs, assets, code snippets—automatically.</h2>
      </div>
      <GetStarted />
      <div className="demo">
        <div className="demo-container">
          <video></video>
        </div>
      </div>
      <div className="testimonials">
        <h1>Leading product teams are already using Zeplin</h1>
        <h2>Since day one, Zeplin focuses purely on improving the collaboration
          between designers and engineers, providing them the most accurate resources
          out there. Just this May, 4,711,563 designs from Sketch, Adobe XD CC, Figma
          and Photoshop CC were exported to Zeplin by thousands of product teams.</h2>
      </div>
      <div className="call-to-action">
        <img></img>
        <h1>Experience the glory of Zeplin, for free.</h1>
        <GetStarted />
      </div>
    </main>
  )
}

export default FrontPage;
