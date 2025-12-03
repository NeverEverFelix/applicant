import React from "react";
import { useState } from "react";
import "./UploadBox.css";
import arrowIcon from "../../assets/Icons/arrowIcon.png";
import {extractResumeText} from "./extractResumeText.js";
const UploadBox = ({onTextExtracted}) => {
    const [file, setFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [extractedText, setExtractedText]  = useState("");
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState(null);



    

    // Handle file selection
    const handleFileChange = async (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
          setFile(selectedFile);
          setIsDragging(false); 
          await processFile(selectedFile);
      }
  };
  
  const handleDrop = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);

    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
        setFile(droppedFile);
        await processFile(droppedFile);
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
  const processFile = async (file) => {
    try {
        const text = await extractResumeText(file);
        setExtractedText(text);
        console.log("Extracted Resume Text:", text);
        onTextExtracted(text);
    } catch (error) {
        console.error("Error extracting text from file:", error);
    }
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