import React from 'react';

const Modal = ({ children, isOpen, onClose, hideHeader }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white text-black p-6 rounded-xl shadow-xl w-[90%] max-w-md relative">
        {!hideHeader && (
          <div className="flex justify-end">
            <button onClick={onClose} className="text-xl font-bold text-gray-600 hover:text-gray-900">&times;</button>
          </div>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
