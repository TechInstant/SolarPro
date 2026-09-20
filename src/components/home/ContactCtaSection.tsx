import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyConfig } from '../../config/company';
import { getWhatsAppUrl, whatsappMessages, telUrl } from '../../utils/whatsapp';

export const ContactCtaSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello SolarPro Engineering,\n\nName: ${formData.fullName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service || 'General'}\nMessage: ${formData.message}`;
    window.open(getWhatsAppUrl(text), '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-navy-deep py-16 lg:py-20 text-cream border-t border-navy-line">
      <div className="shell relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Column 1: Get In Touch (4 cols) */}
          <div className="lg:col-span-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-cream">
              Get In Touch
            </h2>
            <p className="mt-2 text-[13.5px] leading-relaxed text-cream-300/75">
              Have a question or need a quote? We're here to help. Reach out through any of the channels below.
            </p>

            <div className="mt-6 space-y-4">
              {/* Phone */}
              <div className="flex items-center justify-between py-2 border-b border-navy-line/60">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-moss/20 text-moss-bright">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="text-[13.5px] font-medium text-cream">{companyConfig.phoneDisplay}</span>
                </div>
                <a href={telUrl} className="text-[12px] font-semibold text-moss-bright hover:underline">
                  Call Now
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center justify-between py-2 border-b border-navy-line/60">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-moss/20 text-moss-bright">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <span className="text-[13.5px] font-medium text-cream">{companyConfig.whatsappDisplay}</span>
                </div>
                <a
                  href={getWhatsAppUrl(whatsappMessages.general)}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[12px] font-semibold text-moss-bright hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between py-2 border-b border-navy-line/60">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-moss/20 text-moss-bright">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="text-[13px] font-medium text-cream truncate max-w-[150px]">{companyConfig.email}</span>
                </div>
                <a href={`mailto:${companyConfig.email}`} className="text-[12px] font-semibold text-moss-bright hover:underline shrink-0">
                  Send Email
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center justify-between py-2 border-b border-navy-line/60">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-moss/20 text-moss-bright">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="text-[13.5px] font-medium text-cream">{companyConfig.city}, {companyConfig.country}</span>
                </div>
                <Link to="/contact" className="text-[12px] font-semibold text-moss-bright hover:underline">
                  View on Maps
                </Link>
              </div>

              {/* Hours */}
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-moss/20 text-moss-bright">
                    <Clock className="h-4 w-4" />
                  </div>
                  <span className="text-[13px] font-medium text-cream">Mon - Sat: 8:00am - 6:00pm</span>
                </div>
                <span className="text-[12px] text-cream-300/50">
                  Working Hours
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Send a Message (5 cols) */}
          <div className="lg:col-span-5 bg-navy/70 border border-navy-line p-6 rounded-xl shadow-xl">
            <h3 className="text-base font-bold text-cream mb-4">Send a Message</h3>

            {submitted ? (
              <div className="rounded-lg bg-moss/20 border border-moss/40 p-5 text-center text-cream">
                <p className="font-semibold text-moss-bright">Thank you for your message!</p>
                <p className="text-xs text-cream-300/80 mt-1">We will respond to your request shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs text-moss-bright underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium uppercase tracking-wider text-cream-300/70 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full rounded-md border border-navy-line bg-navy-deep px-3 py-2 text-[13px] text-cream placeholder:text-cream-300/30 focus:border-moss focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium uppercase tracking-wider text-cream-300/70 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-md border border-navy-line bg-navy-deep px-3 py-2 text-[13px] text-cream placeholder:text-cream-300/30 focus:border-moss focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium uppercase tracking-wider text-cream-300/70 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-md border border-navy-line bg-navy-deep px-3 py-2 text-[13px] text-cream placeholder:text-cream-300/30 focus:border-moss focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium uppercase tracking-wider text-cream-300/70 mb-1">
                      Service Required *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-md border border-navy-line bg-navy-deep px-3 py-2 text-[13px] text-cream focus:border-moss focus:outline-none"
                    >
                      <option value="">Select Service</option>
                      <option value="Solar Installation">Solar Installation</option>
                      <option value="Inverter Installation">Inverter Installation</option>
                      <option value="Battery Storage">Battery Storage</option>
                      <option value="Maintenance & Repair">Maintenance & Repair</option>
                      <option value="Equipment Purchase">Equipment Purchase</option>
                      <option value="Consultation">Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-cream-300/70 mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-md border border-navy-line bg-navy-deep px-3 py-2 text-[13px] text-cream placeholder:text-cream-300/30 focus:border-moss focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-moss hover:bg-moss-dark px-5 py-2.5 text-[13.5px] font-semibold text-white transition-colors shadow-sm"
                >
                  Send Request
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </button>
              </form>
            )}
          </div>

          {/* Column 3: Quote & WhatsApp CTA Cards (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            {/* Request a Quote Card */}
            <div className="relative overflow-hidden rounded-xl border border-navy-line bg-navy p-5 shadow-lg">
              <div
                className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none"
                style={{ backgroundImage: `url(/images/hero/hero-installation.jpg)` }}
              />
              <div className="relative z-10">
                <h4 className="text-[15px] font-bold text-cream">Request a Quote</h4>
                <p className="mt-1.5 text-[12px] text-cream-300/80 leading-snug">
                  Get a customized quote for your solar needs.
                </p>
                <Link
                  to="/quote"
                  className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-moss hover:bg-moss-dark px-3.5 py-2 text-xs font-semibold text-white transition-colors"
                >
                  Fill Quote Form
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                </Link>
              </div>
            </div>

            {/* Chat With an Engineer Card */}
            <a
              href={getWhatsAppUrl(whatsappMessages.consultation)}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-xl border border-moss/60 bg-navy/90 p-4 shadow-lg transition-all duration-200 hover:border-moss hover:bg-navy"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-moss/20 text-moss-bright shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-[13.5px] font-bold text-cream leading-tight">Chat With an Engineer</h4>
                  <p className="text-[11.5px] text-cream-300/70 mt-0.5 leading-tight">Get quick answers and expert advice.</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-moss-bright transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

