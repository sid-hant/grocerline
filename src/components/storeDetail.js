import React, {useState, useEffect} from 'react'
import StoreInformation from './storeInformation';


export default function StoreDetail(placeId) {
    const [id, setId] = useState(placeId.placeId);

    useEffect(() => {
        setId(placeId.placeId);
    });

    return (
        <div className="container" style={{paddingBottom: '5%'}}>

            {
                placeId.placeId !== null
                ?<div className="card border-secondary" style={{width: '100%', borderWidth: '0.6px', borderRadius: '20px'}}>
                    <div className="card-body" style={{textAlign: 'left'}}>
                        <StoreInformation placeId={id}/>

                    </div>
                </div>

                :''
            }
            
        </div>
    )
}
