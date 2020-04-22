// importing dependencies
import React, {useState, useEffect} from 'react'
import StoreInformation from './storeInformation';


// exporting the store detail 
export default function StoreDetail(placeId) {
    // states
    const [id, setId] = useState(placeId.placeId);

    // When the component loads
    useEffect(() => {
        // set the id to the placeId
        setId(placeId.placeId);
    });

    // return JSX
    return (
        <div className="container" style={{paddingBottom: '5%'}}>

            {/* If there is no place id show blank otherwise show the card */}
            {
                placeId.placeId !== null
                ?<div className="card border-secondary" style={{width: '100%', borderWidth: '0.6px', borderRadius: '20px'}}>
                    <div className="card-body" style={{textAlign: 'left'}}>
                        {/* Store information for the card */}
                        <StoreInformation placeId={id}/>

                    </div>
                </div>

                :''
            }
            
        </div>
    )
}
