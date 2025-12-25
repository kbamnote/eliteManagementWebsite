/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  User,
  Tag,
  Search,
  ChevronRight,
  Clock,
  TrendingUp,
  Star,
  Eye
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
    image: 'blog-1',
    views: '2.4k',
    likes: 142,
    featured: true
  },
  {
    id: 2,
    title: 'Mastering Time Management for Online Students',
    excerpt: 'Discover proven strategies to balance your studies, work, and personal life while pursuing online education.',
    author: 'Sarah Williams',
    date: 'March 10, 2024',
    readTime: '7 min read',
    category: 'Study Tips',
    image: 'blog-2',
    views: '1.8k',
    likes: 98,
    featured: false
  },
  {
    id: 3,
    title: 'Top 10 Highest Paying Tech Skills in 2024',
    excerpt: 'Which technical skills command the highest salaries? We break down the most in-demand skills for tech professionals.',
    author: 'Michael Chen',
    date: 'March 5, 2024',
    readTime: '6 min read',
    category: 'Career',
    image: 'blog-3',
    views: '3.2k',
    likes: 210,
    featured: true
  },
  {
    id: 4,
    title: 'Building a Successful Career in Data Science',
    excerpt: 'A comprehensive guide to entering and thriving in the rapidly growing field of data science.',
    author: 'Priya Sharma',
    date: 'February 28, 2024',
    readTime: '8 min read',
    category: 'Career',
    image: 'blog-4',
    views: '2.7k',
    likes: 176,
    featured: false
  },
  {
    id: 5,
    title: 'The Psychology of Effective Learning',
    excerpt: 'Understanding how the brain learns can help you optimize your study habits and retain information better.',
    author: 'Dr. Emma Rodriguez',
    date: 'February 22, 2024',
    readTime: '6 min read',
    category: 'Learning',
    image: 'blog-5',
    views: '1.5k',
    likes: 89,
    featured: false
  },
  {
    id: 6,
    title: 'Remote Work Skills Every Professional Needs',
    excerpt: 'Essential skills for thriving in remote work environments and advancing your career in distributed teams.',
    author: 'Robert Davis',
    date: 'February 18, 2024',
    readTime: '5 min read',
    category: 'Career',
    image: 'blog-6',
    views: '2.1k',
    likes: 125,
    featured: false
  },
  {
    id: 7,
    title: 'The Evolution of Cybersecurity: Protecting Digital Assets',
    excerpt: 'Understanding the latest threats and protection strategies in the ever-evolving cybersecurity landscape.',
    author: 'Jennifer Lopez',
    date: 'January 30, 2024',
    readTime: '9 min read',
    category: 'Technology',
    image: 'blog-7',
    views: '1.9k',
    likes: 105,
    featured: false
  },
  {
    id: 8,
    title: 'Sustainable Practices in Modern Business',
    excerpt: 'How companies are integrating environmental responsibility into their core business strategies.',
    author: 'David Kim',
    date: 'January 25, 2024',
    readTime: '7 min read',
    category: 'Business',
    image: 'blog-8',
    views: '1.6k',
    likes: 78,
    featured: false
  },
  {
    id: 9,
    title: 'The Rise of AI in Healthcare: Transforming Patient Care',
    excerpt: 'Exploring how artificial intelligence is revolutionizing diagnostics, treatment, and patient outcomes.',
    author: 'Dr. Lisa Chen',
    date: 'January 20, 2024',
    readTime: '8 min read',
    category: 'Technology',
    image: 'blog-9',
    views: '2.3k',
    likes: 156,
    featured: true
  },
  {
    id: 10,
    title: 'Mental Health in the Digital Age: Staying Balanced Online',
    excerpt: 'Practical strategies for maintaining mental wellness while navigating our increasingly connected world.',
    author: 'Dr. James Wilson',
    date: 'December 15, 2024',
    readTime: '6 min read',
    category: 'Wellness',
    image: 'blog-10',
    views: '2.8k',
    likes: 189,
    featured: true
  },
  {
    id: 11,
    title: 'Financial Planning for Young Professionals',
    excerpt: 'Essential financial strategies every young professional should know to build a secure future.',
    author: 'Maria Garcia',
    date: 'December 10, 2024',
    readTime: '7 min read',
    category: 'Finance',
    image: 'blog-11',
    views: '3.1k',
    likes: 203,
    featured: false
  },
  {
    id: 12,
    title: 'The Art of Networking: Building Meaningful Professional Relationships',
    excerpt: 'How to create authentic connections that can transform your career and personal growth.',
    author: 'Kevin Thompson',
    date: 'December 5, 2024',
    readTime: '5 min read',
    category: 'Career',
    image: 'blog-12',
    views: '1.7k',
    likes: 112,
    featured: false
  },
  {
    id: 13,
    title: 'Understanding Blockchain Beyond Cryptocurrency',
    excerpt: 'Exploring the revolutionary applications of blockchain technology across various industries.',
    author: 'Sophia Zhang',
    date: 'November 28, 2024',
    readTime: '8 min read',
    category: 'Technology',
    image: 'blog-13',
    views: '2.2k',
    likes: 167,
    featured: false
  },
  {
    id: 14,
    title: 'The Science of Productivity: Evidence-Based Strategies',
    excerpt: 'Research-backed techniques to maximize your efficiency and achieve more with less effort.',
    author: 'Dr. Rachel Green',
    date: 'November 22, 2024',
    readTime: '6 min read',
    category: 'Productivity',
    image: 'blog-14',
    views: '2.6k',
    likes: 194,
    featured: false
  },
  {
    id: 15,
    title: 'Creating a Personal Brand That Stands Out',
    excerpt: 'How to build an authentic personal brand that attracts opportunities and opens doors.',
    author: 'Emma Wilson',
    date: 'November 18, 2024',
    readTime: '7 min read',
    category: 'Career',
    image: 'blog-15',
    views: '1.9k',
    likes: 132,
    featured: false
  },
  {
    id: 16,
    title: 'The Future of Renewable Energy: Innovations to Watch',
    excerpt: 'Examining breakthrough technologies that are shaping the future of sustainable energy.',
    author: 'Dr. Michael Foster',
    date: 'November 12, 2024',
    readTime: '9 min read',
    category: 'Science',
    image: 'blog-16',
    views: '1.4k',
    likes: 87,
    featured: false
  },
  {
    id: 17,
    title: 'Mindfulness Techniques for Busy Professionals',
    excerpt: 'Simple mindfulness practices that can be integrated into a busy work schedule.',
    author: 'Lisa Chen',
    date: 'November 5, 2024',
    readTime: '5 min read',
    category: 'Wellness',
    image: 'blog-17',
    views: '2.3k',
    likes: 178,
    featured: false
  },
  {
    id: 18,
    title: 'The Gig Economy: Pros and Cons for Modern Workers',
    excerpt: 'An in-depth analysis of freelancing and contract work in today\'s job market.',
    author: 'Thomas Reed',
    date: 'October 28, 2024',
    readTime: '7 min read',
    category: 'Career',
    image: 'blog-18',
    views: '2.0k',
    likes: 145,
    featured: false
  }
];

