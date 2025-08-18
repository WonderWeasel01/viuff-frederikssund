import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, TrendingUp, Heart, Users } from 'lucide-react';
import campaignTeam from '@/assets/campaign-team.webp';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const aboutCards = [
	{
		icon: TrendingUp,
		title: "Vækst",
		details: (
			<>
				<h3 className="text-xl font-semibold mb-4">Vækst</h3>
				<div className="space-y-3">
					<p>
						Vækst er motoren i vores samfund, og iværksætteriet er brændstoffet i vores vækstmotor. Skoler, veje, sygehuse, plejehjem, alt er bundet op på, at vores virksomheder har de bedste muligheder for at vækste og skabe arbejdspladser. Iværksættere kan selv. Markedet kan selv. Det bedste, vi politikere kan gøre, er, at lytte til markedet, og lade Frederikssund Kommune blive et vækstcenter.
					</p>
				</div>
			</>
		),
	},
	{
		icon: Heart,
		title: "Velfærd",
		details: (
			<>
				<h3 className="text-xl font-semibold mb-4">Velfærd</h3>
				<div className="space-y-3">
					<p>
						Vi skal styrke vores velfærd, og vi skal have friheden tilbage til borgerne. Både når det kommer til uddannelse af vores unge, og når det kommer til respekten for vores ældre. Vores skoler, børnehaver, sygehuse og sundhedssystem skal være i verdensklasse. Den bedste velfærd vi kan få, er friheden til at kunne vælge selv.
					</p>
				</div>
			</>
		),
	},
	{
		icon: Users,
		title: "Viuff",
		details: (
			<>
				<h3 className="text-xl font-semibold mb-4">Viuff</h3>
				<div className="space-y-3">
					<p>
						Med 40 år på arbejdsmarkedet heraf 25 som selvstændig kan jeg bidrage med en erfaring, som jeg tror på kan gøre en forskel i lokalpolitik. Vi har brug for mere virkelighed i politik. En stemme på mig er en stemme på en erfaren leder, der tror på samarbejde og ordentlighed som vejen til de rigtige løsninger.
					</p>
				</div>
			</>
		),
	},
];

function useIsMobile(breakpoint = 768) {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const check = () => setIsMobile(window.innerWidth < breakpoint);
		check();
		window.addEventListener("resize", check);
		return () => window.removeEventListener("resize", check);
	}, [breakpoint]);
	return isMobile;
}

const About = () => {
	const [selectedCard, setSelectedCard] = useState<number | null>(null);
	const [pendingCard, setPendingCard] = useState<number | null>(null);
	const isMobile = useIsMobile();

	const handleCardClick = (index: number) => {
		if (selectedCard === index) {
			setSelectedCard(null);
			setPendingCard(null);
		} else if (selectedCard !== null) {
			setSelectedCard(null);
			setPendingCard(index);
		} else {
			setSelectedCard(index);
			setPendingCard(null);
		}
	};

	// Move dropdown below grid on desktop, under card on mobile
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
								<Button
									asChild
									variant="conservative"
									size="lg"
								>
									<a href="#kontakt" className="scroll-smooth">
										Kontakt Niels
									</a>
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

				{/* Interactive Value Boxes with Animation */}
				<div className={`grid md:grid-cols-3 gap-8 mb-4`}>
					{aboutCards.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="relative"
						>
							<Card className="text-center p-6 bg-gradient-section border-none shadow-elegant">
								<CardContent className="p-0">
									<div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#9ED196" }}>
										<item.icon className="w-8 h-8" style={{ color: "#00583C" }} />
									</div>
									<div className="text-3xl font-bold text-primary mb-2">{item.title}</div>
									<button
										className="mt-4 px-4 py-2 rounded transition-colors text-sm font-medium"
										style={{
											backgroundColor: "#00583C",
											color: "#FFFFFF",
										}}
										onClick={() => handleCardClick(index)}
									>
										{selectedCard === index ? "Luk" : "Læs mere"}
									</button>
								</CardContent>
							</Card>
							{/* Mobile: dropdown directly under each card */}
							<AnimatePresence>
								{isMobile && selectedCard === index && (
									<motion.div
										key={`mobile-dropdown-${index}`}
										initial={{ opacity: 0, height: 0, y: -20 }}
										animate={{ opacity: 1, height: "auto", y: 0 }}
										exit={{ opacity: 0, height: 0, y: -20 }}
										transition={{ duration: 0.35, ease: "easeOut" }}
										className="mt-4 border shadow-lg bg-white rounded-lg p-6"
										style={{
											borderColor: "#9ED196",
											borderLeftWidth: "8px",
											backgroundColor: "#FFFFFF",
										}}
									>
										{item.details}
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</div>
				{/* Desktop: dropdown below all cards, full width */}
				<AnimatePresence>
					{!isMobile && selectedCard !== null && (
						<motion.div
							key={`desktop-dropdown-${selectedCard}`}
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 40 }}
							transition={{ duration: 0.35, ease: "easeOut" }}
							className="w-full mb-16"
						>
							<div
								className="border rounded-lg p-6"
								style={{
									borderColor: "#9ED196",
									borderLeftWidth: "8px",
									backgroundColor: "#FFFFFF",
								}}
							>
								{aboutCards[selectedCard].details}
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Existing Top 3 Value Boxes 
				<div className="grid md:grid-cols-3 gap-8 mb-16">
					<Card className="text-center p-6 bg-[#00583C] border-none shadow-elegant">
						<CardContent className="p-0">
							<div className="text-3xl font-bold text-white mb-2">16+</div>
							<h4 className="text-lg font-semibold text-white mb-2">År i politik
</h4>
							<p className="text-white">
								Erfaring med kommunalpolitik og lokale udfordringer


							</p>
						</CardContent>
					</Card>
					
					<Card className="text-center p-6 bg-[#00583C] border-none shadow-elegant">
						<CardContent className="p-0">
							<div className="text-3xl font-bold text-white mb-2">100%</div>
							<h4 className="text-lg font-semibold text-white mb-2">Lokal forankring
</h4>
							<p className="text-white">
							Bosat i Frederikssund Kommune med dyb kendskab til lokale forhold


							</p>
						</CardContent>
					</Card>
					
					<Card className="text-center p-6 bg-[#00583C]  border-none shadow-elegant">
						<CardContent className="p-0">
							<div className="text-3xl font-bold text-white mb-2">6</div>
							<h4 className="text-lg font-semibold text-white mb-2">Fokusområder</h4>
							<p className="text-white">
						Konkrete mærkesager for fremtidens Frederikssund

							</p>
						</CardContent>
					</Card>
				</div>
        */}

				{/* Rally Image 
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
				*/}
			</div>
		</section>
	);
};

export default About;