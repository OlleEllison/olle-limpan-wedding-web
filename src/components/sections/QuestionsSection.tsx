import React from 'react';
import { Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import coupleCollage from '@/assets/couple-collage.png';

export const QuestionsSection: React.FC = () => {
  return (
    <section className="py-10 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Questions Header */}
          <div className="text-center space-y-4">
            <h2 className="font-lemon-milk text-3xl md:text-4xl text-primary">
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

          {/* Vi ses snart text */}
          <div className="text-center">
            <p className="font-lemon-milk text-3xl md:text-4xl text-primary">
              Vi ses snart!
            </p>
          </div>

          {/* Image Collage */}
          <div className="space-y-6">
            <Card className="shadow-lg border border-border/50">
              <CardContent className="p-8">
                <img 
                  src={coupleCollage} 
                  alt="Foto collage av brudparet" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};