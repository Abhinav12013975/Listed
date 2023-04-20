import React from 'react'
import './Rightbar.css';
import  Navcomponent from '../dashboard_right/Navcomponent'
import Cardcomponent from '../cardcomponent/Cardcomponent'


function Rightbar() {
  return (
    <div className="Rightbar">
       <Navcomponent/>
       <Cardcomponent/> 
     
     
    </div>
  )
}

export default Rightbar