import React, { Component } from 'react'
import axios from 'axios';

import StoreList from './storeList.component';

export class Search extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            searchTerm: "",
            result: [],
            loadingMessage: ""
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const query = this.state.searchTerm;
        if (query.length > 0){
            this.setState({loadingMessage: "Loading..."});
            axios.get(`https://covid-grocery-api.herokuapp.com/api/v1/stores/search?q=${query}`)
                .then(results => {
                    const result = results.data.stores;
                    this.setState({loadingMessage: ""});
                    this.setState({ result });
                })
                .catch(err => this.setState({loadingMessage: "Please search keywords like your city, postal code or store name with your city name."}))
        }
        this.setState({ searchTerm: '' });
      }
    
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div className="container">
  
                <form onSubmit={this.onSubmit} >
                    <div className="input-group mb-3">
                        <input type="text" name="searchTerm" className="form-control" value={this.state.searchTerm} onChange={this.onChange} placeholder="search for a store, city, postal code i.e 'l6v 3r5', 'brampton', 'food basics'" />
                        <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
                        </div>
                    </div>
                </form>


                <div className="container">

                    <h5>{this.state.loadingMessage}</h5>

                    <StoreList key={1} stores={this.state.result}/>
                    
                </div>

                

          
            </div>
        )
    }
}

export default Search
