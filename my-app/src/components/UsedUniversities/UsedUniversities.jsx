
import React, { useState, useEffect } from "react";
import {motion} from "framer-motion";
import { fetchUniversities } from "./fetchUniversities";
import "./usedUniversities.css";


const UsedUniversities = () => {
  
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const getLogos = async () => {
      try {
        const universities = await fetchUniversities();
        setLogos(universities.map((uni) => uni.logoURL) ?? []); // Store only logos
      } catch (error) {
        console.error("Error fetching university logos:", error);
        setLogos([]); // Ensure logos is always a valid array
      } finally {
        setLoading(false);
      }
    };

    getLogos();
  }, []);

  if (logos.length === 0) {
    return <p>Loading universities...</p>; // Prevents rendering before data loads
  }

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
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`University ${index}`} className="logo" />
          ))}
          {/* Duplicate images for smooth looping */}
          {logos.map((logo, index) => (
            <img key={`dup-${index}`} src={logo} alt={`University ${index}`} className="logo" />
          ))}
        </motion.div>
  
        <div className="fade-right"></div>
      </div>
    );
  };
  
  export default UsedUniversities;