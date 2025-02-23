import React from "react";
import "./UploadBox.css";
import arrowIcon from "/Users/felixm/Desktop/applicant/my-app/src/assets/Icons/arrowIcon.png";
const UploadBox = () => {
    return (
      <div className="upload-box">
         <img src={arrowIcon} alt="arrowIcon" className="arrow-icon" />
        <span className="upload-text">Upload Resume</span>
      </div>
    );
  };
  
  export default UploadBox;