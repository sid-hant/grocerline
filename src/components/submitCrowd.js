import React, {useState, useEffect} from 'react'
import axios from 'axios';


export default function SubmitCrowd(placeId) {
    const [id, setId] = useState(placeId.placeId);
    const [crowdLevel, setCrowdLevel] = useState(0);
    const [dataSubmitted, setDataSubmitted] = useState(false);

    useEffect(()=>{
        setId(placeId.placeId);
    });

    useEffect(()=>{
        setDataSubmitted(false);
    }, [id]);

    const submitCrowdLevel = (e) => {
        e.preventDefault();
        axios.post(`https://covid-grocery-api.herokuapp.com/api/v1/store/${id}/line-status`, {busy: crowdLevel})
            .then(() => setDataSubmitted(true));
        
    }

    return (
        <>
            {
                dataSubmitted
                ? <><p><b>Thank you for contributing</b></p><hr/></>
                :
                <><p><b>Please Tell Us How Busy It Is There Right Now</b></p>
                <form onSubmit={submitCrowdLevel}>
                    <div className="form-row">
                        <div className="col">
                            <select onChange={(e) => setCrowdLevel(e.target.value)} className="form-control">
                                <option value="0">No Crowd/Closed</option>
                                <option value="1">Little Crowd</option>
                                <option value="2">Moderate Crowd</option>
                                <option value="3">Large Crowd</option>
                            </select>
                        </div>
                        <div className="col">
                            <button className="btn btn-outline-secondary" type="submit">Submit</button>
                        </div>
                    </div>
                </form></>
            }
            
        </>
    )
}
