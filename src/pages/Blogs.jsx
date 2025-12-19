/* eslint-disable no-unused-vars */
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
import { motion } from 'framer-motion';
import AnimatedPageWrapper from '../components/AnimatedPageWrapper';

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
    <AnimatedPageWrapper>
      {/* Enhanced Hero Section */}
        <motion.section 
          className="relative py-20 overflow-hidden bg-secondary"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-accent rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent rounded-full opacity-20 blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-primary">Our </span>
                <span className="text-accent">Blog</span>
              </motion.h1>
              <motion.p 
                className="mt-6 text-xl text-secondary font-medium max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Insights, tips, and inspiration to help you grow personally and professionally.
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Enhanced Filters */}
        <motion.section 
          className="py-8 bg-white border-b-2 border-subtle sticky top-0 z-20 shadow-subtle backdrop-blur-sm bg-white/95"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <motion.div 
                className="relative flex-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-accent w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-4 bg-white border-2 border-subtle rounded-xl text-primary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent shadow-subtle hover:shadow-hover transition-all duration-300 font-medium"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </motion.div>
              
              {/* Category Filter */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <select
                  className="appearance-none pl-4 pr-10 py-4 bg-white border-2 border-subtle rounded-xl text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent shadow-subtle hover:shadow-hover transition-all duration-300 font-medium"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-white text-primary">{category}</option>
                  ))}
                </select>
                <Tag className="absolute right-3 top-1/2 transform -translate-y-1/2 text-accent w-5 h-5 pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Enhanced Blog Posts */}
        <motion.section 
          className="py-20 bg-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPosts.length === 0 ? (
              <motion.div 
                className="text-center py-20 bg-white rounded-3xl shadow-subtle border-2 border-subtle max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-primary mb-2">No articles found</h3>
                <p className="text-secondary font-medium">Try adjusting your search or filter criteria.</p>
              </motion.div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      className="bg-white rounded-3xl overflow-hidden border-2 border-subtle hover:border-accent transition-all duration-300 group shadow-subtle"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -8 }}
                    >
                      <div className="h-48 bg-secondary flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4 shadow-subtle">
                            <Calendar className="w-8 h-8 text-white" />
                          </div>
                          <p className="text-secondary font-bold">Blog Image</p>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm mb-3">
                          <span className="px-3 py-1 bg-secondary text-primary rounded-lg font-bold">{post.category}</span>
                          <span className="mx-2 text-secondary">•</span>
                          <Clock className="w-4 h-4 mr-1 text-secondary" />
                          <span className="text-secondary font-medium">{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-xl font-black text-primary group-hover:text-accent transition-colors duration-300 mb-3 leading-tight">
                          {post.title}
                        </h3>
                        
                        <p className="text-secondary mb-4 font-medium">{post.excerpt}</p>
                        
                        <div className="flex items-center justify-between pt-4 border-t-2 border-subtle">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shadow-subtle">
                              <User className="w-5 h-5 text-primary" />
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-bold text-primary">{post.author}</p>
                              <p className="text-xs text-secondary font-medium">{post.date}</p>
                            </div>
                          </div>
                          
                          <Link 
                            to={`/blog/${post.id}`} 
                            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-accent transition-all duration-300 shadow-subtle"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Enhanced Load More Button */}
                <motion.div 
                  className="mt-12 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <button className="px-8 py-4 bg-white text-primary rounded-xl hover:bg-secondary transition-all duration-300 border-2 border-subtle font-bold shadow-subtle hover:shadow-hover transform hover:scale-105">
                    Load More Articles
                  </button>
                </motion.div>
              </>
            )}
          </div>
        </motion.section>

        {/* Enhanced Newsletter CTA */}
        <motion.section 
          className="py-20 bg-accent relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-white rounded-full opacity-5 blur-3xl"></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Stay Updated with <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">Our Newsletter</span>
              </h2>
              <p className="mt-4 text-xl text-white/90 font-medium max-w-2xl mx-auto">
                Subscribe to receive the latest articles, tips, and resources directly to your inbox.
              </p>
              
              <div className="mt-10 max-w-md mx-auto">
                <form className="flex flex-col sm:flex-row gap-4">
                  <motion.input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                  <motion.button
                    type="submit"
                    className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-secondary transition-all duration-300 shadow-subtle transform hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ y: -2 }}
                    viewport={{ once: true }}
                  >
                    Subscribe
                  </motion.button>
                </form>
                <p className="mt-4 text-sm text-white/90 font-medium">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </AnimatedPageWrapper>
    );
  }