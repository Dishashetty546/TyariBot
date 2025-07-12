require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
// Add this at the top of server.js
const { protect } = require("./middleware/authMiddleware");

// Import routes
const authRoutes = require("./routes/authRoutes");
const sessionRoutes = require("./routes/sessionRoutes");

const questionRoutes = require("./routes/questionRoutes");

// Import AI middleware/controllers
const {
  generateInterviewQuestions,
  generateConceptExplanation,
} = require("./controllers/aiController");

// Connect to database
const connectDB = require("./config/db");
connectDB();
app.get("/", (req, res) => {
  res.send("🚀 TyariBot backend is running!");
});

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/questions", questionRoutes);

app.use("/api/ai/generate-questions", protect, generateInterviewQuestions);
app.use("/api/ai/generate-explanation", protect, generateConceptExplanation);
// Serve static files (e.g., uploaded images)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
