import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import AppRoutes from "./Routes/index.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
    <AppRoutes />
    </StrictMode>
);
// require('dotenv').config();  // Load the .env file

// const chatgptApiKey = process.env.CHATGPT_API_KEY;
// console.log(chatgptApiKey);  // Test the value