import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col } from 'react-grid-system';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import SectionHeader from './blocks/elements/Section Header.js';
import MoneyData from './blocks/elements/Money Data.js';

class Balance extends React.Component{
  render(){
    return(
      <div className="balance">
        Hi from balance
        <SectionHeader title="Bunq Balance"/>
        <MoneyData name="balance"/>
      </div>
    )
  }
}

module.exports = Balance;
