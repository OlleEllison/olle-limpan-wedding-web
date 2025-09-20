import React from 'react';
import { Clock, MapPin, Camera, Music, Utensils, Gift } from 'lucide-react';
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
      icon: Camera,
      title: 'Fotografering',
      content: [
        'Professionell fotograf',
        'Gruppbilder efter vigsel',
        'Dela era egna bilder!',
        '#EllisionOllesBröllop',
        'Vi älskar era perspektiv'
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
      icon: Music,
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
    <section id="details" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="font-handwritten text-5xl md:text-6xl text-primary">
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
                  <CardTitle className="font-handwritten text-2xl text-secondary">
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

          {/* Important Notes */}
          <div className="bg-gradient-soft rounded-2xl p-8 text-center space-y-4 border-2 border-primary/20">
            <h3 className="font-handwritten text-3xl text-primary">
              Viktigt att komma ihåg
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
              <div className="space-y-2">
                <h4 className="font-semibold text-secondary">Transport</h4>
                <p className="text-muted-foreground text-sm">
                  Buss kommer att arrangeras från Stockholm. 
                  Mer information kommer via e-post.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-secondary">Boende</h4>
                <p className="text-muted-foreground text-sm">
                  Rekommenderade hotell och B&B i området 
                  finns listade på vår önskelista-sida.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-secondary">Väder</h4>
                <p className="text-muted-foreground text-sm">
                  Ta med en kofta för kvällen och bekväma skor. 
                  Paraply kan vara bra att ha till hands!
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-secondary">Kontakt</h4>
                <p className="text-muted-foreground text-sm">
                  Har ni frågor? Kontakta oss eller våra toastmasters 
                  [namn] på [telefon].
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};