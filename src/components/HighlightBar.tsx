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
    <div
      className="relative z-10 -mt-10"
      style={{ background: 'linear-gradient(to bottom, #09090b 50%, #18181b 50%)' }}
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
                className="bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-5 flex items-start gap-4 shadow-xl shadow-black/40 hover:border-zinc-600 transition-all duration-200 group"
              >
                {/* Slate icon — no yellow */}
                <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0 group-hover:bg-zinc-700 transition-colors duration-200">
                  <Icon size={18} className="text-zinc-300" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <p
                    className="text-white font-black text-base uppercase leading-tight"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.04em' }}
                  >
                    {item.title}
                  </p>
                  <p className="text-zinc-500 text-xs leading-relaxed">{item.sub}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
