import React from 'react';
import { facts } from '../utility/constants';

interface FactsBubblesProps {
    className?: string;
}

const FactsBubbles: React.FC<FactsBubblesProps> = ({ className = "" }) => {
    return (
        <div className={`flex flex-wrap justify-center w-full ${className}`}>
            {facts.map((fact, idx) => {
                const IconComponent = fact.icon;
                return (
                    <div
                        key={idx}
                        className="flex items-center gap-2 px-4 py-1.5 bg-[#1e1e1e] text-sm text-white border border-zinc-700 rounded-full shadow-sm"
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