import { useEffect, useState } from "react";
import PolicyCard from './PolicyCard';
import { GraduationCap, Heart, Building2, Users, Wrench, TrendingUp } from 'lucide-react';
import schoolChildren from '@/assets/school-children.webp';
import digitalClassroom from '@/assets/digital-classroom.webp';
import localBusiness from '@/assets/local-business.webp';
import sustainableDevelopment from '@/assets/sustainable-development.webp';
import townHall from '@/assets/town-hall.webp';
import advancement from '@/assets/advancement.webp';

const iconList = [
  <GraduationCap size={24} />,
  <Heart size={24} />,
  <Users size={24} />,
  <Building2 size={24} />,
  <Wrench size={24} />,
  <TrendingUp size={24} />
];

const imageList = [
  digitalClassroom,
  schoolChildren,
  sustainableDevelopment,
  localBusiness,
  townHall,
  advancement
];

const Policies = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
   fetch("http://localhost:4000/api/localhost:8080", {
  headers: {
    "x-admin-password": "test"
  }
})
      .then(res => res.json())
      .then(data => {
        if (data.policies && Array.isArray(data.policies)) {
          setPolicies(data.policies);
        } else {
          throw new Error("No policies from backend");
        }
      })
      .catch(() => {
        fetch("/data.json")
          .then(res => res.json())
          .then(data => {
            console.log("Fallback data.json:", data);
            setPolicies(data.policies || []);
          });
      });
  }, []);

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
            <div key={index}>
              <PolicyCard
                id={`maerkesag-${index}`}
                title={policy.title}
                description={policy.description}
                content={policy.content}
                image={imageList[index % imageList.length]}
                imageAlt={policy.title}
                icon={iconList[index % iconList.length]}
                isReversed={index % 2 === 1}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
              {openIndex === index && (
                <div className="mt-4 p-4 bg-white rounded shadow">
                  {policy.readMore}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Policies;