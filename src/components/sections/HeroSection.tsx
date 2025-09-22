import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WeddingRings } from '../WeddingRings';
import coupleImage from '@/assets/couple-image.png';
import newCoupleImage from '@/assets/couple-new.png';

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

          {/* New Couple Image with Speech Bubbles */}
          <div className="relative flex justify-center items-center my-12">
            {/* Left Speech Bubble - positioned closer and lower */}
            <div className="absolute left-16 top-20 z-10 transform -rotate-12">
              <div className="bg-white border-2 border-black rounded-lg px-4 py-2 relative shadow-lg">
                <p className="font-handwritten text-base md:text-lg text-black whitespace-nowrap">Mer info kommer!</p>
                <div className="absolute bottom-[-8px] right-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white"></div>
                <div className="absolute bottom-[-10px] right-6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-black"></div>
              </div>
            </div>

            {/* Couple Image with transparent background effect */}
            <div className="relative">
              <img 
                src={newCoupleImage} 
                alt="Ellison och Olle" 
                className="w-64 md:w-80 h-auto rounded-lg shadow-xl bg-white"
                style={{ 
                  maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 70%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 70%)'
                }}
              />
            </div>

            {/* Right Speech Bubble - positioned closer and lower */}
            <div className="absolute right-16 top-20 z-10 transform rotate-12">
              <div className="bg-white border-2 border-black rounded-lg px-4 py-2 relative shadow-lg">
                <p className="font-handwritten text-base md:text-lg text-black whitespace-nowrap">Kom igen det blir kul!</p>
                <div className="absolute bottom-[-8px] left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white"></div>
                <div className="absolute bottom-[-10px] left-6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-black"></div>
              </div>
            </div>
          </div>

          {/* Wedding Date - Handwritten Font */}
          <div className="text-center my-8">
            <p className="font-handwritten text-4xl md:text-5xl text-black">15 Augusti 2026</p>
            <p className="font-handwritten text-xl md:text-2xl text-muted-foreground mt-2">Vaddo</p>
          </div>

          {/* Countdown */}
          <div className="bg-gradient-romantic text-white rounded-2xl p-6 shadow-xl">
            <p className="text-3xl md:text-4xl font-bold font-handwritten">{daysLeft} dagar kvar</p>
          </div>

          {/* Monthly Calendar View */}
          <div className="flex justify-center">
            <div className="bg-white border-2 border-primary rounded-lg p-6 shadow-xl max-w-md">
              <div className="text-center mb-4">
                <h3 className="font-handwritten text-2xl text-primary">Augusti 2026</h3>
              </div>
              
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {/* Day headers */}
                {['S', 'M', 'T', 'O', 'T', 'F', 'L'].map((day, index) => (
                  <div key={index} className="p-2 font-semibold text-muted-foreground">
                    {day}
                  </div>
                ))}
                
                {/* Calendar days */}
                {/* Empty cells for days before August starts (assuming Aug 1, 2026 is a Saturday) */}
                {[...Array(5)].map((_, index) => (
                  <div key={`empty-${index}`} className="p-2"></div>
                ))}
                
                {/* Days 1-31 */}
                {[...Array(31)].map((_, index) => {
                  const day = index + 1;
                  const isWeddingDay = day === 15;
                  
                  return (
                    <div
                      key={day}
                      className={`p-2 cursor-pointer rounded transition-colors ${
                        isWeddingDay
                          ? 'bg-primary text-primary-foreground font-bold hover:bg-primary/80'
                          : 'hover:bg-muted'
                      }`}
                      onClick={isWeddingDay ? () => {
                        const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Ellison%20%26%20Olles%20Bröllop&dates=20260815T150000Z/20260815T230000Z&location=Vaddo&details=Kom%20och%20fira%20oss!`;
                        window.open(calendarUrl, '_blank');
                      } : undefined}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
              
              <div className="text-center mt-4">
                <p className="text-sm text-muted-foreground">Klicka på den 15:e för att lägga till i kalender</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};