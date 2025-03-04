import React from "react";
import { useState } from 'react';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
  const [showPopup, setShowPopup] = useState(false); 
  return (
    <Provider store={store}> 
     <Router>
     <Routes>
     <Route path="/" element={
   <div className="main-container">
     <NavBar/>
     <SubtextCallout />
     <HeroSection />
     <JobForm setShowPopup={setShowPopup} />
     <UploadBox setUuid={setUuid} /> 
     <GenerateResults uuid={uuid}/>
     <UsedByStudents/>
     <UsedUniversities/>
     {showPopup && (
        <div className="invalid-job-link">
          <p className="invalid-job-link-text">Invalid job link</p>
        </div>
      )}
    </div>
     }/>
    </Routes>
    </Router>
    </Provider>
  );
}
export default App

//cum