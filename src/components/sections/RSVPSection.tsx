import React from 'react';
import { Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const RSVPSection: React.FC = () => {
  return (
    <section id="rsvp" className="py-10 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="font-lemon-milk font-normal text-[18px] text-primary">
              OSA
            </h2>
            <p className="text-[10px] text-muted-foreground">
              Svara senast 1 juni 2026
            </p>
          </div>

          {/* Google Form */}
          <Card className="shadow-xl border-2 border-primary/20 bg-transparent backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary" size={24} />
              </div>
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

        </div>
      </div>
    </section>
  );
};