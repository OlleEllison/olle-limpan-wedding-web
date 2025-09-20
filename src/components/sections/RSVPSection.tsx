import React, { useState } from 'react';
import { Heart, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

export const RSVPSection: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attending: '',
    guestCount: '1',
    dietaryRestrictions: '',
    accommodation: false,
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    // For now, we'll just show a success message
    setIsSubmitted(true);
    
    toast({
      title: "Tack för ditt svar!",
      description: "Vi har tagit emot din OSA och kommer att bekräfta via e-post.",
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="text-primary" size={48} />
            </div>
            <h2 className="font-handwritten text-5xl text-primary">
              Tack för ditt svar!
            </h2>
            <p className="text-xl text-muted-foreground">
              Vi ser fram emot att fira denna speciella dag tillsammans med dig.
              En bekräftelse kommer att skickas till din e-post inom kort.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Ändra svar
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="font-handwritten text-5xl md:text-6xl text-primary">
              OSA
            </h2>
            <p className="text-xl text-muted-foreground">
              Svara senast 1 juni 2026
            </p>
          </div>

          {/* RSVP Form */}
          <Card className="shadow-xl border-2 border-primary/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary" size={24} />
              </div>
              <CardTitle className="font-handwritten text-3xl text-secondary">
                Vi vill veta om du kommer!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-secondary font-medium">
                    Ditt namn *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="För- och efternamn"
                    required
                    className="border-2 border-border focus:border-primary"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-secondary font-medium">
                    E-postadress *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="din@email.com"
                    required
                    className="border-2 border-border focus:border-primary"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-secondary font-medium">
                    Telefonnummer
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="070-123 45 67"
                    className="border-2 border-border focus:border-primary"
                  />
                </div>

                {/* Attending */}
                <div className="space-y-2">
                  <Label className="text-secondary font-medium">
                    Kommer du till bröllopet? *
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('attending', value)}>
                    <SelectTrigger className="border-2 border-border focus:border-primary">
                      <SelectValue placeholder="Välj ditt svar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Ja, jag kommer! 🎉</SelectItem>
                      <SelectItem value="no">Tyvärr kan jag inte komma 😢</SelectItem>
                      <SelectItem value="maybe">Kanske, jag återkommer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Guest Count */}
                {formData.attending === 'yes' && (
                  <div className="space-y-2">
                    <Label className="text-secondary font-medium">
                      Antal personer (inklusive dig själv)
                    </Label>
                    <Select onValueChange={(value) => handleInputChange('guestCount', value)}>
                      <SelectTrigger className="border-2 border-border focus:border-primary">
                        <SelectValue placeholder="Antal personer" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 person</SelectItem>
                        <SelectItem value="2">2 personer</SelectItem>
                        <SelectItem value="3">3 personer</SelectItem>
                        <SelectItem value="4">4 personer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Dietary Restrictions */}
                {formData.attending === 'yes' && (
                  <div className="space-y-2">
                    <Label htmlFor="dietary" className="text-secondary font-medium">
                      Matallergier eller specialkost
                    </Label>
                    <Input
                      id="dietary"
                      value={formData.dietaryRestrictions}
                      onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                      placeholder="T.ex. vegetarian, glutenfri, nötallergier..."
                      className="border-2 border-border focus:border-primary"
                    />
                  </div>
                )}

                {/* Accommodation */}
                {formData.attending === 'yes' && (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="accommodation"
                      checked={formData.accommodation}
                      onCheckedChange={(checked) => handleInputChange('accommodation', checked as boolean)}
                    />
                    <Label htmlFor="accommodation" className="text-sm text-muted-foreground">
                      Jag behöver hjälp med att hitta boende i området
                    </Label>
                  </div>
                )}

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-secondary font-medium">
                    Meddelande till brudparet
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Skriv gärna några rader till oss..."
                    rows={4}
                    className="border-2 border-border focus:border-primary resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  disabled={!formData.name || !formData.email || !formData.attending}
                >
                  <Send className="mr-2" size={20} />
                  Skicka OSA
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="text-center text-sm text-muted-foreground">
            <p>
              Har du problem med formuläret? 
              <br />
              Kontakta oss på [e-post] eller [telefon]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};