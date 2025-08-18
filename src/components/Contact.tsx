"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Facebook, Linkedin, Instagram, ExternalLink } from "lucide-react"
import harborMaritime from "@/assets/harbor-maritime.webp"

const Contact = () => {
  const socialMediaLinks = [
    {
      name: "Politisk Facebook Side",
      description: "Følg med i politiske nyheder og mærkesager",
      icon: Facebook,
      url: "#",
      color: "bg-blue-600 hover:bg-blue-700",
      textColor: "text-blue-600",
    },
    {
      name: "Privat Facebook Side",
      description: "Se hverdagslivet og personlige opdateringer",
      icon: Facebook,
      url: "#",
      color: "bg-blue-500 hover:bg-blue-600",
      textColor: "text-blue-500",
    },
    {
      name: "LinkedIn Profil",
      description: "Professionelt netværk og karriereopdateringer",
      icon: Linkedin,
      url: "#",
      color: "bg-blue-700 hover:bg-blue-800",
      textColor: "text-blue-700",
    },
    {
      name: "Instagram",
      description: "Billeder fra valgkampen og Frederikssund",
      icon: Instagram,
      url: "#",
      color: "bg-pink-600 hover:bg-pink-700",
      textColor: "text-pink-600",
    },
  ]

  return (
    <section id="kontakt" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Kontakt Niels</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Følg med i valgkampen på sociale medier eller kontakt mig direkte. Jeg glæder mig til at høre fra dig.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Social Media Links */}
          <div className="space-y-6">
            <Card className="shadow-elegant border-none bg-background">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <Instagram size={24} />
                  Følg Niels på sociale medier
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialMediaLinks.map((social, index) => (
                  <div key={index} className="group">
                    <div
                      className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-between gap-4 p-4 rounded-lg border border-border hover:border-primary/20 transition-all duration-200 hover:shadow-md overflow-hidden min-h-[unset]"
                    >
                      <div className="flex gap-4 min-w-0 w-full">

                        <div className={`p-3 rounded-full ${social.textColor} bg-current/10 flex-shrink-0`}>
                          <social.icon size={24} className="text-current" />
                        </div>
                        <div className="min-w-0 w-full">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors break-words">
                            {social.name}
                          </h3>
                          <p className="text-sm text-muted-foreground break-words">{social.description}</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className={`${social.color} text-white border-none hover:scale-105 transition-transform flex-shrink-0 w-full sm:w-auto`}
                        onClick={() => window.open(social.url, "_blank")}
                      >
                        Følg
                        <ExternalLink size={16} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

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
                      <a
                        href="mailto:Niels@viuff.as"
                        className="text-muted-foreground underline break-words"
                      >
                        Niels@viuff.as
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Telefon</p>
                      <a
                        href="tel:+4521731120"
                        className="text-muted-foreground underline break-words"
                      >
                        +45 21 73 11 20
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Harbor Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={harborMaritime || "/placeholder.svg"}
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

            {/* Campaign Support 
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
            </Card>*/}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
