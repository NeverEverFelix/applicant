import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import chatgptService from "./chatgptService.js";
import { PDFDocument } from "pdf-lib"; // ✅ Replacing pdf-parse
import mammoth from "mammoth";
import textract from "textract";
import path from "path";
import crypto from "crypto"; // ✅ Import crypto for UUID generation


dotenv.config({ path: path.resolve(process.cwd(), ".env") });
console.log("✅ Loaded API Key:", process.env.OPENAI_API_KEY);

const app = express();
const PORT = process.env.PORT || 5001;

// 🔹 In-memory storage for uploaded resumes (Key: UUID, Value: Extracted Text)
let resumeStorage = {};

// 🔹 Multer configuration for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// 🔹 Function to get the latest resume text (For RESTful API Design)


// 🔹 Route: Upload Resume & Extract Text
app.post("/API/upload", upload.single("resume"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, error: "No file uploaded" });
        }

        const { originalname, buffer } = req.file;
        let extractedText = "";

        if (originalname.endsWith(".pdf")) {
            const pdfDoc = await PDFDocument.load(buffer);
            const pages = await Promise.all(
                pdfDoc.getPages().map(page => page.getTextContent())
            );
            extractedText = pages.map(page => page.items.map(textItem => textItem.str).join(" ")).join("\n");
        } else if (originalname.endsWith(".docx")) {
            const docxData = await mammoth.extractRawText({ buffer });
            extractedText = docxData.value;
        } else if (originalname.endsWith(".doc")) {
            extractedText = await new Promise((resolve, reject) => {
                textract.fromBufferWithMime("application/msword", buffer, (err, text) => {
                    if (err) reject(err);
                    resolve(text);
                });
            });
        } else {
            return res.status(400).json({ success: false, error: "Unsupported file type" });
        }
        // 🔹 Generate a unique UUID for this resume
        const uuid = crypto.randomUUID();
        resumeStorage[uuid] = extractedText; // Store extracted text under UUID

        console.log(`✅ Resume stored with UUID: ${uuid}`);
        

        return res.json({ success: true, uuid });
    } catch (error) {
        console.error("Error extracting resume text:", error);
        return res.status(500).json({ success: false, error: "Failed to extract resume text" });
    }
});

// 🔹 Middleware
app.use(express.json());
app.use(cors());

// 🔹 Attach ChatGPT Service Routes
app.use("/API", chatgptService);

// 🔹 Start the Server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));


export { resumeStorage }; // ✅ Export so chatgptService.js can use it
