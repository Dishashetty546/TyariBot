exports.isJSDocProtectedTag = (req, res, next) => {
  console.log("Protected middleware hit");
  next();
};

exports.generateInterviewQuestions = (req, res) => {
  res.json({ message: "Questions generated successfully" });
};

exports.generateConceptExplanation = (req, res) => {
  res.json({ message: "Explanation generated successfully" });
};
