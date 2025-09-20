import React, { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { StorySection } from '@/components/sections/StorySection';
import { DetailsSection } from '@/components/sections/DetailsSection';
import { RSVPSection } from '@/components/sections/RSVPSection';
import { RegistrySection } from '@/components/sections/RegistrySection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'story', 'details', 'rsvp', 'registry'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRSVPClick = () => {
    const rsvpElement = document.getElementById('rsvp');
    if (rsvpElement) {
      rsvpElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className="pt-16">
        <HeroSection onRSVPClick={handleRSVPClick} />
        <StorySection />
        <DetailsSection />
        <RSVPSection />
        <RegistrySection />
      </main>
    </div>
  );
};

export default Index;
