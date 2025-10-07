import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WeddingRings } from '../WeddingRings';
import { BlurredCoupleImage } from '../BlurredCoupleImage';
import { useIsMobile } from '@/hooks/use-mobile';
import coupleImage from '@/assets/couple-image.png';
import newCoupleImage from '@/assets/couple-new.png';

interface HeroSectionProps {
  onRSVPClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRSVPClick }) => {
  const isMobile = useIsMobile();
  const weddingDate = new Date('2026-08-15');
  const now = new Date();
  const daysLeft = Math.ceil((weddingDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="floating-hearts" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Wedding Rings */}
          <div className="flex justify-center">
            <WeddingRings size={120} className="animate-pulse" />
          </div>

          {/* Main Message */}
          <div className="space-y-4">
            <h1 className="font-handwritten text-4xl md:text-6xl text-primary">
              Kom och fira oss!
            </h1>
          </div>

          {/* Couple Image with Speech Bubbles */}
          <div className="relative flex justify-center items-center my-12">
            {/* Left Speech Bubble */}
            <div className={`absolute z-10 transform -rotate-12 ${isMobile ? 'left-2 top-8 scale-75' : 'left-24 top-16 scale-150'}`}>
              <div className="bg-white border-2 border-black rounded-lg px-6 py-3 relative shadow-lg">
                <p className="font-serif text-[12px] text-black whitespace-nowrap">Mer info kommer!</p>
                <div className="absolute bottom-[-8px] right-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white"></div>
                <div className="absolute bottom-[-10px] right-6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-black"></div>
              </div>
            </div>

            {/* Couple Image with Blurred Background */}
            <div className="relative">
              <BlurredCoupleImage 
                alt="Ellison och Olle" 
                className="w-64 md:w-80 h-auto rounded-lg shadow-xl"
              />
            </div>

            {/* Right Speech Bubble */}
            <div className={`absolute z-10 transform rotate-12 ${isMobile ? 'right-2 top-8 scale-75' : 'right-24 top-16 scale-150'}`}>
              <div className="bg-white border-2 border-black rounded-lg px-6 py-3 relative shadow-lg">
                <p className="font-serif text-[12px] text-black whitespace-nowrap">Kom igen det blir kul!</p>
                <div className="absolute bottom-[-8px] left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white"></div>
                <div className="absolute bottom-[-10px] left-6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-black"></div>
              </div>
            </div>
          </div>

          {/* Wedding Date - Handwritten Font */}
          <div className="text-center my-8">
            <p className="font-handwritten text-3xl md:text-4xl text-primary">15 Augusti 2026</p>
            <p className="font-handwritten text-xl md:text-2xl text-muted-foreground mt-2">Vaddo</p>
          </div>

          {/* Countdown with Calendar Button */}
          <div className="bg-gradient-romantic text-white rounded-2xl p-6 shadow-xl relative">
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
                className={`bg-transparent border border-white text-white hover:bg-white/10 flex flex-col items-center gap-0.5 h-auto py-2 px-3 ${!isMobile ? 'absolute right-4 top-1/2 -translate-y-1/2' : ''}`}
              >
                <Calendar className="w-4 h-4" />
                <span className="text-xs">Lägg till i kalender</span>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};