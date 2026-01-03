import React from 'react';
import { Clock, MapPin, Shirt, Music, House, AlertTriangle, Gift } from 'lucide-react';

interface DetailLink {
  name: string;
  url: string;
}

interface Detail {
  id: string;
  icon: any;
  title: string;
  content: string[];
  links?: DetailLink[];
}

export const DetailsSection: React.FC = () => {
  const details: Detail[] = [
    {
      id: 'schedule',
      icon: Clock,
      title: 'Tidschema',
      content: [
        'Lördag:',
        '14:30 - Buss från Grisslehamn Havsbad',
        '15:00 - Vigsel',
        '16:00 - Mingel',
        '18:00 - Middag',
        '22:00 - Första buss till Grisslehamn',
        '02:00 - Sista buss till Grisslehamn',
        '',
        'Söndag:',
        'Frivillig gemensam brunch på XXX'
      ]
    },
    {
      id: 'location',
      icon: MapPin,
      title: 'Plats',
      content: [
        'Folk & Fä',
        'Gamla Landsvägen 57',
        '764 56 Grisslehamn'
      ]
    },
    {
      id: 'accommodation',
      icon: House,
      title: 'Boende',
      content: [
        'Vi rekommenderar övernattning i Grisslehamn och bussar kommer att finnas tillgängligt för att ta er till Folk & Fä och tillbaka så ni slipper ta egen bil.',
        '',
        'Rekommenderade boenden i Grisslehamn:'
      ],
      links: [
        { name: 'Grisslehamns Havsbad', url: 'https://www.hotellhavsbaden.se/' },
        { name: 'Grisslehamns Gård', url: 'https://www.pensionatgrisslehamn.se/' },
        { name: 'Pensionat Solgården', url: 'https://www.pensionat-solgarden.se/' }
      ]
    },
    {
      id: 'dresscode',
      icon: Shirt,
      title: 'Klädkod',
      content: [
        'Mörk kostym'
      ]
    },
    {
      id: 'important',
      icon: AlertTriangle,
      title: 'Viktigt att komma ihåg',
      content: [
        'Buss till och från Grisslehamn kommer att finnas',
        'Parkering finns på plats',
        'Möjlighet för kvällsbad kommer att finnas',
        'Frågor, hör av dig!'
      ]
    },
    {
      id: 'gifts',
      icon: Gift,
      title: 'Bröllopsgåva',
      content: [
        'Er närvaro är det enda vi önskar! Om ni ändå vill bidra med något kan ni swisha vår Best Person XXX på XXX för bidrag till vår smekmånad.'
      ]
    }
  ];

  return (
    <section id="details" className="py-10 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="font-lemon-milk text-[18px] text-primary">
              Bröllopsdetaljer
            </h2>
          </div>

          {/* Details Sections */}
          <div className="space-y-6">
            {details.map((detail, index) => (
              <div 
                key={index}
                id={detail.id}
                className="text-center space-y-4 py-4 border-b border-border last:border-b-0"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <detail.icon className="text-primary" size={24} />
                  </div>
                </div>
                <h3 className="font-lemon-milk text-[14px] text-black">
                  {detail.title}
                </h3>
                <div className="space-y-2">
                  {detail.content.map((item, itemIndex) => (
                    <p 
                      key={itemIndex} 
                      className={`${item === '' ? 'h-2' : 'text-lg text-muted-foreground'}`}
                    >
                      {item}
                    </p>
                  ))}
                  {detail.links && detail.links.length > 0 && (
                    <div className="space-y-1">
                      {detail.links.map((link, linkIndex) => (
                        <p key={linkIndex} className="text-lg text-muted-foreground">
                          <a 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {link.name}
                          </a>
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};