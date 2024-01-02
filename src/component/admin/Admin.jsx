import { useState } from 'react'
import {observer,useAsObservableSource} from 'mobx-react'
import Global from '../Global'
import Manager from '../manager/Manager'
import Patient from '../patient/Patient'
import { Button } from '@mui/material'
import axios from 'axios'
import { Link, Outlet } from 'react-router-dom'

const Admin = (observer(()=> { 
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin,setIsLogin]=useState(false)

 
    // קריאה לשרת לבדיקת הלוגין?
    const checkSend=async(object)=>{

      try {
        const response = await axios.post('http://localhost:8787/login', {name:name,password: password});
  
        if (response.status===200) {
          console.log('welcome to manager');
          setIsLogin(true)
          
          // ניתן לבצע פעולות נוספות לאחר שהפגישה נוספה בהצלחה
        } else {
          setIsLogin(false)
          console.error('חדירה לרשות הפרט');
        }
      } catch (error) {
        setIsLogin(false)
        console.error('חדירה לרשות הפרטת :', error);
      }
    }


  
  return (
    <>
    <Outlet/>
      <h1>hello</h1>
      name : <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
      password: <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <Button onClick={checkSend}>try to enter...</Button>
      {isLogin?
      <Link to='/manager'>Manager</Link>:
      <Link to='/patient'>Patient</Link>
      }
      
   
     
  
    </>
  )
}))

export default Admin