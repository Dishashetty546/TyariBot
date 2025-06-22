import React, { useState } from 'react';
import { APP_FEATURES } from "../utils/data";
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [openAuthModel, setOpenAuthModel] = React.useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    navigate('/dashboard'); // You can change this route
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 text-white relative flex justify-center items-center px-4">
      <div className="w-full max-w-4xl bg-white text-gray-800 rounded-2xl shadow-2xl p-10 relative z-10">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div className="text-3xl font-bold text-gray-900">TyariBot</div>
          <button
            onClick={() => setOpenAuthModel(true)}
            className="bg-gradient-to-r from-gray-800 to-gray-400 text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition duration-300"
          >
            Login / SignUp
          </button>
        </header>

        {/* Hero Content */}
        <div className="space-y-8">
          <div>
            <div className="text-sm uppercase text-orange-600 font-semibold tracking-wider mb-2">AI Powered</div>
            <h1 className="text-4xl font-extrabold leading-snug text-gray-900">
              Ace Interviews With <br />
              <span className="text-gray-500">AI-Powered</span> Learning
            </h1>
          </div>

          <p className="text-md text-gray-700 leading-relaxed">
            Get role-based specific questions, expand answers when you need them,
            dive deeper into concepts, and organize everything your way.
            From preparation to mastery — your ultimate interview toolkit is here.
          </p>

          <button
            onClick={handleCTA}
            className="mt-4 bg-gradient-to-r from-gray-800 to-gray-400 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition duration-300"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Optional Overlay or Auth Modal */}
      {openAuthModel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-20">
          <div className="bg-white text-black p-6 rounded-xl shadow-xl w-[90%] max-w-md">
            <h2 className="text-xl font-bold mb-4">Authentication</h2>
            <p>Implement your login/signup form here.</p>
            <button
              onClick={() => setOpenAuthModel(false)}
              className="mt-4 text-sm text-blue-900 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
