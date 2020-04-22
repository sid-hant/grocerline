// import dependicies
import React, { useState } from 'react';
import { Link, Element } from 'react-scroll';

// import components
import StoreDetail from './storeDetail';
// import BusyChart from './busyChart.component';


// StoreList function "component"
export default function StoreList(stores) {
    // setting state
    const [placeId, setPlaceId] = useState(null);

    // Create storeList which is multiple divs of store information
    const storeList = stores.stores.map(store => {
        // Return the JSX
        return (
            // Link to scroll to the detailed part
            <Link key={store.place_id} activeClass="active"  to="storeDetailElement" spy={true} smooth={true} duration={500}>
            {/* Main div to hold the store information */}
            <div key={store.place_id} name={store.place_id} onClick={e=> setPlaceId(e.target.getAttribute('name'))} className="container">
                {/* Card, holds the name of the business, the address and if the store is open right now or not  */}
                <div name={store.place_id} className="card mb-3" style={{borderWidth: '0.6px', borderRadius: '20px'}}>
                    <div name={store.place_id} className="card-body" style={{textAlign: 'left'}}>
                        <b name={store.place_id} style={{fontSize: '4vw%'}}>{ store.name }</b> <br/>
                        <p name={store.place_id} style={{fontSize: '2vw%', marginBottom: '0px'}}>{ store.formatted_address }<br/>
                        {
                            store['opening_hours'] !== undefined
                            ? <span name={store.place_id} style={store.opening_hours.open_now ? {color: 'green'}: {color: 'red'} }><b name={store.place_id} >{ store.opening_hours.open_now ? "Open" : "Closed" }</b></span>
                            : ''
                        }
                        </p>
                    </div>
                </div>
            </div>
            </Link>
        );
    });

    // Return JSX
    return (
        <div className="row flex-column-reverse flex-md-row">
            <div className="col-lg-4 col-lg-pull-8">
                {/* List of stores  */}
                {storeList}
            </div>
            <div className="col-lg-8 col-lg-push-4"><Element name="storeDetailElement"></Element>
                {/* Place detail */}
                <StoreDetail placeId = {placeId} />
            </div>
            
        </div>
    );
};
