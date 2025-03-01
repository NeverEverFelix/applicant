import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import chatgptService from "./chatgptService.js"; // Ensure correct path
// Add `.js` for ES Modules d


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors()); // Enable CORS









app.use("/API", chatgptService); // Use the chatgptService routes

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

