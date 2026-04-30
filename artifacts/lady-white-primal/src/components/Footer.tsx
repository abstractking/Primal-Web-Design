import { useState } from 'react';
import { Link } from 'wouter';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link href="/">
              <img
                src={`${BASE}/images/lady-white-primal-skin-94b74e45.png`}
                alt="Lady White Primal Skin"
                style={{ height: '5rem', width: 'auto', marginBottom: '1.6rem' }}
              />
            </Link>
            <h3>Ancient Luxury Skin Care For Everyone!</h3>
            <p>To ensure quality, we use certified organic hand picked ingredients for all balms, butters and oils.</p>
            <p>Lady White Primal stands on originality and the cultivated primal force of nature that helps us to thrive as sophisticated beasts.</p>
            <p>We believe that all skin types will greatly benefit from our products because of their natural sunscreen abilities, skin tightening, and moisturizing effects.</p>
            <p>Thank you for shopping with us!</p>
            <div className="site-footer__social">
              <a
                href="https://www.facebook.com/profile.php?id=100094694523410&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
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
                aria-label="Instagram"
              >
                <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M9 1.62c2.4 0 2.68.01 3.62.05.87.04 1.35.18 1.66.3.42.16.72.36 1.03.67.31.31.51.61.67 1.03.12.31.26.79.3 1.66.04.94.05 1.22.05 3.62s-.01 2.68-.05 3.62c-.04.87-.18 1.35-.3 1.66-.16.42-.36.72-.67 1.03a2.76 2.76 0 01-1.03.67c-.31.12-.79.26-1.66.3-.94.04-1.22.05-3.62.05s-2.68-.01-3.62-.05c-.87-.04-1.35-.18-1.66-.3a2.76 2.76 0 01-1.03-.67 2.76 2.76 0 01-.67-1.03c-.12-.31-.26-.79-.3-1.66C1.63 11.68 1.62 11.4 1.62 9s.01-2.68.05-3.62c.04-.87.18-1.35.3-1.66.16-.42.36-.72.67-1.03a2.76 2.76 0 011.03-.67c.31-.12.79-.26 1.66-.3.94-.04 1.22-.05 3.62-.05zM9 0C6.56 0 6.25.01 5.3.05 4.35.09 3.7.24 3.13.45a4.38 4.38 0 00-1.58 1.03A4.38 4.38 0 00.52 3.06C.3 3.63.16 4.28.12 5.23.08 6.18 0 6.5 0 9c0 2.5.01 2.82.05 3.77.04.95.19 1.6.4 2.17a4.38 4.38 0 001.03 1.58c.46.46.99.8 1.58 1.03.57.22 1.22.36 2.17.4C6.18 17.99 6.5 18 9 18c2.5 0 2.82-.01 3.77-.05.95-.04 1.6-.19 2.17-.4a4.38 4.38 0 001.58-1.03 4.38 4.38 0 001.03-1.58c.22-.57.36-1.22.4-2.17.04-.95.05-1.27.05-3.77 0-2.5-.01-2.82-.05-3.77-.04-.95-.19-1.6-.4-2.17a4.38 4.38 0 00-1.03-1.58A4.38 4.38 0 0014.94.45C14.37.23 13.72.09 12.77.05 11.82.01 11.5 0 9 0zm0 4.38a4.62 4.62 0 100 9.24 4.62 4.62 0 000-9.24zM9 12a3 3 0 110-6 3 3 0 010 6zm4.8-8.59a1.08 1.08 0 100 2.16 1.08 1.08 0 000-2.16z" fill="currentColor" fillRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div className="site-footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/collections">Shop All</Link></li>
              <li><Link href="/pages/crystals">Crystals</Link></li>
              <li><Link href="/collections/genuine-stone-collection">Genuine Stone Collection</Link></li>
            </ul>
          </div>

          <div className="site-footer__col">
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100094694523410" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ladywhiteprimal" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__newsletter">
          <h4>Subscribe to our emails</h4>
          {submitted ? (
            <p style={{ fontSize: '1.4rem', marginTop: '0.8rem' }}>Thank you for subscribing!</p>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
              <button type="submit">Subscribe</button>
            </form>
          )}
        </div>

        <div className="site-footer__bottom">
          <p>© 2026, Lady White Primal Skin</p>
          <div className="site-footer__payments">
            {['American Express', 'Apple Pay', 'Discover', 'Google Pay', 'Mastercard', 'PayPal', 'Visa'].map(p => (
              <span key={p} className="payment-icon">{p}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '1.6rem' }}>
            <a
              href="https://www.facebook.com/profile.php?id=100094694523410"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '1.2rem', color: 'rgba(var(--color-foreground), 0.6)' }}
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/ladywhiteprimal"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '1.2rem', color: 'rgba(var(--color-foreground), 0.6)' }}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
