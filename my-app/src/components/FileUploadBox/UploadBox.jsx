import React from "react";
import { useState } from "react";
import "./UploadBox.css";
import arrowIcon from "../../assets/Icons/arrowIcon.png";
const UploadBox = () => {
    const [file, setFile] = useState(null);

    // Handle file selection
    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
          setFile(selectedFile);
      }
  };
  
  const handleClick = () => {
    document.getElementById("fileUploadInput").click();
  };
  
  
  
  
  
  
  
  
  
  
  
  
  return (
      <div className= {`upload-box ${file ? "file-uploaded" : ""}`}
        onClick={handleClick}>
         <img src={arrowIcon} alt="arrowIcon" className="arrow-icon" />
        <span className="upload-text">
        {file ? file.name : "Upload Resume"}
        </span>
        <input
                type="file"
                id="fileUploadInput"
                accept=".pdf,.doc,.docx"
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
            </div>
    );
  };
  
  export default UploadBox;