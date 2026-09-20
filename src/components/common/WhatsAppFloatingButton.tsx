import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';
import { companyConfig } from '../../config/company';
import { cn } from '../../utils/cn';

/** Pages that already lead with their own WhatsApp action. */
const hiddenOn = ['/quote', '/contact'];

/**
 * Persistent WhatsApp action. It appears once the visitor has scrolled
 * past the hero so it never competes with the first screen, stays clear of
 * the iOS home indicator, and shrinks to an icon on phones so it cannot sit
 * on top of the content underneath it.
 */
export const WhatsAppFloatingButton: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (hiddenOn.includes(pathname)) return null;

  return (
    <a
      href={getWhatsAppUrl(whatsappMessages.general)}
      target="_blank"
      rel="noreferrer"
      aria-label={`Chat with an engineer on WhatsApp — ${companyConfig.whatsappDisplay}`}
      className={cn(
        'fixed right-4 z-30 inline-flex items-center justify-center gap-2.5 rounded-sm bg-[#1FA855] text-[14px] font-medium text-white shadow-raise',
        'h-12 w-12 transition-all duration-300 ease-engineered hover:bg-[#178443]',
        'sm:right-6 sm:w-auto sm:px-4',
        'bottom-[calc(1rem+env(safe-area-inset-bottom))] sm:bottom-6',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      )}
    >
      <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={1.75} />
      <span className="hidden sm:inline">Chat with an engineer</span>
    </a>
  );
};
