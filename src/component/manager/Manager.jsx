import { useState,useEffect } from 'react'
import {observer,useAsObservableSource} from 'mobx-react'
import Global from '../Global'
import { Button } from '@mui/material'
import axios from 'axios'
import Server from '../Servce'






const Manager = (observer(()=> { 


  const[add,setAdd]=useState(false);
  const[name,setName]=useState('');
  const[price,setPrice]=useState('')
  const[toShow,setToShow]=useState(false)
  const[allServices,setAllServices]=useState(Global.dataServices)
  const[allMeetings,setAllMeetings]=useState(Global.meetings)
  const[toShowMeeting,setToShowMeeting]=useState(false)
 const addServiceL=()=>{
 {Global.addDataService({'name':name,'price':price})}
 
 }
  
const change=()=>{
Global.getDataServices();
setAllServices(Global.dataServices)
setToShow(true)
}



  return (
    <>
      <h1>hello Manager</h1>
      
    {setAdd?<div>kind:<input type='text' value={name} onChange={e=>setName(e.target.value)}/>
    price:<input type='text' value={price} onChange={e=>setPrice(e.target.value)}/>
    <Button onClick={addServiceL}>send and add</Button></div>:''}
    {toShow&&typeof allServices!==undefined?allServices.map((value,key)=>{
    <Server name={value.name}price={value.price}key={key}></Server>
    }):'notShow'}
<Button onClick={e=>e.setAdd(true)}>Add Service</Button>
<Button onClick={change}>Show Services</Button>


{ allMeetings.array.forEach(element => {
  <div>{element}</div>
})};

  
    </>
  )
    
      
      
     
     

     
  
  
}))

export default Manager