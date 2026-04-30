import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  return (
    <main>
      <section className="product-grid-section">
        <div className="page-width">
          <div className="product-grid">
            {PRODUCTS.map(product => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '3.2rem 2rem' }}>
        <div className="reviews-bar" style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div className="reviews-bar__stars">★★★★★</div>
          <div className="reviews-bar__text">Customers rate us 5.0/5 based on 30 reviews.</div>
        </div>
      </section>
    </main>
  );
}
