import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Faq from "./components/faq.component";
import Search from "./components/search.component";

import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div class="alert alert-dark" role="alert">
          🚨 Don't forget to submit the crowd level for the store you are visting. Also, please donate if you can <a target="_blank" href="https://www.buymeacoffee.com/NUxSuRm">here</a> to help keep this website up. 🚨
          </div>
          <div className="container">
            <Link style={{color: 'black'}} to="/" className="nav-link"><h1 style={{ fontSize: '9vw', paddingTop: '5%', paddingBottom: '5%'}}>grocerline</h1></Link>
          </div>
          
          
          <Search/>
          
          <Faq/>

          <Route/>
          <Route/>

          
    
        </div>
      </Router>
    )
  }
}

