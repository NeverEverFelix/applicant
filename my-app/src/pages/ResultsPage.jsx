import React, { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import "./ResultsPage.css";

const Results = () => {
    const [jobTitle, setJobTitle] = useState("Loading job title...");
    return (
        <div >
        <NavBar/>   
        <div className= "results-container">
        <section className="job-title-section">
                    <h1 className="job-title">{jobTitle}</h1>
         </section>
          <section className="match-section">
            
            </section>  
          <section className="resume-section">
          <h2>Resume Optimizations</h2>
            </section> 
          <section className="jobs-section">
          <h2>Recommended Jobs</h2>
          </section>   
          </div>
        </div>
    );
};
export default Results;







