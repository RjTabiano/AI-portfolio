import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
    showFullHeader?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showFullHeader = true }) => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    if (!showFullHeader) {
        return (
            <header className=" top-0 left-0 right-0 z-50 bg-[#111111]/80 backdrop-blur-sm border-zinc-800">
                <div className="flex justify-start items-center px-6 py-4">
                    <button
                        onClick={handleLogoClick}
                        className="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-blue-300 text-transparent bg-clip-text hover:from-indigo-300 hover:to-blue-200 transition-all duration-300 cursor-pointer"
                    >
                        AI PORTFOLIO
                    </button>
                </div>
            </header>
        );
    }

    // Landing page header - talent inquiry and github
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/80 backdrop-blur-sm border-b border-zinc-800">
            <div className="flex justify-between items-center px-6 py-4">
                <div className="flex items-center gap-3 px-4 py-2 bg-[#1e1e1e]/60 backdrop-blur-sm text-white border border-zinc-700 rounded-full hover:border-zinc-600 transition-colors">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-base font-medium">Looking for a talent?</span>
                </div>
                <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#1e1e1e]/60 backdrop-blur-sm text-white border border-zinc-700 rounded-full hover:border-zinc-600 transition-colors"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="text-base font-medium">GitHub</span>
                </a>
            </div>
        </header>
    );
};

export default Header; 