import { useState,useEffect } from 'react'
import {observer,useAsObservableSource} from 'mobx-react'
import Global from '../Global'
import Admin from '../admin/Admin'
import Patient from '../patient/Patient'
import { Link, Outlet } from 'react-router-dom'





const Start = (observer(()=> {
    const[flag,setFlag]=useState(false);

   
   


  return (
    <>
   
   who is me :{Global.details.name},

   where: {Global.details.street},

   what: {Global.details.description},

     


      {flag ?
<Link to='/admin'><Admin></Admin></Link>:
<Link to='/patient'><Patient></Patient></Link>
}
<Outlet/>
<button onClick={e=>setFlag(true)}>Login</button>


      
    </>
  )
}))

export default Start