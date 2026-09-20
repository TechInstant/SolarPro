import React, { useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { X, Phone, Mail, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';
import { companyConfig } from '../../config/company';
import { getWhatsAppUrl, whatsappMessages, telUrl } from '../../utils/whatsapp';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import { cn } from '../../utils/cn';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; path: string }[];
}

/**
 * Full-height navigation sheet for small screens. Every row is at least
 * 56px tall so it can be used one-handed, and the primary actions sit at
 * the bottom of the sheet within thumb reach.
 */
export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, links }) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useBodyScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (!focusables || focusables.length === 0) return;

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
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Menu">
      <div
        ref={panelRef}
        className="flex h-full flex-col bg-navy-deep animate-sheet-in"
      >
        <div className="flex items-center justify-between border-b border-navy-line px-5 py-4">
          <Logo tone="dark" />
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close menu"
            className="tap -mr-2 flex w-11 items-center justify-center text-cream-300 hover:text-cream"
          >
            <X className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-2" aria-label="Main">
          {links.map((link, index) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  'flex items-center justify-between border-b border-navy-line/70 py-5 text-lg font-medium',
                  isActive ? 'text-moss-bright' : 'text-cream hover:text-moss-bright'
                )
              }
            >
              <span className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] text-cream-300/40">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {link.name}
              </span>
              <ArrowRight className="h-4 w-4 opacity-40" strokeWidth={1.5} />
            </NavLink>
          ))}

          <div className="space-y-3 py-7">
            <a
              href={telUrl}
              className="flex items-center gap-3 text-[15px] text-cream-300/85 hover:text-cream"
            >
              <Phone className="h-4 w-4 text-moss" strokeWidth={1.5} />
              {companyConfig.phoneDisplay}
            </a>
            <a
              href={`mailto:${companyConfig.email}`}
              className="flex items-center gap-3 break-all text-[15px] text-cream-300/85 hover:text-cream"
            >
              <Mail className="h-4 w-4 text-moss" strokeWidth={1.5} />
              {companyConfig.email}
            </a>
            <p className="flex items-center gap-3 text-[15px] text-cream-300/85">
              <MapPin className="h-4 w-4 text-moss" strokeWidth={1.5} />
              {companyConfig.city}, {companyConfig.country}
            </p>
          </div>
        </nav>

        <div className="space-y-2.5 border-t border-navy-line px-5 pb-8 pt-5">
          <Link
            to="/quote"
            onClick={onClose}
            className="tap flex w-full items-center justify-center gap-2 rounded-sm bg-moss px-5 text-[15px] font-medium text-white"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
          </Link>
          <a
            href={getWhatsAppUrl(whatsappMessages.general)}
            target="_blank"
            rel="noreferrer"
            className="tap flex w-full items-center justify-center gap-2 rounded-sm border border-white/20 px-5 text-[15px] font-medium text-cream"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};
