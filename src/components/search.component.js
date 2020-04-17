import React, { Component } from 'react'
import axios from 'axios';

export class Search extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            searchTerm: ""
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.searchTerm);
        axios.get('http://')
        this.setState({ searchTerm: '' });
      }
    
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div className="container">
  
                <form onSubmit={this.onSubmit} >
                    <div className="input-group mb-3">
                        <input type="text" name="searchTerm" className="form-control" value={this.state.searchTerm} onChange={this.onChange} placeholder="search for a store, city, province, postal code or country i.e 'brampton' or 'food basics'" />
                        <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">search</button>
                        </div>
                    </div>
                </form>
          
            </div>
        )
    }
}

export default Search
