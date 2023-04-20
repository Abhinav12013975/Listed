import React from 'react'
import './Dataanalysis.css'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
const Dataanalysis = () => {
  return (
    <div className="_Dataanalysis_">
        <div className="_char_analaysis">
          hello
        </div>
        <div className="_content_analysis">
           <div className="_schedule_">
             <span >Today's Schedule </span>
             <span className="_see_">See All </span>
             <span><KeyboardArrowRightOutlinedIcon style={{marginRight:"2rem", fontWeight:"200", marginTop:"-0.1rem"}}/></span>
           </div>
           <div className="_content_right_">
             <div className="_line_">
                  <p></p>
             </div>
             <div className="_right_content_">
                  <p className="_meet_">Metting with suppliers from Kuta Bali</p>
                  <p className="_date_">14.00-15.00</p>
                  <p className="_set_">at Sunset Road, Kuta, Bali</p>
             </div>
           </div>
           <div className="_content_right_">
             <div className="_line_" id="_line_2">
                  <p></p>
             </div>
             <div className="_right_content_">
                  <p className="_meet_">Check operation at Giga factory 1</p>
                  <p className="_date_">18.00-20.00</p>
                  <p className="_set_">at Central Jakarta</p>
             </div>
           </div>
        </div>
    </div>
  )
}

export default Dataanalysis