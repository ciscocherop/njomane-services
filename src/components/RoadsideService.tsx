import { Phone } from 'lucide-react';

export default function RoadsideService() {
  return (
    <section id="roadside" className="bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto lg:px-8">
        <div className="grid lg:grid-cols-2 lg:rounded-2xl overflow-hidden">

          {/* Image — fills full height */}
          <div className="relative order-2 lg:order-1 min-h-[300px] lg:min-h-0">
            <img
              src="/onsite_road.jpg"
              alt="Mobile service truck with tools open, mechanic working on a semi on the highway"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-4 left-4 bg-zinc-950/90 border border-zinc-700 rounded-lg px-4 py-2.5 backdrop-blur-sm">
              <p className="text-zinc-400 text-xs font-semibold uppercase tracking-wide">Mobile Service</p>
              <p className="text-white font-bold text-sm">We Come To You</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 flex flex-col gap-5 px-6 py-10 lg:px-10 lg:py-16 bg-zinc-900">
            <div>
              <span className="text-zinc-500 text-xs font-semibold tracking-[0.18em] uppercase">
                Mobile Mechanic
              </span>
              {/* Heading — all white */}
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                On-Site &amp; Road Service Available
              </h2>
              <p className="mt-1.5 text-zinc-400 text-sm italic">
                We Keep Your Business Moving
              </p>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed">
              We come to you — roadside, at a yard, or a job site in the Dallas area.
              Call us and we'll dispatch a technician to your location.
            </p>

            {/* Bullets — slate dots */}
            <ul className="flex flex-col gap-2" role="list">
              {[
                'Truck & trailer repairs at your location',
                'Tire changes and flat tire repair on-site',
                'Engine and electrical diagnostics in the field',
                'Brake service and suspension repair on-site',
                'Serving Dallas, TX and surrounding areas',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-400">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a href="tel:+18573166799"
                className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-black px-6 py-3 rounded-md transition-colors duration-200"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.95rem', letterSpacing: '0.05em' }}>
                <Phone size={15} aria-hidden="true" />
                Call Now
              </a>
              <a href="#contact"
                className="flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200 text-sm">
                Request Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

