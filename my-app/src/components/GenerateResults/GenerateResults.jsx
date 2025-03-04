import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, setResults, setError } from "../../redux/chatgptSlice"; 
import { useNavigate } from "react-router-dom";
import "./GenerateResults.css";
import generateResultsIcon from "../../assets/Icons/generateResultsIcon.png";

const GenerateResults = ({ uuid }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError, jobLink} = useSelector((state) => state.chatgpt);

  const handleGenerateResults = async () => {
    if(!uuid || !jobLink){
      dispatch(setError()); // Turn button red
      return;
    }
    dispatch(startLoading());
    try {
      const response = await fetch("http://localhost:5173/api/analyze", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ uuid, jobLink }),
      });

      if (!response.ok) {
          throw new Error("Failed to fetch results.");
      }

      const data = await response.json();
      dispatch(setResults(data.analysis));
      navigate("/results");
      console.log("Analysis Results:", data);

  } catch (error) {
      console.error("Error:", error);
      dispatch(setError());
  }
};
  return (
      <button className={`generate-results ${isError ? "error": ""}`}
      onClick={handleGenerateResults}
      disabled={isLoading}
      >
        <img src={generateResultsIcon} alt="generateResultsIcon" className="generate-results-icon" />
        <span className="generate-results-text">
        {isLoading ? "Generating..." : "Get My Results"}
        </span>
      </button>
    );
  };
  
  export default GenerateResults;

