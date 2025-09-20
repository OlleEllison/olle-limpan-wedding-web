import React from 'react';
import { Gift, Heart, ExternalLink, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const RegistrySection: React.FC = () => {
  const registryOptions = [
    {
      title: 'Bidrag till Smekmånad',
      description: 'Hjälp oss att skapa minnen för livet på vår drömsemester',
      icon: Heart,
      action: 'Swish: 123-456 78 90',
      preferred: true
    },
    {
      title: 'NK Inredning',
      description: 'Önskelista för vårt nya hem',
      icon: Gift,
      action: 'Besök önskelista',
      link: '#'
    },
    {
      title: 'Clas Ohlson',
      description: 'Praktiska saker för hemmet',
      icon: Gift,
      action: 'Besök önskelista',
      link: '#'
    }
  ];

  return (
    <section id="registry" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="font-handwritten text-5xl md:text-6xl text-primary">
              Önskelista
            </h2>
            <p className="text-xl text-muted-foreground">
              Er närvaro är den bästa presenten, men...
            </p>
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
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Er närvaro på vår bröllopsdag är verkligen den bästa presenten vi kan få. 
                Om ni ändå vill ge oss något, skulle vi vara så tacksamma för bidrag till 
                vår smekmånad eller något från våra önskelistor nedan.
              </p>
            </div>
          </div>

          {/* Registry Options */}
          <div className="grid md:grid-cols-3 gap-6">
            {registryOptions.map((option, index) => (
              <Card 
                key={index}
                className={`hover:shadow-lg transition-all duration-300 ${
                  option.preferred 
                    ? 'ring-2 ring-primary/20 border-primary/30 transform scale-105' 
                    : 'border-2 border-primary/10'
                }`}
              >
                <CardHeader className="text-center pb-4">
                  {option.preferred && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                        Favorit ❤️
                      </span>
                    </div>
                  )}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    option.preferred ? 'bg-primary/20' : 'bg-primary/10'
                  }`}>
                    <option.icon className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-handwritten text-2xl text-secondary">
                    {option.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {option.description}
                  </p>
                  
                  {option.link ? (
                    <Button 
                      variant="outline"
                      className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(option.link, '_blank')}
                    >
                      <ExternalLink className="mr-2" size={16} />
                      {option.action}
                    </Button>
                  ) : (
                    <div className="space-y-3">
                      <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                        <div className="flex items-center justify-center space-x-2 text-primary font-medium">
                          <CreditCard size={16} />
                          <span>{option.action}</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Skriv gärna "Bröllop E&O" i meddelandet
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Thank You Message */}
          <div className="text-center space-y-4">
            <div className="inline-block bg-wedding-cream border-2 border-dashed border-primary/30 rounded-2xl p-6 transform -rotate-1 shadow-lg">
              <p className="font-handwritten text-2xl text-primary">
                Tack för er generositet! 💕
              </p>
            </div>
            <p className="text-muted-foreground">
              Har ni frågor om önskelistan? Kontakta oss gärna!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};