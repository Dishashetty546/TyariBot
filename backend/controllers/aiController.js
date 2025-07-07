const { GoogleGenAI } = require("@google/genai");
const {
  questionAnswerPrompt,
  conceptExplainPrompt,
} = require("../utils/prompts");

const ai = new GoogleGenAI({ apikey: process.env.GEMINI_API_KEY });

const generateInterviewQuestions = async (req, res) => {
  try {
    const { role, experience, topicsToFocus, numberOfQuestions } = req.body;
    const prompt = questionAnswerPrompt(
      role,
      experience,
      topicsToFocus,
      numberOfQuestions
    );

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-lite",
      contents: prompt,
    });

    let rawText = response.text || response.choices?.[0]?.text || "";
    const cleanedText = rawText
      .replace(/^```json\s*/, "")
      .replace(/```$/, "")
      .trim();

    const data = JSON.parse(cleanedText);
    return res.status(200).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to generate questions", error: error.message });
  }
};

const generateConceptExplanation = async (req, res) => {
  try {
    const { question } = req.body;
    const prompt = conceptExplainPrompt(question);

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-lite",
      contents: prompt,
    });

    let explanation = response.text || response.choices?.[0]?.text || "";
    explanation = explanation.trim();

    return res.status(200).json({ explanation });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: "Failed to generate explanation",
        error: error.message,
      });
  }
};

module.exports = { generateInterviewQuestions, generateConceptExplanation };
