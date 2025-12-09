import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WeddingRings } from '../WeddingRings';
import { useIsMobile } from '@/hooks/use-mobile';
import komOchFiraText from '@/assets/kom-och-fira-text.png';

// Gallery images
import gallery1 from '@/assets/gallery/gallery-1.jpeg';
import gallery2 from '@/assets/gallery/gallery-2.jpeg';
import gallery3 from '@/assets/gallery/gallery-3.jpeg';
import gallery4 from '@/assets/gallery/gallery-4.jpeg';
import gallery5 from '@/assets/gallery/gallery-5.jpeg';
import gallery6 from '@/assets/gallery/gallery-6.jpeg';
import gallery7 from '@/assets/gallery/gallery-7.jpeg';
import gallery8 from '@/assets/gallery/gallery-8.jpeg';
import gallery9 from '@/assets/gallery/gallery-9.jpeg';
import gallery10 from '@/assets/gallery/gallery-10.jpeg';

const galleryImages = [
  gallery1, gallery2, gallery3, gallery4, gallery5,
  gallery6, gallery7, gallery8, gallery9, gallery10
];

interface HeroSectionProps {
  onRSVPClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRSVPClick }) => {
  const isMobile = useIsMobile();
  const weddingDate = new Date('2026-08-15');
  const now = new Date();
  const daysLeft = Math.ceil((weddingDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Wedding Rings */}
          <div className="flex justify-center">
            <WeddingRings size={120} className="animate-pulse" />
          </div>

          {/* Main Message */}
          <div className="space-y-4 flex justify-center">
            <img 
              src={komOchFiraText} 
              alt="Kom och fira oss!" 
              className="h-24 md:h-36 w-auto"
              style={{
                filter: 'brightness(0) saturate(100%) invert(25%) sepia(30%) saturate(800%) hue-rotate(60deg) brightness(95%) contrast(90%)',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0) scale(1.001)',
                willChange: 'transform'
              } as React.CSSProperties}
            />
          </div>

          {/* Couple Image Gallery with Speech Bubbles */}
          <div className="relative flex justify-center items-center my-12">
            {/* Left Speech Bubble */}
            <div className={`absolute z-10 transform -rotate-12 ${isMobile ? 'left-4 -top-4 scale-75' : 'left-48 -top-4 scale-150'}`}>
              <div className="bg-white border-2 border-primary rounded-lg px-6 py-3 relative shadow-lg">
                <p className="font-speech-bubble text-[12px] text-primary whitespace-nowrap">Mer info kommer!</p>
                <div className="absolute bottom-[-8px] right-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white"></div>
                <div className="absolute bottom-[-10px] right-6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-primary"></div>
              </div>
            </div>

            {/* Rotating Gallery */}
            <div className="relative w-64 md:w-80 h-80 md:h-96 rounded-lg shadow-xl overflow-hidden">
              {galleryImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Ellison och Olle ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>

            {/* Right Speech Bubble */}
            <div className={`absolute z-10 transform rotate-12 ${isMobile ? 'right-4 -top-4 scale-75' : 'right-48 -top-4 scale-150'}`}>
              <div className="bg-white border-2 border-primary rounded-lg px-6 py-3 relative shadow-lg">
                <p className="font-speech-bubble text-[12px] text-primary whitespace-nowrap">Kom igen det blir kul!</p>
                <div className="absolute bottom-[-8px] left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white"></div>
                <div className="absolute bottom-[-10px] left-6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-primary"></div>
              </div>
            </div>
          </div>

          {/* Wedding Date - Handwritten Font */}
          <div className="text-center my-8">
            <p className="font-handwritten text-3xl md:text-4xl text-primary">15 Augusti 2026</p>
            <p className="font-handwritten text-xl md:text-2xl text-muted-foreground mt-2">Väddö</p>
          </div>

          {/* STYLE 1: Floating Tag Style */}
          <div className="space-y-4 mb-12">
            <p className="text-sm text-muted-foreground text-center">Style 1: Floating Tag</p>
            <div className="flex justify-center">
              <div className="bg-secondary text-white rounded-full px-8 py-4 shadow-lg inline-flex items-center gap-4">
                <p className="text-2xl md:text-3xl font-bold font-handwritten">{daysLeft} dagar kvar</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/savethedate.ics';
                    link.download = 'savethedate.ics';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="bg-white/20 text-white hover:bg-white/30 rounded-full h-auto py-2 px-3"
                >
                  <Calendar className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* STYLE 2: Glass Effect */}
          <div className="space-y-4 mb-12">
            <p className="text-sm text-muted-foreground text-center">Style 2: Glass Effect</p>
            <div className="backdrop-blur-md bg-white/30 border border-white/50 text-primary rounded-2xl p-6 shadow-xl relative">
              <div className={`flex ${isMobile ? 'flex-col' : 'items-center justify-center'} gap-4`}>
                <p className="text-3xl md:text-4xl font-bold font-handwritten text-center flex-1">{daysLeft} dagar kvar</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/savethedate.ics';
                    link.download = 'savethedate.ics';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className={`bg-primary/20 border border-primary/50 text-primary hover:bg-primary/30 flex flex-col items-center gap-0.5 h-auto py-2 px-3 ${!isMobile ? 'absolute right-4 top-1/2 -translate-y-1/2' : ''}`}
                >
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs">Lägg till i kalender</span>
                </Button>
              </div>
            </div>
          </div>

          {/* STYLE 3: Handwritten Emphasis */}
          <div className="space-y-4 mb-12">
            <p className="text-sm text-muted-foreground text-center">Style 3: Handwritten Emphasis</p>
            <div className="text-center py-8">
              <p className="text-5xl md:text-6xl font-handwritten text-primary mb-2">{daysLeft} dagar kvar</p>
              <div className="w-48 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4"></div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/savethedate.ics';
                  link.download = 'savethedate.ics';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="text-primary hover:bg-primary/10 gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Lägg till i kalender</span>
              </Button>
            </div>
          </div>

          {/* STYLE 4: Ribbon/Banner Style */}
          <div className="space-y-4 mb-12">
            <p className="text-sm text-muted-foreground text-center">Style 4: Ribbon Banner</p>
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-4 bg-secondary/80 skew-y-[20deg] origin-right"></div>
                <div className="absolute -right-4 top-0 bottom-0 w-4 bg-secondary/80 -skew-y-[20deg] origin-left"></div>
                <div className="bg-secondary text-white px-12 py-4 shadow-lg flex items-center gap-6">
                  <p className="text-2xl md:text-3xl font-bold font-handwritten">{daysLeft} dagar kvar</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/savethedate.ics';
                      link.download = 'savethedate.ics';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="bg-white/20 text-white hover:bg-white/30 h-auto py-2 px-3"
                  >
                    <Calendar className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* STYLE 5: Outlined/Ghost Style */}
          <div className="space-y-4 mb-12">
            <p className="text-sm text-muted-foreground text-center">Style 5: Outlined Ghost</p>
            <div className="border-2 border-primary bg-transparent rounded-2xl p-6 relative">
              <div className={`flex ${isMobile ? 'flex-col' : 'items-center justify-center'} gap-4`}>
                <p className="text-3xl md:text-4xl font-bold font-handwritten text-primary text-center flex-1">{daysLeft} dagar kvar</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/savethedate.ics';
                    link.download = 'savethedate.ics';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className={`border border-primary text-primary hover:bg-primary/10 flex flex-col items-center gap-0.5 h-auto py-2 px-3 ${!isMobile ? 'absolute right-4 top-1/2 -translate-y-1/2' : ''}`}
                >
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs">Lägg till i kalender</span>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
