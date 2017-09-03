import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import demo01 from './demo/01/ControlPanel';
import { Router, Route, hashHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/demo01" component={demo01}/>
  </Router>, 
  document.getElementById('root'));
registerServiceWorker();
