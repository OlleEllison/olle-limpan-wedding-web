import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WeddingRings } from '../WeddingRings';
import coupleImage from '@/assets/couple-image.png';
import speechBubble from '@/assets/speech-bubble.png';
import dateImage from '@/assets/date-image.png';

interface HeroSectionProps {
  onRSVPClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRSVPClick }) => {
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
            <h1 className="font-handwritten text-6xl md:text-8xl text-primary">
              Kom och fira oss!
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Mer info kommer!
            </p>
          </div>

          {/* Couple Image with Speech Bubbles */}
          <div className="relative flex justify-center items-center my-12">
            {/* Left Speech Bubble */}
            <div className="absolute -left-20 md:-left-32 top-8 z-10">
              <div className="bg-white border-2 border-black rounded-lg p-3 relative">
                <p className="font-handwritten text-lg text-black">Mer info kommer!</p>
                <div className="absolute bottom-0 right-4 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white"></div>
                <div className="absolute bottom-[-2px] right-4 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-black"></div>
              </div>
            </div>

            {/* Couple Image */}
            <div className="relative">
              <img 
                src={coupleImage} 
                alt="Ellison och Olle" 
                className="w-80 h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right Speech Bubble */}
            <div className="absolute -right-20 md:-right-32 top-8 z-10">
              <div className="bg-white border-2 border-black rounded-lg p-3 relative">
                <p className="font-handwritten text-lg text-black">Kom igen det blir kul!</p>
                <div className="absolute bottom-0 left-4 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white"></div>
                <div className="absolute bottom-[-2px] left-4 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-black"></div>
              </div>
            </div>
          </div>

          {/* Wedding Date */}
          <div className="flex justify-center">
            <img 
              src={dateImage} 
              alt="15 Augusti 2026 Vaddo" 
              className="w-auto h-32"
            />
          </div>

          {/* Countdown */}
          <div className="bg-gradient-romantic text-white rounded-2xl p-6 shadow-xl">
            <p className="text-4xl font-bold font-handwritten">{daysLeft} dagar kvar</p>
          </div>

          {/* Action Button */}
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Ellison%20%26%20Olles%20Bröllop&dates=20260815T150000Z/20260815T230000Z&location=Vaddo&details=Kom%20och%20fira%20oss!`;
                window.open(calendarUrl, '_blank');
              }}
            >
              <Calendar className="mr-2" size={20} />
              Lägg till i din kalender
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};