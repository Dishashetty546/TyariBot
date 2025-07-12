// File: src/components/Cards/QuestionCard.jsx

import React, { useState, useEffect, useRef } from 'react';
import { LuChevronDown, LuPin, LuPinOff, LuSparkles } from 'react-icons/lu';

const QuestionCard = ({
  question,
  answer,
  onLearnMore,
  isPinned,
  onTogglePin
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isExpanded) {
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(contentHeight);
    } else {
      setHeight(0);
    }
  }, [isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 mb-4 overflow-hidden transition-all duration-300">
      <div className="flex justify-between items-center p-4 cursor-pointer" onClick={toggleExpand}>
        <div className="flex gap-2 items-start">
          <span className="text-blue-600 font-semibold">Q:</span>
          <h3 className="text-md font-medium text-gray-800">{question}</h3>
        </div>
        <LuChevronDown className={`text-gray-600 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
      </div>

      <div
        ref={contentRef}
        className="transition-all duration-300 ease-in-out px-4"
        style={{ maxHeight: `${height}px`, overflow: 'hidden' }}
      >
        <p className="py-2 text-gray-700 text-sm">
          <span className="font-semibold text-green-600">Answer:</span> {answer}
        </p>
        <div className="flex items-center gap-4 pb-4">
          <button
            onClick={onLearnMore}
            className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
          >
            <LuSparkles /> Learn More
          </button>
          <button
            onClick={onTogglePin}
            className="flex items-center gap-1 text-sm text-yellow-600 hover:underline"
          >
            {isPinned ? <LuPinOff /> : <LuPin />}
            {isPinned ? 'Unpin' : 'Pin'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
