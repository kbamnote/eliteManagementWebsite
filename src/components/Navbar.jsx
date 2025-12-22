import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

const navItems = [
  { name: 'Home', path: '/', icon: HomeIcon },
  { name: 'About', path: '/about', icon: UserIcon },
  { name: 'Courses', path: '/courses', icon: BookOpenIcon },
  { name: 'Career', path: '/career-counseling', icon: BriefcaseIcon },
  { name: 'Placement', path: '/placements', icon: ChartBarIcon },
  { name: 'Blogs', path: '/blogs', icon: NewspaperIcon },
  { name: 'Contact', path: '/contact', icon: PhoneIcon },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-secondary/95 backdrop-blur-md shadow-subtle py-2' : 'bg-secondary py-4 shadow-subtle'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 md:gap-6 min-h-[4rem] md:min-h-[5rem]">
          {/* Logo and Brand */}
          <motion.div 
            className="flex items-center  flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center justify-center">
              <motion.div 
                className="w-16 h-16 md:w-20 md:h-20 overflow-hidden cursor-pointer rounded-lg flex-shrink-0 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={logo} alt="Logo" className="w-full h-full object-contain" />
              </motion.div>
            </Link>
            
            <Link to="/" className="flex items-center justify-center">
              <motion.h4 
                className="text-base md:text-lg font-black text-accent hover:text-dark transition-all duration-300 whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Elite Management
              </motion.h4>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <div className="flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                >
                  <Link
                    to={item.path}
                    className={`px-3 py-2 text-sm font-bold flex items-center gap-2 transition-all duration-300 rounded-lg ${
                      location.pathname === item.path
                        ? 'text-white bg-accent shadow-subtle'
                        : 'text-primary hover:text-accent hover:bg-white hover:shadow-subtle'
                    }`}
                  >
                    <item.icon className="w-4 h-4 flex-shrink-0" />
                    <span className="whitespace-nowrap">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-accent hover:text-white hover:bg-accent focus:outline-none transition-all duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white border-t-2 border-subtle shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 space-y-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-bold flex items-center gap-3 rounded-lg transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-white bg-accent'
                      : 'text-primary hover:text-accent hover:bg-secondary'
                  }`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}