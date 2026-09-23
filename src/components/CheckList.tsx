export interface CheckItem {
  title: string;
  body: string;
}

/** Yellow check chip + bold lead-in + regular supporting text (the "Who We Are" list style). */
export default function CheckList({ items }: { items: CheckItem[] }) {
  return (
    <ul className="flex flex-col gap-4" role="list">
      {items.map(({ title, body }) => (
        <li key={title} className="flex items-start gap-3">
          <span
            className="mt-0.5 w-5 h-5 rounded-full bg-accent/16 flex items-center justify-center flex-shrink-0"
            aria-hidden="true"
          >
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4l2.5 2.5L9 1" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <p className="text-sm text-copy leading-relaxed">
            <span className="font-semibold text-white">{title}</span>{' '}{body}
          </p>
        </li>
      ))}
    </ul>
  );
}
