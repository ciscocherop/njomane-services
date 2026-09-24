import { ArrowRight, Phone } from 'lucide-react';
import CheckList from './CheckList';
import PhotoPanel from './PhotoPanel';

const benefits = [
  { title: 'All Makes & Models.', body: 'We service all makes and models of commercial trucks and trailers — domestic and import.' },
  { title: 'Fast & Reliable Service.', body: 'Downtime costs money. We work efficiently to get your truck or trailer back on the road.' },
  { title: 'Experienced Technicians.', body: 'Hands-on experience with commercial truck and trailer mechanical systems across all platforms.' },
  { title: 'Quality Work at Fair Prices.', body: 'Straightforward pricing with quality workmanship. We keep your business moving.' },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Content — first in DOM so it shows first on mobile */}
          <div className="lg:order-1 flex flex-col gap-4 lg:pr-4">
            <div>
              <span className="text-zinc-400 text-xs font-semibold tracking-[0.18em] uppercase">Why Njomane</span>
              <h2 className="mt-2 text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
                Fast. Reliable. Professional.
              </h2>
              <p className="mt-2 text-copy text-sm max-w-xl">
                We keep your business moving — with the skills, equipment and commitment to get the job done right.
              </p>
              <div className="mt-3 w-10 h-0.5 bg-zinc-600 rounded-full" aria-hidden="true" />
            </div>

            <CheckList items={benefits} />

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href="tel:+18573166799"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:brightness-110 text-zinc-950 font-black px-6 py-3 rounded-md transition-colors duration-200"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.95rem', letterSpacing: '0.05em' }}
              >
                <Phone size={15} aria-hidden="true" />
                Call Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200 text-sm"
              >
                Request a Quote
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Photo — second in DOM, pushed right on desktop */}
          <div className="lg:order-2">
            <PhotoPanel
              src="/IMG-20260921-WA0033.jpg"
              alt="Trailer axle assembly ready for installation in the Njomane Services shop"
              title="Njomane Services LLC"
              subtitle="Truck Mechanic · Dallas, TX"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
