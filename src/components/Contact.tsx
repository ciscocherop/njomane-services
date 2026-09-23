import { ExternalLink, Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';

interface FormData {
  name: string; phone: string; vehicleType: string;
  serviceNeeded: string; location: string; message: string;
}
const emptyForm: FormData = { name: '', phone: '', vehicleType: '', serviceNeeded: '', location: '', message: '' };

const SERVICE_AREAS = ['Dallas', 'Fort Worth', 'Arlington', 'Grand Prairie', 'Irving', 'Garland', 'Mesquite', 'DeSoto'];
const PAYMENT_METHODS = ['Comchek', 'EFS', 'T-Chek', 'Credit Cards'];

// Where form submissions are emailed (via FormSubmit.co).
// A new recipient must click FormSubmit's one-time "Activate Form" email before delivery starts.
const FORM_RECIPIENT = 'mmithongo@gmail.com';

// Input constraints: strip disallowed characters as they're typed or pasted.
const NAME_BLOCKED = /[^\p{L}\s]/gu;          // letters (any language) and spaces only
const PHONE_BLOCKED = /[^0-9()+\-\s]/g;       // digits, ( ) + - and spaces only
const sanitize = (field: string, value: string) =>
  field === 'name' ? value.replace(NAME_BLOCKED, '')
    : field === 'phone' ? value.replace(PHONE_BLOCKED, '')
      : value;

// Block a disallowed key before it reaches the input (still sanitized on change for paste/autofill).
const blockKeys = (blocked: RegExp) => (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && e.key.replace(blocked, '') === '') e.preventDefault();
};

// text-base (16px) on phones: iOS Safari zooms into any field with smaller text
const inputBase = 'w-full bg-zinc-950 border rounded-lg px-3.5 py-3 text-base sm:text-sm text-white placeholder-zinc-600 outline-none transition-all duration-200';
const inputClass = (err: boolean) =>
  `${inputBase} ${err ? 'border-red-500/70' : 'border-zinc-700'} focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500/40`;

