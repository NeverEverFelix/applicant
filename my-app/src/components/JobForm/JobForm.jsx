import { useState } from "react";
import "./JobForm.css";
import fileUploadicon from "/Users/felixm/Desktop/applicant/my-app/src/assets/Icons/fileUploadicon.png";
const JobForm = () => {
    return (
      <div className="input-form-container">
        <img src={fileUploadicon} alt="fileUploadicon" className="job-input-icon" />
        <input
          type="url"
          placeholder="Paste job posting link here..."
          className="job-input"
        />
      </div>
    );
  };

export default JobForm;