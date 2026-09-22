import React, { useRef, useState } from 'react';
import { MessageCircle, Mail, Copy, Check, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { companyConfig } from '../../config/company';
import { getQuoteWhatsAppMessage, getWhatsAppUrl, getMailtoUrl } from '../../utils/whatsapp';
import type { QuoteFormData } from '../../types';

const propertyTypes = ['Home', 'Estate', 'Office', 'Shop', 'Factory', 'Church', 'School', 'Other'];
const powerSources = ['Public grid', 'Generator', 'Existing solar', 'No supply at all', 'Other'];

const solarNeeds = [
  'Complete solar system',
  'Solar installation only',
  'Inverter',
  'Battery / storage',
  'Electrical solutions',
  'Maintenance or repair',
];
const securityNeeds = [
  'CCTV cameras',
  'Electric fencing / barbed wire',
  'Smart security system',
  'Access control',
];
const otherNeeds = ['Consultation and design', 'Something else'];

const isSecurityNeed = (need: string) => securityNeeds.includes(need);
const budgets = [
  'Not sure yet',
  'Under ₦1m',
  '₦1m – ₦3m',
  '₦3m – ₦6m',
  '₦6m – ₦12m',
  'Above ₦12m',
];

const emptyForm: QuoteFormData = {
  fullName: '',
  phone: '',
  email: '',
  location: '',
  propertyType: '',
  currentPowerSource: '',
  serviceNeeded: '',
  appliances: '',
  budgetRange: '',
  message: '',
};

type Errors = Partial<Record<keyof QuoteFormData, string>>;

function validate(data: QuoteFormData): Errors {
  const errors: Errors = {};
  if (data.fullName.trim().length < 2) errors.fullName = 'Please enter your name.';
  if (data.phone.replace(/\D/g, '').length < 7) errors.phone = 'Please enter a reachable phone number.';
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = 'That email address does not look right.';
  if (!data.location.trim()) errors.location = 'Where is the property?';
  if (!data.propertyType) errors.propertyType = 'Please choose a property type.';
  // Power source matters for solar sizing; a CCTV-only job can skip it.
  if (!data.currentPowerSource && !isSecurityNeed(data.serviceNeeded))
    errors.currentPowerSource = 'Please choose your current power source.';
  if (!data.serviceNeeded) errors.serviceNeeded = 'Please tell us what you need.';
  return errors;
}

/** Numbered section wrapper, so a long form still reads as a sequence. */
const Step: React.FC<{ index: number; title: string; hint?: string; children: React.ReactNode }> = ({
  index,
  title,
  hint,
  children,
}) => (
  <fieldset className="border-t border-cream-300 pt-6">
    <legend className="sr-only">{title}</legend>
    <div className="mb-5 flex items-baseline gap-3">
      <span className="font-mono text-[11px] tracking-[0.14em] text-bronze">
        {String(index).padStart(2, '0')}
      </span>
      <div>
        <h2 className="font-display text-[17px] font-semibold text-navy">{title}</h2>
        {hint && <p className="mt-1 text-[13.5px] text-ink-muted">{hint}</p>}
      </div>
    </div>
    {children}
  </fieldset>
);

const FieldError: React.FC<{ id: string; message?: string }> = ({ id, message }) =>
  message ? (
    <p id={id} role="alert" className="mt-1.5 text-[12.5px] text-bronze">
      {message}
    </p>
  ) : null;

export const QuoteForm: React.FC = () => {
  const [data, setData] = useState<QuoteFormData>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);

  const update = (field: keyof QuoteFormData, value: string) => {
    setData((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
  };

  const summary = getQuoteWhatsAppMessage(data);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const found = validate(data);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      const firstField = document.getElementById(`quote-${Object.keys(found)[0]}`);
      firstField?.scrollIntoView({ block: 'center', behavior: 'smooth' });
      firstField?.focus({ preventScroll: true });
      return;
    }

    setSubmitted(true);
    window.open(getWhatsAppUrl(summary), '_blank', 'noopener,noreferrer');
    window.setTimeout(
      () => summaryRef.current?.scrollIntoView({ block: 'start', behavior: 'smooth' }),
      60
    );
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  if (submitted) {
    return (
      <div ref={summaryRef} className="border border-cream-300 bg-white p-6 sm:p-8">
        <p className="eyebrow">Ready to send</p>
        <h2 className="mt-3 font-display text-display-sm font-semibold text-navy">
          Your request is prepared, {data.fullName.split(' ')[0]}.
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
          This site has no server, so nothing has been stored or sent on your behalf. Your WhatsApp
          should have opened with the summary below already written — press send there and the
          engineer will have everything needed to size your system.
        </p>

        <pre className="mt-6 max-h-64 overflow-auto whitespace-pre-wrap border border-cream-200 bg-cream-100 p-4 font-mono text-[12.5px] leading-relaxed text-ink-soft">
          {summary}
        </pre>

        <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
          <Button
            href={getWhatsAppUrl(summary)}
            variant="whatsapp"
            leadingIcon={<MessageCircle className="h-4 w-4" strokeWidth={1.75} />}
            className="sm:flex-1"
          >
            Open WhatsApp again
          </Button>
          <Button
            href={getMailtoUrl(`Quote request — ${data.fullName}`, summary)}
            variant="outline"
            leadingIcon={<Mail className="h-4 w-4" strokeWidth={1.75} />}
            className="sm:flex-1"
          >
            Send by email
          </Button>
          <Button
            variant="ghost"
            onClick={copy}
            leadingIcon={
              copied ? (
                <Check className="h-4 w-4 text-moss-dark" strokeWidth={2} />
              ) : (
                <Copy className="h-4 w-4" strokeWidth={1.75} />
              )
            }
          >
            {copied ? 'Copied' : 'Copy summary'}
          </Button>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setData(emptyForm);
          }}
          className="mt-6 text-[14px] font-medium text-ink-soft underline underline-offset-4 hover:text-navy"
        >
          Start another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      <Step index={1} title="Who should we reply to?">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="quote-fullName" className="field-label">
              Full name <span className="text-bronze">*</span>
            </label>
            <input
              id="quote-fullName"
              className="field"
              value={data.fullName}
              onChange={(event) => update('fullName', event.target.value)}
              autoComplete="name"
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? 'err-fullName' : undefined}
            />
            <FieldError id="err-fullName" message={errors.fullName} />
          </div>

          <div>
            <label htmlFor="quote-phone" className="field-label">
              Phone / WhatsApp <span className="text-bronze">*</span>
            </label>
            <input
              id="quote-phone"
              type="tel"
              inputMode="tel"
              className="field"
              value={data.phone}
              onChange={(event) => update('phone', event.target.value)}
              autoComplete="tel"
              placeholder="080..."
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'err-phone' : undefined}
            />
            <FieldError id="err-phone" message={errors.phone} />
          </div>

          <div>
            <label htmlFor="quote-email" className="field-label">
              Email <span className="text-ink-muted">(optional)</span>
            </label>
            <input
              id="quote-email"
              type="email"
              inputMode="email"
              className="field"
              value={data.email}
              onChange={(event) => update('email', event.target.value)}
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'err-email' : undefined}
            />
            <FieldError id="err-email" message={errors.email} />
          </div>

          <div>
            <label htmlFor="quote-location" className="field-label">
              Property location <span className="text-bronze">*</span>
            </label>
            <input
              id="quote-location"
              className="field"
              value={data.location}
              onChange={(event) => update('location', event.target.value)}
              placeholder="Area and city"
              aria-invalid={Boolean(errors.location)}
              aria-describedby={errors.location ? 'err-location' : undefined}
            />
            <FieldError id="err-location" message={errors.location} />
          </div>
        </div>
      </Step>

      <Step index={2} title="What kind of property is it?">
        <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Property type">
          {propertyTypes.map((type) => (
            <button
              key={type}
              type="button"
              role="radio"
              aria-checked={data.propertyType === type}
              onClick={() => update('propertyType', type)}
              className={`tap rounded-sm border px-4 text-[14px] transition-colors ${
                data.propertyType === type
                  ? 'border-navy bg-navy text-cream'
                  : 'border-cream-300 bg-white text-ink-soft hover:border-navy'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        <span id="quote-propertyType" tabIndex={-1} />
        <FieldError id="err-propertyType" message={errors.propertyType} />

        <div className="mt-6">
          <label htmlFor="quote-currentPowerSource" className="field-label">
            Current power source{' '}
            {isSecurityNeed(data.serviceNeeded) ? (
              <span className="text-ink-muted">(optional)</span>
            ) : (
              <span className="text-bronze">*</span>
            )}
          </label>
          <select
            id="quote-currentPowerSource"
            className="field"
            value={data.currentPowerSource}
            onChange={(event) => update('currentPowerSource', event.target.value)}
            aria-invalid={Boolean(errors.currentPowerSource)}
          >
            <option value="">Select one</option>
            {powerSources.map((source) => (
              <option key={source} value={source}>
                {source}
              </option>
            ))}
          </select>
          <FieldError id="err-currentPowerSource" message={errors.currentPowerSource} />
        </div>
      </Step>

      <Step index={3} title="What do you need?">
        <div role="radiogroup" aria-label="What do you need" className="space-y-5">
          {[
            { heading: 'Solar & Power', options: solarNeeds },
            { heading: 'CCTV & Security', options: securityNeeds },
            { heading: 'Other', options: otherNeeds },
          ].map((group) => (
            <div key={group.heading}>
              <p className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-muted">
                {group.heading}
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {group.options.map((need) => (
                  <button
                    key={need}
                    type="button"
                    role="radio"
                    aria-checked={data.serviceNeeded === need}
                    onClick={() => update('serviceNeeded', need)}
                    className={`tap flex items-center justify-between rounded-sm border px-4 text-left text-[14px] transition-colors ${
                      data.serviceNeeded === need
                        ? 'border-moss bg-moss-pale text-navy'
                        : 'border-cream-300 bg-white text-ink-soft hover:border-navy'
                    }`}
                  >
                    {need}
                    {data.serviceNeeded === need && (
                      <Check className="h-4 w-4 text-moss-dark" strokeWidth={2} />
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <span id="quote-serviceNeeded" tabIndex={-1} />
        <FieldError id="err-serviceNeeded" message={errors.serviceNeeded} />
      </Step>

      <Step
        index={4}
        title={isSecurityNeed(data.serviceNeeded) ? 'Tell us about the site' : 'What has to stay on?'}
        hint={
          isSecurityNeed(data.serviceNeeded)
            ? 'Rough is fine. This is what the camera plan or fence gets designed around.'
            : 'Rough is fine. This is what the system gets sized against.'
        }
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="quote-appliances" className="field-label">
              {isSecurityNeed(data.serviceNeeded)
                ? 'Site details'
                : 'Appliances and estimated load'}
            </label>
            <textarea
              id="quote-appliances"
              rows={4}
              className="field resize-none"
              value={data.appliances}
              onChange={(event) => update('appliances', event.target.value)}
              placeholder={
                isSecurityNeed(data.serviceNeeded)
                  ? 'e.g. 2 gates, 4 outside corners, parking for 6 cars, wall about 120m, want to watch on my phone'
                  : 'e.g. 12 lights, 1 fridge, 1 freezer, 2 TVs, Wi-Fi, 1 air conditioner from 8pm'
              }
            />
          </div>

          <div>
            <label htmlFor="quote-budgetRange" className="field-label">
              Budget <span className="text-ink-muted">(optional)</span>
            </label>
            <select
              id="quote-budgetRange"
              className="field"
              value={data.budgetRange}
              onChange={(event) => update('budgetRange', event.target.value)}
            >
              <option value="">Prefer not to say</option>
              {budgets.map((budget) => (
                <option key={budget} value={budget}>
                  {budget}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="quote-message" className="field-label">
              Anything else we should know?
            </label>
            <textarea
              id="quote-message"
              rows={4}
              className="field resize-none"
              value={data.message}
              onChange={(event) => update('message', event.target.value)}
              placeholder="Roof type, timing, an existing system, or a question"
            />
          </div>
        </div>
      </Step>

      <div className="border-t border-cream-300 pt-6">
        <Button
          type="submit"
          size="lg"
          fullWidth
          trailingIcon={<ArrowRight className="h-4 w-4" strokeWidth={1.75} />}
        >
          Request my quote
        </Button>
        <p className="mt-3 text-center text-[13px] leading-relaxed text-ink-muted">
          This opens WhatsApp with your details written out, addressed to{' '}
          {companyConfig.phoneDisplay}. Nothing is stored on this website.
        </p>
      </div>
    </form>
  );
};
