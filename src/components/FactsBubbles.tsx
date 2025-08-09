import React from 'react';
import { facts } from '../utility/constants';

interface FactsBubblesProps {
    className?: string;
    onFactClick?: (prompt: string) => void;
}

const FactsBubbles: React.FC<FactsBubblesProps> = ({ className = "", onFactClick }) => {
    return (
        <div className={`flex flex-wrap justify-center w-full ${className}`}>
            {facts.map((fact, idx) => {
                const IconComponent = fact.icon;
                return (
                    <div
                        key={idx}
                        className="flex items-center gap-2 px-3 md:px-4 py-1.5 bg-[#1e1e1e] text-xs md:text-sm text-white border border-zinc-700 rounded-full shadow-sm cursor-pointer hover:bg-[#2a2a2a] transition-colors duration-200"
                        onClick={() => onFactClick?.(fact.prompt)}
                    >
                        <IconComponent size={16} />
                        <span>{fact.text}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default FactsBubbles; 