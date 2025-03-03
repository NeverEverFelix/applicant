import { useState } from "react";
import "./JobForm.css";
import fileUploadicon from "../../assets/Icons/fileUploadicon.png";
const JobForm = ({ setShowPopup, setJobLink }) => {
  
  
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
    setJobLinkInput(value);

    if (isValidHttpUrl(value)) {
        setIsValidUrl(true);
        setJobLink(value);  // Update jobLink in App.jsx
    } else {
        setIsValidUrl(false);
        setJobLink("");  // Clear jobLink if invalid
    }
};


  

  const handlePaste = (event) => {
    const pastedText = event.clipboardData.getData("text");
    console.log("Pasted Text:", pastedText);

    if (isValidHttpUrl(pastedText)) {
      //setJobLink(pastedText);
      setIsPasted(true);
      setIsValidUrl(true);
      setShowPopup(false); // Hide popup if valid
    } else {
      setIsValidUrl(false);
      setJobLink(""); // Clear input field
      setShowPopup(true); // Show popup if invalid
    }
  };
  


    return (
      <div className={`input-form-container ${!isValidUrl ? "error-border" : ""}`}>
        <img src={fileUploadicon} alt="fileUploadicon" className="job-input-icon" />
        <input
          type="url"
          placeholder="Paste job posting link here..."
          className="job-input"
          value={jobLink} // Controlled input
          onChange={handleInputChange} 
          onPaste={handlePaste} // Detect when user pastes
          style={{ color: isPasted ? "#0068F4" : "black" }}
        />
      </div>
    );
  };

export default JobForm;