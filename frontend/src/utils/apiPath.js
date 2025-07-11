// apiPath.js

export const BASE_URL = "http://localhost:7000";

export const apiPath = {
  // AUTHENTICATION
  register: `${BASE_URL}/api/auth/register`,
  login: `${BASE_URL}/api/auth/login`,
  getAllProfiles: `${BASE_URL}/api/auth/profile`,
  uploadImage: `${BASE_URL}/api/auth/update-image`,

  // SESSIONS
  createSession: `${BASE_URL}/api/sessions/create`,
  getMySessions: `${BASE_URL}/api/sessions/my-sessions`,
  getSessionById: (sessionId) => `${BASE_URL}/api/sessions/${sessionId}`,

  // QUESTIONS
  addQuestions: `${BASE_URL}/api/questions/add`,
  pinQuestion: (questionId) => `${BASE_URL}/api/questions/${questionId}/pin`,
  addNoteToQuestion: (questionId) =>
    `${BASE_URL}/api/questions/${questionId}/note`,

  // AI
  generateQuestions: `${BASE_URL}/api/ai/generate-questions`,
  generateExplanation: `${BASE_URL}/api/ai/generate-explanation`,
};
