import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import harborMaritime from '@/assets/harbor-maritime.png';

const Contact = () => {
  return (
    <section id="kontakt" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Kontakt Niels
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Har du spørgsmål til mine mærkesager eller vil du deltage i valgkampen? 
            Jeg glæder mig til at høre fra dig.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-elegant border-none bg-background">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <Send size={24} />
                Send en besked
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fornavn" className="block text-sm font-medium text-foreground mb-2">
                    Fornavn
                  </label>
                  <Input id="fornavn" placeholder="Dit fornavn" />
                </div>
                <div>
                  <label htmlFor="efternavn" className="block text-sm font-medium text-foreground mb-2">
                    Efternavn
                  </label>
                  <Input id="efternavn" placeholder="Dit efternavn" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="din.email@example.dk" />
              </div>
              
              <div>
                <label htmlFor="telefon" className="block text-sm font-medium text-foreground mb-2">
                  Telefon (valgfrit)
                </label>
                <Input id="telefon" type="tel" placeholder="+45 12 34 56 78" />
              </div>
              
              <div>
                <label htmlFor="besked" className="block text-sm font-medium text-foreground mb-2">
                  Din besked
                </label>
                <Textarea 
                  id="besked" 
                  placeholder="Skriv din besked til Niels her..." 
                  rows={5}
                />
              </div>
              
              <Button variant="conservative" size="lg" className="w-full">
                Send besked
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info & Image */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="shadow-elegant border-none bg-background">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-6">Kontaktoplysninger</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">niels@detkonservativefolkeparti.dk</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Telefon</p>
                      <p className="text-muted-foreground">+45 12 34 56 78</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Adresse</p>
                      <p className="text-muted-foreground">Frederikssund Kommune<br />Region Hovedstaden</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Harbor Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={harborMaritime}
                alt="Frederikssund havn"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-lg font-bold mb-2">Vores maritime kommune</h4>
                  <p className="text-sm">Frederikssund har et unikt potentiale som fjordkommune</p>
                </div>
              </div>
            </div>

            {/* Social Media / Support */}
            <Card className="shadow-elegant border-none bg-primary text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Støt valgkampen</h3>
                <p className="mb-6">Hjælp Niels med at nå ud til flere vælgere i Frederikssund Kommune</p>
                <div className="space-y-3">
                  <Button variant="conservative-light" size="lg" className="w-full">
                    Bliv frivillig
                  </Button>
                  <Button variant="conservative-accent" size="lg" className="w-full">
                    Støt økonomisk
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;