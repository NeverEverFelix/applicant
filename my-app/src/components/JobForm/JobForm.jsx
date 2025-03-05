import { useState } from "react";
import "./JobForm.css";
import fileUploadicon from "../../assets/Icons/fileUploadicon.png";

const JobForm = () => {
  
   
  
  const [isPasted, setIsPasted] = useState(false);
  const [isValidUrl, setIsValidUrl] = useState(true);
  // Handle input changes
  
  const isValidHttpUrl = (string) => {
    try {
      const url = new URL(string);
      return url.protocol === "http:" || url.protocol === "https:";
    } catch (_) {
      return false;
    }
  };
  
  const handleInputChange = (event) => {
    const value = event.target.value;
    if (isValidHttpUrl(value)) {
        setIsValidUrl(true);
         
    } else {
        setIsValidUrl(false);
        // Clear jobLink if invalid
    }
};


  

  const handlePaste = (event) => {
    const pastedText = event.clipboardData.getData("text");
    console.log("Pasted Text:", pastedText);

    if (isValidHttpUrl(pastedText)) {
    
      setIsPasted(true);
      setIsValidUrl(true);
     
    } else {
      setIsValidUrl(false);
      // Clear input field
      
    }
  };
  


    return (
      <div className={`input-form-container ${!isValidUrl ? "error-border" : ""}`}>
        <img src={fileUploadicon} alt="fileUploadicon" className="job-input-icon" />
        <input
          type="url"
          placeholder="Paste job posting link here..."
          className="job-input"
           // Controlled input
          onChange={handleInputChange} 
          onPaste={handlePaste} // Detect when user pastes
          style={{ color: isPasted ? "#0068F4" : "black" }}
        />
      </div>
    );
  };

export default JobForm;