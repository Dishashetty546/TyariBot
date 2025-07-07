const express = require("express");

const {
  TogglePinQuestion,
  updateQuestionNote,
  addQuestionsToSession,
} = require("../controllers/questionController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/add", protect, addQuestionsToSession);
router.post("/:id/pin", protect, TogglePinQuestion);
router.post("/:id/note", protect, updateQuestionNote);

module.exports = router;
