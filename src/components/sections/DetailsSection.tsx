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
      title: 'Tidsschema',
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
        '12:00 - Frivillig gemensam lunch på'
      ],
      links: [
        { name: 'Bonden & Burgaren', url: 'https://vaddogardsmejeri.se/' }
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
      ],
      links: [
        { name: 'Visa på karta', url: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x46600685032cfe8d:0x6dd98f0e4929635?sa=X&ved=1t:8290&ictx=111' }
      ]
    },
    {
      id: 'accommodation',
      icon: House,
      title: 'Boende',
      content: [
        'Vi rekommenderar övernattning i Grisslehamn',
        'Busstransfer kommer att finnas tillgängligt från Hotell Grisslehamns havsbad till och från bröllopslokalen så ni slipper ta egen bil till festen',
        '',
        'Rekommenderade boenden i Grisslehamn:'
      ],
      links: [
        { name: 'Hotell Havsbaden Grissleman', url: 'https://www.hotellhavsbaden.se/' },
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
      id: 'gifts',
      icon: Gift,
      title: 'Bröllopsgåvor',
      content: [
        'Er närvaro är det enda vi önskar!',
        'Om ni ändå vill bidra med något kan ni swisha vår Best Person Amanda Wallskog på 070-690 07 52 för bidrag till vår smekmånad'
      ]
    }
  ];

  const importantInfo: Detail = {
    id: 'important',
    icon: AlertTriangle,
    title: 'Övrig info',
    content: [
      'För er som väljer att bo i Grisslehamn kommer vi anordna busstransfer från Hotell Grisslehamns havsbad till och från bröllopslokalen',
      'Parkering finns på plats',
      'Möjlighet för kvällsbad och bastu kommer att finnas',
      'Frågor, hör av dig direkt till oss!'
    ]
  };

  const renderDetail = (detail: Detail, index: number) => (
    <div 
      key={index}
      id={detail.id}
      className="text-center space-y-4 py-4 border-b border-border"
    >
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
          <detail.icon className="text-primary" size={24} />
        </div>
      </div>
      <h3 className="font-lemon-milk font-normal text-[14px] md:text-[16px] text-black">
        {detail.title}
      </h3>
      <div className="space-y-2">
        {detail.content.map((item, itemIndex) => (
          <p 
            key={itemIndex} 
            className={`${item === '' ? 'h-2' : 'text-[10px] md:text-[12px] text-muted-foreground'} ${item === 'Lördag:' || item === 'Söndag:' ? 'font-bold' : ''}`}
          >
            {item}
          </p>
        ))}
        {detail.links && detail.links.length > 0 && (
          <div className="space-y-1">
            {detail.links.map((link, linkIndex) => (
              <p key={linkIndex} className="text-[10px] md:text-[12px] text-muted-foreground">
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
  );

  return (
    <section id="details" className="py-10 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="font-lemon-milk font-normal text-[18px] md:text-[20px] text-primary">
              Bröllopsdetaljer
            </h2>
          </div>

          {/* Details Sections */}
          <div className="space-y-6">
            {details.map((detail, index) => renderDetail(detail, index))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const ImportantInfoSection: React.FC = () => {
  return (
    <section id="important" className="bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 py-4 border-b border-border">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <AlertTriangle className="text-primary" size={24} />
              </div>
            </div>
            <h3 className="font-lemon-milk font-normal text-[14px] md:text-[16px] text-black">
              Övrig info
            </h3>
            <div className="space-y-2">
              <p className="text-[10px] md:text-[12px] text-muted-foreground">
                För er som väljer att bo i Grisslehamn kommer vi anordna busstransfer från Hotell Grisslehamns havsbad till och från bröllopslokalen
              </p>
              <p className="text-[10px] md:text-[12px] text-muted-foreground">
                För er som bor på annat håll, eller vill ta bil finns parkering på plats
              </p>
              <p className="text-[10px] md:text-[12px] text-muted-foreground">
                Möjlighet för kvällsbad och bastu kommer att finnas, ta med egen handduk och badkläder om du är sugen
              </p>
              <p className="text-[10px] md:text-[12px] text-muted-foreground">
                Frågor, hör av dig direkt till oss!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
