import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import "./components/Hero/HeroSection.css";  // ✅ Correct path
import "./components/SubCallout/SubtextCallout.css";  // ✅ Correct path
import HeroSection from "./components/Hero/HeroSection";
import SubtextCallout from "./components/SubCallOut/SubtextCallout";

function App() {
  return (
    <div classname="main-container">
    <SubtextCallout />
     <HeroSection />
    </div>
  );
}
export default App
