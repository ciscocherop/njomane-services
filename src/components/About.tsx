import { ArrowRight, Phone } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-[#111111] pt-10 pb-12 lg:pt-12 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ── Left — single strong image ── */}
          <div className="relative pb-6 sm:pb-0">
            {/* Yellow corner accents — hidden on very small screens to avoid clipping */}
            <div
              className="hidden sm:block absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#FFD400]/50 rounded-tl-xl pointer-events-none z-10"
              aria-hidden="true"
            />
            <div
              className="hidden sm:block absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#FFD400]/50 rounded-br-xl pointer-events-none z-10"
              aria-hidden="true"
            />

            <div className="relative rounded-2xl overflow-hidden border border-white/8">
              <img
                src="/about_mecahnic.jpg"
                alt="Professional mechanic working under a commercial vehicle at Njomane Services, Dallas TX"
                className="w-full h-64 lg:h-[360px] object-cover object-center"
              />
              {/* Bottom overlay badge */}
              <div
                className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.85), transparent)' }}
                aria-hidden="true"
              />
              <div className="absolute bottom-5 left-5">
                <p
                  className="text-white font-black text-lg uppercase leading-tight"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Njomane Services LLC
                </p>
                <p className="text-[#FFD400] text-xs font-semibold tracking-widest uppercase">
                  Truck Mechanic · Dallas, TX
                </p>
              </div>

              {/* Stat card — inside image wrapper so it never overflows the section */}
              <div className="absolute bottom-4 right-4 bg-[#050505]/95 border border-[#FFD400]/30 rounded-xl px-4 py-3 shadow-xl backdrop-blur-sm">
                <p className="text-[#FFD400] font-black text-xl leading-none"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  ALL MAKES
                </p>
                <p className="text-[#A3A3A3] text-xs mt-0.5 tracking-wide uppercase">&amp; Models</p>
              </div>
            </div>
          </div>

          {/* ── Right — "Who We Are" content ── */}
          <div className="flex flex-col gap-4 lg:pl-4">

            {/* Label + heading */}
            <div>
              <span className="text-[#FFD400] text-xs font-semibold tracking-[0.2em] uppercase">
                Who We Are
              </span>
              <h2 className="mt-2 text-4xl sm:text-5xl font-black text-white uppercase leading-none tracking-tight">
                Your Mobile Truck{' '}
                <span className="text-[#FFD400]">&amp; Trailer</span>{' '}
                Mechanic
              </h2>
              <div className="mt-4 w-12 h-1 bg-[#FFD400] rounded-full" aria-hidden="true" />
            </div>

            {/* Body copy */}
            <div className="flex flex-col gap-4 text-zinc-300 text-base leading-relaxed">
              <p>
                Njomane Services LLC is a mobile truck and trailer mechanic
                business based in Dallas, TX. We specialize in mechanical
                repair, diagnostics, and tire services for commercial trucks
                and trailers.
              </p>
              <p>
                We bring the repairs directly to your location — on the side of
                the road, at a yard, or at a job site. From engine diagnostics
                and brake repairs to tire changes and electrical troubleshooting,
                we handle all makes and models.
              </p>
              <p>
                Our focus is simple: minimize your downtime and keep your fleet
                on the road — with quality work and straightforward service.
              </p>
            </div>

            {/* Key services list */}
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4"
              role="list"
            >
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
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-zinc-300"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#FFD400] flex-shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href="tel:8573166799"
                className="inline-flex items-center justify-center gap-2 bg-[#FFD400] hover:bg-yellow-300 text-[#050505] font-bold px-6 py-3 rounded-md transition-colors duration-200"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1rem', letterSpacing: '0.05em' }}
              >
                <Phone size={16} aria-hidden="true" />
                Call 857-316-6799
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white hover:bg-white/5 font-semibold px-6 py-3 rounded-md transition-colors duration-200 text-sm"
              >
                View All Services
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
