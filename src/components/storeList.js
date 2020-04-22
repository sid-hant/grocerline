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




// // create and export class for StoreList
// export class StoreList extends Component {

//     // Constructor
//     constructor (props){
//         // super props
//         super(props);
        
//         this.state = {
//             selectedId: '',
//             name: '',
//             address: '',
//             phone_number:'',
//             weekSchedule: [],
//             url: '',
//             website: '',
//             seniorHoursExist: false,
//             seniorHours: '',
//             todayLineData: [],
//             historicLineData: [],
//             historicDay: null,
//             options: [
//                 {name: 'Select', value: null},{name: 'Sunday', value: 0},{name: 'Monday', value: 1},{name: 'Tuesday', value: 2},{name: 'Wednesday', value: 3},{name: 'Thursday', value: 4},{name: 'Friday', value: 5},{name: 'Saturday', value: 6}
//             ],
//             crowdLevelOptions: [{name: 'Large Crowd', value: 3}, {name: 'Moderate Crowd', value: 2}, {name: 'Light Crowd', value: 1}, {name: 'No Crowd/Closed', value: 0}],
//             crowdLevelOptionSelect: 3,
//             crowdLevelSubmitted: false,
//             showSeniorForm: false,
//             formSeniorHoursExist: false,
//             formSeniorHourOptions: [{name: '12 AM', value: '0000'},{name: '1 AM', value: '0100'},{name: '2 AM', value: '0200'},{name: '3 AM', value: '0300'},
//                                     {name: '4 AM', value: '0400'},{name: '5 AM', value: '0500'},{name: '6 AM', value: '0600'},{name: '7 AM', value: '0700'},
//                                     {name: '8 AM', value: '0800'},{name: '9 AM', value: '0900'},{name: '10 AM', value: '1000'},{name: '11 AM', value: '1100'},
//                                     {name: '12 PM', value: '1200'},{name: '1 PM', value: '1300'},{name: '2 PM', value: '1400'},{name: '3 PM', value: '1500'},
//                                     {name: '4 PM', value: '1600'},{name: '5 PM', value: '1700'},{name: '6 PM', value: '1800'},{name: '7 PM', value: '1900'},
//                                     {name: '8 PM', value: '2000'},{name: '9 PM', value: '2100'},{name: '10 PM', value: '2200'},{name: '11 PM', value: '2300'}],
//             formSeniorHours: {
//                 monday: {open:"0000", close:"0000"}, tuesday: {open:"0000", close:"0000"}, wednesday: {open:"0000", close:"0000"},
//                 thursday: {open:"0000", close:"0000"}, friday: {open:"0000", close:"0000"}, saturday: {open:"0000", close:"0000"}, sunday: {open:"0000", close:"0000"}
//             },
//             formSeniorSubmitted: false
            
//         }
//     }

//     getFormattedTime = function (fourDigitTime){
//         var hours24 = parseInt(fourDigitTime.substring(0,2));
//         var hours = ((hours24 + 11) % 12) + 1;
//         var amPm = hours24 > 11 ? ' PM' : ' AM';
//         var minutes = fourDigitTime.substring(2);
//         return hours + ':' + minutes + amPm;
//     };

//     onClick = (e) => {
//         e.preventDefault();
//         this.setState({ selectedId: e.target.getAttribute('name')},() => {
//             axios.get(`https://covid-grocery-api.herokuapp.com/api/v1/store/${this.state.selectedId}`)
//             .then(response => {
//                 const data = response.data;
//                 if (data.code === 200){
//                     const storeDetail = data.store;
//                     this.setState({
//                         crowdLevelSubmitted: false,
//                         showSeniorForm: false,
//                         name: storeDetail.name, 
//                         address: storeDetail.formatted_address, 
//                         phone_number: storeDetail.formatted_phone_number, 
//                         weekSchedule: storeDetail.opening_hours.weekday_text, 
//                         url: storeDetail.url, 
//                         website: storeDetail.website,
//                         seniorHoursExist: storeDetail.seniorHours.exists,
//                         seniorHours: storeDetail.seniorHours.hours,
//                         formSeniorSubmitted: false
//                     });
//                 }
//             });
//             axios.get(`https://covid-grocery-api.herokuapp.com/api/v1/store/${this.state.selectedId}/line-status`)
//             .then(response => {
//                 const data = response.data;
//                 if (data.code === 200){
//                     const busyLevel = data.busyLevel;
//                     this.setState({
//                         todayLineData: busyLevel
//                     });
//                 }
//             });
//         });
//     }
    
