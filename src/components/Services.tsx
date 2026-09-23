import { services } from '../data/services';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    /* zinc-950 — slightly lighter than pure black, distinct from hero */
    <section id="services" className="bg-zinc-950 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header with real parts photo accent */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-16">
          <div>
            <span className="text-[#FFD400] text-xs font-semibold tracking-[0.18em] uppercase">
              What We Do
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Our Services
            </h2>
            <p className="mt-3 text-zinc-300 text-lg max-w-xl">
              Reliable repair and maintenance services for trucks and trailers.
              On-site and road service available.
            </p>
            <div className="mt-4 w-12 h-1 bg-[#FFD400] rounded-full" aria-hidden="true" />
          </div>

          {/* Real parts photo */}
          <div className="relative rounded-xl overflow-hidden border border-zinc-800 h-40 lg:h-48">
            <img
              src="/banner_services.jpg"
              alt="Mechanic servicing truck brake and tire assembly — Njomane Services"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-zinc-950/45" />
            <div className="absolute bottom-3 left-4">
              <p className="text-white font-semibold text-sm">Brake &amp; Tire Specialists</p>
              <p className="text-[#FFD400] text-xs">Commercial truck service</p>
            </div>
          </div>
        </div>

        {/* Service cards grid — items-stretch so all cards in a row share the same height */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 items-stretch"
          role="list"
          aria-label="Services offered by Njomane Services LLC"
        >
          {services.map((service) => (
            // h-full on <li> so the article inside can stretch to fill it
            <li key={service.id} className="h-full flex">
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>

        {/* Bottom CTA */}
      </div>
    </section>
  );
}
