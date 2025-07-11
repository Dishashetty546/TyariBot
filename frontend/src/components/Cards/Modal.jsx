

import React from 'react';

const Modal = ({ isOpen, onClose, children, hideHeader = false }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative">
        {!hideHeader && (
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              &times;
            </button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
