import React from "react";
import "./usedUniversities.css";
import {motion} from "framer-motion";

const placeholderLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/3/3f/MIT_Seal.svg", // MIT Logo
    "https://upload.wikimedia.org/wikipedia/en/4/44/Stanford_Cardinal_logo.svg", // Stanford
    "https://upload.wikimedia.org/wikipedia/commons/e/e5/UC_Berkeley_seal.svg", // Berkeley
    "https://upload.wikimedia.org/wikipedia/en/8/8c/Penn_Quakers_logo.svg", // UPenn
  ];

const UsedUniversities = () => {
    return (
      <div className="logo-container">
        {/* Fading edges */}
        <div className="fade-left"></div>
  
        {/* Scrolling motion div */}
        <motion.div
          className="logo-scroll"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          {placeholderLogos.map((logo, index) => (
            <img key={index} src={logo} alt={`University ${index}`} className="logo" />
          ))}
          {/* Duplicate images for smooth looping */}
          {placeholderLogos.map((logo, index) => (
            <img key={`dup-${index}`} src={logo} alt={`University ${index}`} className="logo" />
          ))}
        </motion.div>
  
        <div className="fade-right"></div>
      </div>
    );
  };
  
  export default UsedUniversities;