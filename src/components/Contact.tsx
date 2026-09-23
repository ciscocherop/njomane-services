import { AlertTriangle, CreditCard, ExternalLink, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
  name: string;
  phone: string;
  vehicleType: string;
  serviceNeeded: string;
  location: string;
  message: string;
}

const emptyForm: FormData = {
  name: '',
  phone: '',
  vehicleType: '',
  serviceNeeded: '',
  location: '',
  message: '',
};

// ─── Constants ────────────────────────────────────────────────────────────────

const SERVICE_AREAS = [
  'Dallas', 'Fort Worth', 'Arlington', 'Grand Prairie',
  'Irving', 'Garland', 'Mesquite', 'DeSoto',
];

const PAYMENT_METHODS = [
  { label: 'Comchek', icon: '🏦' },
  { label: 'EFS', icon: '💳' },
  { label: 'T-Chek', icon: '📋' },
  { label: 'Credit Cards', icon: '💳' },
];

// ─── Input class helpers ──────────────────────────────────────────────────────

const inputBase =
  'w-full bg-zinc-900 border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition-all duration-200';
const inputIdle = 'border-zinc-700';
const inputFocus = 'focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40';
const inputError = 'border-red-500/70';

const inputClass = (hasError: boolean) =>
  `${inputBase} ${hasError ? inputError : inputIdle} ${inputFocus}`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isBreakdown, setIsBreakdown] = useState<'yes' | 'no' | null>(null);

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.phone.trim()) e.phone = 'Phone number is required.';
    if (!form.serviceNeeded) e.serviceNeeded = 'Please select the service needed.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormData])
      setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // TODO: connect to real backend / email API
    setSubmitted(true);
    setForm(emptyForm);
    setIsBreakdown(null);
  };

  return (
    <section id="contact" className="relative bg-zinc-950 py-20 lg:py-28 overflow-hidden">
      {/* Tools bg — more visible now */}
      <div className="absolute inset-0" aria-hidden="true">
        <img src="/contact_bg.jpg" alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-zinc-950/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="mb-10 lg:mb-14">
          <span className="text-[#FFD400] text-xs font-semibold tracking-[0.18em] uppercase">
            Get In Touch
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Contact &amp; Location
          </h2>
          <div className="mt-4 w-12 h-1 bg-[#FFD400] rounded-full" aria-hidden="true" />
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10 items-start">

          {/* ════════════════════════════════════════
              LEFT COLUMN — Immediate Breakdown card
              ════════════════════════════════════════ */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Dispatch card */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
              {/* Red urgency header */}
              <div className="bg-red-600/90 px-5 py-4 flex items-center gap-3">
                <AlertTriangle size={20} className="text-white flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-white font-black text-base uppercase tracking-wide"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    Immediate Breakdown?
                  </p>
                  <p className="text-red-100 text-xs">Call dispatch — we come to you</p>
                </div>
              </div>

              {/* Phone */}
              <div className="px-5 py-5 flex flex-col gap-5">
                <a
                  href="tel:8573166799"
                  className="flex items-center gap-4 group"
                  aria-label="Call dispatch at 857-316-6799"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FFD400]/10 border border-[#FFD400]/25 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFD400]/20 transition-colors duration-200">
                    <Phone size={20} className="text-[#FFD400]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-zinc-400 text-xs">Dispatch Line</p>
                    <p className="text-white font-black text-2xl group-hover:text-[#FFD400] transition-colors duration-200"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      857-316-6799
                    </p>
                  </div>
                </a>

                {/* Availability */}
                <div className="flex items-start gap-3 p-3 bg-zinc-950 border border-zinc-800 rounded-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0 animate-pulse" aria-hidden="true" />
                  <div>
                    <p className="text-white text-sm font-semibold">Technicians Available</p>
                    <p className="text-zinc-400 text-xs mt-0.5">
                      Call for current availability and dispatch times.
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-zinc-800" aria-hidden="true" />

                {/* Service radius */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={14} className="text-[#FFD400]" aria-hidden="true" />
                    <p className="text-white text-xs font-bold uppercase tracking-wider">Service Radius</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {SERVICE_AREAS.map((city) => (
                      <span
                        key={city}
                        className="bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs px-2.5 py-1 rounded-full"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                  <p className="text-zinc-500 text-xs mt-2">+ surrounding DFW metro areas</p>
                </div>

                <div className="w-full h-px bg-zinc-800" aria-hidden="true" />

                {/* Payment methods */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CreditCard size={14} className="text-[#FFD400]" aria-hidden="true" />
                    <p className="text-white text-xs font-bold uppercase tracking-wider">Payment Accepted</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {PAYMENT_METHODS.map((m) => (
                      <span
                        key={m.label}
                        className="flex items-center gap-1.5 bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs px-3 py-1.5 rounded-lg font-medium"
                      >
                        {m.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Email card */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
              <a
                href="mailto:mmithongo@gmail.com"
                className="flex items-center gap-4 group"
                aria-label="Email mmithongo@gmail.com"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 border border-[#0066FF]/25 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-[#0066FF]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-zinc-400 text-xs">Email</p>
                  <p className="text-white text-sm font-semibold break-all group-hover:text-[#0066FF] transition-colors duration-200">
                    mmithongo@gmail.com
                  </p>
                </div>
              </a>
            </div>

            {/* Location card */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FFD400]/10 border border-[#FFD400]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[#FFD400]" aria-hidden="true" />
                </div>
                <address className="not-italic">
                  <p className="text-white font-semibold text-sm">10900 C F Hawn Fwy</p>
                  <p className="text-zinc-400 text-xs">Dallas, TX 75217</p>
                  <p className="text-zinc-500 text-xs mt-1">Dallas-Fort Worth Metro Area</p>
                </address>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=10900+C+F+Hawn+Fwy,+Dallas,+TX+75217"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-[#FFD400]/35 hover:border-[#FFD400] text-[#FFD400] font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors duration-200"
              >
                <ExternalLink size={14} aria-hidden="true" />
                Get Directions
              </a>
            </div>
          </div>

          {/* ════════════════════════════════════
              RIGHT COLUMN — Quote / Booking form
              ════════════════════════════════════ */}
          <div className="lg:col-span-3">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 lg:p-8">
              <h3 className="text-white font-bold text-lg mb-1">Request a Service Quote</h3>
              <p className="text-zinc-400 text-sm mb-6">
                Fill in your details and we'll get back to you as soon as possible.
              </p>

              {submitted ? (
                /* ── Success state ── */
                <div className="flex flex-col items-center gap-4 py-14 text-center">
                  <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/25 flex items-center justify-center">
                    <Send size={24} className="text-amber-400" aria-hidden="true" />
                  </div>
                  <h4 className="text-white font-bold text-xl">Request Received</h4>
                  <p className="text-zinc-300 text-sm max-w-sm">
                    Thank you for reaching out. We'll review your request and
                    be in touch as soon as possible.
                  </p>
                  <p className="text-zinc-400 text-xs">
                    For urgent help, call dispatch now:{' '}
                    <a href="tel:8573166799" className="text-[#FFD400] font-bold">857-316-6799</a>
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-sm text-zinc-400 hover:text-white underline transition-colors"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                  {/* ── Urgency radio pill ── */}
                  <fieldset>
                    <legend className="text-sm text-zinc-300 font-semibold mb-2">
                      Is this an active roadside breakdown?
                      <span className="text-red-400 ml-1" aria-hidden="true">*</span>
                    </legend>
                    <div className="flex gap-3" role="radiogroup">
                      {(['yes', 'no'] as const).map((val) => (
                        <button
                          key={val}
                          type="button"
                          role="radio"
                          aria-checked={isBreakdown === val}
                          onClick={() => setIsBreakdown(val)}
                          className={`flex-1 py-2.5 rounded-lg border text-sm font-bold uppercase tracking-wider transition-all duration-200 ${isBreakdown === val
                            ? val === 'yes'
                              ? 'bg-red-600/20 border-red-500 text-red-400'
                              : 'bg-amber-500/15 border-amber-500 text-amber-400'
                            : 'bg-zinc-950 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white'
                            }`}
                        >
                          {val === 'yes' ? '🚨 Yes' : '✅ No'}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  {/* ── Breakdown emergency banner ── */}
                  {isBreakdown === 'yes' && (
                    <div className="flex items-start gap-3 bg-red-600/12 border border-red-500/40 rounded-xl px-4 py-4">
                      <AlertTriangle size={18} className="text-red-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <p className="text-white font-bold text-sm">
                          For active roadside emergencies, call dispatch immediately for fastest response.
                        </p>
                        <a
                          href="tel:8573166799"
                          className="inline-flex items-center gap-1.5 mt-2 bg-red-600 hover:bg-red-500 text-white font-black text-sm px-4 py-2 rounded-lg transition-colors duration-200"
                          style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.04em' }}
                        >
                          <Phone size={14} aria-hidden="true" />
                          CALL 857-316-6799 NOW
                        </a>
                      </div>
                    </div>
                  )}

                  {/* ── Name + Phone ── */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                        Name <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="name" name="name" type="text" autoComplete="name"
                        value={form.name} onChange={handleChange}
                        aria-required="true"
                        aria-describedby={errors.name ? 'err-name' : undefined}
                        placeholder="Your full name"
                        className={inputClass(!!errors.name)}
                      />
                      {errors.name && <p id="err-name" className="text-red-400 text-xs" role="alert">{errors.name}</p>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                        Phone <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="phone" name="phone" type="tel" autoComplete="tel"
                        value={form.phone} onChange={handleChange}
                        aria-required="true"
                        aria-describedby={errors.phone ? 'err-phone' : undefined}
                        placeholder="Your phone number"
                        className={inputClass(!!errors.phone)}
                      />
                      {errors.phone && <p id="err-phone" className="text-red-400 text-xs" role="alert">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* ── Vehicle Type + Service Needed ── */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="vehicleType" className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                        Vehicle Type
                      </label>
                      <select
                        id="vehicleType" name="vehicleType"
                        value={form.vehicleType} onChange={handleChange}
                        className={`${inputClass(false)} appearance-none`}
                      >
                        <option value="">Select vehicle type</option>
                        <option value="Semi Truck">Semi Truck</option>
                        <option value="Trailer">Trailer</option>
                        <option value="Box Truck">Box Truck</option>
                        <option value="Flatbed">Flatbed</option>
                        <option value="Reefer">Reefer</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="serviceNeeded" className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                        Service Needed <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <select
                        id="serviceNeeded" name="serviceNeeded"
                        value={form.serviceNeeded} onChange={handleChange}
                        aria-required="true"
                        aria-describedby={errors.serviceNeeded ? 'err-service' : undefined}
                        className={`${inputClass(!!errors.serviceNeeded)} appearance-none`}
                      >
                        <option value="">Select service needed</option>
                        <option value="Engine Diagnostics & Repair">Engine Diagnostics &amp; Repair</option>
                        <option value="Brake Service & Repair">Brake Service &amp; Repair</option>
                        <option value="Transmission Service & Repair">Transmission Service &amp; Repair</option>
                        <option value="Tire Change & Repair">Tire Change &amp; Repair</option>
                        <option value="Electrical System Diagnostics & Repair">Electrical System Diagnostics &amp; Repair</option>
                        <option value="Cooling System Service & Repair">Cooling System Service &amp; Repair</option>
                        <option value="Suspension & Air System Repair">Suspension &amp; Air System Repair</option>
                        <option value="Preventive Maintenance">Preventive Maintenance</option>
                        <option value="Roadside / On-Site Service">Roadside / On-Site Service</option>
                        <option value="Other">Other / Not Listed</option>
                      </select>
                      {errors.serviceNeeded && (
                        <p id="err-service" className="text-red-400 text-xs" role="alert">{errors.serviceNeeded}</p>
                      )}
                    </div>
                  </div>

                  {/* ── Location ── */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="location" className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                      Your Location
                    </label>
                    <input
                      id="location" name="location" type="text"
                      value={form.location} onChange={handleChange}
                      placeholder="Address or area where service is needed"
                      className={inputClass(false)}
                    />
                  </div>

                  {/* ── Message ── */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                      Additional Details
                    </label>
                    <textarea
                      id="message" name="message" rows={4}
                      value={form.message} onChange={handleChange}
                      placeholder="Describe the issue or anything else we should know..."
                      className={`${inputClass(false)} resize-y min-h-[100px]`}
                    />
                  </div>

                  {/* ── Disclaimer ── */}
                  <p className="text-zinc-600 text-xs">
                    <span className="text-red-400">*</span> Required. Form submissions are reviewed manually.
                    For urgent assistance call{' '}
                    <a href="tel:8573166799" className="text-[#FFD400] hover:underline font-semibold">857-316-6799</a>.
                  </p>

                  {/* ── Submit ── */}
                  <button
                    type="submit"
                    className="self-start flex items-center gap-2 bg-[#FFD400] hover:bg-yellow-300 text-zinc-950 font-black px-7 py-3.5 rounded-lg transition-colors duration-200 text-base"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.05em' }}
                  >
                    <Send size={16} aria-hidden="true" />
                    Send Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
