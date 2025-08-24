import React from 'react';
import { motion } from 'framer-motion';
import LoadingDots from './LoadingDots';

const MessageBubble = ({ message }) => {
  const isUser = message.type === 'user';
  const isBot = message.type === 'bot';
  const isLoading = message.type === 'loading';
  const isError = message.type === 'error';

  const getBubbleStyle = () => {
    if (isUser) {
      return 'bg-green-500 text-white ml-auto';
    } else if (isError) {
      return 'bg-red-100 text-red-800 border border-red-200';
    } else {
      return 'bg-gray-100 text-gray-800';
    }
  };

  const formatContent = (content) => {
    return content.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < content.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <motion.div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${getBubbleStyle()}`}>
        {isLoading ? (
          <LoadingDots />
        ) : (
          <div className="text-sm">
            {formatContent(message.content)}
          </div>
        )}
        <div className={`text-xs mt-1 ${isUser ? 'text-green-100' : 'text-gray-500'}`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </motion.div>
  );
};

export default MessageBubble;
