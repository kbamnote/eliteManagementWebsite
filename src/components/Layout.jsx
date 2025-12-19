import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

import { 
  HomeIcon, 
  BookOpenIcon, 
  UserIcon, 
  PhoneIcon, 
  BriefcaseIcon, 
  NewspaperIcon, 
  ChartBarIcon,
  Menu,
  X
} from 'lucide-react';
import logo from '../assets/logo-em1.png';
import Footer from './Footer';

const navItems = [
  { name: 'Home', path: '/', icon: HomeIcon },
  { name: 'About', path: '/about', icon: UserIcon },
  { name: 'Courses', path: '/courses', icon: BookOpenIcon },
  { name: 'Career', path: '/career-counseling', icon: BriefcaseIcon },
  { name: 'Placement', path: '/placements', icon: ChartBarIcon },
  { name: 'Blogs', path: '/blogs', icon: NewspaperIcon },
  { name: 'Contact', path: '/contact', icon: PhoneIcon },
];

export default function Layout({ children }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar and scroll to top on navigation
  useEffect(() => {
    // Scroll to top on navigation
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  return (
    <div className="min-h-screen bg-primary text-primary">
      {/* Enhanced Navigation */}
      <nav 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-secondary/95 backdrop-blur-md shadow-subtle py-2' : 'bg-secondary py-4 shadow-subtle'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/">
                <motion.div 
                  className="flex-shrink-0 w-18 h-18 overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={logo} alt="Logo" className="w-full h-full object-cover" />
                </motion.div>
              </Link>
              
              <motion.h1 
                className="ml-0 text-lg font-black text-accent hover:text-dark transition-all duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              ><a href="/">Elite Management</a>
                
              </motion.h1>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`px-4 py-2 text-sm font-bold flex items-center transition-all duration-300 rounded-xl ${
                        location.pathname === item.path
                          ? 'text-white bg-accent shadow-subtle'
                          : 'text-primary hover:text-accent hover:bg-white hover:shadow-subtle'
                      }`}
                    >
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-accent hover:text-white hover:bg-accent focus:outline-none transition-all duration-300 shadow-subtle"
              >
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Enhanced Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white border-t-2 border-subtle shadow-hover"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pt-4 pb-5 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 text-base font-bold flex items-center rounded-xl ${
                      location.pathname === item.path
                        ? 'text-white bg-accent shadow-subtle'
                        : 'text-primary hover:text-accent hover:bg-secondary hover:shadow-subtle'
                    }`}
                  >
                    <item.icon className={`w-5 h-5 mr-3 ${location.pathname === item.path ? 'text-white' : 'text-accent'}`} />
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
      
      {/* Main Content with top padding to account for fixed navbar */}
      <main className="pt-16 h-full">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}