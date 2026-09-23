import { Phone } from 'lucide-react';

export default function RoadsideService() {
  return (
    <section id="roadside" className="bg-zinc-900 relative overflow-hidden">
      {/* Left yellow edge accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-[#FFD400] rounded-r-full z-10" aria-hidden="true" />

      <div className="max-w-7xl mx-auto lg:px-8">
        <div className="grid lg:grid-cols-2 lg:rounded-2xl overflow-hidden">

          {/* ── Left — image fills full section height ── */}
          <div className="relative order-2 lg:order-1 min-h-[320px] lg:min-h-0">
            <img
              src="/onsite_road.jpg"
              alt="Mobile service truck with tools open, mechanic servicing a semi truck on the highway"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Bottom badge */}
            <div className="absolute bottom-4 left-4 bg-zinc-950/90 border border-white/10 rounded-lg px-4 py-2.5 backdrop-blur-sm">
              <p className="text-[#FFD400] text-xs font-semibold uppercase tracking-wide">Mobile Service</p>
              <p className="text-white font-bold text-sm">We Come To You</p>
            </div>
          </div>

          {/* ── Right — content with padding ── */}
          <div className="order-1 lg:order-2 flex flex-col gap-5 px-6 py-12 lg:px-10 lg:py-16">
            <div>
              <span className="text-[#FFD400] text-xs font-semibold tracking-[0.18em] uppercase">
                Mobile Mechanic
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                On-Site &amp; Road Service Available
              </h2>
              <p className="mt-1.5 text-[#FFD400] font-bold text-sm italic">
                We Keep Your Business Moving!
              </p>
            </div>

            <p className="text-zinc-300 text-base leading-relaxed">
              When your truck needs attention, get in touch with Njomane
              Services. We come to you — on the side of the road, at a yard,
              or at a job site in the Dallas area.
            </p>

            <ul className="flex flex-col gap-2.5" role="list">
              {[
                'Truck & trailer repairs at your location',
                'Tire changes and flat tire repair on-site',
                'Engine and electrical diagnostics in the field',
                'Brake service and suspension repair on-site',
                'Serving Dallas, TX and surrounding areas',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FFD400] flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Buttons only — no contact cards */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href="tel:8573166799"
                className="flex items-center justify-center gap-2 bg-[#FFD400] hover:bg-yellow-300 text-zinc-950 font-bold px-6 py-3 rounded-md transition-colors duration-200 text-base"
              >
                <Phone size={17} aria-hidden="true" />
                Call Now
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 text-white hover:bg-white/5 font-semibold px-6 py-3 rounded-md transition-colors duration-200 text-base"
              >
                Request Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
