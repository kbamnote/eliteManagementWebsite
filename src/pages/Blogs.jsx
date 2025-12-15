import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  Tag,
  Search,
  ChevronRight,
  Clock
} from 'lucide-react';
import Layout from '../components/Layout';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Online Learning: Trends to Watch in 2024',
    excerpt: 'Explore the emerging trends in online education that are reshaping how we learn and teach in the digital age.',
    author: 'Alex Johnson',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Education',
    image: 'blog-1'
  },
  {
    id: 2,
    title: 'Mastering Time Management for Online Students',
    excerpt: 'Discover proven strategies to balance your studies, work, and personal life while pursuing online education.',
    author: 'Sarah Williams',
    date: 'March 10, 2024',
    readTime: '7 min read',
    category: 'Study Tips',
    image: 'blog-2'
  },
  {
    id: 3,
    title: 'Top 10 Highest Paying Tech Skills in 2024',
    excerpt: 'Which technical skills command the highest salaries? We break down the most in-demand skills for tech professionals.',
    author: 'Michael Chen',
    date: 'March 5, 2024',
    readTime: '6 min read',
    category: 'Career',
    image: 'blog-3'
  },
  {
    id: 4,
    title: 'Building a Successful Career in Data Science',
    excerpt: 'A comprehensive guide to entering and thriving in the rapidly growing field of data science.',
    author: 'Priya Sharma',
    date: 'February 28, 2024',
    readTime: '8 min read',
    category: 'Career',
    image: 'blog-4'
  },
  {
    id: 5,
    title: 'The Psychology of Effective Learning',
    excerpt: 'Understanding how the brain learns can help you optimize your study habits and retain information better.',
    author: 'Dr. Emma Rodriguez',
    date: 'February 22, 2024',
    readTime: '6 min read',
    category: 'Learning',
    image: 'blog-5'
  },
  {
    id: 6,
    title: 'Remote Work Skills Every Professional Needs',
    excerpt: 'Essential skills for thriving in remote work environments and advancing your career in distributed teams.',
    author: 'Robert Davis',
    date: 'February 18, 2024',
    readTime: '5 min read',
    category: 'Career',
    image: 'blog-6'
  }
];

const categories = [
  'All Categories',
  'Education',
  'Study Tips',
  'Career',
  'Learning',
  'Technology'
];

export default function Blogs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-purple-100 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Our <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
              Insights, tips, and inspiration to help you grow personally and professionally.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-purple-50 border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 bg-white border border-purple-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Category Filter */}
            <div className="relative">
              <select
                className="appearance-none pl-4 pr-10 py-3 bg-white border border-purple-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-white">{category}</option>
                ))}
              </select>
              <Tag className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-2xl overflow-hidden border border-purple-100 hover:border-purple-300 transition-all duration-300 group shadow-sm"
                  >
                    <div className="h-48 bg-gradient-to-r from-purple-50 to-purple-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center mx-auto mb-4">
                          <Calendar className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-gray-700">Blog Image</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-md">{post.category}</span>
                        <span className="mx-2">•</span>
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold group-hover:text-purple-700 transition-colors duration-300 mb-3">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center">
                            <User className="w-4 h-4 text-purple-600" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium">{post.author}</p>
                            <p className="text-xs text-gray-500">{post.date}</p>
                          </div>
                        </div>
                        
                        <Link 
                          to={`/blog/${post.id}`} 
                          className="text-purple-600 hover:text-purple-800 transition-colors duration-300"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Load More Button */}
              <div className="mt-12 text-center">
                <button className="px-6 py-3 bg-white text-purple-700 rounded-lg hover:bg-purple-50 transition-all duration-300 border border-purple-200">
                  Load More Articles
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-purple-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Stay Updated with <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Our Newsletter</span>
            </h2>
            <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto">
              Subscribe to receive the latest articles, tips, and resources directly to your inbox.
            </p>
            
            <div className="mt-10 max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white border border-purple-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-4 text-sm text-gray-500">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}