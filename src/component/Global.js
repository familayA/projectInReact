import axios from 'axios';
import { observable, makeObservable, action } from 'mobx';
import { useState } from 'react';
import { json } from 'react-router-dom';

class Global {
    
    details={'name':'chani','street':'salon','description':'bool in your head'};
      isPost=false;
      chooseObject='new meeting';
      meetings=[];
      dataServices=[];
      isFullMeetings=false;
      isFullServices=false;
      

    constructor() {
        makeObservable(this, {
           
            details:observable,
            dataServices:observable,
            isPost:observable,
            chooseObject:observable,
            meetings:observable,
            isFullMeetings:observable,
            isFullServices:observable,
            setIsFullServices:action,
            setIsFullMeetings:action,
            setChooseObject:action,
            addMeeting:action,
           addDataService:action,
           setDetails:action,
            setDetailsServer:action,
            getDetails:action,
            getMeetings:action,
            setLocalMeeting:action,
            setLocalServices:action,
            
            setIsPost:action,
            getDataServices:action,
        });this.getDataServices(),this.getMeetings(),
        this.setDetailsServer({'name':'chani','street':'salon of wigs','description':'bool in your head'}),this.getDetails()
      

    }
    setIsFullMeetings=(val)=>{
      this.isFullMeetings=true;
    }
    setIsFullServices=(val)=>{
      this.isFullServices(true);
    }

    
    setIsPost=(val1)=>{
        this.isPost=val1
    }
    setChooseObject=(object)=>{
        this.chooseObject=object
    }
    setDetails=(val)=>{
    this.details=val
    }
    setLocalMeeting=(val)=>{
      this.meetings=val;
    }
    setLocalServices=(val)=>{
 this.dataServices=val;
    }
   
   
    
  //שליפת כל הפגישות שנקבעו
    getMeetings = async () => {
      axios.get('http://localhost:8787/appointments').then(res => {
        this.setLocalMeeting(res.data)  ;
        console.log('you get All Meeting')
    }
    )
    };
    // שליפת כל השירותים
    getDataServices= async () => {
      axios.get('http://localhost:8787/services').then(res => {
        this.setLocalServices(res.data) ;
        console.log('you get All services')
    }
    )
    };
  
    //busines data
    setDetailsServer=async(object)=>{

      try {
        const response = await axios.post('http://localhost:8787/businessData', this.details);
  
        if (response.status===200) {
          console.log('השירות התווסף בהצלחה');
          
          
          // ניתן לבצע פעולות נוספות לאחר שהפגישה נוספה בהצלחה
        } else {
          
          console.error('נסה שוב');
        }
      } catch (error) {
        console.error('נסה שוב להכניס שירות:', error);
      }
    }
    getDetails= async () => {
      axios.get('http://localhost:8787/businessData').then(res => {
        this.setDetails(res.data) ;
        console.log('you get All services')
    }
    )
    };

    // הוספת שירות
    addDataService=async(object)=>{

      try {
        const response = await axios.post('http://localhost:8787/service', object);
  
        if (response.status===200) {
          console.log('השירות התווסף בהצלחה');
          
          
          // ניתן לבצע פעולות נוספות לאחר שהפגישה נוספה בהצלחה
        } else {
          
          console.error('נסה שוב');
        }
      } catch (error) {
        console.error('נסה שוב להכניס שירות:', error);
      }
    }
    // הוספת פגישה
    addMeeting=async(object)=>{

      try {
        const response = await axios.post('http://localhost:8787/appointment',object);
  
        if (response.status===200) {
          console.log('הפגישה התווסף בהצלחה');
          this.setIsFullMeetings(true)
          
          // ניתן לבצע פעולות נוספות לאחר שהפגישה נוספה בהצלחה
        } else {
          
          console.error('נסה שוב');
        }
      } catch (error) {
        console.error('נסה שוב להכניס פגישהת:', error);
      }
    }
    
   
    
 

 

 
    
      
 
   

}

export default new Global();