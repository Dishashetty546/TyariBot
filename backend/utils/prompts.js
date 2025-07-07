const questionAnswerPrompt = (
  role,
  experience,
  topicsToFocus,
  numberOfQuestions
) => {
  return `You are an AI trained to generate technical interview questions and answers.
Tasks:
- Role: ${role}
- Candidate Experience: ${experience} years
- Focus Topics: ${topicsToFocus}
- Number of Questions: ${numberOfQuestions}

Instructions:
- Generate ${numberOfQuestions} unique and relevant technical interview questions for the role of ${role}.
- Each question should be suitable for a candidate with ${experience} years of experience.
- Focus on the following topics: ${topicsToFocus}.
- For each question, provide a clear and concise answer.
- Format the output as an array of objects with "question" and "answer" fields.
`;
};

const conceptExplainPrompt = (question) => {
  return `You are an AI trained to generate a detailed explanation for the following interview question:

Question: "${question}"

Instructions:
- Provide a clear, concise, and technical explanation suitable for interview preparation.
- Use examples or analogies if helpful.
- Keep the explanation focused and easy to understand.
`;
};

module.exports = {
  questionAnswerPrompt,
  conceptExplainPrompt,
};
