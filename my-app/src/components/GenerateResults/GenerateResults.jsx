import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion";
import "./GenerateResults.css";
import generateResultsIcon from "../../assets/Icons/generateResultsIcon.png";
import { analyzeResume } from "../../../functions";

const GenerateResults = ({jobLink, resumeText}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGenerateResults = async () => {
    if (!jobLink || !resumeText) {
      alert("Please ensure both a job link and resume text are provided.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('https://us-central1-applican-c0822.cloudfunctions.net/analyzeResume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': 'Bearer your_api_key' // Uncomment and use if you need to send an API key
        },
        body: JSON.stringify({ job_link: jobLink, resume_text: resumeText })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response Data:", data);
      navigate('/results', { state: { data } }); // Navigate to the ResultsPage with the data
    } catch (error) {
      console.error('Failed to generate results:', error);
      alert('Failed to generate results. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <motion.button
    className="generate-results"
    onClick={
      handleGenerateResults

    }
    
    whileHover={{ 
      scale: 1.1,
      transition: { duration: 0.1 }
    }}

    whileTap={{ 
      scale: 0.95, 
      transition: { duration: 0.1 }
    }}
    onHoverStart={() => console.log('hover started!')}
    disabled={loading}
      >
        {loading ? (
        <span>Loading...</span>
      ) : (
        <>
        <img src={generateResultsIcon} alt="generateResultsIcon" className="generate-results-icon" />
        <span className="generate-results-text">Get My Results</span>
        </>
      )}
      </motion.button>
    );
  };
  
  export default GenerateResults;

