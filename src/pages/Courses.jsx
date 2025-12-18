/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Search, 
  Filter,
  ChevronDown,
  ArrowUpDown,
  GraduationCap,
  Users,
  DollarSign,
  Star,
  Clock
} from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import FlipCard from '../components/FlipCard';
import BookCard from '../components/BookCard';
import AnimatedPageWrapper from '../components/AnimatedPageWrapper';

const allCourses = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    instructor: 'John Smith',
    rating: 4.8,
    students: 12500,
    duration: '24 weeks',
    level: 'Beginner',
    price: 89,
    category: 'Programming',
    image: 'web-dev'
  },
  {
    id: 2,
    title: 'Data Science with Python',
    instructor: 'Sarah Johnson',
    rating: 4.9,
    students: 9800,
    duration: '18 weeks',
    level: 'Intermediate',
    price: 129,
    category: 'Data Science',
    image: 'data-science'
  },
  {
    id: 3,
    title: 'UI/UX Design Masterclass',
    instructor: 'Michael Chen',
    rating: 4.7,
    students: 7600,
    duration: '12 weeks',
    level: 'Beginner',
    price: 79,
    category: 'Design',
    image: 'design'
  },
  {
    id: 4,
    title: 'Cloud Computing with AWS',
    instructor: 'David Wilson',
    rating: 4.6,
    students: 5400,
    duration: '16 weeks',
    level: 'Advanced',
    price: 149,
    category: 'Cloud',
    image: 'cloud'
  },
  {
    id: 5,
    title: 'Digital Marketing Strategy',
    instructor: 'Emma Rodriguez',
    rating: 4.8,
    students: 11200,
    duration: '10 weeks',
    level: 'Beginner',
    price: 69,
    category: 'Marketing',
    image: 'marketing'
  },
  {
    id: 6,
    title: 'Mobile App Development with React Native',
    instructor: 'Alex Thompson',
    rating: 4.7,
    students: 8300,
    duration: '20 weeks',
    level: 'Intermediate',
    price: 99,
    category: 'Programming',
    image: 'mobile'
  },
  {
    id: 7,
    title: 'Machine Learning Fundamentals',
    instructor: 'Dr. Priya Sharma',
    rating: 4.9,
    students: 6700,
    duration: '22 weeks',
    level: 'Advanced',
    price: 159,
    category: 'AI',
    image: 'ai'
  },
  {
    id: 8,
    title: 'Cybersecurity Essentials',
    instructor: 'Robert Davis',
    rating: 4.6,
    students: 4500,
    duration: '14 weeks',
    level: 'Intermediate',
    price: 119,
    category: 'Security',
    image: 'security'
  }
];

const categories = [
  'All Categories',
  'Programming',
  'Data Science',
  'Design',
  'Cloud',
  'Marketing',
  'AI',
  'Security'
];

