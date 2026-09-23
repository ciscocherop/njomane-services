import { CheckCircle, Truck, Users, Wrench } from 'lucide-react';

const benefits = [
  {
    icon: Truck,
    title: 'All Makes & Models',
    description: 'We service all makes and models of commercial trucks and trailers — domestic and import.',
  },
  {
    icon: CheckCircle,
    title: 'Fast & Reliable Service',
    description: 'Downtime costs money. We work efficiently to get your truck or trailer back on the road.',
  },
  {
    icon: Users,
    title: 'Experienced Technicians',
    description: 'Hands-on experience with commercial truck and trailer mechanical systems across all platforms.',
  },
  {
    icon: Wrench,
    title: 'Quality Work at Fair Prices',
    description: 'Straightforward pricing with quality workmanship. We keep your business moving.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-zinc-950">
      {/* Fleet background image — very subtle */}
      <div className="absolute inset-0" aria-hidden="true">
        <img src="/fleet_trucks.jpg" alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-zinc-950/90" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <span className="text-[#FFD400] text-xs font-semibold tracking-[0.18em] uppercase">
            Why Njomane
          </span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Fast. Reliable.{' '}
            <span className="text-[#FFD400]">Professional.</span>
          </h2>
          <p className="mt-2 text-zinc-300 text-base max-w-xl">
            We keep your business moving — with the skills, equipment and commitment to get the job done right.
          </p>
          {/* "We Keep Your Business Moving!" phrase woven into header */}
          <p className="mt-3 text-[#FFD400] font-black text-lg uppercase tracking-wide"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            We Keep Your Business Moving!
          </p>
          <div className="mt-3 w-12 h-1 bg-[#FFD400] rounded-full" aria-hidden="true" />
        </div>

        {/* Benefit cards */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5" role="list">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <li
                key={benefit.title}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col gap-4 hover:border-amber-500/45 hover:shadow-lg hover:shadow-amber-500/8 transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-lg bg-[#FFD400]/10 border border-[#FFD400]/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-[#FFD400]" aria-hidden="true" />
                </div>
                <h3 className="text-white font-bold text-lg leading-snug uppercase tracking-wide">
                  {benefit.title}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </li>
            );
          })}
        </ul>

        {/* Bottom CTA strip removed — phrase lives in header above */}
      </div>
    </section>
  );
}
