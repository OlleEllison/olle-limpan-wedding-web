import React from 'react';

interface WeddingRingsProps {
  className?: string;
  size?: number;
}

export const WeddingRings: React.FC<WeddingRingsProps> = ({ className = "", size = 64 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left Ring (Pink) */}
      <circle
        cx="20"
        cy="32"
        r="12"
        fill="none"
        stroke="hsl(var(--wedding-pink))"
        strokeWidth="3"
        className="drop-shadow-sm"
      />
      
      {/* Right Ring (Navy) */}
      <circle
        cx="44"
        cy="32"
        r="12"
        fill="none"
        stroke="hsl(var(--wedding-navy))"
        strokeWidth="3"
        className="drop-shadow-sm"
      />
    </svg>
  );
};