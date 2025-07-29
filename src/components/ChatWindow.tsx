import React from 'react';
import { Message } from '../types';
import MessageBubble from './MessageBubble';

interface ChatWindowProps {
  messages: Message[];
  loading: boolean;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, loading }) => (
  <div className="flex-1 overflow-y-auto p-4 bg-gray-950">
    <div className="max-w-3xl mx-auto">
      <div className="space-y-2">
        {messages.map((message, idx) => (
          <MessageBubble key={idx} message={message} />
        ))}
        {loading && (
          <div className="flex justify-center items-center p-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default ChatWindow; 