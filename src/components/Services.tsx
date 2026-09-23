import { services } from '../data/services';
import MobileCarousel from './MobileCarousel';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-10 lg:mb-14">
          <div>
            <span className="text-zinc-500 text-xs font-semibold tracking-[0.18em] uppercase">
              What We Do
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Our Services
            </h2>
            <p className="mt-3 text-copy text-base max-w-xl">
              Reliable repair and maintenance for trucks and trailers.
              On-site and road service available across DFW.
            </p>
            <div className="mt-4 w-10 h-0.5 bg-zinc-600 rounded-full" aria-hidden="true" />
          </div>

          {/* Photo accent */}
          <div className="relative rounded-xl overflow-hidden border border-line-subtle h-40 lg:h-44 shadow-lg shadow-black/40">
            <img
              src="/banner_services.jpg"
              alt="Mechanic servicing truck brake assembly"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20" />
            <div className="absolute bottom-3 left-4">
              <p className="text-white font-semibold text-sm">Brake &amp; Tire Specialists</p>
              <p className="text-copy text-xs">Commercial truck service</p>
            </div>
          </div>
        </div>

        {/* Cards — swipe carousel on mobile, grid from md up */}
        <MobileCarousel
          gridClassName="md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-5 items-stretch"
          label="Services offered by Njomane Services LLC"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </MobileCarousel>
      </div>
    </section>
  );
}
