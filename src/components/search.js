// Import dependencies
import React, { useState } from 'react'
import axios from 'axios';

// import components
import StoreList from './storeList';

// Search function
export default function Search() {
    // Setting states
    const [searchTerm, setSearchTerm] = useState('');
    const [loadingMessage, setLoadingMessage] = useState('');
    const [result, setResult] = useState([]);

    // Events
    // Handling the event when users click submit on the search
    const handleSearchSubmit = (e) => {
        // prevent default behavior to submit
        e.preventDefault();
        // get the query from the state (the current words in the search bar)
        const query = searchTerm;
        // If there is a search term and it is not empty, run a request
        if (query.length > 0){
            // add a loading message to the search screen
            setLoadingMessage("Loading...");
            // run a get request with the query to search
            axios.get(`https://covid-grocery-api.herokuapp.com/api/v1/stores/search?q=${query}`)
            // get the results
            .then(results => {
                    // get the results from the GET request
                    const result = results.data.stores;
                    // set the loading message to blank
                    setLoadingMessage('');
                    // set result state to the request's result
                    setResult(result);
                })
            // if there are any errors then make the loading message to re-search with proper terms
            .catch(err => setLoadingMessage("Please search keywords like your city, postal code or store name with your city name."));
        }
        // set the searchTerm to blank
        setSearchTerm('');
    };

    // Return JSX code for the "component"
    return (
        <div className="container">

            {/* Search form */}
            <form onSubmit={handleSearchSubmit} >
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        name="searchTerm" 
                        className="form-control" 
                        value={searchTerm} 
                        onChange={e => setSearchTerm(e.target.value)} 
                        placeholder="search for a store, city, postal code i.e 'l6v 3r5', 'brampton', 'food basics'" 
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
                    </div>
                </div>
            </form>

            {/* Container for results of the search */}
            <div className="container">

                {/* Loading message/error message */}
                {/* If the loading message is blank dont show anything otherwise show the message */}
                {
                    loadingMessage !== ''
                    ? <h5>{loadingMessage}</h5>
                    : ''
                }
                
                {/* StoreList component */}
                <StoreList key={"store-list"} stores={result}/>

            </div>
            
        </div>
    );
};