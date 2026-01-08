import { useEffect, useState } from 'react';
import Loader from '../ui/Loader';
import Footer from './Footer';
import Header from './Header';
import './PageLayout.css';

export default function PageLayout({ children, className = '' }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 3.5 seconds (matches animation duration)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className="page-layout">
        <Header />
        <main className={`page-content ${className}`}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

