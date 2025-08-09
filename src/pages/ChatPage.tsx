import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ChatInput from '../components/chat/ChatInput';
import FactsBubbles from '../components/FactsBubbles';
import Header from '../components/Header';
import ToolRenderer from '../components/tools/ToolRenderer';
import { sendChatMessage } from "../services/ai/chatService";
import { ChatMessage } from "../types";

const TYPING_SPEED = 20; // ms per character

const ChatPage = () => {
  const location = useLocation();
  const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [pendingAI, setPendingAI] = useState<string | null>(null);
  const [displayedAI, setDisplayedAI] = useState<string>("");
  const [currentToolCall, setCurrentToolCall] = useState<any>(null);
  const [hasInitialMessage, setHasInitialMessage] = useState(false);
  const typingInterval = useRef<number | null>(null);

  useEffect(() => {
    const initialInput = location.state?.initialInput;
    if (initialInput && !hasInitialMessage) {
      setInput(initialInput);
      setHasInitialMessage(true);
      setTimeout(() => {
        handleSend(initialInput);
      }, 100);
    }
  }, [location.state, hasInitialMessage]);

  useEffect(() => {
    if (pendingAI !== null) {
      setDisplayedAI("");
      let i = 0;
      typingInterval.current = window.setInterval(() => {
        setDisplayedAI(() => {
          if (pendingAI && i < pendingAI.length) {
            i++;
            return pendingAI.slice(0, i);
          } else {
            if (typingInterval.current) clearInterval(typingInterval.current);
            setPendingAI(null);
            return pendingAI;
          }
        });
      }, TYPING_SPEED);
    }
    return () => {
      if (typingInterval.current) clearInterval(typingInterval.current);
    };
  }, [pendingAI]);

  const handleSend = async (message?: string) => {
    const messageToSend = message || input;
    if (!messageToSend.trim() || loading) return;
    setLoading(true);
    const userMessage: ChatMessage = { role: "user", content: messageToSend };
    const updatedMessages = chatLog.filter(msg => msg.role !== "user").concat(userMessage);
    setChatLog(updatedMessages);
    setInput("");

    setPendingAI(null);
    setDisplayedAI("");
    setCurrentToolCall(null);

    const aiReply = await sendChatMessage(updatedMessages);
    setLoading(false);
    setPendingAI(aiReply.response || "No reply received.");
    
    setCurrentToolCall(aiReply.toolCalls || null);
  };

  return (
    <div className="bg-[#111111] min-h-screen px-3">
      <Header showFullHeader={false} />
      <div className="flex flex-col items-center bg-[#0A0A0A] w-full border border-zinc-800 rounded-2xl shadow-2xl">
        <div className="w-full max-w-4xl h-full overflow-hidden">
          <div className="flex flex-col h-[calc(100vh-5rem)]">
            <div className="flex-1 p-6 overflow-y-auto">
              {chatLog.map((msg, idx) => (
                <div key={idx} className={`mb-4 flex ${msg.role === "user" ? "justify-center" : "justify-start"}`}>
                  <span
                    className={`inline-block px-6 py-4 rounded-xl text-lg leading-relaxed break-words ${msg.role === "user"
                        ? "bg-[#2E2C2F] text-white max-w-[80%]"
                        : "text-white w-full"
                      }`}
                  >
                    {msg.content}
                  </span>
                </div>
              ))}
              {loading && (
                <div className="mb-4 text-left">
                  <span className="inline-block px-6 py-4 rounded-xl text-lg leading-relaxed break-words text-white w-full">
                    <span className="inline-block animate-pulse">Thinking<span className="animate-bounce">...</span></span>
                  </span>
                </div>
              )}
              {displayedAI && !loading && (
                <div className="mb-4 text-left">
                  <span className="inline-block px-6 py-4 rounded-xl text-lg leading-relaxed break-words text-white w-full">
                    {displayedAI}
                  </span>
                </div>
              )}
              {currentToolCall && !loading && (
                <div className="mb-4">
                  <ToolRenderer toolInvocations={currentToolCall} />
                </div>
              )}
            </div>
            <FactsBubbles 
              className="px-6 py-4" 
              onFactClick={(prompt) => handleSend(prompt)}
            />
            <div className="p-6">
              <ChatInput
                input={input}
                setInput={setInput}
                onSend={() => handleSend()}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
