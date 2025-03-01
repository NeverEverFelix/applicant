import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import chatgptService from "./chatgptService.js"; // Ensure correct path
// Add `.js` for ES Modules d


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5173;

app.use(express.json());
app.use(cors()); // Enable CORS

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});







app.use("/api", chatgptService); // Use the chatgptService routes

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

