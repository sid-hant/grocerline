import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function SeniorForm(placeId) {
    const [id, setId] = useState(placeId.placeId);
    const [toggle, setToggle] = useState(false);
    const [seniorHoursExists, setSeniorHoursExists] = useState(false);
    const [dataSubmitted, setDataSubmitted] = useState(false);
    const [hours, setHours] = useState({
        hours: {
            monday: {open:"0000", close:"0000"}, tuesday: {open:"0000", close:"0000"}, wednesday: {open:"0000", close:"0000"},
            thursday: {open:"0000", close:"0000"}, friday: {open:"0000", close:"0000"}, saturday: {open:"0000", close:"0000"}, sunday: {open:"0000", close:"0000"}
        }
    });


    const selectTimes = (
        <>
        <option value="0000">12 AM</option>
        <option value="0100">1 AM</option>
        <option value="0200">2 AM</option>
        <option value="0300">3 AM</option>
        <option value="0400">4 AM</option>
        <option value="0500">5 AM</option>
        <option value="0600">6 AM</option>
        <option value="0700">7 AM</option>
        <option value="0800">8 AM</option>
        <option value="0900">9 AM</option>
        <option value="1000">10 AM</option>
        <option value="1100">11 AM</option>
        <option value="1200">12 PM</option>
        <option value="1300">1 PM</option>
        <option value="1400">2 PM</option>
        <option value="1500">3 PM</option>
        <option value="1600">4 PM</option>
        <option value="1700">5 PM</option>
        <option value="1800">6 PM</option>
        <option value="1900">7 PM</option>
        <option value="2000">8 PM</option>
        <option value="2100">9 PM</option>
        <option value="2200">10 PM</option>
        <option value="2300">11 PM</option>
        </>
    );

    useEffect(() => {
        // set id
        setId(placeId.placeId);
    });
    useEffect(() => {
        setToggle(false);
        setSeniorHoursExists(false);
        setDataSubmitted(false);
    }, [id]);


    const showSeniorForm = (e) => {
        e.preventDefault();
        setToggle(!toggle);
        if (seniorHoursExists === true) setSeniorHoursExists(false);
    };
    const updateSeniorHours = (e) => {
        e.preventDefault();
        const payload = {exists: seniorHoursExists, hours: hours.hours}
        axios.post(`https://covid-grocery-api.herokuapp.com/api/v1/store/${id}/senior-hours`, payload)
            .then(() => setDataSubmitted(true));
    };


    const changeSeniorHoursTime = (e) => {

        const name = e.target.name;
        const nameSplit = name.split('_');
        var tempHours = hours.hours;
        tempHours[nameSplit[0]][nameSplit[1]] = e.target.value;
        setHours({hours: tempHours});
    };

    return (
        <>
        {
            dataSubmitted

            ? <>Thank you for contributing</>

            :<>
            <form onSubmit={showSeniorForm}><button className="btn btn-outline-secondary" type="submit">Submit Senior Hours Data</button></form>

            {
                toggle

                ? 
                <form onSubmit={updateSeniorHours}>
                    <br/><p><b>Does This Store Have Dedicated Senior Hours?</b></p>
                    <select className="form-control" onChange={(e) => {
                        if (e.target.value === "1") setSeniorHoursExists(true)
                        else if (e.target.value === "0") setSeniorHoursExists(false)
                    }}>
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </select>

                    {
                        seniorHoursExists

                        ?<>
                        <p><b>What Are The Hours?</b></p>
                        <span>
                            <b>Monday:</b>
                            <br/>
                            Open<select onChange={changeSeniorHoursTime} name="monday_open" className="form-control">{selectTimes}</select>
                            Close<select onChange={changeSeniorHoursTime} name="monday_close" className="form-control">{selectTimes}</select>
                        </span>
                        <span>
                            <b>Tuesday:</b>
                            <br/>
                            Open<select onChange={changeSeniorHoursTime} name="tuesday_open" className="form-control">{selectTimes}</select>
                            Close<select onChange={changeSeniorHoursTime} name="tuesday_close" className="form-control">{selectTimes}</select>
                        </span>
                        <span>
                            <b>Wednesday:</b>
                            <br/>
                            Open<select onChange={changeSeniorHoursTime} name="wednesday_open" className="form-control">{selectTimes}</select>
                            Close<select onChange={changeSeniorHoursTime} name="wednesday_close" className="form-control">{selectTimes}</select>
                        </span>
                        <span>
                            <b>Thursday:</b>
                            <br/>
                            Open<select onChange={changeSeniorHoursTime} name="thursday_open" className="form-control">{selectTimes}</select>
                            Close<select onChange={changeSeniorHoursTime} name="thursday_close" className="form-control">{selectTimes}</select>
                        </span>
                        <span>
                            <b>Friday:</b>
                            <br/>
                            Open<select onChange={changeSeniorHoursTime} name="friday_open" className="form-control">{selectTimes}</select>
                            Close<select onChange={changeSeniorHoursTime} name="friday_close" className="form-control">{selectTimes}</select>
                        </span>
                        <span>
                            <b>Saturday:</b>
                            <br/>
                            Open<select onChange={changeSeniorHoursTime} name="saturday_open" className="form-control">{selectTimes}</select>
                            Close<select onChange={changeSeniorHoursTime} name="saturday_close" className="form-control">{selectTimes}</select>
                        </span>
                        <span>
                            <b>Sunday:</b>
                            <br/>
                            Open<select onChange={changeSeniorHoursTime} name="sunday_open" className="form-control">{selectTimes}</select>
                            Close<select onChange={changeSeniorHoursTime} name="sunday_close" className="form-control">{selectTimes}</select>
                        </span></>

                        : ''
                    
                    }

                    <br/><div className="container"><button className="btn btn-outline-secondary" type="submit">Submit</button></div>
                </form>

                : ''
            }</>


        }
        </>
    )
}