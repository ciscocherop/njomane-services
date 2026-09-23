import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HighlightBar from './components/HighlightBar';
import Navbar from './components/Navbar';
import RoadsideService from './components/RoadsideService';
import Services from './components/Services';
import StatsBar from './components/StatsBar';
import Tires from './components/Tires';
import WhyChooseUs from './components/WhyChooseUs';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
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
