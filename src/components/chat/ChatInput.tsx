import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ChatInputProps {
  input: string;
  setInput: (val: string) => void;
  onSend: () => void;
  loading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ input, setInput, onSend, loading }) => {
  return (
    <div className="relative w-full">

      <div className="relative flex items-center w-full md:p-[6px] rounded-full bg-white/30 backdrop-blur-md shadow-lg border border-gray-400/50">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && onSend()}
          placeholder="Ask me anything..."
          className="flex-1 px-3 py-4 text-gray-800 bg-transparent placeholder-gray-600 focus:outline-none rounded-l-full"
          disabled={loading}
        />

        <button
          onClick={onSend}
          disabled={loading}
          className="w-10 h-10 flex items-center justify-center bg-blue-400 hover:bg-blue-500 transition-colors text-white rounded-full mr-1 disabled:opacity-50"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
