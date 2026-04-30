import { useState } from 'react';
import { Link, useLocation } from 'wouter';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { label: 'Home page', href: '/collections' },
    { label: 'Crystals', href: '/pages/crystals' },
  ];

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <button
            className="mobile-menu-btn"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <svg viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z" fill="currentColor" />
            </svg>
          </button>

          <div className="site-header__logo">
            <Link href="/">
              <img
                src={`${BASE}/images/lady-white-primal-skin-94b74e45.png`}
                alt="Lady White Primal Skin"
                style={{ height: '5rem', width: 'auto' }}
              />
            </Link>
          </div>

          <nav className="site-header__nav">
            <ul>
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-header__icons">
            <a
              href="https://www.facebook.com/profile.php?id=100094694523410"
              target="_blank"
              rel="noopener noreferrer"
              className="site-header__icon"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.42.61c.27 0 .5.1.69.28.19.2.28.42.28.7v15.44c0 .27-.1.5-.28.69a.94.94 0 01-.7.28h-4.39v-6.7h2.25l.31-2.65h-2.56v-1.7c0-.4.1-.72.28-.93.18-.2.5-.32 1-.32h1.37V3a17.94 17.94 0 00-2-.1c-1.01 0-1.82.3-2.4.9-.59.6-.88 1.45-.88 2.54v2h-2.3v2.64h2.3V18H1.59c-.28 0-.5-.1-.7-.28a.95.95 0 01-.28-.7V1.6c0-.27.1-.5.28-.69.2-.19.42-.29.7-.29h14.83z" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/ladywhiteprimal"
              target="_blank"
              rel="noopener noreferrer"
              className="site-header__icon"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M9 1.62c2.4 0 2.68.01 3.62.05.87.04 1.35.18 1.66.3.42.16.72.36 1.03.67.31.31.51.61.67 1.03.12.31.26.79.3 1.66.04.94.05 1.22.05 3.62s-.01 2.68-.05 3.62c-.04.87-.18 1.35-.3 1.66-.16.42-.36.72-.67 1.03a2.76 2.76 0 01-1.03.67c-.31.12-.79.26-1.66.3-.94.04-1.22.05-3.62.05s-2.68-.01-3.62-.05c-.87-.04-1.35-.18-1.66-.3a2.76 2.76 0 01-1.03-.67 2.76 2.76 0 01-.67-1.03c-.12-.31-.26-.79-.3-1.66C1.63 11.68 1.62 11.4 1.62 9s.01-2.68.05-3.62c.04-.87.18-1.35.3-1.66.16-.42.36-.72.67-1.03a2.76 2.76 0 011.03-.67c.31-.12.79-.26 1.66-.3.94-.04 1.22-.05 3.62-.05zM9 0C6.56 0 6.25.01 5.3.05 4.35.09 3.7.24 3.13.45a4.38 4.38 0 00-1.58 1.03A4.38 4.38 0 00.52 3.06C.3 3.63.16 4.28.12 5.23.08 6.18 0 6.5 0 9c0 2.5.01 2.82.05 3.77.04.95.19 1.6.4 2.17a4.38 4.38 0 001.03 1.58c.46.46.99.8 1.58 1.03.57.22 1.22.36 2.17.4C6.18 17.99 6.5 18 9 18c2.5 0 2.82-.01 3.77-.05.95-.04 1.6-.19 2.17-.4a4.38 4.38 0 001.58-1.03 4.38 4.38 0 001.03-1.58c.22-.57.36-1.22.4-2.17.04-.95.05-1.27.05-3.77 0-2.5-.01-2.82-.05-3.77-.04-.95-.19-1.6-.4-2.17a4.38 4.38 0 00-1.03-1.58A4.38 4.38 0 0014.94.45C14.37.23 13.72.09 12.77.05 11.82.01 11.5 0 9 0zm0 4.38a4.62 4.62 0 100 9.24 4.62 4.62 0 000-9.24zM9 12a3 3 0 110-6 3 3 0 010 6zm4.8-8.59a1.08 1.08 0 100 2.16 1.08 1.08 0 000-2.16z" fill="currentColor" fillRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`drawer-overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer__close">
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <svg viewBox="0 0 18 17" fill="none" width="18" height="17" xmlns="http://www.w3.org/2000/svg">
              <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor" />
            </svg>
          </button>
        </div>
        <nav className="mobile-drawer__nav">
          <ul>
            {navLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div style={{ marginTop: '3.2rem', display: 'flex', gap: '1.6rem' }}>
          <a
            href="https://www.facebook.com/profile.php?id=100094694523410"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.4rem' }}
          >
            <svg viewBox="0 0 18 18" width="18" height="18" fill="currentColor">
              <path d="M16.42.61c.27 0 .5.1.69.28.19.2.28.42.28.7v15.44c0 .27-.1.5-.28.69a.94.94 0 01-.7.28h-4.39v-6.7h2.25l.31-2.65h-2.56v-1.7c0-.4.1-.72.28-.93.18-.2.5-.32 1-.32h1.37V3a17.94 17.94 0 00-2-.1c-1.01 0-1.82.3-2.4.9-.59.6-.88 1.45-.88 2.54v2h-2.3v2.64h2.3V18H1.59c-.28 0-.5-.1-.7-.28a.95.95 0 01-.28-.7V1.6c0-.27.1-.5.28-.69.2-.19.42-.29.7-.29h14.83z" />
            </svg>
            Facebook
          </a>
          <a
            href="https://www.instagram.com/ladywhiteprimal"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.4rem' }}
          >
            <svg viewBox="0 0 18 18" width="18" height="18" fill="currentColor">
              <path clipRule="evenodd" d="M9 1.62c2.4 0 2.68.01 3.62.05.87.04 1.35.18 1.66.3.42.16.72.36 1.03.67.31.31.51.61.67 1.03.12.31.26.79.3 1.66.04.94.05 1.22.05 3.62s-.01 2.68-.05 3.62c-.04.87-.18 1.35-.3 1.66-.16.42-.36.72-.67 1.03a2.76 2.76 0 01-1.03.67c-.31.12-.79.26-1.66.3-.94.04-1.22.05-3.62.05s-2.68-.01-3.62-.05c-.87-.04-1.35-.18-1.66-.3a2.76 2.76 0 01-1.03-.67 2.76 2.76 0 01-.67-1.03c-.12-.31-.26-.79-.3-1.66C1.63 11.68 1.62 11.4 1.62 9s.01-2.68.05-3.62c.04-.87.18-1.35.3-1.66.16-.42.36-.72.67-1.03a2.76 2.76 0 011.03-.67c.31-.12.79-.26 1.66-.3.94-.04 1.22-.05 3.62-.05zM9 0C6.56 0 6.25.01 5.3.05 4.35.09 3.7.24 3.13.45a4.38 4.38 0 00-1.58 1.03A4.38 4.38 0 00.52 3.06C.3 3.63.16 4.28.12 5.23.08 6.18 0 6.5 0 9c0 2.5.01 2.82.05 3.77.04.95.19 1.6.4 2.17a4.38 4.38 0 001.03 1.58c.46.46.99.8 1.58 1.03.57.22 1.22.36 2.17.4C6.18 17.99 6.5 18 9 18c2.5 0 2.82-.01 3.77-.05.95-.04 1.6-.19 2.17-.4a4.38 4.38 0 001.58-1.03 4.38 4.38 0 001.03-1.58c.22-.57.36-1.22.4-2.17.04-.95.05-1.27.05-3.77 0-2.5-.01-2.82-.05-3.77-.04-.95-.19-1.6-.4-2.17a4.38 4.38 0 00-1.03-1.58A4.38 4.38 0 0014.94.45C14.37.23 13.72.09 12.77.05 11.82.01 11.5 0 9 0zm0 4.38a4.62 4.62 0 100 9.24 4.62 4.62 0 000-9.24zM9 12a3 3 0 110-6 3 3 0 010 6zm4.8-8.59a1.08 1.08 0 100 2.16 1.08 1.08 0 000-2.16z" fillRule="evenodd" />
            </svg>
            Instagram
          </a>
        </div>
      </div>
    </>
  );
}
