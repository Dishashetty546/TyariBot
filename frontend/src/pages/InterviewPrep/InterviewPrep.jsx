// File: src/pages/InterviewPrep/InterviewPrep.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { toast } from 'react-hot-toast';
import { AnimatePresence, motion } from 'framer-motion';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import RoleInfoHeader from './components/RoleInfoHeader';
import QuestionCard from '../../components/Cards/QuestionCard';
import AIResponse from '../../components/Cards/AiResponse';
import axiosInstance from '../../utils/axiosInstance';
import { apiPath } from '../../utils/apiPath';

const InterviewPrep = () => {
  const { sessionId } = useParams();
  const [sessionData, setSessionData] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [openLearnMoreDrawer, setOpenLearnMoreDrawer] = useState(false);
  const [explanations, setExplanations] = useState({});
  const [loadingExplanations, setLoadingExplanations] = useState({});
  const [isUpdateLoader, setUpdateLoader] = useState(false);

  const fetchSessionDetailsById = async () => {
    try {
      const response = await axiosInstance.get(apiPath.getSessionById(sessionId));
      if (response.data && response.data.session) {
        setSessionData(response.data.session);
      }
    } catch (error) {
      console.error("Error fetching session:", error);
      toast.error("Failed to fetch session details.");
      setErrorMsg("Unable to load session data.");
    }
  };

  const generateConceptExplanation = async (questionObj) => {
    const questionId = questionObj._id;
    setLoadingExplanations(prev => ({ ...prev, [questionId]: true }));

    try {
      const res = await axiosInstance.post(apiPath.generateExplanation, {
        question: questionObj.question,
      });

      if (res.data?.explanation) {
        setExplanations(prev => ({
          ...prev,
          [questionId]: res.data.explanation,
        }));
      }
    } catch (err) {
      toast.error("Failed to generate explanation.");
    } finally {
      setLoadingExplanations(prev => ({ ...prev, [questionId]: false }));
    }
  };

  const toggleQuestionPinStatus = async (question) => {
  try {
    const response = await axiosInstance.post(
      apiPath.pinQuestion(question._id),
      { isPinned: !question.isPinned }
    );

    if (response.data?.success) {
      setSessionData((prevData) => {
        const updatedQuestions = prevData.questions.map((q) =>
          q._id === question._id ? { ...q, isPinned: !q.isPinned } : q
        );
        return { ...prevData, questions: updatedQuestions };
      });
      toast.success(`Question ${question.isPinned ? 'unpinned' : 'pinned'} successfully.`);
    } else {
      toast.error("Unexpected response from server.");
    }
  } catch (error) {
    console.error("Toggle pin error:", error.response?.data || error.message);
    toast.error("Failed to update pin status.");
  }
};

  useEffect(() => {
    if (sessionId) {
      fetchSessionDetailsById();
    }
  }, [sessionId]);

  return (
    <DashboardLayout>
      <RoleInfoHeader
        role={sessionData?.role || ''}
        topicsToFocus={sessionData?.topicsToFocus || ''}
        experience={sessionData?.experience || ''}
        questions={sessionData?.questions?.length || 0}
        description={sessionData?.description || ''}
        lastUpdated={
          sessionData?.updatedAt
            ? moment(sessionData.updatedAt).format('DD MMM YYYY')
            : ''
        }
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Interview Q and A</h2>
        <div className={`${openLearnMoreDrawer ? "md:col-span-2" : ""}`}>
          <AnimatePresence>
            {sessionData?.questions?.map((data, index) => (
              <motion.div
                key={data._id || index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="mb-4"
              >
                <QuestionCard
                  question={data?.question}
                  answer={data?.answer}
                  isPinned={data?.isPinned}
                  onTogglePin={() => toggleQuestionPinStatus(data)}
                  onLearnMore={() => generateConceptExplanation(data)}
                />
                {loadingExplanations[data._id] && (
                  <p className="text-sm text-gray-500 italic px-2">Generating explanation...</p>
                )}
                {explanations[data._id] && (
                  <AIResponse explanation={explanations[data._id]} />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InterviewPrep;
