import { Phone } from 'lucide-react';
import { type Tire } from '../data/tires';

interface TireCardProps { tire: Tire; onAsk: (tire: Tire) => void; }

const positionBadge: Record<string, string> = {
  'Steer Axle': 'bg-zinc-800 text-zinc-300 border-zinc-700',
  'Drive Axle': 'bg-zinc-800 text-zinc-300 border-zinc-700',
  'Trailer Axle': 'bg-zinc-800 text-zinc-300 border-zinc-700',
  'All Position': 'bg-zinc-800 text-zinc-300 border-zinc-700',
};

export default function TireCard({ tire, onAsk }: TireCardProps) {
  const badge = positionBadge[tire.position] ?? 'bg-zinc-800 text-zinc-300 border-zinc-700';

  return (
    <article className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden flex flex-col h-full hover:border-zinc-600 hover:shadow-lg hover:shadow-black/30 transition-all duration-200">

      {/* Image — 4:3 */}
      <div className="relative w-full aspect-[4/3] bg-zinc-950 overflow-hidden">
        {tire.photo ? (
          <img
            src={tire.photo}
            alt={`${tire.brand} ${tire.model} ${tire.size} tire`}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="64" height="64" viewBox="0 0 72 72" fill="none" aria-hidden="true" className="opacity-15">
              <circle cx="36" cy="36" r="33" stroke="#a1a1aa" strokeWidth="2" />
              <circle cx="36" cy="36" r="22" stroke="#a1a1aa" strokeWidth="1.5" />
              <circle cx="36" cy="36" r="10" stroke="#a1a1aa" strokeWidth="1.5" />
            </svg>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
        {/* Position badge — slate */}
        <span className={`absolute top-2.5 left-2.5 text-[10px] font-bold uppercase tracking-wider border rounded-full px-2.5 py-0.5 backdrop-blur-sm ${badge}`}>
          {tire.position}
        </span>
        {/* In Stock chip */}
        <span className="absolute top-2.5 right-2.5 flex items-center gap-1 bg-zinc-950/80 border border-zinc-700 text-zinc-400 text-[10px] font-semibold rounded-full px-2.5 py-0.5 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" aria-hidden="true" />
          In Stock
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-2 p-4 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="text-zinc-300 text-xs font-bold uppercase tracking-widest">{tire.brand}</span>
          {tire.model && <span className="text-zinc-600 text-xs">{tire.model}</span>}
        </div>
        <p className="text-white font-black text-2xl leading-none tracking-tight"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
          {tire.size}
        </p>
        <p className="text-zinc-500 text-xs font-medium uppercase tracking-wide">{tire.type}</p>
        <p className="text-zinc-400 text-sm leading-relaxed flex-1">{tire.description}</p>

        {/* CTA — yellow reserved here */}
        <a
          href="tel:+18573166799"
          onClick={() => onAsk(tire)}
          className="mt-2 flex items-center justify-center gap-2 w-full bg-[#FFD400] hover:bg-yellow-300 text-zinc-950 font-black text-sm py-2.5 rounded-lg transition-colors duration-200"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.04em' }}
          aria-label={`Call for pricing on ${tire.brand} ${tire.size}`}
        >
          <Phone size={13} aria-hidden="true" />
          Call for Pricing
        </a>
      </div>
    </article>
  );
}
