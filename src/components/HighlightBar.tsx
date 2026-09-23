import { CircleDot, MapPin, Settings, Wrench } from 'lucide-react';

const highlights = [
  {
    icon: Wrench,
    title: 'Truck & Trailer Repair',
    sub: 'Engine · Brakes · Transmission · Suspension',
  },
  {
    icon: CircleDot,
    title: 'Tire Services',
    sub: 'Change · Repair · Multiple Brands In Stock',
  },
  {
    icon: Settings,
    title: 'Diagnostics',
    sub: 'Engine · Electrical · Cooling Systems',
  },
  {
    icon: MapPin,
    title: 'On-Site & Road Service',
    sub: 'We Come To You · Dallas, TX Area',
  },
];

export default function HighlightBar() {
  return (
    /*
     * Responsive approach:
     * - Mobile/tablet: cards sit in normal flow between hero and About,
     *   with top half bg-zinc-950 and bottom half bg-zinc-900 via a pseudo approach.
     * - We use a negative-margin trick: the section has a split bg via a gradient,
     *   and cards have a shadow so they look elevated over the boundary.
     */
    <div
      className="relative z-10 -mt-10"
      style={{
        background: 'linear-gradient(to bottom, #09090b 50%, #18181b 50%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          role="list"
          aria-label="What Njomane Services does"
        >
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-5 flex items-start gap-4 shadow-xl shadow-black/50 hover:border-amber-500/45 hover:shadow-amber-500/8 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FFD400]/10 border border-[#FFD400]/25 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFD400]/18 transition-colors duration-200">
                  <Icon size={18} className="text-[#FFD400]" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <p
                    className="text-white font-black text-base uppercase leading-tight"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.04em' }}
                  >
                    {item.title}
                  </p>
                  <p className="text-zinc-400 text-xs leading-relaxed">{item.sub}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
