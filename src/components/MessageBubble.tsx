import React from 'react';
import { Message } from '../types';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => (
  <div
    className={`p-3 rounded-lg max-w-[80%] mb-2 text-sm break-words shadow-md transition-colors duration-200 \
      ${message.sender === 'user' ? 'bg-green-600 text-white ml-auto' : 'bg-gray-800 text-gray-100 mr-auto'}`}
  >
    {message.text}
  </div>
);

export default MessageBubble; 