
import React from 'react';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser, timestamp }) => {
  return (
    <div className={`mb-4 ${isUser ? 'flex justify-end' : 'flex justify-start'}`}>
      <div className={isUser ? 'chat-bubble-user' : 'chat-bubble-ai'}>
        <p className="text-base font-sans">{message}</p>
        {timestamp && (
          <div className={`text-xs mt-1 ${isUser ? 'text-agency-gray/70' : 'text-white/70'} text-right font-sans`}>
            {timestamp}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
