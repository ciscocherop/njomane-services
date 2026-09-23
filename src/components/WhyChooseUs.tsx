import { CheckCircle, Truck, Users, Wrench } from 'lucide-react';

const benefits = [
  { icon: Truck, title: 'All Makes & Models', description: 'We service all makes and models of commercial trucks and trailers — domestic and import.' },
  { icon: CheckCircle, title: 'Fast & Reliable Service', description: 'Downtime costs money. We work efficiently to get your truck or trailer back on the road.' },
  { icon: Users, title: 'Experienced Technicians', description: 'Hands-on experience with commercial truck and trailer mechanical systems across all platforms.' },
  { icon: Wrench, title: 'Quality Work at Fair Prices', description: 'Straightforward pricing with quality workmanship. We keep your business moving.' },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-zinc-950 py-16 lg:py-24 overflow-hidden">
      {/* Fleet bg — very subtle */}
      <div className="absolute inset-0" aria-hidden="true">
        <img src="/fleet_trucks.jpg" alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-zinc-950/92" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — all white, phrase in plain zinc */}
        <div className="mb-10 lg:mb-14">
          <span className="text-zinc-500 text-xs font-semibold tracking-[0.18em] uppercase">Why Njomane</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Fast. Reliable. Professional.
          </h2>
          <p className="mt-2 text-zinc-400 text-sm max-w-xl">
            We keep your business moving — with the skills, equipment and commitment to get the job done right.
          </p>
          <div className="mt-3 w-10 h-0.5 bg-zinc-600 rounded-full" aria-hidden="true" />
        </div>

        {/* Cards — slate icons */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5" role="list">
          {benefits.map(({ icon: Icon, title, description }) => (
            <li key={title}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col gap-4 hover:border-zinc-600 transition-colors duration-200">
              <div className="w-11 h-11 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-zinc-300" aria-hidden="true" />
              </div>
              <h3 className="text-white font-bold text-base leading-snug uppercase tracking-wide">
                {title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

