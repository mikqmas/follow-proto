import React from 'react';
import ListResults from './ListResults';
import '../styles/Dash.css'

class Dash extends React.PureComponent {
  render() {
    return (
      <div className="dash">
        <div className="left">
          <img className="followUpLogo" src="/static/img/icFollowUp.png"/>
        </div>
        <div className="content">
          <span>
            <input type="text" className="search" placeholder="Search customer name, order type..."/>
          </span>
          <div className="filter"></div>
          <div className="graph"></div>
          <ListResults/>
        </div>
      </div>
    )
  }
}

export default Dash;
