import { Children, isValidElement, type ReactNode, useCallback, useRef, useState } from 'react';

interface MobileCarouselProps {
  children: ReactNode;
  /** Grid classes applied from md (≥768px) up, e.g. "md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-5". */
  gridClassName: string;
  label: string;
}

/**
 * Below md: horizontal snap-scroll carousel (~85% card width) with dot indicators.
 * md and up: plain CSS grid — desktop layout unchanged.
 */
export default function MobileCarousel({ children, gridClassName, label }: MobileCarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const items = Children.toArray(children);

  const step = () => {
    const el = trackRef.current;
    const first = el?.firstElementChild as HTMLElement | null;
    if (!el || !first) return 0;
    return first.offsetWidth + parseFloat(getComputedStyle(el).columnGap || '0');
  };

  const onScroll = useCallback(() => {
    const el = trackRef.current;
    const s = step();
    if (!el || !s) return;
    setActive(Math.min(items.length - 1, Math.round(el.scrollLeft / s)));
  }, [items.length]);

  const goTo = (i: number) => {
    trackRef.current?.scrollTo({ left: step() * i, behavior: 'smooth' });
  };

  return (
    <>
      <ul
        ref={trackRef}
        onScroll={onScroll}
        role="list"
        aria-label={label}
        className={`flex gap-4 overflow-x-auto py-1 -my-1 md:py-0 md:my-0 snap-x snap-mandatory -mx-4 px-4 scroll-px-4 sm:-mx-6 sm:px-6 sm:scroll-px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:mx-0 md:px-0 md:overflow-visible md:snap-none ${gridClassName}`}
      >
        {items.map((child, i) => (
          <li
            key={isValidElement(child) && child.key != null ? child.key : i}
            className="snap-start shrink-0 w-[85%] flex md:w-auto"
          >
            {child}
          </li>
        ))}
      </ul>

      {/* Dots — mobile only */}
      <div className="md:hidden mt-4 flex justify-center gap-1.5" aria-hidden="true">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            tabIndex={-1}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-5 bg-white' : 'w-1.5 bg-zinc-600'}`}
          />
        ))}
      </div>
    </>
  );
}
