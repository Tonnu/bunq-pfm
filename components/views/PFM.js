import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col } from 'react-grid-system';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Balance from './sections/Balance.js';

class PFM extends React.Component{
  render(){
    return(
      <div className="pfm">
        Hi from PFM
        <Balance/>
        /** other sections tb added **/
      </div>
    )
  }
}

module.exports = PFM;
