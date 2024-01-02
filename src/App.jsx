import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Start from './component/start/Start.jsx'
import Admin from './component/admin/Admin.jsx'
import Manager from './component/manager/Manager.jsx'
import Patient from './component/patient/Patient.jsx'



import './App.css'


function App() {
 

  return (
    <>
    
  <div className='App'>
   

      <BrowserRouter>
      
              
             
  <Routes>
    <Route path="/" element={<Start />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="/manager" element={<Manager />} />
    <Route path="/patient" element={<Patient />}/>
     
  </Routes>

             

              
            
              
          
      </BrowserRouter>
  </div>

   
      
    </>
  )
}

export default App
