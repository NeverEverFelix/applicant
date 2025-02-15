import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// require('dotenv').config();  // Load the .env file

// const chatgptApiKey = process.env.CHATGPT_API_KEY;
// console.log(chatgptApiKey);  // Test the value