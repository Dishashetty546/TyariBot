import React from 'react';

const RoleInfoHeader = ({
  role,
  topicsToFocus,
  experience,
  questions,
  description,
  lastUpdated
}) => {
  return (
    <div className="bg-blue-50 p-4 rounded shadow-md mb-4">
      <h2 className="text-2xl font-bold text-blue-700">{role}</h2>
      <p className="text-gray-600">Experience: {experience}</p>
      <p className="text-gray-600">Topics to Focus: {topicsToFocus}</p>
      <p className="text-gray-600">Questions: {questions}</p>
      <p className="text-gray-600">Last Updated: {lastUpdated}</p>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  );
};

export default RoleInfoHeader;
