import React from 'react';
import { Heart, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="font-body font-bold text-xl md:text-2xl text-primary">
              Vår Historia
            </h2>
            <p className="text-base text-muted-foreground">
              Från första intryck till för alltid
            </p>
          </div>

          {/* Story Timeline */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* How We Met */}
            <Card className="transform hover:scale-105 transition-transform duration-300 shadow-lg border-2 border-primary/10">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="text-primary" size={24} />
                </div>
                <h3 className="font-body font-bold text-lg text-secondary">
                  Första Intrycket
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Det var kärlek vid första ögonkastet när vi träffades... 
                  Berätta er egen historia här om hur ni träffades och 
                  vad som gjorde det speciellt.
                </p>
                <div className="text-sm text-primary font-medium">
                  💕 År 20XX
                </div>
              </CardContent>
            </Card>

            {/* The Proposal */}
            <Card className="transform hover:scale-105 transition-transform duration-300 shadow-lg border-2 border-primary/10">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Star className="text-secondary" size={24} />
                </div>
                <h3 className="font-body font-bold text-lg text-secondary">
                  Frieriet
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  En magisk dag när Olle friade till Ellison... 
                  Berätta historien om frieriet och vad som gjorde 
                  den stunden så särskild.
                </p>
                <div className="text-sm text-secondary font-medium">
                  💍 År 20XX
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quote */}
          <div className="bg-transparent backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-primary/20">
            <blockquote className="font-body font-bold text-3xl md:text-4xl text-primary text-center leading-relaxed">
              "Tillsammans är vi perfekta"
            </blockquote>
            <cite className="block text-center text-muted-foreground mt-4 text-lg">
              - Ellison & Olle
            </cite>
          </div>

          {/* Fun Facts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="text-4xl font-body font-bold text-primary">X</div>
              <div className="text-sm text-muted-foreground">År tillsammans</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-body font-bold text-primary">∞</div>
              <div className="text-sm text-muted-foreground">Minnen skapade</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-body font-bold text-primary">1</div>
              <div className="text-sm text-muted-foreground">Stor kärlek</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};