import React from "react";
import { useState } from "react";
import "./UploadBox.css";
import arrowIcon from "../../assets/Icons/arrowIcon.png";
const UploadBox = () => {
    const [file, setFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isUploading, setIsUploading] = useState(false); // Loading state
    const [error, setError] = useState(null);


    

    // Handle file selection
    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
          setFile(selectedFile);
          setIsDragging(false); 
          uploadFile(selectedFile);
      }
  };
  
  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);

    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
        setFile(droppedFile);
        uploadFile(selectedFile);
    }
};

const handleDragOver = (event) => {
  event.preventDefault();
  setIsDragging(true);
};

// Remove highlight when leaving the drop zone
const handleDragLeave = () => {
  setIsDragging(false);
};


  const handleClick = () => {
    document.getElementById("fileUploadInput").click();
  };
  
  return (
      <div className= {`upload-box ${file ? "file-uploaded" : ""} ${isDragging ? "dragging" : ""}`}
        onClick={() => document.getElementById("fileUploadInput").click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        >
        <img src={arrowIcon} alt="arrowIcon" className="arrow-icon" />
        <span className="upload-text">
        {isUploading ? "Uploading..." : file ? file.name : "Upload Resume"}
        </span>
        <input
                type="file"
                id="fileUploadInput"
                accept=".pdf,.doc,.docx"
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
             {error && <p className="error-text">{error}</p>}
            </div>
    );
  };
  
  export default UploadBox;