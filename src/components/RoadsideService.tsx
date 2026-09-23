import { MapPin, Phone } from 'lucide-react';
import CheckList from './CheckList';

export default function RoadsideService() {
  return (
    <section id="roadside" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto lg:px-8">
        <div className="grid lg:grid-cols-2 lg:rounded-2xl overflow-hidden bg-surface-card">

          {/* Masonry gallery — tall portrait | landscape over square */}
          <div className="order-2 lg:order-1 p-4 sm:p-6 lg:p-8 lg:pr-0 lg:self-center">
            <div className="grid grid-cols-2 gap-3">
              {/* Tall portrait — spans both rows, so its height = landscape + square */}
              <figure className="relative row-span-2 rounded-2xl overflow-hidden border border-line-subtle">
                <img
                  src="/roadside_service3.jpg"
                  alt="Mechanic kneeling beside a trailer axle, servicing the brake drum with wheels removed"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-[38%_center]"
                />
                <div className="absolute bottom-3 left-3 bg-zinc-950/90 border border-zinc-700 rounded-lg px-3.5 py-2 backdrop-blur-sm">
                  <p className="text-copy text-xs font-semibold uppercase tracking-wide">Mobile Service</p>
                  <p className="text-white font-bold text-sm">We Come To You</p>
                </div>
              </figure>

              {/* Landscape */}
              <figure className="relative aspect-[4/3] rounded-xl overflow-hidden border border-line-subtle">
                <img
                  src="/roadside_service2.jpg"
                  alt="Mechanic tightening truck wheel lug nuts with a torque wrench on-site"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </figure>

              {/* Square */}
              <figure className="relative aspect-square rounded-xl overflow-hidden border border-line-subtle">
                <img
                  src="/onsite_road.jpg"
                  alt="Mechanic working on a semi at the roadside from a mobile service truck"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </figure>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 flex flex-col gap-5 px-6 py-10 lg:px-10 lg:py-16">
            <div>
              <span className="text-zinc-500 text-xs font-semibold tracking-[0.18em] uppercase">
                Mobile Mechanic
              </span>
              {/* Heading — all white */}
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                On-Site &amp; Road Service Available
              </h2>
              <p className="mt-1.5 text-copy text-sm italic">
                We Keep Your Business Moving
              </p>
            </div>

            <p className="text-copy text-sm leading-relaxed">
              We come to you — roadside, at a yard, or a job site in the Dallas area.
              Call us and we'll dispatch a technician to your location.
            </p>

            {/* Bullets — shared checkmark style */}
            <CheckList items={[
              { title: 'Truck & trailer repairs', body: 'at your location' },
              { title: 'Tire changes and flat tire repair', body: 'on-site' },
              { title: 'Engine and electrical diagnostics', body: 'in the field' },
              { title: 'Brake service and suspension repair', body: 'on-site' },
              { title: 'Serving Dallas, TX', body: 'and surrounding areas' },
            ]} />

            {/* CTA */}
            <a href="tel:+18573166799"
              className="self-start flex items-center justify-center gap-2 bg-accent hover:brightness-110 text-zinc-950 font-black px-6 py-3 rounded-md transition-colors duration-200"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.95rem', letterSpacing: '0.05em' }}>
              <Phone size={15} aria-hidden="true" />
              Call Now
            </a>

            {/* Service area map */}
            <div className="rounded-xl overflow-hidden border border-line-subtle bg-black/30">
              <iframe
                title="Njomane Services mobile service area — Dallas, TX"
                src="https://maps.google.com/maps?q=10900+C+F+Hawn+Fwy,+Dallas,+TX+75217&z=10&output=embed"
                width="100%"
                height="150"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="px-4 min-h-11 flex items-center justify-between gap-3">
                <p className="text-copy text-xs">
                  <span className="text-white font-semibold">Base:</span> Dallas, TX · Serving all of DFW
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=10900+C+F+Hawn+Fwy,+Dallas,+TX+75217"
                  target="_blank" rel="noopener noreferrer"
                  className="self-stretch min-h-11 pl-3 flex items-center gap-1 text-zinc-500 hover:text-zinc-300 text-xs font-semibold transition-colors duration-200 flex-shrink-0"
                >
                  <MapPin size={12} aria-hidden="true" />
                  Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

