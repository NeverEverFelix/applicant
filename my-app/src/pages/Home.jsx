import React from "react";
import NavBar from "src/components/NavBar.jsx"
import HeroSection from "../components/HeroSection";
import SubtextCallout from "../components/SubtextCallout";
import JobForm from "../components/JobForm";
import "../styles/Home.css";

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