const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [sortBy, setSortBy] = useState('popular');

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All Levels' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortBy === 'popular') return b.students - a.students;
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  // Stats for the hero section
  const totalCourses = allCourses.length;
  const totalStudents = allCourses.reduce((sum, course) => sum + course.students, 0);
  const avgRating = (allCourses.reduce((sum, course) => sum + course.rating, 0) / allCourses.length).toFixed(1);

  return (
    <Layout>
      <AnimatedPageWrapper>
        {/* Enhanced Hero Section */}
        <motion.section 
          className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Expand Your </span>
                <span className="block text-5xl md:text-6xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
                  Knowledge
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-slate-700 font-medium max-w-3xl mx-auto mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Discover hundreds of expert-led courses designed to help you master new skills and advance your career.
              </motion.p>
              
              {/* Enhanced Stats Cards */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-indigo-100 hover:border-indigo-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 group-hover:from-indigo-200 group-hover:to-purple-200 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <GraduationCap className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="ml-4 text-left">
                      <p className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{totalCourses}+</p>
                      <p className="text-slate-600 font-bold">Courses</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-purple-100 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="ml-4 text-left">
                      <p className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{Math.round(totalStudents / 1000)}K+</p>
                      <p className="text-slate-600 font-bold">Students</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-cyan-100 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-100 to-teal-100 group-hover:from-cyan-200 group-hover:to-teal-200 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <DollarSign className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div className="ml-4 text-left">
                      <p className="text-2xl font-black bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">{avgRating}</p>
                      <p className="text-slate-600 font-bold">Avg. Rating</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Course Categories Flip Cards */}
        <motion.section 
          className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl md:text-4xl font-black mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <span className="bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
                  Explore by Category
                </span>
              </motion.h2>
              <motion.p 
                className="text-xl text-slate-600 max-w-2xl mx-auto font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Discover courses tailored to your interests and career goals
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
              <BookCard 
                frontText="Programming" 
                backText="Web, Mobile & Software Dev - JavaScript, Python, React, and more"
              />
              <BookCard 
                frontText="Data Science" 
                backText="Analytics & Machine Learning - Python, R, SQL, and Big Data"
              />
              <BookCard 
                frontText="Design" 
                backText="UI/UX & Graphic Design - Figma, Adobe Suite, Prototyping"
              />
              <BookCard 
                frontText="Business" 
                backText="Marketing & Management - Digital Marketing, Leadership, Finance"
              />
            </div>
          </div>
        </motion.section>

        {/* Enhanced Filters Section */}
        <motion.section 
          className="py-8 bg-white border-b-2 border-indigo-100 sticky top-0 z-20 shadow-md backdrop-blur-sm bg-white/95"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4 items-end">
              {/* Search */}
              <motion.div 
                className="relative flex-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search courses, instructors..."
                    className="w-full pl-12 pr-4 py-4 bg-white border-2 border-indigo-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-md hover:shadow-lg transition-all duration-300 font-medium"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </motion.div>
              
              {/* Category Filter */}
              <motion.div 
                className="relative w-full lg:w-auto"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label className="block text-sm font-bold text-slate-700 mb-2">Category</label>
                <div className="relative">
                  <select
                    className="appearance-none w-full pl-4 pr-10 py-4 bg-white border-2 border-indigo-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-md hover:shadow-lg transition-all duration-300 font-medium"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className="bg-white text-slate-700">{category}</option>
                    ))}
                  </select>
                  <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-400 w-5 h-5 pointer-events-none" />
                </div>
              </motion.div>
              
              {/* Level Filter */}
              <motion.div 
                className="relative w-full lg:w-auto"
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <label className="block text-sm font-bold text-slate-700 mb-2">Level</label>
                <div className="relative">
                  <select
                    className="appearance-none w-full pl-4 pr-10 py-4 bg-white border-2 border-purple-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-md hover:shadow-lg transition-all duration-300 font-medium"
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                  >
                    {levels.map(level => (
                      <option key={level} value={level} className="bg-white text-slate-700">{level}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5 pointer-events-none" />
                </div>
              </motion.div>
              
              {/* Sort By */}
              <motion.div 
                className="relative w-full lg:w-auto"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <label className="block text-sm font-bold text-slate-700 mb-2">Sort By</label>
                <div className="relative">
                  <select
                    className="appearance-none w-full pl-4 pr-10 py-4 bg-white border-2 border-cyan-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent shadow-md hover:shadow-lg transition-all duration-300 font-medium"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="popular" className="bg-white text-slate-700">Most Popular</option>
                    <option value="rating" className="bg-white text-slate-700">Highest Rated</option>
                    <option value="price-low" className="bg-white text-slate-700">Price: Low to High</option>
                    <option value="price-high" className="bg-white text-slate-700">Price: High to Low</option>
                  </select>
                  <ArrowUpDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5 pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Enhanced Courses Grid */}
        <motion.section 
          className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="flex justify-between items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div>
                <h2 className="text-4xl font-black mb-2">
                  <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                    {sortedCourses.length} Course{sortedCourses.length !== 1 ? 's' : ''} Found
                  </span>
                </h2>
                <p className="text-slate-600 mt-2 font-medium">Choose from our expertly curated selection of courses</p>
              </div>
            </motion.div>
            
            {sortedCourses.length === 0 ? (
              <motion.div 
                className="text-center py-20 bg-white rounded-3xl shadow-xl border-2 border-indigo-200 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-10 h-10 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-2">No courses found</h3>
                <p className="text-slate-600 mb-6 font-medium">Try adjusting your filters to see more courses.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All Categories');
                    setSelectedLevel('All Levels');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Clear Filters
                </button>
              </motion.div>
            ) : (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                {sortedCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <FlipCard 
                      frontTitle={course.title}
                      frontText={`by ${course.instructor}`}
                      backTitle="Course Details"
                      backText={`${course.students.toLocaleString()} students • ${course.duration} • ${course.level} • Rating: ${course.rating}/5`}
                      icon={<BookOpen size={32} />}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.section>
      </AnimatedPageWrapper>
    </Layout>
  );
}