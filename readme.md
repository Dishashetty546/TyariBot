# 🤖 TyariBot – AI-Powered Mock Interview Platform

![TyariBot Logo](./ScreenShots/l.png)

A full-stack intelligent mock interview simulator that helps users prepare for real-world technical interviews. Built using the MERN stack, JWT auth, and Gemini AI integration, TyariBot generates personalized interview questions and detailed explanations with code — just like a real interviewer would.

---

## 🌐 Live Demo

🔗 **Frontend**: [https://tyari-bot.vercel.app](https://tyari-bot.vercel.app)  
⚙️ **Backend**: [https://tyaribot.onrender.com](https://tyaribot.onrender.com)

---

## ✨ Features

- Secure user authentication using JWT
- Personalized session setup (Role, Experience, Topics)
- AI-powered question generation using Gemini API
- Detailed explanations and code via "Learn More"
- Session and question management with notes/pins
- Image upload support for user profiles
- Clean, modern responsive UI with Tailwind CSS
- Deployed: Vercel (Frontend) + Render (Backend)

---

## 🧠 Use Case

> _"I want to prepare for frontend interviews, but I’m overwhelmed by scattered topics."_  
> → **TyariBot** lets users define what they want to study, generates questions via Gemini AI, and guides them with clear answers — a personal AI mentor!

---

## 🔧 Tech Stack

| Layer          | Tech Stack                     |
| -------------- | ------------------------------ |
| Frontend       | React, Vite, Tailwind CSS      |
| Backend        | Node.js, Express.js            |
| AI Integration | Google Gemini Generative AI    |
| Authentication | JWT, bcryptjs                  |
| Database       | MongoDB Atlas                  |
| Deployment     | Vercel (FE), Render (BE)       |
| Utilities      | Multer (images), dotenv, axios |

---

## 📁 Folder Structure

TyariBot/
├── backend/ # Express server, routes, controllers
│ ├── routes/
│ ├── middleware/
│ └── controllers/
├── frontend/ # React + Vite application
│ └── src/
│ ├── components/
│ ├── pages/
│ └── utils/

---

## 🧭 Complete Workflow – From Landing Page to AI Output

### 1️⃣ Landing Page – First Impression

📍 **Route:** `/`  
🛠️ **Tech Used:** React + Tailwind CSS

- Clean and engaging interface
- Brief description of platform features
- “Get Started” CTA → navigates to login or registration

🖼️ _Screenshot Placeholder:_  
`./screenshots/landing-page.png`

---

### 2️⃣ User Authentication (JWT Secured)

📍 **Routes:** `/login`, `/register`  
🛠️ **Tech Used:** React Forms + Express + MongoDB + JWT

- 🔐 Register with name, email, password
- Login generates a JWT token on success
- Token stored in `localStorage`
- All protected API routes validate the token via middleware

````js
// Express Middleware Example
``` app.use("/api/ai/generate-questions", protect, generateInterviewQuestions);

## 🧭 Workflow – From Dashboard to Completion

---

### 3️⃣ Create Interview Session

📍 **Page:** `/dashboard`
🛠️ **Tech Used:** React Form → Express API

Users define their session with:

- 👤 **Role** (e.g., Frontend Developer)
- ⏳ **Years of Experience**
- 📚 **Topics** (e.g., Java, OOP, React)
- 🎯 **Reason for Preparation** (e.g., "Preparing for MAANG interview")

✅ Session data is stored in **MongoDB** for later reference.

🖼️ *Screenshot Placeholder:*
`./screenshots/create-session.png`

---

### 4️⃣ Generate Interview Questions (AI - Gemini Integration)

📍 **API:** `/api/ai/generate-questions`
🛠️ **Tech Used:** Google Gemini API + Node + Express

- Sends session input to Gemini API
- AI generates a **custom set of interview questions**
- Questions are rendered **point-wise** with collapsible views

🖼️ *Screenshot Placeholder:*
`./screenshots/generated-questions.png`

---

### 5️⃣ View Answers + “Learn More”

📍 **API:** `/api/ai/generate-explanation`
🛠️ **Tech Used:** Gemini API → Markdown Parsing + Syntax Highlighting

- Each question has an option to view a **short answer**
- If not satisfied, users click **“Learn More”**

Gemini provides:

- 📘 **Detailed explanation**
- 💻 **Sample code** (rendered in dark mode using `<pre><code>` blocks)

🖼️ *Screenshot Placeholder:*
`./screenshots/detailed-answer.png`

---

### 6️⃣ Session Management Dashboard

📍 **Page:** `/my-sessions`
🛠️ **Tech Used:** React + REST API

- 📁 View all saved sessions
- 📌 Pin key questions for future review
- 📝 Add personal notes for each question

🖼️ *Screenshot Placeholder:*
`./screenshots/session-dashboard.png`

---

## ⚙️ Local Setup Instructions

---

### 🛠 Backend Setup

```bash
cd backend
npm install
npm run dev

````
