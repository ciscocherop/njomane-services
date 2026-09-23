import { type ReactNode } from 'react';
import { srcSetFor } from '../lib/responsiveImages';

interface PhotoPanelProps {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  /** Optional extra overlay, e.g. a stat chip in the bottom-right corner. */
  children?: ReactNode;
}

/** Rounded photo with a dark bottom fade and a bottom-left caption badge (the "Who We Are" image style). */
export default function PhotoPanel({ src, alt, title, subtitle, children }: PhotoPanelProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-line-subtle shadow-lg shadow-black/40">
      <img
        src={src} alt={alt} srcSet={srcSetFor(src)} sizes="(min-width: 1024px) 600px, calc(100vw - 32px)"
        loading="lazy" className="w-full h-64 lg:h-[380px] object-cover object-center"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(9,9,11,0.9), transparent)' }}
        aria-hidden="true"
      />
      <div className="absolute bottom-5 left-5">
        <p className="text-white font-black text-base uppercase leading-tight"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
          {title}
        </p>
        <p className="text-slate-300 text-xs tracking-widest uppercase">{subtitle}</p>
      </div>
      {children}
    </div>
  );
}
