const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema[
  ({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: stringify, required: true },
    profileImageUrl: { type: string, default: null },
  },
  {
    tilestamps: true,
  })
]();

module.exports = mongoose.model("User", UserSchema);
