import React from 'react';
import {getInitials} from '../../utils/helper';
const SummaryCard = ({
  colors,
  role,
  topicsToFocus,
  experience,
  questions,
  description,
  lastUpdated,
  onSelect,
  onDelete,
}) => {
  return (
    <div
      className="cursor-pointer transition-transform transform hover:scale-105"
      onClick={onSelect}
    >
      <div
        className="p-5 rounded-2xl shadow-lg bg-gradient-to-br from-blue-600 to-blue-800 text-white"
        style={{ background: colors?.bgcolor }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="bg-white text-blue-900 rounded-full w-12 h-12 flex items-center justify-center text-base font-bold shadow-md">
             {getInitials(role)}
            </div>
            <div>
              <h2 className="text-xl font-semibold">{role}</h2>
              <p className="text-sm opacity-80">{topicsToFocus}</p>
            </div>
          </div>
          <button
            className="text-red-200 hover:text-red-400 font-medium text-sm"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            Delete
          </button>
        </div>

        <div className="text-sm space-y-1 opacity-90">
          <p><span className="font-medium text-white">Experience:</span> {experience}</p>
          <p><span className="font-medium text-white">Description:</span> {description}</p>
          <p><span className="font-medium text-white">Questions:</span> {questions}</p>
          <p><span className="font-medium text-white">Last Updated:</span> {lastUpdated}</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
