/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
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
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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

  // Animation controls for filters section
  const filtersControls = useAnimation();
  const [filtersRef, filtersInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation controls for courses grid
  const coursesControls = useAnimation();
  const [coursesRef, coursesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Trigger animations when elements come into view
  useEffect(() => {
    if (filtersInView) {
      filtersControls.start({ opacity: 1, y: 0 });
    }
    if (coursesInView) {
      coursesControls.start({ opacity: 1, y: 0 });
    }
  }, [filtersInView, coursesInView, filtersControls, coursesControls]);

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
    <AnimatedPageWrapper>
      {/* Enhanced Hero Section */}
        <motion.section 
          className="relative py-20 overflow-hidden bg-secondary"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-primary">Expand Your </span>
                <span className="block text-5xl md:text-6xl font-black text-accent mt-2">
                  Knowledge
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-secondary font-medium max-w-3xl mx-auto mb-10"
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
                <div className="bg-white rounded-2xl p-6 shadow-subtle border-2 border-subtle hover:border-accent transition-all duration-300 hover:shadow-hover hover:-translate-y-1 group">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-xl bg-secondary group-hover:bg-accent flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="ml-4 text-left">
                      <p className="text-2xl font-black text-accent">{totalCourses}+</p>
                      <p className="text-secondary font-bold">Courses</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-subtle border-2 border-subtle hover:border-accent transition-all duration-300 hover:shadow-hover hover:-translate-y-1 group">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-xl bg-secondary group-hover:bg-accent flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div className="ml-4 text-left">
                      <p className="text-2xl font-black text-accent">{Math.round(totalStudents / 1000)}K+</p>
                      <p className="text-secondary font-bold">Students</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-subtle border-2 border-subtle hover:border-accent transition-all duration-300 hover:shadow-hover hover:-translate-y-1 group">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-xl bg-secondary group-hover:bg-accent flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <DollarSign className="w-6 h-6 text-primary" />
                    </div>
                    <div className="ml-4 text-left">
                      <p className="text-2xl font-black text-accent">{avgRating}</p>
                      <p className="text-secondary font-bold">Avg. Rating</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Course Categories Flip Cards */}
        <motion.section 
          className="py-16 bg-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl md:text-4xl font-black mb-4 text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <span className="text-accent">
                  Explore by Category
                </span>
              </motion.h2>
              <motion.p 
                className="text-xl text-secondary max-w-2xl mx-auto font-medium"
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
          className="py-8 bg-white border-b-2 border-subtle sticky top-0 z-20 shadow-subtle backdrop-blur-sm bg-white/95"
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
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-accent w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search courses, instructors..."
                    className="w-full pl-12 pr-4 py-4 bg-white border-2 border-subtle rounded-xl text-primary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent shadow-subtle hover:shadow-hover transition-all duration-300 font-medium"
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
                <label className="block text-sm font-bold text-primary mb-2">Category</label>
                <div className="relative">
                  <select
                    className="appearance-none w-full pl-4 pr-10 py-4 bg-white border-2 border-subtle rounded-xl text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent shadow-subtle hover:shadow-hover transition-all duration-300 font-medium"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className="bg-white text-primary">{category}</option>
                    ))}
                  </select>
                  <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-accent w-5 h-5 pointer-events-none" />
                </div>
              </motion.div>
              
              {/* Level Filter */}
              <motion.div 
                className="relative w-full lg:w-auto"
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <label className="block text-sm font-bold text-primary mb-2">Level</label>
                <div className="relative">
                  <select
                    className="appearance-none w-full pl-4 pr-10 py-4 bg-white border-2 border-subtle rounded-xl text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent shadow-subtle hover:shadow-hover transition-all duration-300 font-medium"
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                  >
                    {levels.map(level => (
                      <option key={level} value={level} className="bg-white text-primary">{level}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-accent w-5 h-5 pointer-events-none" />
                </div>
              </motion.div>
              
              {/* Sort By */}
              <motion.div 
                className="relative w-full lg:w-auto"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <label className="block text-sm font-bold text-primary mb-2">Sort By</label>
                <div className="relative">
                  <select
                    className="appearance-none w-full pl-4 pr-10 py-4 bg-white border-2 border-subtle rounded-xl text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent shadow-subtle hover:shadow-hover transition-all duration-300 font-medium"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="popular" className="bg-white text-primary">Most Popular</option>
                    <option value="rating" className="bg-white text-primary">Highest Rated</option>
                    <option value="price-low" className="bg-white text-primary">Price: Low to High</option>
                    <option value="price-high" className="bg-white text-primary">Price: High to Low</option>
                  </select>
                  <ArrowUpDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-accent w-5 h-5 pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Enhanced Courses Grid */}
        <motion.section 
          className="py-20 bg-secondary"
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
                <h2 className="text-4xl font-black mb-2 text-primary">
                  <span className="text-primary">
                    {sortedCourses.length} Course{sortedCourses.length !== 1 ? 's' : ''} Found
                  </span>
                </h2>
                <p className="text-secondary mt-2 font-medium">Choose from our expertly curated selection of courses</p>
              </div>
            </motion.div>
            
            {sortedCourses.length === 0 ? (
              <motion.div 
                className="text-center py-20 bg-white rounded-3xl shadow-subtle border-2 border-subtle max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-primary mb-2">No courses found</h3>
                <p className="text-secondary mb-6 font-medium">Try adjusting your filters to see more courses.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All Categories');
                    setSelectedLevel('All Levels');
                  }}
                  className="px-6 py-3 bg-accent text-white rounded-xl hover:bg-dark transition-all duration-300 font-bold shadow-subtle hover:shadow-hover transform hover:scale-105"
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
    );
  }