export default function Contact() {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isBreakdown, setIsBreakdown] = useState<'yes' | 'no' | null>(null);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    else if (form.name.replace(/\s/g, '').length < 2) e.name = 'Please enter your full name.';
    const digits = form.phone.replace(/\D/g, '');
    if (!form.phone.trim()) e.phone = 'Phone number is required.';
    else if (digits.length < 10 || digits.length > 15) e.phone = 'Enter a valid phone number (at least 10 digits).';
    if (!form.serviceNeeded) e.serviceNeeded = 'Please select a service.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    const value = sanitize(name, e.target.value);
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormData]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || sending) return;
    setSending(true);
    setSendError(null);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORM_RECIPIENT}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `${isBreakdown === 'yes' ? '🚨 EMERGENCY — ' : ''}Service request: ${form.serviceNeeded} (${form.name})`,
          _template: 'table',
          _captcha: 'false',
          Name: form.name,
          Phone: form.phone,
          'Broken down now': isBreakdown === 'yes' ? 'YES — emergency' : isBreakdown === 'no' ? 'No — scheduled' : 'Not specified',
          'Vehicle type': form.vehicleType || '—',
          'Service needed': form.serviceNeeded,
          Location: form.location || '—',
          Message: form.message || '—',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (String(data.success) !== 'true') {
        // First-ever submission to a new recipient: FormSubmit emails an activation link instead of delivering.
        const needsActivation = /activat/i.test(data.message ?? '');
        setSendError(needsActivation
          ? `Form not activated yet — check ${FORM_RECIPIENT} for the "Activate Form" email, then submit again.`
          : 'generic');
        return;
      }
      setSubmitted(true);
      setForm(emptyForm);
      setIsBreakdown(null);
    } catch {
      setSendError('generic');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 lg:py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — white, no yellow */}
        <div className="mb-10 lg:mb-12">
          <span className="text-zinc-400 text-xs font-semibold tracking-[0.18em] uppercase">Get In Touch</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Contact &amp; Location
          </h2>
          <div className="mt-3 w-10 h-0.5 bg-zinc-600 rounded-full" aria-hidden="true" />
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10 items-start">

          {/* ── LEFT: Dispatch + info ── */}
          <div className="lg:col-span-2 flex flex-col gap-4">

            {/* Dispatch card — dark sleek, green indicator */}
            <div className="bg-surface-card border border-line-subtle rounded-2xl overflow-hidden hover:bg-surface-card-hover transition-colors duration-200">
              {/* Header — dark with green status, no red */}
              <div className="px-5 py-4 flex items-center justify-between border-b border-line-subtle">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" aria-hidden="true" />
                  <p className="text-white font-bold text-sm"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.04em', fontSize: '1rem' }}>
                    Dispatchers On Duty
                  </p>
                </div>
                <span className="text-emerald-400 text-xs font-semibold tracking-wide uppercase">Available</span>
              </div>

              <div className="px-5 py-5 flex flex-col gap-4">
                {/* Phone */}
                <a href="tel:+18573166799"
                  className="flex items-center gap-3 group" aria-label="Call dispatch">
                  <div className="w-11 h-11 rounded-lg bg-accent/16 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-zinc-400 text-xs">Dispatch Line</p>
                    <p className="text-white font-black text-xl group-hover:text-zinc-300 transition-colors"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      +1 (857) 316-6799
                    </p>
                  </div>
                </a>

                <div className="h-px bg-line-subtle" aria-hidden="true" />

                {/* Service radius */}
                <div>
                  <p className="text-copy text-xs font-bold uppercase tracking-wider mb-2">Service Radius</p>
                  <div className="flex flex-wrap gap-1.5">
                    {SERVICE_AREAS.map((city) => (
                      <span key={city} className="bg-white/5 border border-line-subtle text-copy text-xs px-2.5 py-1 rounded-full">
                        {city}
                      </span>
                    ))}
                  </div>
                  <p className="text-zinc-400 text-xs mt-2">+ surrounding DFW metro areas</p>
                </div>

                <div className="h-px bg-line-subtle" aria-hidden="true" />

                {/* Payment */}
                <div>
                  <p className="text-copy text-xs font-bold uppercase tracking-wider mb-2">Payment Accepted</p>
                  <div className="flex flex-wrap gap-2">
                    {PAYMENT_METHODS.map((m) => (
                      <span key={m} className="bg-white/5 border border-line-subtle text-copy text-xs px-3 py-1.5 rounded-lg font-medium">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-surface-card border border-line-subtle rounded-xl p-4 hover:bg-surface-card-hover transition-colors duration-200">
              <a href="mailto:mmithongo@gmail.com" className="flex items-center gap-3 min-h-11 group" aria-label="Email us">
                <div className="w-9 h-9 rounded-lg bg-accent/16 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-zinc-400 text-xs">Email</p>
                  <p className="text-white text-sm font-semibold break-all group-hover:text-zinc-300 transition-colors">
                    mmithongo@gmail.com
                  </p>
                </div>
              </a>
            </div>

            {/* Location + embedded map */}
            <div className="bg-surface-card border border-line-subtle rounded-xl overflow-hidden flex flex-col gap-0 hover:bg-surface-card-hover transition-colors duration-200">
              {/* Google Maps iframe */}
              <iframe
                title="Njomane Services location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.6!2d-96.6516!3d32.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9f2a2a2a2a2b%3A0x0!2s10900+C+F+Hawn+Fwy%2C+Dallas%2C+TX+75217!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="160"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="p-4 flex items-center justify-between gap-3">
                <address className="not-italic">
                  <p className="text-white font-semibold text-sm">10900 C F Hawn Fwy</p>
                  <p className="text-zinc-400 text-xs">Dallas, TX 75217</p>
                </address>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=10900+C+F+Hawn+Fwy,+Dallas,+TX+75217"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-xs font-semibold px-3.5 min-h-11 rounded-lg transition-colors duration-200 flex-shrink-0"
                >
                  <ExternalLink size={11} aria-hidden="true" />
                  Directions
                </a>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div className="lg:col-span-3">
            <div className="bg-surface-card border border-line-subtle rounded-2xl p-6 lg:p-8 hover:bg-surface-card-hover transition-colors duration-200">
              <h3 className="text-white font-bold text-lg mb-1">Request a Service Quote</h3>
              <p className="text-copy text-sm mb-6">Fill in your details and we'll get back to you.</p>

              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/16 flex items-center justify-center">
                    <Send size={20} className="text-accent" aria-hidden="true" />
                  </div>
                  <h4 className="text-white font-bold text-lg">Request Received</h4>
                  <p className="text-copy text-sm max-w-sm">
                    We'll review your request and be in touch. For urgent help, call{' '}
                    <a href="tel:+18573166799" className="text-white font-semibold">+1 (857) 316-6799</a>.
                  </p>
                  <button type="button" onClick={() => setSubmitted(false)}
                    className="mt-2 text-sm text-zinc-400 hover:text-white underline transition-colors">
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

                  {/* Urgency pills */}
                  <fieldset>
                    <legend className="text-sm text-zinc-300 font-semibold mb-2">
                      Active roadside breakdown?
                      <span className="text-red-400 ml-1" aria-hidden="true">*</span>
                    </legend>
                    <div className="flex gap-3" role="radiogroup">
                      {(['yes', 'no'] as const).map((val) => (
                        <button key={val} type="button" role="radio"
                          aria-checked={isBreakdown === val}
                          onClick={() => setIsBreakdown(val)}
                          className={`flex-1 py-3 rounded-lg border text-sm font-bold uppercase tracking-wider transition-all duration-200 ${isBreakdown === val
                            ? val === 'yes'
                              ? 'bg-red-600/20 border-red-500 text-red-400'
                              : 'bg-zinc-800 border-zinc-600 text-white'
                            : 'bg-zinc-950 border-zinc-700 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300'
                            }`}
                        >
                          {val === 'yes' ? '🚨 Yes — Emergency' : '✅ No — Scheduled'}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  {/* Emergency banner — no red, just direct CTA */}
                  {isBreakdown === 'yes' && (
                    <div className="flex items-start gap-3 bg-white/5 border border-line-subtle rounded-xl px-4 py-4">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1 flex-shrink-0 animate-pulse" aria-hidden="true" />
                      <div>
                        <p className="text-white font-bold text-sm">
                          Call dispatch now for fastest response.
                        </p>
                        <a href="tel:+18573166799"
                          className="inline-flex items-center gap-1.5 mt-2 bg-accent hover:brightness-110 text-zinc-950 font-black text-sm px-4 py-2 rounded-lg transition-colors duration-200"
                          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                          <Phone size={13} aria-hidden="true" />
                          CALL +1 (857) 316-6799
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Name + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                        Name <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <input id="name" name="name" type="text" autoComplete="name"
                        value={form.name} onChange={handleChange} onKeyDown={blockKeys(NAME_BLOCKED)}
                        pattern="[\p{L}\s]+" title="Letters and spaces only" aria-required="true"
                        placeholder="Your full name" className={inputClass(!!errors.name)} />
                      {errors.name && <p className="text-red-400 text-xs" role="alert">{errors.name}</p>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                        Phone <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel"
                        value={form.phone} onChange={handleChange} onKeyDown={blockKeys(PHONE_BLOCKED)}
                        pattern="[0-9\(\)\+\-\s]*" title="Numbers only" aria-required="true"
                        placeholder="Your phone number" className={inputClass(!!errors.phone)} />
                      {errors.phone && <p className="text-red-400 text-xs" role="alert">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Vehicle + Service */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="vehicleType" className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                        Vehicle Type
                      </label>
                      <select id="vehicleType" name="vehicleType" value={form.vehicleType} onChange={handleChange}
                        className={`${inputClass(false)} appearance-none`}>
                        <option value="">Select type</option>
                        {['Semi Truck', 'Trailer', 'Box Truck', 'Flatbed', 'Reefer', 'Other'].map(v => (
                          <option key={v} value={v}>{v}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="serviceNeeded" className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                        Service Needed <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <select id="serviceNeeded" name="serviceNeeded" value={form.serviceNeeded} onChange={handleChange}
                        aria-required="true"
                        className={`${inputClass(!!errors.serviceNeeded)} appearance-none`}>
                        <option value="">Select service</option>
                        <option value="Engine Diagnostics & Repair">Engine Diagnostics &amp; Repair</option>
                        <option value="Brake Service & Repair">Brake Service &amp; Repair</option>
                        <option value="Transmission Service & Repair">Transmission Service &amp; Repair</option>
                        <option value="Tire Change & Repair">Tire Change &amp; Repair</option>
                        <option value="Electrical System Diagnostics & Repair">Electrical Diagnostics &amp; Repair</option>
                        <option value="Cooling System Service & Repair">Cooling System Service &amp; Repair</option>
                        <option value="Suspension & Air System Repair">Suspension &amp; Air System Repair</option>
                        <option value="Preventive Maintenance">Preventive Maintenance</option>
                        <option value="Roadside / On-Site Service">Roadside / On-Site Service</option>
                        <option value="Other">Other / Not Listed</option>
                      </select>
                      {errors.serviceNeeded && <p className="text-red-400 text-xs" role="alert">{errors.serviceNeeded}</p>}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="location" className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                      Your Location
                    </label>
                    <input id="location" name="location" type="text"
                      value={form.location} onChange={handleChange}
                      placeholder="Address or area needing service"
                      className={inputClass(false)} />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                      Additional Details
                    </label>
                    <textarea id="message" name="message" rows={3}
                      value={form.message} onChange={handleChange}
                      placeholder="Describe the issue or anything else we should know..."
                      className={`${inputClass(false)} resize-y min-h-[88px]`} />
                  </div>

                  <p className="text-copy text-xs">
                    <span className="text-red-400">*</span> Required. For urgent help call{' '}
                    <a href="tel:+18573166799" className="text-zinc-400 hover:text-white">+1 (857) 316-6799</a>.
                  </p>

                  {sendError && (
                    <p className="text-red-400 text-sm" role="alert">
                      {sendError === 'generic' ? (
                        <>
                          Couldn't send your request. Please try again or call{' '}
                          <a href="tel:+18573166799" className="underline hover:text-white">+1 (857) 316-6799</a>.
                        </>
                      ) : sendError}
                    </p>
                  )}

                  {/* Submit — yellow */}
                  <button type="submit" disabled={sending}
                    className="self-start flex items-center gap-2 bg-accent hover:brightness-110 text-zinc-950 font-black px-7 py-3 rounded-lg transition-colors duration-200 disabled:opacity-60 disabled:cursor-wait"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.95rem', letterSpacing: '0.05em' }}>
                    <Send size={15} aria-hidden="true" />
                    {sending ? 'Sending…' : 'Send Dispatch Request'}
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
