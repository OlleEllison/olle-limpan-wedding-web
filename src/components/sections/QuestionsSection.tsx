import React from 'react';
import { MicVocal } from 'lucide-react';

export const QuestionsSection: React.FC = () => {
  return (
    <section id="tal" className="bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Tal Section */}
          <div className="text-center space-y-4 pt-0 pb-4 border-b border-border">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <MicVocal className="text-primary" size={24} />
              </div>
            </div>
            <h3 className="font-lemon-milk font-normal text-[14px] md:text-[16px] text-black">
              Tal
            </h3>
            <p className="text-[10px] md:text-[12px] text-muted-foreground">
              Maila våra toastmasters på{' '}
              <a 
                href="mailto:toastmaster@ellisonsvalberg.com" 
                className="text-primary hover:underline font-medium"
              >
                toastmaster@ellisonsvalberg.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
