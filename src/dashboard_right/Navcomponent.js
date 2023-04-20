import React from 'react'
import './Navcomponent.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
function Navcomponent() {
  return (
    <div className="Navcomponent">
        <div className="Right_nav_dash">
            Dashboard
        </div >
        <div className="Image_search_toggle">
          <div className="Input_Search" >
             <input type="text" placeholder="search..."></input>
             <SearchOutlinedIcon className="_Button_"/>
          </div> 
           <div className="Button_Image_">
             <NotificationsNoneOutlinedIcon/>
           </div>
           <div className="Circle_image">
              circle
           </div>
        </div>
    </div>
  )
}

export default Navcomponent