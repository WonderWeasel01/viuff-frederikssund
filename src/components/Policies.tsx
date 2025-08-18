import PolicyCard from './PolicyCard';
import { GraduationCap, Heart, Building2, Users, Wrench, TrendingUp } from 'lucide-react';
import schoolChildren from '@/assets/school-children.webp';
import digitalClassroom from '@/assets/digital-classroom.webp';
import localBusiness from '@/assets/local-business.webp';
import sustainableDevelopment from '@/assets/sustainable-development.webp';
import townHall from '@/assets/town-hall.webp';
import advancement from '@/assets/advancement.webp';
import { Button } from './ui/button';
import politicalRally from '@/assets/political-rally.webp';


const Policies = () => {
  const policies = [
        {
      title: "Mere kvalitet i Folkeskolen",
      description: "Bedre uddannelse til fremtidens generationer",
      content: "For at passe bedst på de kommende generationer skal vi tilbyde mere kvalitet i Folkeskolen. Vi skal have en folkeskole, hvor lærerne er rustet til at løfte potentialet hos de næste generationer. Det betyder flere penge i retning af lærerne og fokus på praksisfaglighed, erhvervspraktik og teknologiforståelse.",
      image: digitalClassroom,
      imageAlt: "Moderne klasseværelse med teknologi",
      icon: <GraduationCap size={24} />,
      isReversed: true
    },
    {
      title: "Unges Trivsel",
      description: "Investering i vores børn og unge",
      content: "Vi har et problem med unges mistrivsel, og det kræver prioriteret fokus. Vi skal investere i vores skoler, både faciliteter og lærerne, så de har tiden og muligheden for at skabe gode læreringsmiljøer. Vi skal være i stand til at sætte ind med en tidlig indsats overfor de unge, der har det svært.",
      image: schoolChildren,
      imageAlt: "Børn i skolegård",
      icon: <Heart size={24} />
    },
        {
      title: "Vinge i balance",
      description: "Balanceret byudvikling",
      content: "Indsatsen i Vinge skal være i overensstemmelse med udviklingspotentialet i resten af kommune. Det nytter ikke, at udviklingen i Skibby, Jægerspris, Slangerup og andre dele af vores kommune står stille, fordi Vinge med vold og magt skal blive en succes på papiret.",
      image: sustainableDevelopment,
      imageAlt: "Bæredygtig byudvikling",
      icon: <Users size={24} />,
      isReversed: true
    },
    {
      title: "Mere fokus på lokale virksomheder",
      description: "Støtte til vores erhvervsliv",
      content: "Vi har en række virkelig stærke virksomheder i Frederikssund Kommune, som sørger for lokale arbejdspladser og skattekroner i vores kommunekasse. Det er en pligt fra politisk side, at vi hjælper disse virksomheder på den bedst mulige måde. Vores erhvervsvenlighed skal være i top.",
      image: localBusiness,
      imageAlt: "Lokale virksomheder og butikker",
      icon: <Building2 size={24} />
    },

    {
      title: "De dyre mursten",
      description: "Effektiv forvaltning af kommunens bygninger",
      content: "Pengene fosser ud af vores mursten i Frederikssund Kommune. I mange år har der været et efterslæb på tidsvarende renoveringer af vores bygninger, og det betyder, at vi i dag bruger over 600 kr. pr. kvadratmeter kommunal. Det bliver ikke billigere af, at vi venter. Tværtimod.",
      image: townHall,
      imageAlt: "Kommunens bygninger",
      icon: <Wrench size={24} />,
      isReversed: true
     
    },
    {
      title: "Udvikling ikke afvikling",
      description: "Vi skal arbejde for at få frigjort mere land til, at nye familier kan flytte fra deres lejligheder i byerne og købe en byggegrund eller et parcelhus med have. Vi skal turde tænke større og ud af boksen. Vi skal sigte på fremtiden med respekten for nutiden.",
      image: advancement,
      imageAlt: "Udvikling og fremgang",
      icon: <TrendingUp size={24} />,
    }
  ];

  return (
    <section id="maerkesager" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Mine mærkesager
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Jeg går til valg på konkrete løsninger for Frederikssund Kommune. 
            Her er de områder, hvor jeg vil gøre en forskel for vores fællesskab.
          </p>
        </div>

        {/* Policy Cards */}
        <div className="space-y-20">
          {policies.map((policy, index) => (
            <PolicyCard
              key={index}
              id={`maerkesag-${index}`}
              title={policy.title}
              description={policy.description}
              content={policy.content}
              image={policy.image}
              imageAlt={policy.imageAlt}
              icon={policy.icon}
              isReversed={policy.isReversed}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Policies;