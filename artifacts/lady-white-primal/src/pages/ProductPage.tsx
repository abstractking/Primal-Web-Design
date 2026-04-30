import { useState } from 'react';
import { Link, useParams } from 'wouter';
import { findProduct, PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function ProductPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const product = findProduct(slug);
  const [activeImg, setActiveImg] = useState(0);

  if (!product) {
    return (
      <div className="not-found">
        <h1>Product not found</h1>
        <p>The product you're looking for doesn't exist.</p>
        <Link href="/collections" className="btn btn--primary" style={{ display: 'inline-block', width: 'auto' }}>
          Shop All Products
        </Link>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(p => p.slug !== slug).slice(0, 4);

  const descParagraphs = product.description.split(/\n+/).filter(Boolean);

  return (
    <main>
      <div className="page-width">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/collections">Products</Link>
          <span>/</span>
          {product.title}
        </div>
      </div>

      <section className="product-page">
        <div className="page-width">
          <div className="product-page__inner">
            {/* Gallery */}
            <div className="product-page__gallery">
              <div className="product-page__main-image">
                {product.images[activeImg] ? (
                  <img
                    src={`${BASE}${product.images[activeImg]}`}
                    alt={product.title}
                  />
                ) : (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'rgba(18,18,18,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    aspectRatio: '1'
                  }}>
                    <span style={{ opacity: 0.4, fontSize: '1.4rem' }}>No image available</span>
                  </div>
                )}
              </div>
              {product.images.length > 1 && (
                <div className="product-page__thumbnails">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      className={`product-page__thumb ${i === activeImg ? 'active' : ''}`}
                      onClick={() => setActiveImg(i)}
                      aria-label={`View image ${i + 1}`}
                    >
                      <img src={`${BASE}${img}`} alt={`${product.title} ${i + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="product-page__info">
              <h1 className="product-page__title">{product.title}</h1>

              <div className="product-page__price">
                <span className="product-page__price-label">Regular price</span>
                <strong>{product.price} USD</strong>
              </div>

              <div className="product-page__description">
                {descParagraphs.length > 1 ? (
                  descParagraphs.map((para, i) => <p key={i}>{para}</p>)
                ) : (
                  <p>{product.description}</p>
                )}
              </div>

              <div className="product-page__cta">
                <button className="btn btn--primary" onClick={() => alert('Add to cart — this is a static demo site.')}>
                  Add to cart
                </button>
                <button className="btn btn--secondary" onClick={() => alert('Buy now — this is a static demo site.')}>
                  Buy it now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews stub */}
      <section style={{ padding: '0 2rem 4rem' }}>
        <div className="page-width">
          <div className="reviews-section">
            <h3>Customer Reviews</h3>
            <div className="reviews-summary">
              <div className="reviews-summary__score">5.0</div>
              <div className="reviews-summary__meta">
                <div className="review-stars">★★★★★</div>
                <div className="review-count">Based on customer reviews</div>
              </div>
            </div>
            <p style={{ fontSize: '1.3rem', opacity: 0.7 }}>
              Our customers love this product! Rated 5.0/5 across all reviews.
            </p>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="product-grid-section">
          <div className="page-width">
            <h2 style={{ fontSize: '2rem', fontWeight: 400, marginBottom: '2.4rem', textAlign: 'center' }}>
              You may also like
            </h2>
            <div className="product-grid">
              {relatedProducts.map(rp => (
                <ProductCard key={rp.slug} product={rp} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
