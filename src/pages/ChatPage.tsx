import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ChatInput from '../components/chat/ChatInput';
import FactsBubbles from '../components/FactsBubbles';
import Header from '../components/Header';
import ToolRenderer from '../components/tools/ToolRenderer';
import { sendChatMessage } from "../services/ai/chatService";
import { ChatMessage } from "../types";
import MoreQuestionsSheet from "../components/QuestionSheet";
import { MoreHorizontal } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'framer-motion';

const markdownComponents = {
  p: ({ children }: any) => <p className="mb-3 last:mb-0 leading-relaxed">{children}</p>,
  strong: ({ children }: any) => <strong className="font-semibold text-white">{children}</strong>,
  em: ({ children }: any) => <em className="italic text-white/70">{children}</em>,
  ul: ({ children }: any) => <ul className="list-disc list-outside ml-5 space-y-1.5 mb-3">{children}</ul>,
  ol: ({ children }: any) => <ol className="list-decimal list-outside ml-5 space-y-1.5 mb-3">{children}</ol>,
  li: ({ children }: any) => <li className="leading-relaxed">{children}</li>,
  h1: ({ children }: any) => <h1 className="text-2xl font-bold mb-3 mt-1">{children}</h1>,
  h2: ({ children }: any) => <h2 className="text-xl font-semibold mb-2 mt-3">{children}</h2>,
  h3: ({ children }: any) => <h3 className="text-base font-semibold mb-1.5 mt-2 text-white">{children}</h3>,
  pre: ({ children }: any) => <pre className="bg-zinc-900 border border-zinc-700 rounded-xl p-4 my-3 overflow-x-auto text-sm font-mono">{children}</pre>,
  code: ({ children, className }: any) => Boolean(className)
    ? <code className="text-emerald-400 font-mono">{children}</code>
    : <code className="bg-zinc-800 border border-zinc-700 rounded px-1.5 py-0.5 text-xs font-mono text-emerald-400">{children}</code>,
  a: ({ href, children }: any) => <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">{children}</a>,
  blockquote: ({ children }: any) => <blockquote className="border-l-2 border-zinc-600 pl-4 text-white/60 italic my-2">{children}</blockquote>,
};

const TYPING_SPEED = 20; // ms per character
const USER_VISIBLE_MS = 1200;
const USER_FADE_MS = 500;
const ENTER_TICK_MS = 20; // one paint tick to enable CSS enter transition


