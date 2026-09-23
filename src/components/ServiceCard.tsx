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
    <article className="group h-full bg-white border border-slate-200 rounded-xl p-6 flex flex-col shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200">
      {/* Icon — slate-100 bg, slate-700 icon */}
      <div className="w-fit mb-4 p-3 rounded-lg bg-slate-100 group-hover:bg-slate-200 transition-colors duration-200">
        <Icon size={18} className="text-slate-700" aria-hidden="true" />
      </div>

      {/* Title */}
      <h3 className="text-slate-900 font-semibold text-base leading-snug mb-2">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-slate-600 text-sm leading-relaxed flex-1">
        {service.description}
      </p>

      {/* Footer link */}
      <a
        href="#contact"
        className="mt-5 inline-flex items-center gap-1 text-slate-500 hover:text-slate-900 font-medium text-xs tracking-wide transition-colors duration-200"
        aria-label={`Inquire about ${service.title}`}
      >
        Inquire about this service <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}
