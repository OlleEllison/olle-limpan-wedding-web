import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WeddingRings } from '../WeddingRings';
import coupleImage from '@/assets/couple-image.png';
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
          </div>

          {/* Couple Image with Speech Bubbles */}
          <div className="relative flex justify-center items-center my-12 px-8">
            {/* Left Speech Bubble - "Mer info kommer!" */}
            <div className="absolute left-0 md:left-8 top-4 z-10 transform -rotate-12">
              <div className="bg-white border-2 border-black rounded-lg px-4 py-2 relative shadow-lg">
                <p className="font-handwritten text-base md:text-lg text-black whitespace-nowrap">Mer info kommer!</p>
                <div className="absolute bottom-[-8px] right-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white"></div>
                <div className="absolute bottom-[-10px] right-6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-black"></div>
              </div>
            </div>

            {/* Couple Image */}
            <div className="relative mx-8">
              <img 
                src={coupleImage} 
                alt="Ellison och Olle" 
                className="w-64 md:w-80 h-auto rounded-lg shadow-xl"
              />
            </div>

            {/* Right Speech Bubble - "Kom igen det blir kul!" */}
            <div className="absolute right-0 md:right-8 top-4 z-10 transform rotate-12">
              <div className="bg-white border-2 border-black rounded-lg px-4 py-2 relative shadow-lg">
                <p className="font-handwritten text-base md:text-lg text-black whitespace-nowrap">Kom igen det blir kul!</p>
                <div className="absolute bottom-[-8px] left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white"></div>
                <div className="absolute bottom-[-10px] left-6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-black"></div>
              </div>
            </div>
          </div>

          {/* Wedding Date */}
          <div className="flex justify-center">
            <img 
              src={dateImage} 
              alt="15 Augusti 2026 Vaddo" 
              className="w-auto h-24 md:h-32"
            />
          </div>

          {/* Countdown */}
          <div className="bg-gradient-romantic text-white rounded-2xl p-6 shadow-xl">
            <p className="text-3xl md:text-4xl font-bold font-handwritten">{daysLeft} dagar kvar</p>
          </div>

          {/* Action Button */}
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-handwritten"
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