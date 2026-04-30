import { Switch, Route, Router as WouterRouter } from 'wouter';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CollectionsPage from './pages/CollectionsPage';
import ProductPage from './pages/ProductPage';
import CrystalsPage from './pages/CrystalsPage';
import GenuineStoneCollectionPage from './pages/GenuineStoneCollectionPage';

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page not found.</p>
      <a href="/" className="btn btn--primary" style={{ display: 'inline-block', width: 'auto' }}>
        Back to Home
      </a>
    </div>
  );
}

function Router() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/collections" component={CollectionsPage} />
        <Route path="/collections/frontpage" component={CollectionsPage} />
        <Route path="/collections/genuine-stone-collection" component={GenuineStoneCollectionPage} />
        <Route path="/products/:slug" component={ProductPage} />
        <Route path="/pages/crystals" component={CrystalsPage} />
        <Route path="/pages/lady-white-primal-skin-care" component={CrystalsPage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Router />
    </WouterRouter>
  );
}
