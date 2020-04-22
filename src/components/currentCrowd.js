import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Chart from './chart'


export default function CurrentCrowd(placeId) {
    const [id, setId] = useState(placeId.placeId);
    const [crowdLevel, setCrowdLevel] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);

    useEffect(()=>{
        setId(placeId.placeId);
    });

    useEffect(() =>{
        if (id !== null){
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

    return (
        <>
            <Chart crowdData={crowdLevel}/>
        </>
    )
}
