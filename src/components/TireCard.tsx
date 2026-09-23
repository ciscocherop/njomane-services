import { Phone } from 'lucide-react';
import { type Tire } from '../data/tires';

interface TireCardProps { tire: Tire; onAsk: (tire: Tire) => void; }

// Position badge — light theme
const positionBadge: Record<string, string> = {
  'Steer Axle': 'bg-slate-100 text-slate-700 border-slate-200',
  'Drive Axle': 'bg-slate-100 text-slate-700 border-slate-200',
  'Trailer Axle': 'bg-slate-100 text-slate-700 border-slate-200',
  'All Position': 'bg-slate-100 text-slate-700 border-slate-200',
};

export default function TireCard({ tire, onAsk }: TireCardProps) {
  const badge = positionBadge[tire.position] ?? 'bg-slate-100 text-slate-700 border-slate-200';

  return (
    <article className="group bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200">

      {/* Image — 4:3 */}
      <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
        {tire.photo ? (
          <img
            src={tire.photo}
            alt={`${tire.brand} ${tire.model} ${tire.size} tire`}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="64" height="64" viewBox="0 0 72 72" fill="none" aria-hidden="true" className="opacity-20">
              <circle cx="36" cy="36" r="33" stroke="#64748b" strokeWidth="2" />
              <circle cx="36" cy="36" r="22" stroke="#64748b" strokeWidth="1.5" />
              <circle cx="36" cy="36" r="10" stroke="#64748b" strokeWidth="1.5" />
            </svg>
          </div>
        )}
        {/* Subtle gradient at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" aria-hidden="true" />

        {/* Position badge */}
        <span className={`absolute top-2.5 left-2.5 text-[10px] font-bold uppercase tracking-wider border rounded-full px-2.5 py-0.5 backdrop-blur-sm ${badge}`}>
          {tire.position}
        </span>

        {/* In Stock chip */}
        <span className="absolute top-2.5 right-2.5 flex items-center gap-1 bg-white/90 border border-slate-200 text-slate-600 text-[10px] font-semibold rounded-full px-2.5 py-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" aria-hidden="true" />
          In Stock
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-2 p-4 flex-1">
        {/* Brand row */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">{tire.brand}</span>
          {tire.model && <span className="text-slate-400 text-xs">{tire.model}</span>}
        </div>

        {/* Size — main title */}
        <p className="text-slate-900 font-black text-2xl leading-none tracking-tight"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
          {tire.size}
        </p>

        {/* Type */}
        <p className="text-slate-500 text-xs font-medium uppercase tracking-wide">{tire.type}</p>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed flex-1">{tire.description}</p>

        {/* CTA — amber */}
        <a
          href="tel:+18573166799"
          onClick={() => onAsk(tire)}
          className="mt-2 flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm py-2.5 rounded-lg transition-colors duration-200"
          aria-label={`Call for pricing on ${tire.brand} ${tire.size}`}
        >
          <Phone size={13} aria-hidden="true" />
          Call for Pricing
        </a>
      </div>
    </article>
  );
}
