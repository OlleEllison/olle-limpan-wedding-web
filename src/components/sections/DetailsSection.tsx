import React from 'react';
import { Clock, MapPin, Shirt, Music, Utensils, Gift } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const DetailsSection: React.FC = () => {
  const details = [
    {
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
      icon: Gift,
      title: 'Viktigt att komma ihåg',
      content: [
        'Buss från Stockholm arrangeras',
        'Hotell & B&B rekommendationer',
        'Ta med kofta för kvällen',
        'Bekväma skor rekommenderas',
        'Frågor? Kontakta oss!'
      ]
    }
  ];

  return (
    <section id="details" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="font-handwritten text-5xl md:text-6xl text-black">
              Bröllopsdetaljer
            </h2>
            <p className="text-xl text-muted-foreground">
              Allt ni behöver veta om vår stora dag
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {details.map((detail, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 border-2 border-primary/10 hover:border-primary/20"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <detail.icon className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-handwritten text-2xl text-black">
                    {detail.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-center">
                    {detail.content.map((item, itemIndex) => (
                      <li 
                        key={itemIndex} 
                        className={`${item === '' ? 'h-2' : 'text-muted-foreground'}`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};