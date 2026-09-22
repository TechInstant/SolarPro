import React, { useState } from 'react';
import { MessageCircle, Mail, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { getContactWhatsAppMessage, getWhatsAppUrl, getMailtoUrl } from '../../utils/whatsapp';
import { companyConfig } from '../../config/company';
import type { ContactFormData } from '../../types';

const subjects = [
  'A new solar installation',
  'Inverter or battery upgrade',
  'CCTV cameras',
  'Electric fencing / barbed wire',
  'Smart security or access control',
  'Maintenance or a fault',
  'Equipment purchase',
  'Consultation and system design',
  'Something else',
];

const empty: ContactFormData = {
  fullName: '',
  phone: '',
  email: '',
  serviceRequired: subjects[0],
  message: '',
};

export const ContactForm: React.FC = () => {
  const [data, setData] = useState<ContactFormData>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [prepared, setPrepared] = useState(false);

  const update = (field: keyof ContactFormData, value: string) => {
    setData((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
  };

  const body = getContactWhatsAppMessage(data);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const found: Partial<Record<keyof ContactFormData, string>> = {};
    if (data.fullName.trim().length < 2) found.fullName = 'Please enter your name.';
    if (data.phone.replace(/\D/g, '').length < 7) found.phone = 'Please enter a phone number.';
    if (data.message.trim().length < 5) found.message = 'Please add a short message.';
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setPrepared(true);
    window.open(getWhatsAppUrl(body), '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="field-label">
            Name <span className="text-bronze">*</span>
          </label>
          <input
            id="contact-name"
            className="field"
            value={data.fullName}
            onChange={(event) => update('fullName', event.target.value)}
            autoComplete="name"
            aria-invalid={Boolean(errors.fullName)}
          />
          {errors.fullName && (
            <p role="alert" className="mt-1.5 text-[12.5px] text-bronze">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-phone" className="field-label">
            Phone / WhatsApp <span className="text-bronze">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            inputMode="tel"
            className="field"
            value={data.phone}
            onChange={(event) => update('phone', event.target.value)}
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone && (
            <p role="alert" className="mt-1.5 text-[12.5px] text-bronze">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className="field-label">
          Email <span className="text-ink-muted">(optional)</span>
        </label>
        <input
          id="contact-email"
          type="email"
          inputMode="email"
          className="field"
          value={data.email}
          onChange={(event) => update('email', event.target.value)}
          autoComplete="email"
        />
      </div>

      <div>
        <label htmlFor="contact-subject" className="field-label">
          What is it about?
        </label>
        <select
          id="contact-subject"
          className="field"
          value={data.serviceRequired}
          onChange={(event) => update('serviceRequired', event.target.value)}
        >
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="field-label">
          Message <span className="text-bronze">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          className="field resize-none"
          value={data.message}
          onChange={(event) => update('message', event.target.value)}
          placeholder="Tell us what you need and roughly where you are"
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && (
          <p role="alert" className="mt-1.5 text-[12.5px] text-bronze">
            {errors.message}
          </p>
        )}
      </div>

      <div className="space-y-2.5 pt-1">
        <Button
          type="submit"
          size="lg"
          fullWidth
          trailingIcon={<ArrowRight className="h-4 w-4" strokeWidth={1.75} />}
        >
          Send message
        </Button>
        <Button
          href={getMailtoUrl(`Website enquiry — ${data.fullName || 'new enquiry'}`, body)}
          variant="outline"
          size="lg"
          fullWidth
          leadingIcon={<Mail className="h-4 w-4" strokeWidth={1.75} />}
        >
          Email instead
        </Button>
      </div>

      {prepared ? (
        <div className="flex items-start gap-3 border border-moss/40 bg-moss-pale px-4 py-3.5">
          <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-moss-dark" strokeWidth={1.75} />
          <p className="text-[13.5px] leading-relaxed text-navy">
            WhatsApp should have opened with your message ready. If it did not, use the email
            button above or call {companyConfig.phoneDisplay} directly.
          </p>
        </div>
      ) : (
        <p className="text-[13px] leading-relaxed text-ink-muted">
          This website has no server. Sending opens WhatsApp or your email app with the message
          written out, so you stay in control of what is sent.
        </p>
      )}
    </form>
  );
};
