import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from "react";
import "./components/Hero/HeroSection.css";  // ✅ Correct path
import "./components/SubCallout/SubtextCallout.css";  // ✅ Correct path
import HeroSection from "./components/Hero/HeroSection";
import SubtextCallout from "./components/SubCallout/SubtextCallout";
import NavBar from "./components/NavBar/NavBar";
import JobForm from './components/JobForm/JobForm';
import UploadBox from "./components/FileUploadBox/UploadBox";
import GenerateResults from "./components/GenerateResults/GenerateResults";
import UsedByStudents from './components/UsedByStudents/UsedByStudents';
import UsedUniversities from "./components/UsedUniversities/UsedUniversities";
import { Provider } from "react-redux";
import store from "./redux/store"; 

function App() {
  const [uuid, setUuid] = useState(null);
  const [jobLink, setJobLink] = useState(""); 
  const [showPopup, setShowPopup] = useState(false); 
  return (
    <Provider store={store}> 
   <div className="main-container">
     <NavBar/>
     <SubtextCallout />
     <HeroSection />
     <JobForm setShowPopup={setShowPopup} setJobLink={setJobLink} />
     <UploadBox setUuid={setUuid} /> 
     <GenerateResults uuid={uuid} jobLink={jobLink}/>
     <UsedByStudents/>
     <UsedUniversities/>
     {showPopup && (
        <div className="invalid-job-link">
          <p className="invalid-job-link-text">Invalid job link</p>
        </div>
      )}
    </div>
    </Provider>
  );
}
export default App

//cum