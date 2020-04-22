import React, { useState } from 'react'
import axios from 'axios';

import StoreList from './storeList';

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [loadingMessage, setLoadingMessage] = useState('');
    const [result, setResult] = useState([]);


    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const query = searchTerm;
        if (query.length > 0){
            setLoadingMessage("Loading...");
            axios.get(`https://covid-grocery-api.herokuapp.com/api/v1/stores/search?q=${query}`)
            .then(results => {
                    const result = results.data.stores;
                    setLoadingMessage('');
                    setResult(result);
                })
            .catch(err => setLoadingMessage("Please search keywords like your city, postal code or store name with your city name."));
        }
        setSearchTerm('');
    };

    return (
        <div className="container">

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

            <div className="container">

                {
                    loadingMessage !== ''
                    ? <h5>{loadingMessage}</h5>
                    : ''
                }
                
                <StoreList key={"store-list"} stores={result}/>

            </div>
            
        </div>
    );
};