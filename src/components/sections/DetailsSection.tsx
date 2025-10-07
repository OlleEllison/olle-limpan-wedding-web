import React from 'react';
import { Clock, MapPin, Shirt, Music, Utensils, AlertTriangle, Gift } from 'lucide-react';

export const DetailsSection: React.FC = () => {
  const details = [
    {
      id: 'schedule',
      icon: Clock,
      title: 'Tidschema',
      content: [
        '15:00 - Vigsel',
        '16:00 - Mingel & fotografering',
        '18:00 - Middag',
        '20:00 - Tal & skålar',
        '21:00 - Dans till sent'
      ]
    },
    {
      id: 'location',
      icon: MapPin,
      title: 'Plats',
      content: [
        'Vaddo Kyrka',
        'Vigsel kl 15:00',
        '',
        'Fest på [Plats]',
        'Adress kommer senare'
      ]
    },
    {
      id: 'food',
      icon: Utensils,
      title: 'Mat & Dryck',
      content: [
        'Trerätters middag',
        'Vegetariska alternativ',
        'Barbar tillgänglig',
        'Meddela allergier vid OSA',
        'Midnattsmacka serveras'
      ]
    },
    {
      id: 'dresscode',
      icon: Shirt,
      title: 'Klädkod',
      content: [
        'Kavaj för herrar',
        'Klänning för damer',
        'Bekväma skor för dans',
        'Färgtema: Rosa & Marinblå',
        'Kom som ni känner er bäst!'
      ]
    },
    {
      id: 'important',
      icon: AlertTriangle,
      title: 'Viktigt att komma ihåg',
      content: [
        'Buss från Stockholm arrangeras',
        'Hotell & B&B rekommendationer',
        'Ta med kofta för kvällen',
        'Bekväma skor rekommenderas',
        'Frågor? Kontakta oss!'
      ]
    },
    {
      id: 'gifts',
      icon: Gift,
      title: 'Önskningar',
      content: [
        'Er närvaro är det bästa',
        'Bidrag till smekmånad',
        'Swish: [nummer]',
        'Eller se önskelista',
        'Tack för er generositet!'
      ]
    }
  ];

  return (
    <section id="details" className="py-10 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="font-handwritten text-3xl md:text-4xl text-primary">
              Bröllopsdetaljer
            </h2>
            <p className="text-base text-muted-foreground">
              Allt ni behöver veta om vår stora dag
            </p>
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
                <h3 className="font-handwritten text-xl md:text-2xl text-black">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};