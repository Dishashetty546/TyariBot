import React from 'react';
import ReactMarkdown from 'react-markdown';

const AIResponse = ({ explanation }) => {
  if (!explanation) return null;

  const renderExplanation = () => {
    const blocks = explanation.split(/```/);

    return blocks.map((block, index) => {
      const isCode = index % 2 === 1;

      if (isCode) {
        return (
          <pre
            key={index}
            className="bg-[#1e1e1e] text-green-200 text-sm rounded-xl p-4 overflow-x-auto my-6 font-mono shadow-lg"
          >
            <code>{block.trim()}</code>
          </pre>
        );
      } else {
        return (
          <div
            key={index}
            className="mb-4 border-l-4 border-blue-400 bg-gray-50 px-4 py-3 rounded-md text-gray-800 text-base leading-relaxed"
          >
            <ReactMarkdown
              components={{
                strong: ({ children }) => <strong className="text-blue-800">{children}</strong>,
                em: ({ children }) => <em className="text-gray-600 italic">{children}</em>,
                ul: ({ children }) => <ul className="list-disc ml-5 space-y-1">{children}</ul>,
                li: ({ children }) => <li>{children}</li>,
              }}
            >
              {block}
            </ReactMarkdown>
          </div>
        );
      }
    });
  };

  return (
    <div className="mt-8 bg-white border border-blue-200 rounded-2xl shadow-lg p-6 transition-all">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 border-b pb-3 border-blue-300">
        📘 Detailed Explanation
      </h2>
      <div className="space-y-4">{renderExplanation()}</div>
    </div>
  );
};

export default AIResponse;
