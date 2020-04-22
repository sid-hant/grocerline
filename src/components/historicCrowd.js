import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Chart from './chart'


export default function HistoricCrowd(data) {
    const [id, setId] = useState(null);
    const [day, setDay] = useState(data.day);
    const [crowdLevel, setCrowdLevel] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);


    useEffect(()=>{
        setId(data.placeId);
        setDay(data.day);
    });

    useEffect(() =>{
        if (id !== null){
            axios.get(`https://covid-grocery-api.herokuapp.com/api/v1/store/${id}/line-status/${day}`)
                .then(response => {
                    const data = response.data;
                    if (data.code === 200){
                        const crowdHourlyLevel = data.day.busyLevel;
                        setCrowdLevel(crowdHourlyLevel);
                    };
                });
        };

    }, [id, day]);

    return (
        <>
            <Chart crowdData={crowdLevel}/>
        </>
    )
}
