import express from "express";
import cors from "cors";
import generate from "./generate.js";
import { extractJsonFromCodeBlock } from "./parseResponse.js";

const app = express();
app.use(express.json());
app.use(cors());

const ports = process.env.PORT || 5500;
app.get("/", (req, res) => {
  res.send("Hello World! from API server");
});

app.post("/generate", async (req, res) => {
  const query = req.body.query;
  try {
    const result = await generate(query);
    const json = extractJsonFromCodeBlock(result);
    res.json({ response: json });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(ports, () => {
  console.log(`Server is running on port ${ports}`);
});
