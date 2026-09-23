import { Phone } from 'lucide-react';
import { type Tire } from '../data/tires';

interface TireCardProps {
  tire: Tire;
  onAsk: (tire: Tire) => void;
}

// Position badge colours
const positionBadge: Record<string, string> = {
  'Steer Axle': 'bg-sky-500/15    text-sky-400    border-sky-500/30',
  'Drive Axle': 'bg-amber-500/15  text-amber-400  border-amber-500/30',
  'Trailer Axle': 'bg-zinc-700      text-zinc-300   border-zinc-600',
  'All Position': 'bg-emerald-500/12 text-emerald-400 border-emerald-500/25',
};

export default function TireCard({ tire, onAsk }: TireCardProps) {
  const badge = positionBadge[tire.position] ?? 'bg-zinc-700 text-zinc-300 border-zinc-600';

  return (
    <article className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden flex flex-col h-full hover:border-amber-500/45 hover:shadow-lg hover:shadow-amber-500/8 transition-all duration-250">

      {/* ── Image wrapper — fixed 4:3 ratio ── */}
      <div className="relative w-full aspect-[4/3] bg-zinc-950 overflow-hidden">
        {tire.photo ? (
          <img
            src={tire.photo}
            alt={`${tire.brand} ${tire.model} ${tire.size} — ${tire.position} tire`}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          /* SVG fallback centred on dark backdrop */
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true"
              className="opacity-20 group-hover:opacity-35 transition-opacity duration-250">
              <circle cx="36" cy="36" r="33" stroke="#f59e0b" strokeWidth="2" />
              <circle cx="36" cy="36" r="22" stroke="#f59e0b" strokeWidth="1.5" />
              <circle cx="36" cy="36" r="10" stroke="#f59e0b" strokeWidth="1.5" />
              <circle cx="36" cy="36" r="4" fill="#f59e0b" opacity="0.6" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
                <line key={a}
                  x1={36 + 22 * Math.cos(a * Math.PI / 180)} y1={36 + 22 * Math.sin(a * Math.PI / 180)}
                  x2={36 + 33 * Math.cos(a * Math.PI / 180)} y2={36 + 33 * Math.sin(a * Math.PI / 180)}
                  stroke="#f59e0b" strokeWidth="1.5"
                />
              ))}
            </svg>
          </div>
        )}

        {/* Dark gradient at bottom so badges don't fight with photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent pointer-events-none" aria-hidden="true" />

        {/* ── Top-left: position badge ── */}
        <span className={`absolute top-2.5 left-2.5 text-[10px] font-bold uppercase tracking-wider border rounded-full px-2.5 py-0.5 backdrop-blur-sm ${badge}`}>
          {tire.position}
        </span>

        {/* ── Top-right: In Stock chip ── */}
        <span className="absolute top-2.5 right-2.5 flex items-center gap-1 bg-zinc-950/80 border border-zinc-700 text-zinc-300 text-[10px] font-semibold rounded-full px-2.5 py-0.5 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" aria-hidden="true" />
          In Stock
        </span>
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col gap-3 p-4 flex-1">

        {/* Brand row */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
            {tire.brand}
          </span>
          {tire.model && (
            <span className="text-zinc-500 text-xs">{tire.model}</span>
          )}
        </div>

        {/* Size — main title */}
        <p className="text-white font-black text-2xl leading-none tracking-tight"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
          {tire.size}
        </p>

        {/* Description — flex-1 so CTA stays at bottom */}
        <p className="text-zinc-300 text-sm leading-relaxed flex-1">
          {tire.description}
        </p>

        {/* ── CTA: Call for Pricing / Order ── */}
        <a
          href="tel:8573166799"
          onClick={() => onAsk(tire)}
          className="mt-1 flex items-center justify-center gap-2 w-full bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/35 hover:border-amber-500/60 text-amber-400 font-bold text-sm py-2.5 rounded-lg transition-all duration-200"
          aria-label={`Call for pricing on ${tire.brand} ${tire.size}`}
        >
          <Phone size={14} aria-hidden="true" />
          Call for Pricing / Order
        </a>
      </div>
    </article>
  );
}
