import React, { useEffect, useRef, useState } from 'react';
import { X, MessageCircle, Mail, Minus, Plus } from 'lucide-react';
import { SmartImage } from '../ui/SmartImage';
import { formatPrice } from '../../data/products';
import { getProductWhatsAppMessage, getWhatsAppUrl, getMailtoUrl } from '../../utils/whatsapp';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import { companyConfig } from '../../config/company';
import type { Product } from '../../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

/**
 * Equipment enquiry. There is no cart and no checkout: the form builds a
 * complete WhatsApp message so the engineer can confirm stock, price and
 * delivery in one reply.
 */
export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [touched, setTouched] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const open = Boolean(product);
  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) return;
    setQuantity(1);
    setTouched(false);
    const timer = window.setTimeout(() => firstFieldRef.current?.focus(), 30);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key !== 'Tab') return;

      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, textarea, select'
      );
      if (!focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!product) return null;

  const valid = fullName.trim().length > 1 && phone.trim().length > 6;

  const enquiry = {
    productName: product.name,
    productBrand: product.brand,
    quantity,
    fullName: fullName.trim(),
    phone: phone.trim(),
    location: location.trim(),
    message: message.trim(),
  };

  const body = getProductWhatsAppMessage(enquiry);

  const send = (event: React.FormEvent) => {
    event.preventDefault();
    setTouched(true);
    if (!valid) return;
    window.open(getWhatsAppUrl(body), '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-navy-deep/80 backdrop-blur-[2px] sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="max-h-[92vh] w-full max-w-lg overflow-y-auto border border-cream-300 bg-cream-50 shadow-panel animate-sheet-in"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-cream-300 bg-cream-50 px-5 py-4">
          <div className="min-w-0">
            <p className="eyebrow">Equipment enquiry</p>
            <h2 id="enquiry-title" className="mt-1.5 font-display text-lg font-semibold text-navy">
              {product.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close enquiry"
            className="tap -mr-2 flex w-11 shrink-0 items-center justify-center text-ink-muted hover:text-navy"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex items-center gap-4 border-b border-cream-200 bg-white px-5 py-4">
          <SmartImage
            src={product.image}
            alt={product.name}
            fit="contain"
            wrapperClassName="h-16 w-16 shrink-0 border border-cream-200 bg-cream-100"
            className="p-1"
          />
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
              {product.brand} · {product.availability}
            </p>
            <p className="mt-1 font-display text-[16px] font-semibold text-navy">
              {formatPrice(product)}
            </p>
          </div>
        </div>

        <form onSubmit={send} className="space-y-4 px-5 py-5" noValidate>
          <div>
            <span className="field-label">Quantity</span>
            <div className="inline-flex items-stretch border border-cream-300 bg-white">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Reduce quantity"
                className="flex h-12 w-12 items-center justify-center text-ink-soft hover:bg-cream-100"
              >
                <Minus className="h-4 w-4" strokeWidth={1.75} />
              </button>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(event) => setQuantity(Math.max(1, Number(event.target.value) || 1))}
                aria-label="Quantity"
                className="h-12 w-16 border-x border-cream-300 text-center text-[15px] text-navy focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
                className="flex h-12 w-12 items-center justify-center text-ink-soft hover:bg-cream-100"
              >
                <Plus className="h-4 w-4" strokeWidth={1.75} />
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="enq-name" className="field-label">
              Your name <span className="text-bronze">*</span>
            </label>
            <input
              ref={firstFieldRef}
              id="enq-name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              className="field"
              placeholder="Full name"
              autoComplete="name"
              required
            />
          </div>

          <div>
            <label htmlFor="enq-phone" className="field-label">
              Phone / WhatsApp <span className="text-bronze">*</span>
            </label>
            <input
              id="enq-phone"
              type="tel"
              inputMode="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="field"
              placeholder="080..."
              autoComplete="tel"
              required
            />
          </div>

          <div>
            <label htmlFor="enq-location" className="field-label">
              Delivery location
            </label>
            <input
              id="enq-location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              className="field"
              placeholder="City or area"
            />
          </div>

          <div>
            <label htmlFor="enq-message" className="field-label">
              Anything else?
            </label>
            <textarea
              id="enq-message"
              rows={3}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="field resize-none"
              placeholder="System size, timing, or a question about compatibility"
            />
          </div>

          {touched && !valid && (
            <p role="alert" className="text-[13px] text-bronze">
              Please add your name and a phone number so the engineer can reply.
            </p>
          )}

          <div className="space-y-2 pt-1">
            <button
              type="submit"
              className="tap flex w-full items-center justify-center gap-2 rounded-sm bg-[#1FA855] px-5 text-[15px] font-medium text-white transition-colors hover:bg-[#178443]"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
              Send enquiry on WhatsApp
            </button>
            <a
              href={getMailtoUrl(`Equipment enquiry — ${product.name}`, body)}
              className="tap flex w-full items-center justify-center gap-2 rounded-sm border border-cream-300 px-5 text-[15px] font-medium text-navy transition-colors hover:border-navy"
            >
              <Mail className="h-4 w-4" strokeWidth={1.75} />
              Email instead
            </a>
            <p className="pt-1 text-center text-[12.5px] leading-relaxed text-ink-muted">
              Your details are not stored on this website — the form opens WhatsApp or your email
              app addressed to {companyConfig.phoneDisplay}.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
