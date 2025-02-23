import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from "react";
import "./components/Hero/HeroSection.css";  // ✅ Correct path
import "./components/SubCallout/SubtextCallout.css";  // ✅ Correct path
import HeroSection from "./components/Hero/HeroSection";
import SubtextCallout from "./components/SubCallOut/SubtextCallout";
import NavBar from "./components/NavBar/NavBar";
import JobForm from './components/JobForm/JobForm';
import UploadBox from "./components/FileUploadBox/UploadBox";
import GenerateResults from "./components/GenerateResults/GenerateResults";
import UsedByStudents from './components/UsedByStudents/UsedByStudents';
import UsedUniversities from "./components/UsedUniversities/UsedUniversities";

function App() {
  return (
    <div className="main-container">
     <NavBar/>
     <SubtextCallout />
     <HeroSection />
     <JobForm/>
     <UploadBox /> 
     <GenerateResults/>
     <UsedByStudents/>
     <UsedUniversities/>
    </div>
  );
}
export default App

//cum