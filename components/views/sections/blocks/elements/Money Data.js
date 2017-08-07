import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
 apiKey: "AIzaSyAMc0oajjMIcYt1-oIFn2ZPM2X0-1O73mA",
 authDomain: "bunq-pfm.firebaseapp.com",
 databaseURL: "https://bunq-pfm.firebaseio.com/",
 projectId: "bunq-pfm",
 storageBucket: "",
 messagingSenderId: "321972086894"
};
firebase.initializeApp(config);

const database = firebase.database();
const fbalance = database.ref('balance');

class MoneyData extends React.Component{
  constructor() {
    super()
    this.state = {money: 0.00, weeklyBudget: 0.00, monthlyBudget: 0.00}
  }

  componentDidMount() {
    let balance;
    let weeklyBudget;
    let monthlyBudget;

    let promise = new Promise((resolve, reject) => {
      if(this.props.name === "balance"){
        fbalance.on('value', function(snapshot) {
          balance = snapshot.val()
          resolve(balance);
        })
      }
    });

    promise.then((resolvedBalance) => {
      this.setState({money: resolvedBalance});
    });
  }

  render(){
    return(
      <div className="money-data">
        <h2>${this.state.money}</h2>
      </div>
    )
  }
}

module.exports = MoneyData;
