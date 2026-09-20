import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, Menu, Phone, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { SearchModal } from './SearchModal';
import { companyConfig } from '../../config/company';
import { telUrl } from '../../utils/whatsapp';
import { cn } from '../../utils/cn';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Products', path: '/products' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Ctrl/Cmd + K opens search from anywhere.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-cream focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-navy"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-40">
        {/* Utility strip — contact details always one glance away on desktop. */}
        <div
          className={cn(
            'hidden overflow-hidden border-b border-navy-line bg-navy-deep transition-all duration-300 ease-engineered lg:block',
            scrolled ? 'max-h-0 border-b-0 opacity-0' : 'max-h-12 opacity-100'
          )}
        >
          <div className="shell flex h-10 items-center justify-between font-mono text-[11px] uppercase tracking-[0.12em] text-cream-300/65">
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-bronze" strokeWidth={1.5} />
              {companyConfig.serviceAreas.join(' · ')}
            </span>
            <span className="flex items-center gap-6">
              <span>{companyConfig.businessHours.weekdays} Mon–Fri</span>
              <a href={telUrl} className="flex items-center gap-2 text-cream hover:text-moss-bright">
                <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
                {companyConfig.phoneDisplay}
              </a>
            </span>
          </div>
        </div>

        <div
          className={cn(
            'border-b bg-navy transition-all duration-300 ease-engineered',
            scrolled
              ? 'border-navy-line/90 shadow-[0_10px_30px_-24px_rgba(0,0,0,0.9)]'
              : 'border-navy-line/60'
          )}
        >
          <div
            className={cn(
              'shell flex items-center justify-between transition-all duration-300 ease-engineered',
              scrolled ? 'h-[62px]' : 'h-[74px] lg:h-[82px]'
            )}
          >
            <Logo tone="dark" />

            <nav className="hidden items-center md:flex" aria-label="Main">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    cn(
                      'relative px-3.5 py-2 text-[14px] font-medium transition-colors duration-200 lg:px-4',
                      isActive ? 'text-cream' : 'text-cream-300/70 hover:text-cream'
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      <span
                        className={cn(
                          'absolute inset-x-3.5 -bottom-px h-[2px] bg-bronze transition-opacity duration-200 lg:inset-x-4',
                          isActive ? 'opacity-100' : 'opacity-0'
                        )}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search the site"
                title="Search (Ctrl + K)"
                className="tap flex w-11 items-center justify-center text-cream-300/75 transition-colors hover:text-cream"
              >
                <Search className="h-[18px] w-[18px]" strokeWidth={1.75} />
              </button>

              <Link
                to="/quote"
                className="tap hidden items-center rounded-sm border border-moss bg-moss px-5 text-[14px] font-medium text-white transition-colors hover:border-moss-dark hover:bg-moss-dark sm:inline-flex"
              >
                Request a Quote
              </Link>

              <Link
                to="/quote"
                className="tap inline-flex items-center rounded-sm border border-moss bg-moss px-4 text-[14px] font-medium text-white sm:hidden"
              >
                Quote
              </Link>

              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={menuOpen}
                className="tap -mr-2 flex w-11 items-center justify-center text-cream md:hidden"
              >
                <Menu className="h-6 w-6" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} links={navLinks} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};
