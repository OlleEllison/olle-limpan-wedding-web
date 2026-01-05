import React from 'react';
import { BookCheck } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export const RSVPSection: React.FC = () => {
  return (
    <section id="rsvp" className="bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Section Header */}
          <div className="text-center space-y-4 py-4">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <BookCheck className="text-primary" size={24} />
              </div>
            </div>
            <h3 className="font-lemon-milk font-normal text-[14px] md:text-[16px] text-black">
              OSA
            </h3>
            <p className="text-[10px] md:text-[12px] text-muted-foreground">
              Svara senast <span className="font-bold">31 maj 2026</span> genom att fylla i formuläret nedan.
            </p>
          </div>

          {/* Google Form */}
          <Card className="shadow-xl border-2 border-primary/20 bg-transparent backdrop-blur-sm">
            <CardHeader className="text-center">
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full overflow-hidden rounded-b-lg">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSd5Y4KYiEhpU6DQdiQkMRiOBaEIWIpWDi2pShID5nE7YJpfJA/viewform?embedded=true" 
                  className="w-full h-[800px] md:h-[900px] border-0"
                  title="RSVP Form"
                >
                  Laddar formulär...
                </iframe>
              </div>
            </CardContent>
          </Card>

          {/* Vi ses snart text */}
          <div className="text-center pt-8">
            <p className="font-lemon-milk font-normal text-[18px] md:text-[20px] text-primary">
              Vi ses snart!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
