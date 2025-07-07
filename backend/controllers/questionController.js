const Question = require("../Models/Question");
const Session = require("../Models/Session");

exports.addQuestionsToSession = async (req, res) => {
  try {
    const { sessionId, question } = req.body;

    if (!sessionId || !question || !Array.isArray(question)) {
      return res.status(400).json({ message: "Invalid input data" });
    }

    const session = await Session.findById(sessionId);
    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    const createdQuestions = await Question.insertMany(
      question.map((q) => ({
        session: sessionId,
        question: q.question,
        answer: q.answer,
        isPinned: false,
        note: "",
      }))
    );

    session.questions.push(...createdQuestions.map((q) => q._id));
    await session.save();

    res.status(201).json(createdQuestions);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.TogglePinQuestion = async (req, res) => {
  try {
    const { questionId } = req.body;

    if (!questionId) {
      return res.status(400).json({ message: "Question ID is required" });
    }

    const question = await Question.findById(questionId);
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    question.isPinned = !question.isPinned;
    await question.save();

    res.status(200).json({
      message: `Question ${
        question.isPinned ? "pinned" : "unpinned"
      } successfully`,
      question,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.updateQuestionNote = async (req, res) => {
  try {
    const { questionId, note } = req.body;

    if (!questionId || typeof note !== "string") {
      return res.status(400).json({ message: "Invalid input data" });
    }

    const question = await Question.findById(questionId);
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    question.note = note;
    await question.save();

    res.status(200).json({
      message: "Note updated successfully",
      question,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
