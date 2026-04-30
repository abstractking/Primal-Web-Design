import { Link } from 'wouter';
import { STONE_COLLECTION_PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function GenuineStoneCollectionPage() {
  return (
    <main>
      <div className="page-width">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/pages/crystals">Crystals</Link>
          <span>/</span>
          Genuine Stone Collection
        </div>
      </div>
      <section className="stone-page">
        <div className="page-width">
          <h1 className="stone-page__title">Genuine Stone Collection</h1>
          <div className="product-grid">
            {STONE_COLLECTION_PRODUCTS.map(product => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
