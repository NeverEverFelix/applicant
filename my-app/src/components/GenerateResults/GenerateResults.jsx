import React from "react";
import "./GenerateResults.css";
import generateResultsIcon from "/Users/felixm/Desktop/applicant/my-app/src/assets/Icons/generateResultsIcon.png";

const GenerateResults = ({ onClick }) => {
    return (
      <button className="generate-results" onClick={onClick}>
        <img src={generateResultsIcon} alt="generateResultsIcon" className="generate-results-icon" />
        <span className="generate-results-text">Get My Results</span> 
      </button>
    );
  };
  
  export default GenerateResults;

