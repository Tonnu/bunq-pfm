import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class SectionHeader extends React.Component{
  render(){
    return(
      <h1 className="sectionHeader">{this.props.title}</h1>
    )
  }
}

module.exports = SectionHeader;
