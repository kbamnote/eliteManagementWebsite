import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <section className="relative py-20 overflow-hidden flex items-center justify-center min-h-[70vh] bg-secondary">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-32 h-32 bg-accent rounded-full flex items-center justify-center mx-auto mb-8 shadow-subtle">
            <Search className="w-16 h-16 text-white" />
          </div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-extrabold tracking-tight mb-4 text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            404
          </motion.h1>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Page Not Found
          </motion.h2>
          
          <motion.p 
            className="text-xl text-secondary max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link 
              to="/" 
              className="px-8 py-4 bg-accent text-white font-medium rounded-xl hover:bg-dark transition-all duration-300 shadow-subtle flex items-center justify-center group"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link 
              to="/courses" 
              className="px-8 py-4 bg-white text-primary font-medium rounded-xl hover:bg-secondary transition-all duration-300 border border-subtle flex items-center justify-center shadow-subtle group"
            >
              Browse Courses
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}