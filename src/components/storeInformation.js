import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CurrentCrowd from './currentCrowd';
import HistoricCrowd from './historicCrowd';
import SubmitCrowd from './submitCrowd';
import SeniorForm from './seniorForm';


export default function StoreInformation(placeId) {
    const [id, setId] = useState(placeId.placeId);
    const [storeInfo, setStoreInfo] = useState({});
    const [historicDay, setHistoricDay] = useState(0);


    const getFormattedTime = function (fourDigitTime){
        var hours24 = parseInt(fourDigitTime.substring(0,2));
        var hours = ((hours24 + 11) % 12) + 1;
        var amPm = hours24 > 11 ? ' PM' : ' AM';
        var minutes = fourDigitTime.substring(2);
        return hours + ':' + minutes + amPm;
    };

    useEffect(() => {
        setId(placeId.placeId);
    })

    useEffect(() => {        
        if (id !== null ){
            axios.get(`https://covid-grocery-api.herokuapp.com/api/v1/store/${id}`)
            .then(response => {
                const data = response.data;
                if (data.code === 200){
                    setStoreInfo(data.store);
                };
            });
        }
    }, [id]);

    return (
        <>
        <h2><b>{storeInfo.name ? storeInfo.name : ''}</b></h2>

        <SubmitCrowd placeId={id}/>

        <hr/>

        <p><b>Address: </b>{ storeInfo.formatted_address ? storeInfo.formatted_address : '' }</p>
        <p><b>Hours: </b><br/>{ storeInfo.opening_hours ? storeInfo.opening_hours.weekday_text.map((item, index) => <span key={index}>{item}<br/></span>)  : ''}</p>
        <p><b>Phone: </b>{ storeInfo.formatted_phone_number ? storeInfo.formatted_phone_number : '' }</p>

        <p><b>Dedicated Senior Hours?: { storeInfo.seniorHours ?  storeInfo.seniorHours.exists ? <span style={{color:'green'}}>Yes</span> : <span style={{color:'red'}}>No</span>  : '' }</b></p>

        {   
            storeInfo.seniorHours
            ? storeInfo.seniorHours.exists
                ? 
                    <p>
                        {Object.keys(storeInfo.seniorHours.hours).map((item, index) => <span key={index}>{item.charAt(0).toUpperCase()+item.slice(1)}: {getFormattedTime(storeInfo.seniorHours.hours[item]['open'])} - {getFormattedTime(storeInfo.seniorHours.hours[item]['close'])}<br/></span>)}
                    </p>
                : '' 
            : ''
        }

        <hr/>

        <p><b>Current Crowd Level: </b></p>
            <CurrentCrowd placeId={id}/>

        <hr/>

        <p><b>Historic Crowd Level: </b></p>
        <select onChange={(e) => setHistoricDay(e.target.value)} className="form-control">
            <option value="0">Sunday</option>
            <option value="1">Monday</option>
            <option value="2">Tuesday</option>
            <option value="3">Wednesday</option>
            <option value="4">Thursday</option>
            <option value="5">Friday</option>
            <option value="6">Saturday</option>
        </select>
        <br/>
        <HistoricCrowd placeId={id} day={historicDay}/>

        <hr/>

        <p><a href={storeInfo.website ? storeInfo.website : ''} target="_blank" className="btn btn-outline-secondary">Website</a></p>
        <p><a href={storeInfo.url} target="_blank" className="btn btn-outline-secondary">Open Google Maps</a></p>

        <SeniorForm placeId={id}/>


        </>
    )
}


