import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';
import { companyConfig } from '../../config/company';

/**
 * Persistent floating WhatsApp action on all pages.
 */
export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center group">
      <a
        href={getWhatsAppUrl(whatsappMessages.general)}
        target="_blank"
        rel="noreferrer"
        aria-label={`Chat with an engineer on WhatsApp — ${companyConfig.whatsappDisplay}`}
        className="relative flex items-center justify-center h-14 w-14 sm:h-14 sm:w-auto sm:px-4 sm:gap-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {/* Subtle pulsing ping effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none -z-10" />

        <MessageCircle className="h-7 w-7 sm:h-6 sm:w-6 shrink-0 fill-white text-[#25D366]" />
        <span className="hidden sm:inline font-semibold text-[13.5px] whitespace-nowrap tracking-wide">
          Chat With Engineer
        </span>
      </a>
    </div>
  );
};

