import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page not found.</p>
      <Link href="/" className="btn btn--primary" style={{ display: 'inline-block', width: 'auto' }}>
        Back to Home
      </Link>
    </div>
  );
}
