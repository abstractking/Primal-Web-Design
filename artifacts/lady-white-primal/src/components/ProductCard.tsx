import { Link } from 'wouter';
import type { Product } from '../data/products';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const primaryImg = product.images[0];
  const secondaryImg = product.images[1];

  return (
    <div className="product-card">
      <Link href={`/products/${product.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="product-card__image-wrapper">
          {primaryImg ? (
            <img
              src={`${BASE}${primaryImg}`}
              alt={product.title}
              loading="lazy"
            />
          ) : (
            <div style={{ width: '100%', height: '100%', background: 'rgba(18,18,18,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '1.2rem', opacity: 0.4 }}>No image</span>
            </div>
          )}
          {secondaryImg && (
            <img
              className="product-card__secondary-img"
              src={`${BASE}${secondaryImg}`}
              alt={product.title}
              loading="lazy"
            />
          )}
        </div>
        <div className="product-card__info">
          <div className="product-card__title">{product.title}</div>
          <div className="product-card__price">
            <span style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginRight: '0.4rem', opacity: 0.7 }}>From</span>
            {product.price} USD
          </div>
        </div>
      </Link>
    </div>
  );
}
