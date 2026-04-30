import { Link } from 'wouter';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function CrystalsPage() {
  return (
    <main>
      <div className="page-width">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          Crystals
        </div>
      </div>

      <section className="page-content">
        <div className="page-width">
          <h1 className="page-title">Crystals</h1>

          <div className="crystals-items">
            {/* Gaia's Vibe */}
            <div className="crystal-item">
              <div className="crystal-item__image">
                <img
                  src={`${BASE}/images/spider-turquoise-in-raw-f-bafc15e1.png`}
                  alt="Raw Turquoise Stone - Gaia's Vibe"
                  loading="lazy"
                />
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.8rem', opacity: 0.7 }}>
                  Raw Turquoise Stone
                </div>
                <h2 className="crystal-item__name">Gaia's Vibe</h2>
                <div className="crystal-item__desc">
                  <p>
                    This turquoise was mined in Arizona and is in pure form. This stone would be perfect to wire wrap on your own, make a pendant, or simply carry around for emotional balance and reconnecting with your purpose.
                  </p>
                </div>
                <div className="crystal-cta">
                  <Link href="/collections/genuine-stone-collection" className="btn btn--primary" style={{ width: 'auto', display: 'inline-flex' }}>
                    Shop Collection
                  </Link>
                </div>
              </div>
            </div>

            {/* Charlotte's Web */}
            <div className="crystal-item">
              <div className="crystal-item__image">
                <img
                  src={`${BASE}/images/spider-web-turquoise-d3a572f0.png`}
                  alt="Spider Web Turquoise - Charlotte's Web"
                  loading="lazy"
                />
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.8rem', opacity: 0.7 }}>
                  Raw Spider Turquoise
                </div>
                <h2 className="crystal-item__name">Charlotte's Web</h2>
                <div className="crystal-item__desc">
                  <p>
                    Raw Spider Turquoise will weave fortune into your world!
                  </p>
                  <p>
                    <strong>Turquoise</strong>, with its beautiful blue hue reminiscent of the ocean, is known for its ability to cleanse negative energy, bring good fortune, and enable truthful communication by connecting to the throat chakra.
                  </p>
                  <h4>Healing Properties:</h4>
                  <p>
                    This ancient healing stone is revered for its physical healing properties, especially in alleviating respiratory issues, strengthening the immune system, and soothing inflammatory conditions.
                  </p>
                  <h4>Protection:</h4>
                  <p>
                    By aiding in clear communication and promoting self-awareness, Turquoise provides a layer of protection against misunderstandings and negative energy, fostering a sense of peace and serenity.
                  </p>
                  <h4>Usage:</h4>
                  <p>
                    Turquoise can be worn as jewelry, placed in homes or offices to attract wealth and positive energy, or used in Feng Shui practices, making it a versatile stone for daily use.
                  </p>
                </div>
                <div className="crystal-cta">
                  <Link href="/collections/genuine-stone-collection" className="btn btn--primary" style={{ width: 'auto', display: 'inline-flex' }}>
                    Shop Collection
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Collections section */}
          <div style={{ borderTop: '1px solid rgba(18,18,18,0.1)', paddingTop: '4rem', marginTop: '2rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 400, marginBottom: '2.4rem', textAlign: 'center' }}>
              Collections
            </h2>
            <div className="collections-grid" style={{ gridTemplateColumns: 'repeat(1, 1fr)', maxWidth: '40rem', margin: '0 auto' }}>
              <Link href="/collections/genuine-stone-collection" className="collection-card">
                <div className="collection-card__image">
                  <img
                    src={`${BASE}/images/spider-web-turquoise-d3a572f0.png`}
                    alt="Genuine Stone Collection"
                    loading="lazy"
                  />
                </div>
                <div className="collection-card__title">Genuine Stone Collection</div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
