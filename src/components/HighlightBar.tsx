import { CircleDot, MapPin, Settings, Wrench } from 'lucide-react';
import MobileCarousel from './MobileCarousel';

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
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <MobileCarousel
          gridClassName="md:grid-cols-2 lg:grid-cols-4 md:gap-4"
          label="What Njomane Services does"
        >
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="card-lift w-full bg-surface-card rounded-xl px-5 py-5 flex items-start gap-4 shadow-xl shadow-black/40 hover:bg-surface-card-hover group"
              >
                {/* Icon chip */}
                <div className="w-10 h-10 rounded-lg icon-chip flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-accent" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <p
                    className="text-white font-black text-base uppercase leading-tight"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.04em' }}
                  >
                    {item.title}
                  </p>
                  <p className="text-copy text-xs leading-relaxed">{item.sub}</p>
                </div>
              </div>
            );
          })}
        </MobileCarousel>
      </div>
    </div>
  );
}