//     handleChange = (e) => {
//         this.setState({historicDay: e.target.value}, () =>{
//             if(this.historicDay !== null){
//                 axios.get(`https://covid-grocery-api.herokuapp.com/api/v1/store/${this.state.selectedId}/line-status/${this.state.historicDay}`)
//                     .then(response => {
//                         const data = response.data;
//                         if (data.code === 200){
//                             const busyLevel = data.day.busyLevel;
//                             this.setState({
//                                 historicLineData: busyLevel
//                             });
//                         }
//                     });
//             }
//         });
//     };

//     handleCrowdLevelChange = (e) => {
//         this.setState({crowdLevelOptionSelect: e.target.value});
//     }

//     onSubmit = (e) => {
//         e.preventDefault();
//         const level = this.state.crowdLevelOptionSelect;
//         axios.post(`https://covid-grocery-api.herokuapp.com/api/v1/store/${this.state.selectedId}/line-status`, {busy: level})
//             .then(() => this.setState({crowdLevelSubmitted: true}))
//     };

//     showSeniorForm = (e) => {
//         e.preventDefault();
//         this.setState({showSeniorForm: !this.state.showSeniorForm});
//         if (this.state.showSeniorForm === false) this.setState({formSeniorHoursExist: false})
//     };



//     seniorFormExistsChangeHandle = (e) => {
//         e.preventDefault();
//         if (e.target.value === "0") this.setState({formSeniorHoursExist: false})
//         else if (e.target.value === "1") this.setState({formSeniorHoursExist: true})
        
//     }

//     handleChangeForSeniorHoursForm = (e) => {

//         const name = e.target.name;
//         const nameSplit = name.split('_');
//         let hours = this.state.formSeniorHours;

//         hours[nameSplit[0]][nameSplit[1]] = e.target.value;
//         this.setState({ formSeniorHours: hours })

//     };

//     submitSeniorHoursInfo = (e) => {
//         e.preventDefault()
//         const payload = {exists: this.state.formSeniorHoursExist, hours: this.state.formSeniorHours}
//         console.log(payload)
//         axios.post(`https://covid-grocery-api.herokuapp.com/api/v1/store/${this.state.selectedId}/senior-hours`, payload)
//             .then((response) => {

//                 this.setState({showSeniorForm: !this.state.showSeniorForm, formSeniorSubmitted: true});


//             });

//     };

    

//     render() {

        

//         return (
            
//             <div className="row flex-column-reverse flex-md-row">
//                 <div className="col-lg-4 col-lg-pull-8">

//                     {this.props.stores.map(store => (
//                         <Link key={store.place_id} activeClass="active"  to="storeDetailElement" spy={true} smooth={true} duration={500}>
//                         <div key={store.place_id} name={store.place_id} onClick={this.onClick} className="container">
//                             <div name={store.place_id} className="card mb-3" style={{borderWidth: '0.6px', borderRadius: '20px'}}>
//                                 <div name={store.place_id} className="card-body" style={{textAlign: 'left'}}>
//                                     <b name={store.place_id} style={{fontSize: '4vw%'}}>{ store.name }</b> <br/>
//                                     <p name={store.place_id} style={{fontSize: '2vw%', marginBottom: '0px'}}>{ store.formatted_address }<br/>
//                                     <span name={store.place_id} style={store.opening_hours.open_now ? {color: 'green'}: {color: 'red'} }><b name={store.place_id} >{ store.opening_hours.open_now ? "Open" : "Closed" }</b></span></p>
//                                 </div>
//                             </div>
//                         </div>
//                         </Link>
//                     ))} 

//                 </div>
//                 <div className="col-lg-8 col-lg-push-4"><Element name="storeDetailElement"></Element>
//                     {this.state.selectedId !== ''

//                         ?<div className="container" style={{paddingBottom: '5%'}}>
//                             <div className="card border-secondary" style={{width: '100%', borderWidth: '0.6px', borderRadius: '20px'}}>
//                                 <div className="card-body" style={{textAlign: 'left'}}>
//                                     <h2><b>{this.state.name}</b></h2><hr/>
                                    
//                                     <p><b>Please Tell Us How Busy It Is Right Now: </b> </p>
//                                     { this.state.crowdLevelSubmitted
                                        
//                                         ? <span>Thank you for contributing</span>
                                        
