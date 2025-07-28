import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import campaignTeam from '@/assets/campaign-team.jpg';
import politicalRally from '@/assets/political-rally.jpg';

const About = () => {
  return (
    <section id="om-niels" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Om Niels Martin Viuff
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            En politiker der tør tænke stort og tage ansvar for fremtiden
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <Card className="bg-gradient-section border-none shadow-elegant">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Quote size={32} className="text-primary" />
                  <h3 className="text-2xl font-bold text-primary">Min vision</h3>
                </div>
                
                <blockquote className="text-lg text-foreground leading-relaxed mb-6 italic">
                  "I politik er et nej det nemmeste i verden. Et ja er til gengæld svært. 
                  Det betyder, at du er nødt til at finde et flertal for en bestemt måde at gøre noget. 
                  Det er en udfordring - men det er den udfordring, vores fællesskab har brug for."
                </blockquote>
                
                <p className="text-foreground leading-relaxed mb-6">
                  Som spidskandidat for Det Konservative Folkeparti i Frederikssund går jeg til valg 
                  på en klar vision: Vi skal tænke større. Vi skal droppe udkantsmentaliteten og 
                  turde gribe de muligheder, der ligger foran os.
                </p>
                
                <p className="text-foreground leading-relaxed mb-8">
                  Mit fokus ligger på fremtiden for vores kommune, og fremtiden starter lige her og nu. 
                  Vi har brug for offensive løsninger, investeringer i vores børn og unge, 
                  og en erhvervsvenlighed der skaber arbejdspladser og vækst.
                </p>
                
                <Button variant="conservative" size="lg">
                  Kontakt Niels
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src={campaignTeam}
              alt="Niels Martin Viuff med kampagneteam"
              className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-6 bg-gradient-section border-none shadow-elegant">
            <CardContent className="p-0">
              <div className="text-4xl font-bold text-primary mb-2">16+</div>
              <h4 className="text-lg font-semibold text-foreground mb-2">År i politik</h4>
              <p className="text-muted-foreground">Erfaring med kommunalpolitik og lokale udfordringer</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-section border-none shadow-elegant">
            <CardContent className="p-0">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Lokal forankring</h4>
              <p className="text-muted-foreground">Bosat i Frederikssund Kommune med dyb kendskab til lokale forhold</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-section border-none shadow-elegant">
            <CardContent className="p-0">
              <div className="text-4xl font-bold text-primary mb-2">6</div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Fokusområder</h4>
              <p className="text-muted-foreground">Konkrete mærkesager for fremtidens Frederikssund</p>
            </CardContent>
          </Card>
        </div>

        {/* Rally Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-elegant">
          <img 
            src={politicalRally}
            alt="Politisk arrangement med støtter"
            className="w-full h-64 lg:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">Sammen skaber vi forandring</h3>
              <p className="text-lg lg:text-xl mb-6">Bliv en del af bevægelsen for et stærkere Frederikssund</p>
              <Button variant="conservative-light" size="xl">
                Bliv støtter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;