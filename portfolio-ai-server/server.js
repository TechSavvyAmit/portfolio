import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";
import path from "path";
import { fileURLToPath } from "url";

const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const knowledgePath = path.join(
  __dirname,
  "../src/knowledge"
);

const loadJSON = (fileName) =>
  JSON.parse(
    fs.readFileSync(
      path.join(knowledgePath, fileName),
      "utf8"
    )
  );
dotenv.config();

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});


const app = express();

app.use(cors());
app.use(express.json());

// Load Knowledge Files
const profile = loadJSON("profile.json");
const skills = loadJSON("skills.json");
const projects = loadJSON("projects.json");
const experience = loadJSON("experience.json");
const education = loadJSON("education.json");
const achievements = loadJSON("achievements.json");
const github = loadJSON("github.json");
// Build Context
const context = `
PROFILE:
${JSON.stringify(profile)}

SKILLS:
${JSON.stringify(skills)}

PROJECTS:
${JSON.stringify(projects)}

EXPERIENCE:
${JSON.stringify(experience)}

EDUCATION:
${JSON.stringify(education)}


GITHUB:
${JSON.stringify(github)}

ACHIEVEMENTS:
${JSON.stringify(achievements)}
`;

app.get("/", (req, res) => {
  res.send("Amit AI Assistant Backend Running 🚀");
});

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const prompt = `
You are Amit's AI Portfolio Assistant.

Rules:
1. Answer only from the provided portfolio information.
2. Do not make up information.
3. If information is unavailable say:
   "I couldn't find that information in Amit's profile."
4. Speak professionally.
5. If asked about skills, projects, experience, education, achievements, provide detailed answers.

Portfolio Information:

${context}

User Question:
${message}
`;

    const result = await model.generateContent(prompt);

    const reply = result.response.text();

    res.json({
      success: true,
      reply,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      reply: "Something went wrong",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});