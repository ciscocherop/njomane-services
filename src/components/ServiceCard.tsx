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
    <article className="group h-full bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col hover:border-zinc-600 hover:shadow-lg hover:shadow-black/30 transition-all duration-200">
      {/* Icon */}
      <div className="w-fit mb-4 p-3 rounded-lg bg-zinc-800 group-hover:bg-zinc-700 transition-colors duration-200">
        <Icon size={18} className="text-zinc-300" aria-hidden="true" />
      </div>
      {/* Title */}
      <h3 className="text-white font-semibold text-base leading-snug mb-2">
        {service.title}
      </h3>
      {/* Description */}
      <p className="text-zinc-400 text-sm leading-relaxed flex-1">
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
