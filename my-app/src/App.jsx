import React from "react";
import './App.css';
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


function App() {
  
  return (
  //   <Provider store={store}> 
  //    <Router>
  //    <Routes>
  //    <Route path="/" element={
   <div className="main-container">
     <NavBar/>
     <SubtextCallout />
     <HeroSection />
     <JobForm  />
     <UploadBox  /> 
     <GenerateResults />
     <UsedByStudents/>
     <UsedUniversities/>
    </div>
    //  }/>
    // </Routes>
    // </Router>
    // </Provider>
  );
}
export default App

