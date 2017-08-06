import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col } from 'react-grid-system';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import * as firebase from 'firebase';

import PFM from './components/views/PFM.js';

class App extends React.Component{
  render(){
    return(
      <Router>
        <div>
          <Route exact path="/" component={PFM}/>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