//                                         : <form onSubmit={this.onSubmit}>
//                                             <div className="form-row">

//                                                 <div className="col">
//                                                     <select onChange={this.handleCrowdLevelChange} className="form-control">
//                                                         {this.state.crowdLevelOptions.map((item) => <option key={item.value} value={item.value}>{item.name}</option>)}
//                                                     </select>
//                                                 </div>
                                                    
//                                                 <div className="col">
//                                                     <button className="btn btn-outline-secondary" type="submit">Submit</button>
//                                                 </div>

//                                             </div>
//                                         </form>
                                   
//                                     }

                                


//                                     <hr/>
//                                     <p><b>Address: </b>{this.state.address}</p>
//                                     <p><b>Hours: </b><br/>{this.state.weekSchedule.map((m, i) => <span key={i}>{m}<br/></span>)}</p>
//                                     <p><b>Phone: </b>{this.state.phone_number}</p>
//                                     <hr/>
//                                     <p><b>Dedicated Senior Hours: </b>{this.state.seniorHoursExist?<b style={{color: 'green'}}>Yes</b> :<b style={{color: 'red'}}>No</b>}</p>

//                                     {this.state.seniorHoursExist
//                                         ?<p>{Object.keys(this.state.seniorHours).map((key, index)=> (<span key={index}>{key.charAt(0).toUpperCase()+key.slice(1)}: {this.getFormattedTime(this.state.seniorHours[key]['open'])} - {this.getFormattedTime(this.state.seniorHours[key]['close'])}<br/></span>))}</p>
//                                         :<span></span>
//                                     }
//                                     <hr/>

//                                     <p><b>Current Daily Crowd Level: </b></p>
//                                     <BusyChart data={this.state.todayLineData}/>

//                                     <hr/>
//                                     <p><b>Historic Crowd Level: </b>
//                                         <select onChange={this.handleChange} className="form-control">
//                                             {this.state.options.map((item) => <option key={item.value} value={item.value}>{item.name}</option>)}
//                                         </select>
//                                     </p>
//                                     <BusyChart data={this.state.historicLineData}/>
                                    

//                                     <hr/>
//                                     <p><b>Website: </b><a target="_blank" href={this.state.website} style={{ textDecoration: 'none'}}>{this.state.website}</a></p>
//                                     <p><a href={this.state.url} target="_blank" className="btn btn-outline-secondary">Open Google Maps</a></p>
                                    
//                                     {this.state.formSeniorSubmitted

//                                     ? <span>Thank you for contributing</span>
//                                     : <form onSubmit={this.showSeniorForm}><button className="btn btn-outline-secondary" type="submit">Submit Senior Hours Data</button></form>
//                                     }
                                    

//                                     {this.state.showSeniorForm

//                                     ?<form onSubmit={this.submitSeniorHoursInfo}><br/>
//                                         <p><b>Does This Store Have Dedicated Senior Hours?</b></p>
//                                         <select className="form-control" onChange={this.seniorFormExistsChangeHandle}>
//                                             <option value="0">No</option>
//                                             <option value="1">Yes</option>
//                                         </select>
//                                         {this.state.formSeniorHoursExist

//                                             ?<div className="container"><br/><p><b>Does This Store Have Dedicated Senior Hours?</b></p>{Object.keys(this.state.formSeniorHours).map((key, index) => <div key={index}><b>{key.charAt(0).toUpperCase()+key.slice(1)}</b><br/>Open<select className="form-control" onChange={this.handleChangeForSeniorHoursForm} name={key+'_open'}>{this.state.formSeniorHourOptions.map((item) => <option key={item.value} value={item.value}>{item.name}</option>)}</select>Close<select className="form-control" onChange={this.handleChangeForSeniorHoursForm} name={key+'_close'}>{this.state.formSeniorHourOptions.map((item) => <option key={item.value} value={item.value}>{item.name}</option>)}</select></div>)}</div>

//                                             :<span></span>

//                                         }
//                                         <br/><div className="container"><button className="btn btn-outline-secondary" type="submit">Submit</button></div>
//                                     </form> 
                                    

//                                     : <span></span>

//                                     }
                                    
                                    
//                                 </div>
//                             </div>
//                         </div>

//                         :<div className="container" style={{paddingBottom: '5%'}}></div>
//                     }
                    

//                 </div>
//             </div>



//         );
//     }
// }

// export default StoreList
