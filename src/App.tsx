import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HighlightBar from './components/HighlightBar';
import Navbar from './components/Navbar';
import RoadsideService from './components/RoadsideService';
import Services from './components/Services';
import Tires from './components/Tires';
import WhyChooseUs from './components/WhyChooseUs';

// Mobile bottom emergency call bar
import { Phone } from 'lucide-react';

function MobileCallBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      role="navigation"
      aria-label="Emergency call"
    >
      <a
        href="tel:8573166799"
        className="flex items-center justify-center gap-3 w-full bg-[#FFD400] hover:bg-yellow-300 text-zinc-950 font-black py-4 transition-colors duration-200"
        style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.1rem', letterSpacing: '0.05em' }}
        aria-label="Call Njomane Services for emergency roadside dispatch"
      >
        <Phone size={20} aria-hidden="true" />
        <span className="flex flex-col leading-tight">
          <span className="text-xs tracking-widest uppercase opacity-70">📞 Emergency Roadside Call</span>
          <span>857-316-6799</span>
        </span>
      </a>
    </div>
  );
}

export default function App() {
  return (
    <>
      {/* Sticky navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />
        <HighlightBar />
        <About />
        <Services />
        <Tires />
        <RoadsideService />
        <WhyChooseUs />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile bottom bar spacer + emergency call bar */}
      <div className="h-16 md:hidden" aria-hidden="true" />
      <MobileCallBar />
    </>
  );
}
