/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
import { onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import admin from "firebase-admin";
import { OpenAI } from "openai";
import cors from "cors";

admin.initializeApp();

const OPENAI_API_KEY = defineSecret("OPENAI_API_KEY");
const corsMiddleware = cors({ origin: true }); // ✅ Correct CORS middleware usage

export const analyzeResume = onRequest({ secrets: [OPENAI_API_KEY] }, async (req, res) => {
  corsMiddleware(req, res, async () => {
    try {
      if (req.method !== "POST") {
        return res.status(405).send("Method Not Allowed");
      }

      const { job_link, resume_text } = req.body;
      if (!job_link || !resume_text) {
        return res.status(400).json({ error: "Missing job_link or resume_text" });
      }

      const prompt =  `
        You are an AI that helps job seekers optimize their resumes for a given job posting.
        Analyze the following job description from this link: ${job_link}
        Then, compare it with the user's resume content: ${resume_text}

        Based on the analysis, provide:
        - Job position extracted from the job description (company optional)
        - Match percentage (0-100) based on alignment
        - Three strong positive insights about the resume
        - Three major areas for improvement
        - Three actionable resume optimizations
        - Three recommended job listings based on the resume
Provide the result strictly in JSON object format with the following structure:

{
  "position":["Meta","Software Engineer"]
  "match_percentage": "Percentage match (e.g., 85%)",
  "strengths": ["List of strengths"],
  "weaknesses": ["List of weaknesses"],
  "recommendations": ["Improvement suggestions"]
}

Ensure the response is **valid JSON only**, with no extra text, explanations, or formatting outside the JSON structure.
`;


      
      const apiKey = process.env.OPENAI_API_KEY || req.headers["openai-key"]; // ✅ Use env or header fallback
      if (!apiKey) {
        return res.status(500).json({ error: "Missing OpenAI API key" });
      }

      const openai = new OpenAI({ apiKey });

      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "system", content: prompt }],
        temperature: 0.7,
        max_tokens: 500,
      });

      const gptOutput = response.choices?.[0]?.message?.content || "{}"; // ✅ Handle missing response
      let result;
      try {
        result = JSON.parse(gptOutput);
      } catch (error) {
        console.error("Failed to parse JSON:", gptOutput);
        return res.status(500).json({ error: "Failed to parse GPT output", rawOutput: gptOutput });
      }

      return res.status(200).json(result);
    } catch (error) {
      console.error("Error processing resume analysis:", error);
      return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
  });
});