const categories = [
  'All Categories',
  'Education',
  'Study Tips',
  'Career',
  'Learning',
  'Technology',
  'Business',
  'Wellness',
  'Finance',
  'Productivity',
  'Science'
];

const trendingTags = [
  'AI',
  'Remote Work',
  'Cybersecurity',
  'Data Science',
  'Online Learning',
  'Career Growth',
  'Mental Health',
  'Blockchain',
  'Financial Planning',
  'Productivity',
  'Sustainability',
  'Personal Branding'
];

export default function Blogs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchHistory, setSearchHistory] = useState(JSON.parse(localStorage.getItem('searchHistory')) || []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Get search suggestions
  const getSearchSuggestions = (term) => {
    if (!term.trim()) return [];

    const allWords = blogPosts.flatMap(post =>
      [...post.title.toLowerCase().split(' '), ...post.excerpt.toLowerCase().split(' ')]
    );

    const uniqueWords = [...new Set(allWords)];
    const filteredSuggestions = uniqueWords
      .filter(word => word.includes(term.toLowerCase()) && word.length > 2)
      .slice(0, 5);

    return filteredSuggestions;
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      setSuggestions(getSearchSuggestions(value));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  // Handle search submission
  const handleSearchSubmit = (term) => {
    setSearchTerm(term);
    setShowSuggestions(false);

    // Add to search history
    if (term && !searchHistory.includes(term)) {
      const newHistory = [term, ...searchHistory.slice(0, 4)]; // Keep only last 5
      setSearchHistory(newHistory);
      localStorage.setItem('searchHistory', JSON.stringify(newHistory));
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    handleSearchSubmit(suggestion);
  };

  // Clear search history
  const clearSearchHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  return (
    <AnimatedPageWrapper>
      {/* Enhanced Hero Section */}
      <motion.section
        className="relative content-center contentflex flex-col lg:flex-row gap-4 items-center-center py-35 overflow-hidden bg-gradient-to-br from-secondary to-accent/10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-accent rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-primary rounded-full opacity-5 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-accent/20 rounded-full mb-6 border border-accent/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TrendingUp className="w-4 h-4 text-accent mr-2" />
              <span className="text-accent font-bold text-sm">INSIGHTS & IDEAS</span>
            </motion.div>

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

            <motion.div
              className="mt-10 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {trendingTags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/70 backdrop-blur-sm border border-subtle rounded-full text-primary font-bold text-sm hover:bg-accent hover:text-white transition-all duration-300"
                >
                  #{tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Enhanced Filters */}
      <motion.section
        className="py-16 bg-white/80 backdrop-blur-sm border-b border-subtle top-0 z-20 shadow-sm"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center lg:flex-row gap-4 items-center">
            {/* Search */}
            <motion.div
              className="relative flex-1 max-w-2xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-accent w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, topics, or authors..."
                className="w-full pl-12 pr-4 py-3 bg-white/70 backdrop-blur-sm border border-subtle rounded-xl text-primary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent shadow-sm hover:shadow-md transition-all duration-300 font-medium"
                value={searchTerm}
                onChange={handleSearchChange}
                onFocus={() => {
                  if (searchTerm && suggestions.length > 0) {
                    setShowSuggestions(true);
                  }
                }}
              />

              {/* Search Suggestions */}
              {showSuggestions && (suggestions.length > 0 || searchHistory.length > 0) && (
                <motion.div
                  className="absolute z-10 w-full mt-2 bg-white rounded-xl shadow-lg border border-subtle overflow-hidden"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {suggestions.length > 0 && (
                    <div className="py-2">
                      <div className="px-4 py-2 text-xs font-bold text-secondary uppercase tracking-wider">Suggestions</div>
                      {suggestions.map((suggestion, index) => (
                        <div
                          key={index}
                          className="px-4 py-2 hover:bg-accent hover:text-white cursor-pointer transition-colors"
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          {suggestion}
                        </div>
                      ))}
                    </div>
                  )}

                  {searchHistory.length > 0 && (
                    <div className="py-2 border-t border-subtle">
                      <div className="px-4 py-2 flex justify-between items-center">
                        <span className="text-xs font-bold text-secondary uppercase tracking-wider">Recent Searches</span>
                        <button
                          className="text-xs text-secondary hover:text-accent"
                          onClick={clearSearchHistory}
                        >
                          Clear
                        </button>
                      </div>
                      {searchHistory.map((term, index) => (
                        <div
                          key={index}
                          className="px-4 py-2 hover:bg-accent hover:text-white cursor-pointer transition-colors flex justify-between items-center"
                          onClick={() => handleSearchSubmit(term)}
                        >
                          <span>{term}</span>
                          <Search className="w-4 h-4" />
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </motion.div>

            {/* Category Filter */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <select
                className="appearance-none bg-white/70 backdrop-blur-sm border border-subtle rounded-xl text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent shadow-sm hover:shadow-md transition-all duration-300 font-medium"
                style={{ paddingRight: '2.2em' }}
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

      {/* Featured Articles Section */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">Featured Articles</h2>
            <p className="text-secondary max-w-2xl mx-auto font-medium">Discover our most popular and insightful content</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts
              .filter(post => post.featured)
              .slice(0, 3)
              .map((post, index) => (
                <motion.div
                  key={post.id}
                  className="bg-gradient-to-br relative pb-15 from-white to-secondary rounded-3xl overflow-hidden border border-subtle hover:border-accent transition-all duration-500 group shadow-lg hover:shadow-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="h-64 bg-gradient-to-r from-accent to-primary flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002eff]/50 to-[#aa0000]"></div>
                    <div className="text-center z-10">
                      <div className="w-16 h-16 rounded-full bg-[#62fff7]/20 flex items-center justify-center mx-auto mb-4">
                        <Calendar className="w-8 h-8 text-[#00ffec]" />
                      </div>
                      <p className="text-[#50fff2] font-bold text-lg">Featured Article</p>
                    </div>
                    <div className="absolute top-4 right-4 bg-accent text-[#00ffce] px-3 py-1 rounded-full text-sm font-bold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Featured
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm mb-3">
                      <span className="px-3 py-1 bg-accent text-[#02c0c9] rounded-lg font-bold text-sm">{post.category}</span>
                      <span className="mx-2 text-[#ff0404]">•</span>
                      <div className="flex items-center text-secondary text-sm">
                        <Eye className="w-4 h-4 mr-1" />
                        {post.views}
                      </div>
                      <span className="mx-2 text-[#4bff04]">•</span>
                      <Clock className="w-4 h-4 mr-1 text-secondary" />
                      <span className="text-secondary text-sm">{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-black text-primary group-hover:text-accent transition-colors duration-300 mb-3 leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-secondary mb-4 font-medium">{post.excerpt}</p>

                    <div className='absolute left-4 right-4 bottom-4'>
                      <div className="flex items-center rounded-xl bg-[#abf3f72e] justify-between p-4 border-t border-subtle">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shadow-sm">
                            <User className="w-5 h-5 text-primary" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-bold text-primary" style={{ margin: 0 }}>{post.author}</p>
                            <p className="text-xs text-secondary font-medium" style={{ margin: 0 }}>{post.date}</p>
                          </div>
                        </div>

                        <Link
                          to={`/blog/${post.id}`}
                          className="w-10 h-10 rounded-full bg-[#cef8ff] flex items-center justify-center text-white hover:bg-primary transition-all duration-300 shadow-md group-hover:shadow-lg"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* All Articles Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">All Articles</h2>
            <p className="text-secondary max-w-2xl mx-auto font-medium">Explore our complete collection of insights and knowledge</p>
          </div>

          {filteredPosts.length === 0 ? (
            <motion.div
              className="text-center py-20 bg-secondary/50 rounded-3xl shadow-sm border border-subtle max-w-2xl mx-auto"
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
                    className="bg-white pb-20 relative rounded-2xl overflow-hidden border border-subtle hover:border-accent transition-all duration-300 group shadow-sm hover:shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -6 }}
                  >
                    <div className="h-48 bg-gradient-to-r from-accent/10 to-primary/10 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-[aliceblue] flex items-center justify-center mx-auto mb-3 shadow-sm">
                          <Calendar className="w-6 h-6" />
                        </div>
                        <p className="text-secondary font-medium text-sm">Article Image</p>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center text-sm mb-3">
                        <span className="px-2 py-1 bg-secondary text-primary rounded-lg font-bold text-xs">{post.category}</span>
                        <span className="mx-2 text-secondary text-xs">•</span>
                        <div className="flex items-center text-secondary text-xs">
                          <Eye className="w-3 h-3 mr-1" />
                          {post.views}
                        </div>
                        <span className="mx-2 text-secondary text-xs">•</span>
                        <Clock className="w-3 h-3 mr-1 text-secondary" />
                        <span className="text-secondary text-xs">{post.readTime}</span>
                      </div>

                      <h3 className="text-lg font-black text-primary group-hover:text-accent transition-colors duration-300 mb-2 leading-tight">
                        {post.title}
                      </h3>

                      <p className="text-secondary text-sm mb-4 font-medium line-clamp-2">{post.excerpt}</p>

                      <div className='absolute left-4 right-4 bottom-4'>
                        <div className="flex items-center justify-between p-3 rounded-xl bg-[#abf3f72e] border-t border-subtle">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shadow-sm">
                              <User className="w-4 h-4 text-primary" />
                            </div>
                            <div className="ml-2">
                              <p className="text-xs font-bold text-primary" style={{ margin: 0 }}>{post.author}</p>
                              <p className="text-xs text-secondary font-medium" style={{ margin: 0 }}>{post.date}</p>
                            </div>
                          </div>

                          <Link
                            to={`/blog/${post.id}`}
                            className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </Link>
                        </div>
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
                <button className="px-8 py-4 bg-gradient-to-r from-[#00ffc2] to-[#005541] text-white rounded-xl hover:from-primary hover:to-accent transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105">
                  Load More Articles
                </button>
              </motion.div>
            </>
          )}
        </div>
      </motion.section>

      {/* Enhanced Newsletter CTA */}
      <motion.section
        className="py-20 bg-gradient-to-br from-accent to-primary relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
              <TrendingUp className="w-4 h-4 text-white mr-2" />
              <span className=" font-bold text-sm">SUBSCRIBE TO OUR NEWSLETTER</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Stay Updated with <span className="bg-gradient-to-r from-white to-secondary bg-clip-text text-[#00c2ae]">Our Latest Insights</span>
            </h2>
            <p className="mt-4 text-xl text-dark/90 font-medium max-w-2xl mx-auto">
              Subscribe to receive the latest articles, tips, and resources directly to your inbox.
            </p>

            <div className="mt-10 max-w-lg mx-auto">
              <form className="flex flex-col sm:flex-row gap-4">
                <motion.input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                />
                <motion.button
                  type="submit"
                  className="px-8 py-4 bg-[#00dcc8] text-white font-bold rounded-xl hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -2 }}
                  viewport={{ once: true }}
                >
                  Subscribe Now
                </motion.button>
              </form>
              <p className="mt-4 text-sm text-dark/80 font-medium">
                Join over 10,000 subscribers. We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </AnimatedPageWrapper>
  );
}