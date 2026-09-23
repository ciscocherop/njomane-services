import { ArrowRight, Phone } from 'lucide-react';
import CheckList from './CheckList';
import PhotoPanel from './PhotoPanel';

export default function About() {
  return (
    <section id="about" className="relative pt-10 pb-12 lg:pt-14 lg:pb-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left — image */}
          <div className="relative pb-6 sm:pb-0">
            <PhotoPanel
              src="/about_mecahnic.jpg"
              alt="Professional mechanic working under a commercial vehicle at Njomane Services, Dallas TX"
              title="Njomane Services LLC"
              subtitle="Truck Mechanic · Dallas, TX"
            >
              {/* Stat chip */}
              <div className="absolute top-4 sm:top-auto sm:bottom-4 right-4 bg-zinc-950/90 border border-zinc-700 rounded-lg px-3 py-2 backdrop-blur-sm">
                <p className="text-white font-black text-base leading-none"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  ALL MAKES
                </p>
                <p className="text-zinc-400 text-xs mt-0.5 uppercase">&amp; Models</p>
              </div>
            </PhotoPanel>
          </div>

          {/* Right — content */}
          <div className="flex flex-col gap-4 lg:pl-4">
            <div>
              <span className="text-zinc-400 text-xs font-semibold tracking-[0.2em] uppercase">
                Who We Are
              </span>
              {/* Heading — white on dark bg */}
              <h2 className="mt-2 text-4xl sm:text-5xl font-black text-white uppercase leading-none tracking-tight">
                Your Mobile Truck &amp; Trailer Mechanic
              </h2>
              <div className="mt-4 w-10 h-0.5 bg-zinc-600 rounded-full" aria-hidden="true" />
            </div>

            {/* 3 scannable bullet points — replaces paragraphs + grid */}
            <CheckList items={[
              { title: 'We come to you.', body: 'On-site repairs at your location — roadside, yard or job site anywhere in DFW.' },
              { title: 'All makes & models.', body: 'Trucks, trailers, semis, box trucks, flatbeds and reefers — domestic and import.' },
              { title: 'Full-service mechanic.', body: 'Engine, brakes, transmission, tires, electrical, suspension and preventive maintenance.' },
            ]} />

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href="tel:+18573166799"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:brightness-110 text-zinc-950 font-black px-6 py-3 rounded-md transition-colors duration-200"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.95rem', letterSpacing: '0.05em' }}
              >
                <Phone size={15} aria-hidden="true" />
                +1 (857) 316-6799
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200 text-sm"
              >
                View All Services
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
