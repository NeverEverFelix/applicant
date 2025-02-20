import React from "react";
import NavBar from "src/components/NavBar.jsx"
import HeroSection from "../components/HeroSection";
import SubtextCallout from "../components/SubtextCallout";
import JobForm from "../components/JobForm";
import "../styles/Home.css";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import "./components/Hero/HeroSection.css";  // ✅ Correct path
import "./components/SubCallout/SubtextCallout.css";  // ✅ Correct path
import HeroSection from "./components/Hero/HeroSection";
import SubtextCallout from "./components/SubCallOut/SubtextCallout";
const Home = () => {
    return(
        <div className="home-container">
            <NavBar />
            <SubtextCallout />
            <HeroSection />
            <JobForm />
      </div>
    );
};

export default Home;