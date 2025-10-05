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
    },
    {
      id: 'calendar',
      icon: Clock,
      title: 'Kalender',
      content: []
    }
  ];

  return (
    <section id="details" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="font-handwritten text-4xl md:text-6xl text-primary">
              Bröllopsdetaljer
            </h2>
            <p className="text-base text-muted-foreground">
              Allt ni behöver veta om vår stora dag
            </p>
          </div>

          {/* Details Sections */}
          <div className="space-y-12">
            {details.map((detail, index) => (
              <div 
                key={index}
                id={detail.id}
                className="text-center space-y-4 py-8 border-b border-border last:border-b-0"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <detail.icon className="text-primary" size={24} />
                  </div>
                </div>
                <h3 className="font-handwritten text-3xl md:text-4xl text-black">
                  {detail.title}
                </h3>
                {detail.id === 'calendar' ? (
                  // Calendar Section
                  <div className="flex justify-center mt-6">
                    <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-primary/20 rounded-3xl p-6 shadow-2xl w-full max-w-4xl mx-auto">
                      <div className="text-center mb-6">
                        <h4 className="font-handwritten text-3xl text-primary mb-2">Augusti 2026</h4>
                        <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                      </div>
                      
                      {/* Calendar Grid */}
                      <div className="grid grid-cols-7 gap-2">
                        {/* Day headers */}
                        {['Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör'].map((day, index) => (
                          <div key={index} className="p-2 font-bold text-primary text-center border-b-2 border-primary/10">
                            {day}
                          </div>
                        ))}
                        
                        {/* Calendar days */}
                        {/* August 1, 2026 starts on Saturday, so we need 6 empty cells */}
                        {[...Array(6)].map((_, index) => (
                          <div key={`empty-${index}`} className="p-2 h-12"></div>
                        ))}
                        
                        {/* Days 1-31 */}
                        {[...Array(31)].map((_, index) => {
                          const day = index + 1;
                          const isWeddingDay = day === 15;
                          
                          return (
                            <div
                              key={day}
                              className={`p-2 h-12 flex flex-col items-center justify-center rounded-xl transition-all duration-300 text-base font-semibold ${
                                isWeddingDay
                                  ? 'bg-gradient-to-br from-primary to-primary/80 text-white cursor-pointer hover:scale-105 shadow-lg border-2 border-primary-foreground/20'
                                  : 'bg-white/50 text-gray-700 hover:bg-white hover:shadow-md border border-gray-200'
                              }`}
                              onClick={isWeddingDay ? () => {
                                const link = document.createElement('a');
                                link.href = '/savethedate.ics';
                                link.download = 'savethedate.ics';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                              } : undefined}
                            >
                              <div className="text-sm font-bold">{day}</div>
                              {isWeddingDay && (
                                <div className="text-xs mt-0.5 font-medium">Lägg till</div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
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
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};