const ChatPage = () => {
  const location = useLocation();
  const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [pendingAI, setPendingAI] = useState<string | null>(null);
  const [displayedAI, setDisplayedAI] = useState<string>("");
  const [currentToolCall, setCurrentToolCall] = useState<any>(null);
  const [isUserFading, setIsUserFading] = useState(false);
  const [isUserEntering, setIsUserEntering] = useState(false);
  const [showFacts, setShowFacts] = useState(true);
  const [hasInitialMessage, setHasInitialMessage] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const typingInterval = useRef<number | null>(null);
  const fadeTimeoutRef = useRef<number | null>(null);
  const removeTimeoutRef = useRef<number | null>(null);
  const enterTimeoutRef = useRef<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isNearBottomRef = useRef(true);

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
            return pendingAI as string;
          }
        });
      }, TYPING_SPEED);
    }
    return () => {
      if (typingInterval.current) clearInterval(typingInterval.current);
    };
  }, [pendingAI]);

  useEffect(() => {
    return () => {
      if (fadeTimeoutRef.current) window.clearTimeout(fadeTimeoutRef.current);
      if (removeTimeoutRef.current) window.clearTimeout(removeTimeoutRef.current);
      if (enterTimeoutRef.current) window.clearTimeout(enterTimeoutRef.current);
    };
  }, []);

  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    isNearBottomRef.current = el.scrollHeight - el.scrollTop - el.clientHeight < 100;
  };

  useEffect(() => {
    if (isNearBottomRef.current) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [displayedAI, loading, currentToolCall]);

  const handleSend = async (message?: string, displayText?: string) => {
    const messageToSend = message || input;
    if (!messageToSend.trim() || loading) return;
    setLoading(true);
    isNearBottomRef.current = true;
    const userMessage: ChatMessage = { role: "user", content: displayText || messageToSend };
    setChatLog([userMessage]);
    setInput("");

    setPendingAI(null);
    setDisplayedAI("");
    setCurrentToolCall(null);

    if (fadeTimeoutRef.current) window.clearTimeout(fadeTimeoutRef.current);
    if (removeTimeoutRef.current) window.clearTimeout(removeTimeoutRef.current);
    if (enterTimeoutRef.current) window.clearTimeout(enterTimeoutRef.current);
    setIsUserFading(false);
    // Animation
    setIsUserEntering(true);
    enterTimeoutRef.current = window.setTimeout(() => {
      setIsUserEntering(false);
    }, ENTER_TICK_MS);
    fadeTimeoutRef.current = window.setTimeout(() => {
      setIsUserFading(true);
    }, USER_VISIBLE_MS);

    removeTimeoutRef.current = window.setTimeout(() => {
      setChatLog([]);
      setIsUserFading(false);
    }, USER_VISIBLE_MS + USER_FADE_MS);

    const aiReply = await sendChatMessage([{ role: "user", content: messageToSend }]);
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
            <div ref={scrollContainerRef} onScroll={handleScroll} className="flex-1 p-3 md:p-6 overflow-y-auto scrollbar-dark">
              {chatLog.map((msg, idx) => (
                <div key={`${msg.role}-${idx}`} className={`mb-4 flex ${msg.role === "user" ? "justify-center" : "justify-start"}`}>
                  <span
                    className={`inline-block px-6 py-4 rounded-xl text-base leading-relaxed break-words transition-all duration-500 ease-out ${msg.role === "user"
                        ? `bg-[#2E2C2F] text-white max-w-[80%] ${isUserFading ? 'opacity-0 translate-y-1 scale-95' : isUserEntering ? 'opacity-0 translate-y-3 scale-95' : 'opacity-100 translate-y-0 scale-100'}`
                        : "text-white w-full"
                      }`}
                  >
                    {msg.content}
                  </span>
                </div>
              ))}
              {loading && (
                <div className="mb-4 px-1 py-4">
                  <div className="flex gap-1.5 items-center">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-2 h-2 rounded-full bg-zinc-500"
                        animate={{ y: [0, -5, 0], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 0.8, delay: i * 0.15, repeat: Infinity, ease: "easeInOut" }}
                      />
                    ))}
                  </div>
                </div>
              )}
              {displayedAI && !loading && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4 text-left"
                >
                  <div className="px-1 py-4 text-base leading-relaxed text-white w-full">
                    <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                      {displayedAI}
                    </ReactMarkdown>
                  </div>
                </motion.div>
              )}
              {currentToolCall && !loading && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="mb-4"
                >
                  <ToolRenderer toolInvocations={currentToolCall} />
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="relative">
              <div className="flex items-center justify-center px-6 pt-2">
                <button
                  type="button"
                  className="text-xs text-zinc-300 hover:text-white underline underline-offset-2"
                  onClick={() => setShowFacts((s) => !s)}
                >
                  {showFacts ? 'Hide quick questions' : 'Show quick questions'}
                </button>
              </div>
              {showFacts && (
                <>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-3 left-0 right-0 h-6 bg-gradient-to-t from-[#0A0A0A] to-transparent"
                  />
                  <FactsBubbles
                    className="px-6 pt-3 gap-2"
                    onFactClick={(display, prompt) => handleSend(prompt, display)}
                    extra={(
                      <button
                        type="button"
                        className="ml-2 flex items-center gap-2 px-3 md:px-4 py-1.5 bg-[#1e1e1e] text-xs md:text-sm text-white border border-zinc-700 rounded-full shadow-sm hover:bg-[#2a2a2a] transition-colors duration-200"
                        onClick={() => setMoreOpen(true)}
                        aria-label="More questions"
                      >
                        <MoreHorizontal size={16} />
                      </button>
                    )}
                  />
                  {/* "..." more button */}
                </>
              )}
            </div>
            <div className="px-6 pt-3 pb-5">
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

      <MoreQuestionsSheet
        open={moreOpen}
        onClose={() => setMoreOpen(false)}
        onPick={(display, prompt) => {
          setMoreOpen(false);
          handleSend(prompt, display);
        }}
      />
    </div>
  );
};

export default ChatPage;
