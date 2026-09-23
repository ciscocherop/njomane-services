import { ExternalLink, MapPin } from 'lucide-react';

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=10900+C+F+Hawn+Fwy,+Dallas,+TX+75217';

export default function Location() {
  return (
    <section id="location" className="bg-zinc-900 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 lg:mb-14">
          <span className="text-[#FFD400] text-xs font-semibold tracking-[0.18em] uppercase">
            Find Us
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Our Location
          </h2>
          <div className="mt-4 w-12 h-1 bg-[#FFD400] rounded-full" aria-hidden="true" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">

          {/* Address card */}
          <div className="flex flex-col gap-5">
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 flex flex-col gap-5">
              <div className="w-11 h-11 rounded-lg bg-[#FFD400]/10 border border-[#FFD400]/20 flex items-center justify-center">
                <MapPin size={20} className="text-[#FFD400]" aria-hidden="true" />
              </div>
              <address className="not-italic flex flex-col gap-1">
                <p className="text-white font-semibold text-base">Njomane Services LLC</p>
                <p className="text-zinc-300 text-sm">10900 C F Hawn Fwy</p>
                <p className="text-zinc-300 text-sm">Dallas, TX 75217</p>
              </address>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#FFD400] hover:bg-yellow-300 text-[#050505] font-bold text-sm px-5 py-3 rounded-md transition-colors duration-200"
              >
                <ExternalLink size={15} aria-hidden="true" />
                Get Directions
              </a>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 flex flex-col gap-3">
              <p className="text-zinc-400 text-xs uppercase tracking-wide font-semibold">Service Area</p>
              <p className="text-white text-sm">Dallas, TX and surrounding areas</p>
              <p className="text-zinc-400 text-xs">
                We also provide on-site and roadside service — we come to you.
              </p>
            </div>
          </div>

          {/* Map area */}
          <div className="lg:col-span-2">
            <div className="relative w-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
              <div
                className="w-full h-72 lg:h-96 flex flex-col items-center justify-center gap-4 bg-zinc-950 relative"
                role="img"
                aria-label="Map showing 10900 C F Hawn Fwy, Dallas, TX 75217"
              >
                {/* Grid background */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                  aria-hidden="true"
                />
                <div className="relative flex flex-col items-center gap-3 text-center px-6">
                  <div className="w-14 h-14 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/20 flex items-center justify-center">
                    <MapPin size={26} className="text-[#FFD400]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">10900 C F Hawn Fwy</p>
                    <p className="text-zinc-400 text-sm">Dallas, TX 75217</p>
                  </div>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-[#FFD400]/40 hover:border-[#FFD400] text-[#FFD400] font-semibold text-sm px-5 py-2 rounded-md transition-colors duration-200"
                  >
                    <ExternalLink size={14} aria-hidden="true" />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
            <p className="mt-2 text-zinc-600 text-xs text-right">
              Click "Open in Google Maps" for turn-by-turn directions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
