// import dependencies
import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Chart from './chart'


export default function CurrentCrowd(placeId) {
    // states
    const [id, setId] = useState(placeId.placeId);
    const [crowdLevel, setCrowdLevel] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);

    // USE EFFECTS
    // when the component loads normally
    useEffect(()=>{
        // set id to the placeId
        setId(placeId.placeId);
    });

    // everytime the id changes
    useEffect(() =>{
        // if id is not null
        if (id !== null){
            // run the API call to get current crowd
            axios.get(`https://covid-grocery-api.herokuapp.com/api/v1/store/${id}/line-status`)
                .then(response => {
                    const data = response.data;
                    // if the api call is successful
                    if (data.code === 200){
                        const crowdHourlyLevel = data.busyLevel;
                        setCrowdLevel(crowdHourlyLevel);
                    };
                });
        };

    }, [id]);

    //return JSX
    return (
        <>
            <Chart crowdData={crowdLevel}/>
        </>
    )
}
