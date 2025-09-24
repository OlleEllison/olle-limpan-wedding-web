import React, { useState, useEffect } from 'react';
import { blurBackground, loadImage } from '@/utils/imageProcessing';
import newCoupleImage from '@/assets/couple-new.png';

interface BlurredCoupleImageProps {
  className?: string;
  alt: string;
}

export const BlurredCoupleImage: React.FC<BlurredCoupleImageProps> = ({ className, alt }) => {
  const [processedImageSrc, setProcessedImageSrc] = useState<string>(newCoupleImage);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processImage = async () => {
      try {
        setIsProcessing(true);
        console.log('Loading image for background blur...');
        
        const imageElement = await loadImage(newCoupleImage);
        console.log('Image loaded, processing background blur...');
        
        const blurredImageSrc = await blurBackground(imageElement);
        setProcessedImageSrc(blurredImageSrc);
        
        console.log('Background blur completed successfully');
      } catch (error) {
        console.error('Failed to process image with blurred background:', error);
        // Fallback to original image
        setProcessedImageSrc(newCoupleImage);
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();
  }, []);

  return (
    <div className="relative">
      <img 
        src={processedImageSrc}
        alt={alt}
        className={className}
      />
      {isProcessing && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
          <div className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
            Processing...
          </div>
        </div>
      )}
    </div>
  );
};