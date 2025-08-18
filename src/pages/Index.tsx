import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Policies from '@/components/Policies';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Policies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
