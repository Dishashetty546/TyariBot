import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import Login from '../pages/Auth/Login';
import SignUp from '../pages/Auth/SignUp';
import image from '../assets/Landing.png';

const LandingPage = () => {
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleOpenModal = () => setOpenAuthModal(true);
  const handleCloseModal = () => {
    setOpenAuthModal(false);
    setCurrentPage("login");
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white overflow-y-auto">
      {/* Header */}
      <header className="w-full px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">TyariBot</h1>
        <button
          onClick={handleOpenModal}
          className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition"
        >
          Login / Sign Up
        </button>
      </header>

      {/* Hero Section */}
      <section className="w-full h-[90vh] flex flex-col md:flex-row items-center justify-center px-6 md:px-20 space-y-10 md:space-y-0">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Crack Interviews with <br />
            <span className="text-orange-500">AI-Powered Mock Practice</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Practice real-time interview questions, get instant feedback, and level up your skills.
          </p>
          <button
            onClick={handleOpenModal}
            className="mt-4 bg-orange-600 hover:bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md transition"
          >
            Start Practicing
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={image}
            alt="AI Interview"
            className="w-80 h-auto object-contain"
          />
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-20 bg-gray-100 text-gray-800 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Real-Time Feedback",
              desc: "Get AI-powered insights on clarity, communication, and logic.",
            },
            {
              title: "Role-Based Questions",
              desc: "Practice based on your job role: SDE, Analyst, Designer, and more.",
            },
            {
              title: "Speech Mock Mode",
              desc: "Speak out your answers and get evaluated just like a real interview.",
            },
            {
              title: "Analytics & Progress",
              desc: "Track your growth, strengths, and areas to improve.",
            },
          ].map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-20 bg-white text-gray-800 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">What Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <p className="italic">
              “TyariBot helped me ace my Amazon interview — the AI feedback was a game-changer!”
            </p>
            <p className="text-sm text-right mt-4 text-gray-500">— Priya, Final Year CS Student</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <p className="italic">
              “I used TyariBot daily before my interviews. It boosted my confidence massively.”
            </p>
            <p className="text-sm text-right mt-4 text-gray-500">— Arjun, Job Seeker</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gradient-to-r from-orange-600 to-yellow-500 text-white text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Ready to Crack Your Dream Job?</h2>
        <p className="text-lg mb-6">Join thousands of students who trust TyariBot for interview prep.</p>
        <button
          onClick={handleOpenModal}
          className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Get Started Now
        </button>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-sm text-gray-300">
        Built with <span className="text-red-500">❤</span> by the TyariBot Team.
      </footer>

      {/* Modal */}
      <Modal isOpen={openAuthModal} onClose={handleCloseModal} hideHeader>
        {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
        {currentPage === "signup" && <SignUp setCurrentPage={setCurrentPage} />}
      </Modal>
    </div>
  );
};

export default LandingPage;
