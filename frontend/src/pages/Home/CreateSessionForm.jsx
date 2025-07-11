import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from "../../components/Inputs/input";
import axiosInstance from '../../utils/axiosInstance';
import { apiPath } from '../../utils/apiPath';

const CreateSessionForm = () => {
  const [formData, setFormData] = useState({
    role: "",
    experience: "",
    topicsToFocus: "",
    description: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleCreateSession = async (e) => {
    e.preventDefault();
    const { role, experience, topicsToFocus } = formData;

    if (!role || !experience || !topicsToFocus) {
      setError("Please fill all the required fields.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const aiResponse = await axiosInstance.post(apiPath.generateQuestions, {
        role,
        experience,
        topicsToFocus,
        numberOfQuestions: 10,
      });

      const generatedQuestions = aiResponse.data;

      const response = await axiosInstance.post(apiPath.createSession, {
        ...formData,
        questions: generatedQuestions,
      });

      if (response.data?.session?._id) {
        navigate(`/interview-prep/${response.data.session._id}`);
      }

    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">Start a New Interview Journey</h3>
      <p className="text-gray-600 mb-4">
        Fill out a few quick details and unlock your personalized set of Interview questions!
      </p>

      <form onSubmit={handleCreateSession} className="space-y-4">
        <Input
          value={formData.role}
          onChange={({ target }) => handleChange("role", target.value)}
          label="Target Role"
          placeholder="e.g. Frontend Developer, UI/UX Designer"
          type="text"
        />

        <Input
          value={formData.experience}
          onChange={({ target }) => handleChange("experience", target.value)}
          label="Experience"
          placeholder="e.g. 1 year, 3 months, etc."
          type="text"
        />

        <Input
          value={formData.topicsToFocus}
          onChange={({ target }) => handleChange("topicsToFocus", target.value)}
          label="Topics to Focus"
          placeholder="e.g. DSA, React, System Design"
          type="text"
        />

        <Input
          value={formData.description}
          onChange={({ target }) => handleChange("description", target.value)}
          label="Description"
          placeholder="Brief background or notes"
          type="text"
        />

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? 'Creating...' : 'Create Session'}
        </button>
      </form>
    </div>
  );
};

export default CreateSessionForm;
