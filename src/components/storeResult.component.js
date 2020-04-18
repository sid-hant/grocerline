

import React, { Component } from 'react'

export class StoreResule extends Component {
    render() {
        const store = this.props.store
        return (
            <div className="container">

                    
                <div className="card mb-3" style={{borderWidth: '0.6px', borderRadius: '20px'}}>
                    <div className="card-body" style={{textAlign: 'left'}}>
                        <b style={{fontSize: '4vw%'}}>{ store.name }</b> <br/>
                        <p style={{fontSize: '2vw%', marginBottom: '0px'}}>{ store.formatted_address }<br/>
                        <span style={store.opening_hours.open_now ? {color: 'green'}: {color: 'red'} }><b>{ store.opening_hours.open_now ? "Open" : "Closed" }</b></span></p>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default StoreResule
