import { Link } from 'wouter';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function CollectionsPage() {
  return (
    <main>
      <div className="page-width">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          All Products
        </div>
      </div>
      <section className="product-grid-section">
        <div className="page-width">
          <h1 style={{ fontSize: '2.8rem', fontWeight: 400, marginBottom: '3.2rem', textAlign: 'center' }}>
            All Products
          </h1>
          <div className="product-grid">
            {PRODUCTS.map(product => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
