import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import Layout from '../components/Layout';

export default function NotFound() {
  return (
    <Layout>
      <section className="relative py-20 overflow-hidden flex items-center justify-center min-h-[70vh]">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-purple-900/70 z-0"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div>
            <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-8">
              <Search className="w-16 h-16 text-white" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">404</span>
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Page Not Found
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/" 
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-medium rounded-lg hover:from-purple-600 hover:to-purple-800 transition-all duration-300 shadow-lg flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              
              <Link 
                to="/courses" 
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center justify-center"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}