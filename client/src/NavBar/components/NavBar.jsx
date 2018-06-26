import React from 'react';

import '../styles/Navbar.css';

class NavBar extends React.PureComponent {
  render() {
    return(
      <header>
        <nav className="left">
          <a href="/">
            <img className="followUpLogo" src="/static/img/icFollowUp.png"/>
          </a>
        </nav>
        <nav className="right">
          <a href="/why-follow-up">
            <div>Why Follow Up?</div>
          </a>
          <a href="/dash">
            <div>Go to Dashboard</div>
          </a>
        </nav>
      </header>
    )
  }
}

export default NavBar;
