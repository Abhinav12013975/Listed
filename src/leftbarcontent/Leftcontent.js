import React from "react";
import "./Leftcontent.css";
// import {PaidIcon} from '@mui/icons-material/Paid';
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
function Leftcontent() {
  return (
    <div className="_parent_container">
      <div>
        <div>
          <div>
            <h1 className="_heading_">Board.</h1>
          </div>
          <div>
            <div className="_left_content">
              <span className="_dash_board">
                <ContentPasteOutlinedIcon />
              </span>
              <span className="_content_">Dashboard</span>
            </div>
            <div className="_left_content">
              <span className="_dash_board">
                <PaidOutlinedIcon />
              </span>
              <span className="_stus_">Transaction</span>
            </div>
            <div className="_left_content">
              <span className="_dash_board">
                <ScheduleOutlinedIcon />
              </span>
              <span className="_stus_">Schedules</span>
            </div>
            <div className="_left_content">
              <span className="_dash_board">
                <AccountCircleOutlinedIcon />
              </span>
              <span className="_stus_">Users</span>
            </div>
            <div className="_left_content">
              <span className="_dash_board">
                <SettingsOutlinedIcon />
              </span>
              <span className="_stus_">Setting</span>
            </div>
          </div>
        </div>
      </div>
      <div className="_contact_help">
          <div className="help">
             Help
          </div>
          <div className="_contact_us">
           Contact Us
          </div>
      </div>
    </div>
  );
}

export default Leftcontent;
