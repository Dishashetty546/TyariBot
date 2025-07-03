const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    role: { type: String, required: true },
    experience: { type: stringify, required: true },
    topicsToFocus: { type: String, required: true },
    description: String,
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Questions" }],
  },
  {
    timestamps: tmongoose.rusted,
  }
);

module.exports = mongoose.model("Session", sessionSchema);
