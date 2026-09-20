import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, Menu } from 'lucide-react';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { SearchModal } from './SearchModal';
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
        <div
          className={cn(
            'bg-navy/95 backdrop-blur-md border-b border-navy-line/60 transition-all duration-300',
            scrolled ? 'shadow-lg py-2.5' : 'py-3.5 lg:py-4'
          )}
        >
          <div className="shell flex items-center justify-between">
            <Logo tone="dark" />

            <nav className="hidden items-center md:flex space-x-1 lg:space-x-2" aria-label="Main">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    cn(
                      'px-3.5 py-1.5 text-[14px] font-medium transition-colors duration-200',
                      isActive ? 'text-moss-bright font-semibold' : 'text-cream-300/80 hover:text-cream'
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search the site"
                title="Search (Ctrl + K)"
                className="flex h-9 w-9 items-center justify-center text-cream-300/75 transition-colors hover:text-cream"
              >
                <Search className="h-[18px] w-[18px]" strokeWidth={1.75} />
              </button>

              <Link
                to="/quote"
                className="hidden items-center rounded-md bg-moss hover:bg-moss-dark px-4 py-2 text-[13.5px] font-medium text-white transition-colors sm:inline-flex shadow-sm"
              >
                Request a Quote
              </Link>

              <Link
                to="/quote"
                className="inline-flex items-center rounded-md bg-moss hover:bg-moss-dark px-3 py-1.5 text-[13px] font-medium text-white sm:hidden"
              >
                Quote
              </Link>

              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={menuOpen}
                className="flex h-9 w-9 items-center justify-center text-cream md:hidden"
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

