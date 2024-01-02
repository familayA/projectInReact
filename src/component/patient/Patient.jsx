import React, { Component } from 'react';
import { useState } from 'react'
import {observer,useAsObservableSource} from 'mobx-react'
import Global from '../Global'

import { Link, Outlet } from 'react-router-dom';
import { Button, Select } from '@mui/material';
import Server from '../Servce';
import { SelectAll } from '@mui/icons-material';



const Patient = (observer(()=> { 
  

  
  const[add,setAdd]=useState(false);
  const[dateTime,setDateTime]=useState('yy/mm/dd');
  const[userName,setUserName]=useState('');
  const[userPhone,setUserPhone]=useState('');
  const[toShow,setToShow]=useState(false)
  const[allServices,setAllServices]=useState(Global.dataServices)
  const[serviceChoosen,setServicesChoosen]=useState('')
 const addMeetingL=()=>{
 {Global.addMeeting({'name':userName,'phone':userPhone,'dateTime':dateTime,'kindServices':serviceChoosen})}
 
 }
  
const change=()=>{
Global.getDataServices();
setAllServices(Global.dataServices)
setToShow(true)
}







  return (
    <>
    <h1>hello Patient</h1>
outlet:
       {setAdd?<div>name:<input type='text' value={userName} onChange={e=>setUserName(e.target.value)}/>
    phone:<input type='text' value={userPhone} onChange={e=>setUserPhone(e.target.value)}/>
    dateTime:<input type='text' value={dateTime} onChange={e=>setDateTime(e.target.value)}/>
    kind:<input type='text' value={serviceChoosen} onChange={e=>setServicesChoosen(e.target.value)}/>
    <Button onClick={addMeetingL}>send and add</Button></div>:''}
    {toShow&&typeof allServices!==undefined?<SelectAll>{allServices.map((value,key)=>{
      <option value={value} key={key}>
    <Server name={value.name}price={value.price}key={key}></Server>
    </option>
    })}</SelectAll>:'notShow'}
<Button onClick={e=>setAdd(true)}>Add Meeting</Button>
<Button onClick={e=>change}>Show All Services</Button>
       


  
    </>
  
)}));

export default Patient