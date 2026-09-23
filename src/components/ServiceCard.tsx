import {
  ArrowUpDown, Circle, CircleDot, ClipboardList, Gauge,
  type LucideProps, MapPin, Settings2, Thermometer, Zap,
} from 'lucide-react';
import { type Service } from '../data/services';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Gauge, CircleDot, Settings2, Circle, Zap, Thermometer,
  ArrowUpDown, ClipboardList, MapPin,
};

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? Gauge;
  return (
    <article className="card-lift group w-full h-full bg-surface-card rounded-xl p-6 flex flex-col hover:bg-surface-card-hover hover:shadow-lg hover:shadow-black/30">
      {/* Icon */}
      <div className="w-fit mb-4 p-3 rounded-lg icon-chip">
        <Icon size={18} className="text-accent" aria-hidden="true" />
      </div>
      {/* Title */}
      <h3 className="text-white font-semibold text-base leading-snug mb-2">
        {service.title}
      </h3>
      {/* Description */}
      <p className="text-copy text-sm leading-relaxed flex-1">
        {service.description}
      </p>
      {/* Footer link */}
      <a
        href="#contact"
        className="mt-5 inline-flex items-center gap-1 text-zinc-500 hover:text-zinc-300 font-medium text-xs tracking-wide transition-colors duration-200"
        aria-label={`Inquire about ${service.title}`}
      >
        Inquire about this service <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}
