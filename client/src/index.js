import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import './index.css';

//components
import App from './App';
import Dash from './Dash/components/Dash';
import NotFound from './NotFound';

import registerServiceWorker from './registerServiceWorker';

const appRouter = (
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/dash" component={Dash}/>
      <Route component={ NotFound } />
    </Switch>
  </Router>
)

ReactDOM.render(appRouter, document.getElementById('root'));
registerServiceWorker();
