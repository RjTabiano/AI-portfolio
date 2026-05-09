import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatInput from '../components/chat/ChatInput';
import ParticlesBackground from '../components/ParticlesBackground';
import FactsBubbles from '../components/FactsBubbles';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { Handshake } from 'lucide-react';
import { IMAGES } from '../utility/constants';

const roles = [
  "Software Support Engineer",
  "Backend Developer",
  "AI Integrations",
  "Full-Stack Developer",
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const LandingPage: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [roleIdx, setRoleIdx] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIdx((i) => (i + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = async (message?: string) => {
    const messageToSend = message || input;
    if (!messageToSend.trim() || loading) return;
    setLoading(true);
    setTimeout(() => {
      navigate('/chat', { state: { initialInput: messageToSend } });
    }, 600);
  };

  return (
    <div className="relative flex flex-col min-h-screen text-white items-center justify-center px-4 overflow-hidden">
      <Header />
      <ParticlesBackground />

      <motion.div
        className="relative z-10 w-full max-w-2xl flex flex-col items-center gap-6 pt-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Avatar + status */}
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-3">
          <div className="relative">
            <img
              src={IMAGES.profile}
              alt="Rj Tabiano"
              className="w-20 h-20 rounded-full object-cover border-2 border-zinc-700 shadow-lg"
            />
            <span className="absolute bottom-0.5 right-0.5 w-4 h-4 bg-green-400 rounded-full border-2 border-[#0A0A0A]" />
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-700 bg-zinc-800/50 text-xs text-zinc-300">
            <Handshake size={12} className="text-indigo-400" />
            Let's connect
          </div>
        </motion.div>

        {/* Heading + rotating role */}
        <motion.div variants={fadeUp} className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-blue-300 bg-clip-text text-transparent">
              Rj
            </span>
          </h1>
          <div className="h-7 sm:h-9 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="text-base sm:text-lg md:text-xl text-zinc-400"
              >
                {roles[roleIdx]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Input */}
        <motion.div variants={fadeUp} className="w-full">
          <p className="text-center text-[10px] text-zinc-500 uppercase tracking-widest mb-3">
            Ask me anything
          </p>
          {loading ? (
            <div className="flex justify-center items-center gap-1.5 py-4">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-2 h-2 rounded-full bg-blue-400"
                  animate={{ y: [0, -5, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 0.8, delay: i * 0.15, repeat: Infinity, ease: 'easeInOut' }}
                />
              ))}
            </div>
          ) : (
            <ChatInput
              input={input}
              setInput={setInput}
              onSend={() => handleSendMessage()}
              loading={loading}
            />
          )}
        </motion.div>

        {/* Quick chips */}
        <motion.div variants={fadeUp} className="w-full">
          <FactsBubbles
            className="gap-2 justify-center"
            onFactClick={(_display, prompt) => handleSendMessage(prompt)}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
