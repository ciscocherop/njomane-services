import { ExternalLink, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

interface FormData {
  name: string; phone: string; vehicleType: string;
  serviceNeeded: string; location: string; message: string;
}
const emptyForm: FormData = { name: '', phone: '', vehicleType: '', serviceNeeded: '', location: '', message: '' };

const SERVICE_AREAS = ['Dallas', 'Fort Worth', 'Arlington', 'Grand Prairie', 'Irving', 'Garland', 'Mesquite', 'DeSoto'];
const PAYMENT_METHODS = ['Comchek', 'EFS', 'T-Chek', 'Credit Cards'];

const inputBase = 'w-full bg-zinc-950 border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-200';
const inputClass = (err: boolean) =>
  `${inputBase} ${err ? 'border-red-500/70' : 'border-zinc-700'} focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500/40`;

export default function Contact() {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isBreakdown, setIsBreakdown] = useState<'yes' | 'no' | null>(null);

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.phone.trim()) e.phone = 'Phone number is required.';
    if (!form.serviceNeeded) e.serviceNeeded = 'Please select a service.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormData]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm(emptyForm);
    setIsBreakdown(null);
  };

  return (
    <section id="contact" className="relative bg-zinc-950 py-16 lg:py-24 overflow-hidden">
      {/* Subtle tools background */}
      <div className="absolute inset-0" aria-hidden="true">
        <img src="/contact_bg.jpg" alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-zinc-950/82" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — white, no yellow */}
        <div className="mb-10 lg:mb-12">
          <span className="text-zinc-500 text-xs font-semibold tracking-[0.18em] uppercase">Get In Touch</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Contact &amp; Location
          </h2>
          <div className="mt-3 w-10 h-0.5 bg-zinc-600 rounded-full" aria-hidden="true" />
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10 items-start">

          {/* ── LEFT: Dispatch + info ── */}
          <div className="lg:col-span-2 flex flex-col gap-4">

            {/* Dispatch card — dark sleek, green indicator */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
              {/* Header — dark with green status, no red */}
              <div className="px-5 py-4 flex items-center justify-between border-b border-zinc-800">
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
                  <div className="w-11 h-11 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0 group-hover:bg-zinc-700 transition-colors">
                    <Phone size={18} className="text-zinc-300" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs">Dispatch Line</p>
                    <p className="text-white font-black text-xl group-hover:text-zinc-300 transition-colors"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      +1 (857) 316-6799
                    </p>
                  </div>
                </a>

                <div className="h-px bg-zinc-800" aria-hidden="true" />

                {/* Service radius */}
                <div>
                  <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2">Service Radius</p>
                  <div className="flex flex-wrap gap-1.5">
                    {SERVICE_AREAS.map((city) => (
                      <span key={city} className="bg-zinc-800 border border-zinc-700 text-zinc-400 text-xs px-2.5 py-1 rounded-full">
                        {city}
                      </span>
                    ))}
                  </div>
                  <p className="text-zinc-600 text-xs mt-2">+ surrounding DFW metro areas</p>
                </div>

                <div className="h-px bg-zinc-800" aria-hidden="true" />

                {/* Payment */}
                <div>
                  <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2">Payment Accepted</p>
                  <div className="flex flex-wrap gap-2">
                    {PAYMENT_METHODS.map((m) => (
                      <span key={m} className="bg-zinc-800 border border-zinc-700 text-zinc-400 text-xs px-3 py-1.5 rounded-lg font-medium">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
              <a href="mailto:mmithongo@gmail.com" className="flex items-center gap-3 group" aria-label="Email us">
                <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-zinc-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs">Email</p>
                  <p className="text-white text-sm font-semibold break-all group-hover:text-zinc-300 transition-colors">
                    mmithongo@gmail.com
                  </p>
                </div>
              </a>
            </div>

            {/* Location */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-zinc-400" aria-hidden="true" />
                </div>
                <address className="not-italic">
                  <p className="text-white font-semibold text-sm">10900 C F Hawn Fwy</p>
                  <p className="text-zinc-500 text-xs">Dallas, TX 75217</p>
                </address>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=10900+C+F+Hawn+Fwy,+Dallas,+TX+75217"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold text-xs px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <ExternalLink size={12} aria-hidden="true" />
                Get Directions
              </a>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div className="lg:col-span-3">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 lg:p-8">
              <h3 className="text-white font-bold text-lg mb-1">Request a Service Quote</h3>
              <p className="text-zinc-500 text-sm mb-6">Fill in your details and we'll get back to you.</p>

              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                    <Send size={20} className="text-zinc-300" aria-hidden="true" />
                  </div>
                  <h4 className="text-white font-bold text-lg">Request Received</h4>
                  <p className="text-zinc-400 text-sm max-w-sm">
                    We'll review your request and be in touch. For urgent help, call{' '}
                    <a href="tel:+18573166799" className="text-white font-semibold">+1 (857) 316-6799</a>.
                  </p>
                  <button type="button" onClick={() => setSubmitted(false)}
                    className="mt-2 text-sm text-zinc-500 hover:text-white underline transition-colors">
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
                          className={`flex-1 py-2.5 rounded-lg border text-sm font-bold uppercase tracking-wider transition-all duration-200 ${isBreakdown === val
                            ? val === 'yes'
                              ? 'bg-red-600/20 border-red-500 text-red-400'
                              : 'bg-zinc-800 border-zinc-600 text-white'
                            : 'bg-zinc-950 border-zinc-700 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300'
                            }`}
                        >
                          {val === 'yes' ? '🚨 Yes — Emergency' : '✅ No — Scheduled'}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  {/* Emergency banner — no red, just direct CTA */}
                  {isBreakdown === 'yes' && (
                    <div className="flex items-start gap-3 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-4">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1 flex-shrink-0 animate-pulse" aria-hidden="true" />
                      <div>
                        <p className="text-white font-bold text-sm">
                          Call dispatch now for fastest response.
                        </p>
                        <a href="tel:+18573166799"
                          className="inline-flex items-center gap-1.5 mt-2 bg-[#FFD400] hover:bg-yellow-300 text-zinc-950 font-black text-sm px-4 py-2 rounded-lg transition-colors duration-200"
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
                      <label htmlFor="name" className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                        Name <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <input id="name" name="name" type="text" autoComplete="name"
                        value={form.name} onChange={handleChange} aria-required="true"
                        placeholder="Your full name" className={inputClass(!!errors.name)} />
                      {errors.name && <p className="text-red-400 text-xs" role="alert">{errors.name}</p>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                        Phone <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <input id="phone" name="phone" type="tel" autoComplete="tel"
                        value={form.phone} onChange={handleChange} aria-required="true"
                        placeholder="Your phone number" className={inputClass(!!errors.phone)} />
                      {errors.phone && <p className="text-red-400 text-xs" role="alert">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Vehicle + Service */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="vehicleType" className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
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
                      <label htmlFor="serviceNeeded" className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
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
                    <label htmlFor="location" className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                      Your Location
                    </label>
                    <input id="location" name="location" type="text"
                      value={form.location} onChange={handleChange}
                      placeholder="Address or area where service is needed"
                      className={inputClass(false)} />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                      Additional Details
                    </label>
                    <textarea id="message" name="message" rows={3}
                      value={form.message} onChange={handleChange}
                      placeholder="Describe the issue or anything else we should know..."
                      className={`${inputClass(false)} resize-y min-h-[88px]`} />
                  </div>

                  <p className="text-zinc-700 text-xs">
                    <span className="text-red-400">*</span> Required. For urgent help call{' '}
                    <a href="tel:+18573166799" className="text-zinc-400 hover:text-white">+1 (857) 316-6799</a>.
                  </p>

                  {/* Submit — yellow */}
                  <button type="submit"
                    className="self-start flex items-center gap-2 bg-[#FFD400] hover:bg-yellow-300 text-zinc-950 font-black px-7 py-3 rounded-lg transition-colors duration-200"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.95rem', letterSpacing: '0.05em' }}>
                    <Send size={15} aria-hidden="true" />
                    Send Dispatch Request
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
