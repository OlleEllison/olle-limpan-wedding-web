import React from 'react';
import ringsImage from '@/assets/rings.svg';

interface WeddingRingsProps {
  className?: string;
  size?: number;
}

export const WeddingRings: React.FC<WeddingRingsProps> = ({ className = "", size = 64 }) => {
  return (
    <img 
      src={ringsImage} 
      alt="Wedding rings" 
      width={size} 
      height={size}
      className={className}
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  );
};