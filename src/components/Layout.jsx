import {useState, useEffect} from 'react';
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
    <div className="min-h-screen bg-white text-slate-800">
      {/* Enhanced Navigation */}
      <nav 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl py-2' : 'bg-white py-4 shadow-md'
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
                  className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden cursor-pointer shadow-lg border-2 border-indigo-100"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={logo} alt="Logo" className="w-full h-full object-cover" />
                </motion.div>
              </Link>
              
              <motion.h1 
                className="ml-3 text-xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300"
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
                          ? 'text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg'
                          : 'text-slate-700 hover:text-indigo-700 hover:bg-indigo-50 hover:shadow-md'
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
                className="inline-flex items-center justify-center p-2 rounded-xl text-indigo-600 hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 focus:outline-none transition-all duration-300 shadow-md"
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
            className="md:hidden bg-white border-t-2 border-indigo-100 shadow-2xl"
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
                        ? 'text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg'
                        : 'text-slate-700 hover:text-indigo-700 hover:bg-indigo-50 hover:shadow-md'
                    }`}
                  >
                    <item.icon className={`w-5 h-5 mr-3 ${location.pathname === item.path ? 'text-white' : 'text-indigo-600'}`} />
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
      
      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-slate-50 to-indigo-50 border-t-2 border-indigo-100 mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <motion.h3 
                className="text-2xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Elite Management
              </motion.h3>
              <motion.p 
                className="mt-4 text-slate-600 max-w-md font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Empowering students with quality education and career guidance. Join thousands of successful learners today.
              </motion.p>
              
              {/* Social Media Links */}
              <motion.div 
                className="flex space-x-4 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {['twitter', 'facebook', 'linkedin', 'instagram'].map((social, index) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 border-2 border-indigo-200 flex items-center justify-center text-indigo-600 hover:from-indigo-600 hover:to-purple-600 hover:text-white hover:border-indigo-600 transition-all duration-300 shadow-md hover:shadow-xl"
                    whileHover={{ y: -5, scale: 1.1 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="w-5 h-5 bg-current rounded-full"></div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
            
            <div>
              <h4 className="text-sm font-black uppercase tracking-wider text-slate-800 mb-1">
                Navigation
              </h4>
              <div className="w-12 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-4"></div>
              <ul className="mt-4 space-y-3">
                {navItems.slice(0, 4).map((item, index) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link 
                      to={item.path} 
                      className="text-slate-600 hover:text-indigo-700 transition-colors duration-300 flex items-center font-medium group"
                    >
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 group-hover:scale-125 transition-transform duration-300"></span>
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-black uppercase tracking-wider text-slate-800 mb-1">
                Resources
              </h4>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4"></div>
              <ul className="mt-4 space-y-3">
                {navItems.slice(4).map((item, index) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link 
                      to={item.path} 
                      className="text-slate-600 hover:text-purple-700 transition-colors duration-300 flex items-center font-medium group"
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 group-hover:scale-125 transition-transform duration-300"></span>
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          
          <motion.div 
            className="mt-8 border-t-2 border-indigo-200 pt-8 flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.p 
              className="text-slate-600 text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              © {new Date().getFullYear()} Elite Management. All rights reserved.
            </motion.p>
            <motion.div 
              className="mt-4 md:mt-0 flex space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.a 
                href="#" 
                className="text-slate-600 hover:text-indigo-700 transition-colors duration-300 font-bold"
                whileHover={{ x: 5 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="text-slate-600 hover:text-purple-700 transition-colors duration-300 font-bold"
                whileHover={{ x: 5 }}
              >
                Terms of Service
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}