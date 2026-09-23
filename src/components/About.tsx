import { ArrowRight, Phone } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-slate-50 pt-10 pb-12 lg:pt-14 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left — image */}
          <div className="relative pb-6 sm:pb-0">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src="/about_mecahnic.jpg"
                alt="Professional mechanic working under a commercial vehicle at Njomane Services, Dallas TX"
                className="w-full h-64 lg:h-[380px] object-cover object-center"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(9,9,11,0.9), transparent)' }}
                aria-hidden="true"
              />
              <div className="absolute bottom-5 left-5">
                <p className="text-white font-black text-base uppercase leading-tight"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Njomane Services LLC
                </p>
                <p className="text-slate-300 text-xs tracking-widest uppercase">
                  Truck Mechanic · Dallas, TX
                </p>
              </div>
              {/* Stat chip */}
              <div className="absolute bottom-4 right-4 bg-white/95 border border-slate-200 rounded-lg px-3 py-2 shadow-sm">
                <p className="text-slate-900 font-black text-base leading-none"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  ALL MAKES
                </p>
                <p className="text-slate-500 text-xs mt-0.5 uppercase">&amp; Models</p>
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div className="flex flex-col gap-4 lg:pl-4">
            <div>
              <span className="text-slate-500 text-xs font-semibold tracking-[0.2em] uppercase">
                Who We Are
              </span>
              {/* Heading — slate-900 on light bg */}
              <h2 className="mt-2 text-4xl sm:text-5xl font-black text-slate-900 uppercase leading-none tracking-tight">
                Your Mobile Truck &amp; Trailer Mechanic
              </h2>
              <div className="mt-4 w-10 h-0.5 bg-slate-300 rounded-full" aria-hidden="true" />
            </div>

            <div className="flex flex-col gap-3 text-slate-600 text-sm leading-relaxed">
              <p>
                Njomane Services LLC is a mobile truck and trailer mechanic based in Dallas, TX,
                specializing in mechanical repair, diagnostics, and tire services for commercial
                trucks and trailers.
              </p>
              <p>
                We bring repairs to your location — on the roadside, at a yard, or a job site.
                Engine diagnostics, brake repairs, tire changes, electrical troubleshooting — all
                makes and models.
              </p>
            </div>

            {/* Services list — slate bullets */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4" role="list">
              {[
                'Engine Diagnostics & Repair',
                'Brake Service & Repair',
                'Tire Change & Repair',
                'Electrical Diagnostics',
                'Suspension & Air Systems',
                'On-Site & Road Service',
                'Cooling System Service',
                'Preventive Maintenance',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
                  <span className="w-1 h-1 rounded-full bg-slate-400 flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href="tel:+18573166799"
                className="inline-flex items-center justify-center gap-2 bg-[#FFD400] hover:bg-yellow-300 text-zinc-950 font-black px-6 py-3 rounded-md transition-colors duration-200"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.95rem', letterSpacing: '0.05em' }}
              >
                <Phone size={15} aria-hidden="true" />
                +1 (857) 316-6799
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 font-semibold px-6 py-3 rounded-md transition-colors duration-200 text-sm"
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
