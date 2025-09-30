import React from 'react';
import { Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export const QuestionsSection: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Questions Header */}
          <div className="text-center space-y-4">
            <h2 className="font-handwritten text-5xl md:text-6xl text-primary">
              Frågor
            </h2>
            <div className="flex items-center justify-center gap-3 text-lg text-muted-foreground">
              <Mail className="text-primary" size={20} />
              <p>
                Har du frågor? Kontakta oss på{' '}
                <a 
                  href="mailto:xxx.xxx@ellisonsvalberg.com" 
                  className="text-primary hover:underline font-medium"
                >
                  xxx.xxx@ellisonsvalberg.com
                </a>
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="space-y-6">
            <Card className="shadow-lg border border-border/50">
              <CardContent className="p-8">
                <AspectRatio ratio={16 / 9}>
                  <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-primary text-2xl">📷</span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Bildplatshållare
                      </p>
                    </div>
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>
            
            {/* "Vi ses snart" text */}
            <div className="text-center">
              <p className="font-handwritten text-3xl md:text-4xl text-primary">
                Vi ses snart
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};