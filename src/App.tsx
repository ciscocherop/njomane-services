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

// Mobile bottom emergency call bar — REMOVED per design refresh
// Users can tap Call in the navbar instead

export default function App() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}
