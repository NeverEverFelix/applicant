import express from "express";

const router = express.Router();

// Test route to check if everything is working
router.get("/", (req, res) => {
    res.json({ message: "ChatGPT Service is running!" });
});

export default router;
