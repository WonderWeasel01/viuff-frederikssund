import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function InsightPage() {
  const experiences = [
  // Erhvervserfaring
  {
    periode: "2022",
    virksomhed: "Nordsjællands Valgkreds",
    stilling: "Folketingskandidat (Det Konservative Folkeparti)",
    beskrivelse: "Spidskandidat til Folketingsvalg."
  },
  {
    periode: "2021 – 2025",
    virksomhed: "Kanneworff & Viuff A/S",
    stilling: "Indehaver",
    beskrivelse: "Ledelse og udvikling af nye forretningsområder."
  },
  {
    periode: "2017 – 2025",
    virksomhed: "Frederikssund Kommune",
    stilling: "Medlem af kommunalbestyrelsen (Det Konservative Folkeparti)",
    beskrivelse: "Medlem af Økonomiudvalget og udvalgsformand i Unge, Fritid og Idræt."
  },
  {
    periode: "2009 – 2025",
    virksomhed: "Viuff Holding A/S",
    stilling: "Indehaver",
    beskrivelse: "Holding-aktiviteter og investeringer."
  },
  {
    periode: "2008 – 2018",
    virksomhed: "Blue Box ApS",
    stilling: "Indehaver",
    beskrivelse: "Entreprenørvirksomhed med ejerskab og forretningsudvikling."
  },
  {
    periode: "2007 – 2022",
    virksomhed: "Viuff Anlæg A/S",
    stilling: "Entreprenør",
    beskrivelse: "Ansvar for entreprenørarbejde og driftsledelse."
  },
  {
    periode: "1991 – 1995",
    virksomhed: "HHM A/S",
    stilling: "Projektleder",
    beskrivelse: "Ansvar for projektledelse og gennemførelse af større byggeprojekter."
  },
  {
    periode: "1990 – 2025",
    virksomhed: "NIMA A/S",
    stilling: "Indehaver",
    beskrivelse: "Egen virksomhed med fokus på entreprenørarbejde inden for jord, kloak og beton."
  },
  {
    periode: "1988 – 1991",
    virksomhed: "HHS Egenproduktion",
    stilling: "Sektionsleder",
    beskrivelse: "Ledelse af sektion med ansvar for egenproduktionsprojekter."
  },

  // Uddannelse
  {
    periode: "2000",
    virksomhed: "Teknologisk Institut",
    stilling: "Autoriseret Kloakmester",
    beskrivelse: "Faglært og autoriseret til kloakarbejde."
  },
  {
    periode: "1985 – 1988",
    virksomhed: "Byggeteknisk Højskole",
    stilling: "Bygningskonstruktør",
    beskrivelse: "Uddannelse som bygningskonstruktør."
  },
  {
    periode: "1980 – 1982",
    virksomhed: "Nykøbing Falster Handelsskole",
    stilling: "Merkonom",
    beskrivelse: "Merkonomuddannelse med fokus på forretning."
  },
  {
    periode: "1980 – 1982",
    virksomhed: "Næsgaard Agerbrugsskole",
    stilling: "Agraøkonom",
    beskrivelse: "Landbrugsfaglig uddannelse."
  },

  // Tillidshverv & Medlemskaber
  {
    periode: "2009 – 2025",
    virksomhed: "Håndværkerforeningen København",
    stilling: "Repræsentant",
    beskrivelse: "Repræsentant for erhvervet og branchen."
  },
  {
    periode: "2008 – 2025",
    virksomhed: "Bygningsentreprenørsektionen i Dansk Byggeri",
    stilling: "Formand",
    beskrivelse: "Ledelse af sektionen for bygningsentreprenører."
  },
  {
    periode: "2012 – 2025",
    virksomhed: "Borger- og Fugleskydningsselskabet i Frederikssund",
    stilling: "Formand",
    beskrivelse: "Foreningsledelse og lokale arrangementer."
  },
  {
    periode: "2007 – 2010",
    virksomhed: "Dansk Byggeri Frederikssund",
    stilling: "Lokalformand",
    beskrivelse: "Ansvar for lokalafdelingens aktiviteter."
  },
  {
    periode: "2001 – 2025",
    virksomhed: "Rotary Danmark",
    stilling: "Medlem",
    beskrivelse: "Netværk og velgørenhedsarbejde."
  }
];

  
    

  return (
    <div className="pt-24 bg-background">
      <Header/>
      <div className="max-w-4xl mx-auto pb-20">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold">Indblik</h1>
            <p className="text-xl text-muted-foreground">Min erhvervserfaring gennem årene</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
            <div className="space-y-12 relative">
              {/* Sorter experiences nyeste først */}
              {experiences
                .slice() // lav en kopi
                .sort((a, b) => {
                  // Hent slutdato eller 'nu' for begge
                  const parseDate = (periode) => {
                    if (!periode) return 0;
                    const [start, end] = periode.split(' - ').map(s => s.trim());
                    if (end === 'nu') return new Date(3000, 0).getTime(); // langt ude i fremtiden
                    if (!end) return 0;
                    const [mon, year] = end.split(' ');
                    const month = ["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"].indexOf(mon);
                    return month !== -1 && year ? new Date(parseInt(year), month).getTime() : 0;
                  };
                  return parseDate(b.periode) - parseDate(a.periode);
                })
                .map((exp, index) => {
                // Beregn varighed ud fra periode-feltet
                let highlight = "";
                if (exp.periode) {
                  // Eksempel: "Jan 2005 - Jan 2007" eller "Aug 2018 - Dec 2024" eller "Jan 2025 - nu"
                  const [start, end] = exp.periode.split(" - ").map(s => s.trim());
                  const months = (dateStr) => {
                    if (!dateStr) return null;
                    const [mon, year] = dateStr.split(" ");
                    const month = ["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"].indexOf(mon);
                    return month !== -1 && year ? new Date(parseInt(year), month) : null;
                  };
                  const startDate = months(start);
                  const isCurrent = end === "nu";
                  const endDate = isCurrent ? new Date() : months(end);
                  if (startDate && endDate) {
                    let diff = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
                    const years = Math.floor(diff / 12);
                    const mths = diff % 12;
                    highlight = years > 0 ? `${years} år${mths > 0 ? ` og ${mths} mdr.` : ""}` : `${mths} mdr.`;
                    if (isCurrent) highlight += " (nu)";
                  }
                }
                return (
                  <div key={index} className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 w-4 h-4 rounded-full bg-primary"></div>
                    <Card className={`relative max-w-lg ${index % 2 === 0 ? "mr-auto pr-8" : "ml-auto pl-8"} shadow-lg`}>
                      <CardHeader className="pb-2">
                        <div className="text-sm text-muted-foreground">{exp.periode}</div>
                        <CardTitle className="text-xl font-serif">{exp.virksomhed}</CardTitle>
                        {highlight && (
                          <div className="inline-block" style={{background:'#9ED196',color:'#00583C',fontWeight:600,padding:'2px 8px',borderRadius:'999px',fontSize:'0.8rem',marginTop:4}}>
                            {highlight}
                          </div>
                        )}
                      </CardHeader>
                      <CardContent>
                        <div className="font-semibold text-[#00583C]">{exp.stilling}</div>
                        <p className="text-sm">{exp.beskrivelse}</p>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}