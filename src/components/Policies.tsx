import PolicyCard from './PolicyCard';
import { GraduationCap, Heart, Building2, Users, Wrench, TrendingUp } from 'lucide-react';
import schoolChildren from '@/assets/school-children.jpg';
import digitalClassroom from '@/assets/digital-classroom.jpg';
import localBusiness from '@/assets/local-business.jpg';
import sustainableDevelopment from '@/assets/sustainable-development.jpg';
import townHall from '@/assets/town-hall.jpg';
import elderCare from '@/assets/elderly-care.jpg';

const Policies = () => {
  const policies = [
    {
      title: "Unges trivsel",
      description: "Investering i vores børn og unge",
      content: "Vi har et problem med unges mistrivsel, og det kræver prioriteret fokus. Vi skal investere i vores skoler, både faciliteter og lærerne, så de har tiden og muligheden for at skabe gode læreringsmiljøer. Vi skal være i stand til at sætte ind med en tidlig indsats overfor de unge, der har det svært.",
      image: schoolChildren,
      imageAlt: "Børn i skolegård",
      icon: <Heart size={24} />
    },
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
      title: "Mere fokus på lokale virksomheder",
      description: "Støtte til vores erhvervsliv",
      content: "Vi har en række virkelig stærke virksomheder i Frederikssund Kommune, som sørger for lokale arbejdspladser og skattekroner i vores kommunekasse. Det er en pligt fra politisk side, at vi hjælper disse virksomheder på den bedst mulige måde. Vores erhvervsvenlighed skal være i top.",
      image: localBusiness,
      imageAlt: "Lokale virksomheder og butikker",
      icon: <Building2 size={24} />
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
      title: "De dyre mursten",
      description: "Effektiv forvaltning af kommunens bygninger",
      content: "Pengene fosser ud af vores mursten i Frederikssund Kommune. Vi bruger over 600 kr. pr. kvadratmeter kommunal bygning i vedligeholdelse. Dette efterslæb har fået lov til at vokse sig større over årerne, og det er en dyr affære. Vi skal åbne snakken om besparelser en investering i et nyt tidsvarende rådhus vil betyde.",
      image: townHall,
      imageAlt: "Kommunens bygninger",
      icon: <Wrench size={24} />
    },
    {
      title: "Udvikling ikke afvikling",
      description: "Fremadrettet tænkning og investeringer",
      content: "Vi skal arbejde for at få frigjort mere land til, at nye familier kan flytte fra deres lejligheder i byerne og købe en byggegrund eller et parcelhus med have. Vi skal turde tænke større og ud af boksen - herunder færdiggørelsen af det maritime center og et kulturhus på tippen.",
      image: elderCare,
      imageAlt: "Udvikling og fremgang",
      icon: <TrendingUp size={24} />,
      isReversed: true
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