import React from 'react';
import { MicVocal, MessageCircleQuestion } from 'lucide-react';

export const QuestionsSection: React.FC = () => {
  return (
    <section id="questions" className="py-10 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Tal Section */}
          <div className="text-center space-y-4 py-4 border-b border-border">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <MicVocal className="text-primary" size={24} />
              </div>
            </div>
            <h2 className="font-lemon-milk font-normal text-[14px] md:text-[16px] text-black">
              Tal
            </h2>
            <p className="text-[10px] md:text-[12px] text-muted-foreground">
              Kontakta oss på{' '}
              <a 
                href="mailto:toastmaster@ellisonsvalberg.com" 
                className="text-primary hover:underline font-medium"
              >
                toastmaster@ellisonsvalberg.com
              </a>
            </p>
          </div>

          {/* Frågor Section */}
          <div className="text-center space-y-4 py-4 border-b border-border">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <MessageCircleQuestion className="text-primary" size={24} />
              </div>
            </div>
            <h2 className="font-lemon-milk font-normal text-[14px] md:text-[16px] text-black">
              Frågor
            </h2>
            <p className="text-[10px] md:text-[12px] text-muted-foreground">
              Har du frågor? Hör av dig till oss direkt!
            </p>
          </div>

          {/* Vi ses snart text */}
          <div className="text-center pt-4">
            <p className="font-lemon-milk font-normal text-[18px] md:text-[20px] text-primary">
              Vi ses snart!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
