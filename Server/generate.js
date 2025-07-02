import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const prompt = `
Return a JSON format only. Only output valid JSON.
{
  "sql": "Your SQL query here as a single string",
  "explanation": "Brief explanation of what the SQL does"
}
Task: Write a single SQL query. 
`;

const apiKey = process.env.GEMINI_API_KEY;

async function generate(query) {
  const ai = new GoogleGenAI({
    apiKey: apiKey,
  });
  const finalQuery = prompt + query;
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: finalQuery,
  });

  return response.text;
}

export default generate;
