// Importing dependencies
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

// Importing components
import Faq from "./components/faq";
import Search from "./components/search";

// importing css
import './App.css';

// App 
export default function App() {
  
  // Returning CSS
  return (
      
    // Main container
    <div className="App">

      {/* Alert for users to submit crowd level and donate */}
      <div className="alert alert-dark" role="alert">
        <span aria-label="Alert emoji" role="img">🚨</span> Don't forget to submit the crowd level for the store you are visting. Also, please donate if you can <a target="_blank" href="https://www.buymeacoffee.com/NUxSuRm">here</a> to help keep this website up. <span aria-label="Alert emoji" role="img">🚨</span>
      </div>
      
      {/* Main title on the page. Says "grocerline" */}
      <div className="container">
        <h1 style={{ fontSize: '9vw', paddingTop: '5%', paddingBottom: '5%'}}>grocerline</h1>
      </div>
      
      {/* Search component */}
      <Search/>

      {/* FAQ component */}
      <Faq/>

    </div>
  )
}


