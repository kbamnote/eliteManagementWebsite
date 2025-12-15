import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
  { name: 'Courses', path: '/courses', icon: BookOpenIcon },
  { name: 'About Us', path: '/about', icon: UserIcon },
  { name: 'Contact Us', path: '/contact', icon: PhoneIcon },
  { name: 'Career Counseling', path: '/career-counseling', icon: BriefcaseIcon },
  { name: 'Blogs', path: '/blogs', icon: NewspaperIcon },
  { name: 'Placements', path: '/placements', icon: ChartBarIcon },
];

export default function Layout({ children }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
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

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Enhanced Navigation */}
      <nav 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-white py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/">
                <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden cursor-pointer">
                  <img src={logo} alt="Logo" className="w-full h-full object-cover" />
                </div>
              </Link>
              
              <h1 className="ml-3 text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Elite Management
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                  >
                    <Link
                      to={item.path}
                      className={`px-4 py-2 text-sm font-medium flex items-center transition-all duration-300 rounded-lg ${
                        location.pathname === item.path
                          ? 'text-purple-600 font-semibold bg-purple-50'
                          : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50/50'
                      }`}
                    >
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-purple-600 focus:outline-none"
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
          <div className="md:hidden bg-white border-t border-purple-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <div
                  key={item.name}
                >
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-3 text-base font-medium flex items-center rounded-lg ${
                      location.pathname === item.path
                        ? 'text-purple-600 font-semibold bg-purple-50'
                        : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50/50'
                    }`}
                  >
                    <item.icon className="w-4 h-4 mr-3" />
                    {item.name}
                  </Link>
                </div>
              ))}

            </div>
          </div>
        )}
      </nav>
      
      {/* Main Content with top padding to account for fixed navbar */}
      <main className="pt-20">
        {children}
      </main>
      
      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-purple-50 to-purple-100 border-t border-purple-200 mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Elite Management
              </h3>
              <p className="mt-4 text-gray-700 max-w-md">
                Empowering students with quality education and career guidance. Join thousands of successful learners today.
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4 mt-6">
                {['twitter', 'facebook', 'linkedin', 'instagram'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white border border-purple-200 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
                  >
                    <div className="w-5 h-5 bg-current rounded-full"></div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-800">Navigation</h4>
              <ul className="mt-4 space-y-2">
                {navItems.slice(0, 4).map((item) => (
                  <li 
                    key={item.name}
                  >
                    <Link 
                      to={item.path} 
                      className="text-purple-700 hover:text-purple-900 transition-colors duration-300 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-800">Resources</h4>
              <ul className="mt-4 space-y-2">
                {navItems.slice(4).map((item) => (
                  <li 
                    key={item.name}
                  >
                    <Link 
                      to={item.path} 
                      className="text-purple-700 hover:text-purple-900 transition-colors duration-300 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-8 border-t border-purple-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-700 text-sm">
              © {new Date().getFullYear()} Elite Management. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a 
                href="#" 
                className="text-gray-600 hover:text-purple-700 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-purple-700 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}