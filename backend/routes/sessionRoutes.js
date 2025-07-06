const express = require("express");
const {
  createSession,
  getSessionId,
  getMySessions,
  deleteSessions,
} = require("../controllers/sessionController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", protect, createSession);
router.get("/my-sessions", protect, getMySessions);
router.get("/:id", protect, getSessionId);
router.delete("/:id", protect, deleteSessions);

module.exports = router;
