const express = require("express");
const {
  createSession,
  getMySessionsById,
  getMySessions,
  deleteSessions,
} = require("../controllers/sessionController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", protect, createSession);
router.get("/my-sessions", protect, getMySessions);
router.get("/:id", protect, getMySessionsById);
router.delete("/:id", protect, deleteSessions);

module.exports = router;
