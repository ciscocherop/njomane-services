import {
  ArrowUpDown,
  Circle,
  CircleDot,
  ClipboardList,
  Gauge,
  type LucideProps,
  MapPin,
  Settings2,
  Thermometer,
  Zap,
} from 'lucide-react';
import { type Service } from '../data/services';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Gauge,
  CircleDot,
  Settings2,
  Circle,
  Zap,
  Thermometer,
  ArrowUpDown,
  ClipboardList,
  MapPin,
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Gauge;

  return (
    // h-full + flex-col pushes the footer link to the bottom on every card
    <article className="group h-full bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col hover:border-amber-500/45 hover:shadow-lg hover:shadow-amber-500/8 transition-all duration-250">

      {/* ── Amber-tinted icon container ── */}
      <div className="w-fit mb-4 p-3 rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/18 transition-colors duration-250">
        <Icon size={20} aria-hidden="true" />
      </div>

      {/* ── Title ── */}
      <h3 className="text-white font-semibold text-lg leading-snug mb-2">
        {service.title}
      </h3>

      {/* ── Description — flex-1 pushes link to bottom ── */}
      <p className="text-zinc-300 text-sm leading-relaxed flex-1">
        {service.description}
      </p>

      {/* ── Footer link — always at bottom ── */}
      <a
        href="#contact"
        className="mt-5 inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 text-xs font-semibold tracking-wide transition-colors duration-200 group/link"
        aria-label={`Inquire about ${service.title}`}
      >
        Inquire about this service
        <span
          className="translate-x-0 group-hover/link:translate-x-0.5 transition-transform duration-200"
          aria-hidden="true"
        >
          →
        </span>
      </a>
    </article>
  );
}
