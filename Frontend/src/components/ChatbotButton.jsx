import React from 'react';
import { MessageCircle, X } from 'lucide-react';

const ChatbotButton = ({ isOpen, onClick }) => {
  console.log('ChatbotButton rendered, isOpen:', isOpen); // Debug log

  const handleClick = () => {
    console.log('Button clicked!'); // Debug log
    onClick();
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <button
        onClick={handleClick}
        className={`
          w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg flex items-center justify-center
          transition-all duration-300 ease-in-out cursor-pointer
          ${isOpen 
            ? 'bg-red-500 hover:bg-red-600 text-white' 
            : 'bg-green-500 hover:bg-green-600 text-white'
          }
          hover:scale-110 active:scale-95
        `}
      >
        {isOpen ? (
          <X size={20} />
        ) : (
          <MessageCircle size={20} />
        )}
      </button>
    </div>
  );
};

export default ChatbotButton;
