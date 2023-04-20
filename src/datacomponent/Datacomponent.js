import React from "react";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaidIcon from '@mui/icons-material/Paid';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import "./Datacomponent.css";
function Datacomponent() {
  return (
    <div className="_datacomponent_">
      <div className="_box_1" id="box1">
           <div className="icon"><AccountBalanceWalletIcon/> </div>
           <div className="content">
             <p>Total Revenue</p>
             <p className="number">2,129,420</p>
           </div>
      </div>
      <div className="_box_1" id="box2">
       <div className="icon"><PaidIcon/></div>
       <div className="content">
          <p>Total Transaction</p>
          <p className="number">15,420</p>
       </div>
      </div>
      <div className="_box_1" id= "box3">
        <div className="icon"><ThumbUpOffAltIcon/></div>
        <div className="content">
          <p>Total Likes</p>
          <p className="number">300</p>
        </div>


      </div>
      <div className="_box_1" id="box4">
        <div className="icon">
           <PeopleOutlineIcon />
        </div>
        <div className="content">
          <p>Total User</p>
          <p className="number">5000</p>
        </div>
      </div>
    </div>
  );
}

export default Datacomponent;
