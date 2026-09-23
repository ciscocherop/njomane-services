import { CreditCard, MapPin, Truck, Zap } from 'lucide-react';

const stats = [
  {
    icon: Zap,
    value: 'Rapid Response',
    label: 'On-site as fast as possible',
  },
  {
    icon: MapPin,
    value: 'DFW Metro Wide',
    label: 'Dallas, Fort Worth & surrounding',
  },
  {
    icon: Truck,
    value: 'Experienced Techs',
    label: 'Heavy-duty truck & trailer',
  },
  {
    icon: CreditCard,
    value: 'Fleet Payment',
    label: 'Comchek, EFS, Cards accepted',
  },
];

export default function StatsBar() {
  return (
    /*
     * Negative margin pulls the bar up to overlap the hero's bottom fade.
     * The white card floats above the dark hero and sits on top of the
     * section beneath it — same pattern as the reference design.
     */
    <div className="relative z-20 -mt-16 px-4 sm:px-6 lg:px-8 pb-2">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={value} className="flex flex-col items-center text-center gap-2">
              {/* Icon */}
              <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                <Icon size={16} className="text-slate-600" aria-hidden="true" />
              </div>
              {/* Value */}
              <p
                className="text-slate-900 font-bold text-sm leading-tight"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.03em', fontSize: '1rem' }}
              >
                {value}
              </p>
              {/* Label */}
              <p className="text-slate-500 text-xs leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
