// apiPath.js

const apiPath = {
  // AUTHENTICATION
  register: "/api/auth/register",
  login: "/api/auth/login",
  getAllProfiles: "/api/auth/profile",
  uploadImage: "/api/auth/update-image",

  // SESSIONS
  createSession: "/api/sessions/create",
  getMySessions: "/api/sessions/my-sessions",
  getSessionById: (sessionId) => `/api/sessions/${sessionId}`,

  // QUESTIONS
  addQuestions: "/api/questions/add",
  pinQuestion: (questionId) => `/api/questions/${questionId}/pin`,
  addNoteToQuestion: (questionId) => `/api/questions/${questionId}/note`,

  // AI
  generateQuestions: "/api/ai/generate-questions",
  generateExplanation: "/api/ai/generate-explanation",
};

module.exports = apiPath;
