import { services } from '../data/services';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-10 lg:mb-14">
          <div>
            <span className="text-slate-500 text-xs font-semibold tracking-[0.18em] uppercase">
              What We Do
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Our Services
            </h2>
            <p className="mt-3 text-slate-600 text-base max-w-xl">
              Reliable repair and maintenance for trucks and trailers.
              On-site and road service available across DFW.
            </p>
            <div className="mt-4 w-10 h-0.5 bg-slate-300 rounded-full" aria-hidden="true" />
          </div>

          {/* Photo accent */}
          <div className="relative rounded-xl overflow-hidden border border-slate-200 h-40 lg:h-44 shadow-sm">
            <img
              src="/banner_services.jpg"
              alt="Mechanic servicing truck brake assembly"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-slate-900/40" />
            <div className="absolute bottom-3 left-4">
              <p className="text-white font-semibold text-sm">Brake &amp; Tire Specialists</p>
              <p className="text-slate-300 text-xs">Commercial truck service</p>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 items-stretch"
          role="list"
          aria-label="Services offered by Njomane Services LLC"
        >
          {services.map((service) => (
            <li key={service.id} className="h-full flex">
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
