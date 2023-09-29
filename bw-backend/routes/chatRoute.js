import express from "express";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

// This code is for v4 of the openai package: npmjs.com/package/openai
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

router.post("/chat", async (req, res) => {
    const { destination, budget, noOfDays, cuisine } = req.body;

    const prompt = `I want to plan a trip to ${destination}, with a budget of ${budget} rupees. I'm interested in trying ${cuisine} cuisine. And plan to stay for ${noOfDays} days. Can you suggest an itinerary?`;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant that plans trips.",
                },
                {
                    role: "user",
                    content: prompt,
                },
            ],
            temperature: 1,
            max_tokens: 1000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        console.log("API Response:", response);

        res.send(response.choices[0].message.content);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
