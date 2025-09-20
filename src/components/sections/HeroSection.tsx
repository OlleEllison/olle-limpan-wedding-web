import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WeddingRings } from '../WeddingRings';

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

          {/* Wedding Date & Location */}
          <div className="space-y-6">
            <div className="inline-block bg-card border-2 border-primary/20 rounded-2xl p-6 shadow-lg">
              <h2 className="font-handwritten text-4xl md:text-5xl text-secondary mb-2">
                15 Augusti 2026
              </h2>
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <MapPin size={20} />
                <span className="text-lg">Vaddo</span>
              </div>
            </div>

            {/* Countdown */}
            <div className="bg-gradient-romantic text-white rounded-2xl p-6 shadow-xl">
              <h3 className="font-handwritten text-3xl mb-2">Nedräkning</h3>
              <p className="text-4xl font-bold">{daysLeft} dagar kvar</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={onRSVPClick}
            >
              OSA Här
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                // Add to calendar functionality
                const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Ellison%20%26%20Olles%20Bröllop&dates=20260815T150000Z/20260815T230000Z&location=Vaddo&details=Kom%20och%20fira%20oss!`;
                window.open(calendarUrl, '_blank');
              }}
            >
              <Calendar className="mr-2" size={20} />
              Lägg till i din kalender
            </Button>
          </div>

          {/* Playful Message */}
          <div className="mt-12">
            <div className="inline-block bg-wedding-cream border-2 border-dashed border-primary/30 rounded-2xl p-4 transform rotate-1 shadow-lg">
              <p className="font-handwritten text-2xl text-primary">
                Kom igen, det blir kul!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};