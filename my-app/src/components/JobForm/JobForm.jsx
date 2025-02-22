import { useState } from "react";
import "./JobForm.css"

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