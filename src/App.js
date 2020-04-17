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
          <Link style={{color: 'black'}} to="/" className="nav-link"><h1 style={{ fontSize: '600%', paddingTop: '5%', paddingBottom: '5%'}}>grocerline</h1></Link>
          
          <Search/>
          <Faq/>

          <Route/>
          <Route/>

          
    
        </div>
      </Router>
    )
  }
}

