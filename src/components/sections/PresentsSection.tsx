import React from 'react';
import { Heart } from 'lucide-react';

export const PresentsSection: React.FC = () => {
  return (
    <section id="presents" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="font-handwritten text-5xl md:text-6xl text-primary">
              Presenter?
            </h2>
          </div>

          {/* Main Message */}
          <div className="bg-gradient-soft rounded-2xl p-8 text-center space-y-6 border-2 border-primary/20">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Heart className="text-primary" size={32} />
            </div>
            <div className="space-y-4">
              <h3 className="font-handwritten text-3xl text-primary">
                Kära vänner och familj
              </h3>
              <p className="font-handwritten text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Er närvaro på vår bröllopsdag är verkligen den bästa presenten vi kan få. 
                Om ni ändå vill ge oss något, skulle vi vara så tacksamma för bidrag till 
                vår smekmånad eller något från våra önskelistor nedan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};