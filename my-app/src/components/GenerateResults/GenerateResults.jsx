import React from "react";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion";
import "./GenerateResults.css";
import generateResultsIcon from "../../assets/Icons/generateResultsIcon.png";

const GenerateResults = () => {
  const navigate = useNavigate();

  const handleGenerateResults = () => {
    navigate("/results"); // Navigate to ResultsPage
  };

  

  return (
    <motion.button
    className="generate-results"
    onClick={handleGenerateResults}
    whileHover={{ 
      scale: 1.1,
      transition: { duration: 0.1 },
    }}

    whileTap={{ 
      scale: 0.95, 
      transition: { duration: 0.1 },
    }}
    onHoverStart={() => console.log('hover started!')}
      >
        <img src={generateResultsIcon} alt="generateResultsIcon" className="generate-results-icon" />
        <span className="generate-results-text">Get My Results</span>
      </motion.button>
    );
  };
  
  export default GenerateResults;

