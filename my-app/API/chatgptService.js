import express from "express";
import dotenv from "dotenv";
import path from "path";
import OpenAI from "openai";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });
const router = express.Router();

// 🔹 Import function to get the latest resume text
import { resumeStorage } from "./server.js"; 

// 🔹 OpenAI API Setup
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// 🔹 Route: Analyze Resume Against Job Description
router.post("/analyze", async (req, res) => {
    try {
        const {uuid, jobDescription } = req.body;

        console.log("Received request for analysis:", { uuid, jobDescription });

        if (!uuid || !jobDescription) {
            return res.status(400).json({ success: false, error: "Missing job description or UUID" });
        }

        // 🔹 Retrieve the latest uploaded resume text
        const extractedResumeText = resumeStorage[uuid];

        // ✅ ADD THIS LOG TO VERIFY THE RESUME TEXT
        console.log(`Retrieved resume for UUID ${uuid}:`, extractedResumeText);

        if (!extractedResumeText) {
            return res.status(404).json({ success: false, error: "No resume uploaded yet for given uuid" });
        }

        // 🔹 Construct ChatGPT prompt
        const prompt = `
        Analyze the following resume against the given job description.
        Provide a match percentage (0-100) and suggest up to 5 improvements.
        Return JSON ONLY in this format:
        {
          "matchPercentage": X,
          "improvements": ["...", "..."]
        }

        --- Resume Text ---
        ${extractedResumeText}

        --- Job Description ---
        ${jobDescription}
        `;
        console.log("Sending request to ChatGPT with prompt:", prompt);
        // 🔹 Call OpenAI API
        const response = await openai.chat.completions.create({
            model: "gpt-4", // Use GPT-4 for better results
            messages: [{ role: "user", content: prompt }],
            max_tokens: 200,
            temperature: 0.7,
        });

        // 🔹 Extract and validate OpenAI response
        let analysis;
        try {
            const chatResponse = response.choices?.[0]?.message?.content?.trim();
            if (!chatResponse) {
                throw new Error("Empty response from ChatGPT API");
            }
            analysis = JSON.parse(chatResponse);
            console.log("ChatGPT Response:", analysis);
        } catch (err) {
            console.error("ChatGPT Response Parsing Error:", err);
            return res.status(500).json({ success: false, error: "Invalid response from AI" });
        }
        console.log("Final response to frontend:", { success: true, analysis });
        return res.json({ success: true, analysis });
    } catch (error) {
        console.error("ChatGPT API Error:", error);
        return res.status(500).json({ success: false, error: "Failed to analyze resume" });
    }
});

// 🔹 Test route to check if the service is running
router.get("/", (req, res) => {
    res.json({ success: true, message: "ChatGPT Service is running!" });
});

export default router;
