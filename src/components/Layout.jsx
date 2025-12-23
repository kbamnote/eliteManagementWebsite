import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  const location = useLocation();

  // Scroll to top on navigation
  useEffect(() => {
    // Using document.documentElement.scrollTop for Lenis compatibility
    document.documentElement.scrollTop = 0;
    // Also reset body scrollTop for completeness
    document.body.scrollTop = 0;
  }, [location]);

  return (
    <div className="min-h-screen bg-primary text-primary">
      <Navbar />
      
      {/* Main Content with top padding to account for fixed navbar */}
      <main className=" h-full">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}