import React, { useState } from 'react';
import ChatInput from '../components/chat/ChatInput';
import ErrorBanner from '../components/ErrorBanner';
import ParticlesBackground from '../components/ParticlesBackground';
import FactsBubbles from '../components/FactsBubbles';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/next"

const LandingPage: React.FC = () => {
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSendMessage = async (message?: string) => {
        const messageToSend = message || input;
        if (messageToSend.trim() === '' || loading) return;
        setLoading(true);
        setTimeout(() => {
            navigate('/chat', { state: { initialInput: messageToSend } });
        }, 800);
    };

    return (
        <div className="relative flex flex-col min-h-screen text-white items-center justify-center px-4 overflow-hidden">
            <Analytics />
            <Header />
            <ParticlesBackground />    
            <div className="w-full flex flex-col items-center pt-20">
                <div className="mt-16 mb-6">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-blue-300 text-transparent bg-clip-text">
                        AI PORTFOLIO
                    </h1>
                </div>
                {/* Description */}
                <p className="text-gray-400 mb-6 text-center text-sm md:text-base">
                    Hi! I'm Rj Tabiano
                </p>
                {error && <ErrorBanner message={error} />}
                <div className="w-full max-w-xl mb-8">
                    {loading ? (
                        <div className="flex justify-center items-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400 border-4"></div>
                            <span className="ml-3 text-blue-300">Loading...</span>
                        </div>
                    ) : (
                        <ChatInput input={input} setInput={setInput} onSend={handleSendMessage} loading={loading} />
                    )}
                </div>
                <FactsBubbles 
                  className="gap-2" 
                  onFactClick={(prompt) => {
                    setInput(prompt);
                    handleSendMessage(prompt);
                  }}
                />
            </div>
        </div>
    );
};

export default LandingPage;
