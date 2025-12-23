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
  Clock, Code2, LineChart, PenTool, Briefcase
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
        className="relative overflow-hidden bg-secondary"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">

            {/* Heading */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-primary pt-3` ">Expand Your </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-black text-accent mt-2 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Knowledge
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-xl md:text-2xl text-secondary font-medium max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              Discover hundreds of expert‑led courses designed to help you master new skills and advance your career.
            </motion.p>

            {/* CTA row */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <button className="px-8 py-3 rounded-full text-white text-sm md:text-base font-semibold shadow-subtle hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300" style={{ backgroundColor: '#048e6c' }}>
                Browse Courses
              </button>
              <button className="px-8 py-3 rounded-full border border-subtle bg-white text-primary text-sm md:text-base font-semibold hover:border-accent hover:text-accent transition-all duration-300">
                Download Brochure
              </button>
            </motion.div>

            {/* Stats cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {/* Courses */}
              <div className="relative bg-white rounded-2xl p-6 shadow-subtle border border-subtle/70 
                hover:border-accent hover:shadow-hover transition-all duration-300 group overflow-hidden">
                {/* soft glow */}
                <div className="pointer-events-none absolute inset-x-10 -top-10 h-10 rounded-full bg-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-secondary to-secondary/70
                    group-hover:from-accent group-hover:to-accent/80
                    flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <GraduationCap className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="ml-4 text-left">
                    <p className="text-2xl font-black text-accent leading-none">{totalCourses}+</p>
                    <p className="text-secondary font-bold text-[11px] uppercase tracking-[0.12em] mt-1">
                      Courses
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-xs text-secondary/80 font-medium">
                  Learn at your own pace with structured, outcome‑driven programs.
                </p>

                <div className="mt-4 pt-3 border-t border-subtle/60">
                  <span className="inline-flex px-3 py-1 rounded-full bg-secondary/60 text-[10px] font-semibold text-primary/90">
                    Updated monthly with new content
                  </span>
                </div>
              </div>

              {/* Students */}
              <div className="relative bg-white rounded-2xl p-6 shadow-subtle border border-subtle/70 
                hover:border-accent hover:shadow-hover transition-all duration-300 group overflow-hidden">
                <div className="pointer-events-none absolute inset-x-10 -top-10 h-10 rounded-full bg-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-secondary to-secondary/70
                    group-hover:from-accent group-hover:to-accent/80
                    flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <Users className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="ml-4 text-left">
                    <p className="text-2xl font-black text-accent leading-none">
                      {Math.round(totalStudents / 1000)}K+
                    </p>
                    <p className="text-secondary font-bold text-[11px] uppercase tracking-[0.12em] mt-1">
                      Students
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-xs text-secondary/80 font-medium">
                  Join a vibrant community of learners from across the globe.
                </p>

                <div className="mt-4 pt-3 border-t border-subtle/60">
                  <span className="inline-flex px-3 py-1 rounded-full bg-secondary/60 text-[10px] font-semibold text-primary/90">
                    24/7 access to all lessons
                  </span>
                </div>
              </div>

              {/* Rating */}
              <div className="relative bg-white rounded-2xl p-6 shadow-subtle border border-subtle/70 
                hover:border-accent hover:shadow-hover transition-all duration-300 group overflow-hidden">
                <div className="pointer-events-none absolute inset-x-10 -top-10 h-10 rounded-full bg-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-secondary to-secondary/70
                    group-hover:from-accent group-hover:to-accent/80
                    flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <DollarSign className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="ml-4 text-left">
                    <p className="text-2xl font-black text-accent leading-none">{avgRating}</p>
                    <p className="text-secondary font-bold text-[11px] uppercase tracking-[0.12em] mt-1">
                      Avg. Rating
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-xs text-secondary/80 font-medium">
                  Learners consistently rate our courses highly for clarity and value.
                </p>

                <div className="mt-4 pt-3 border-t border-subtle/60">
                  <span className="inline-flex px-3 py-1 rounded-full bg-secondary/60 text-[10px] font-semibold text-primary/90">
                    Based on verified reviews
                  </span>
                </div>
              </div>

            </motion.div>
          </div>
        </div>

      </motion.section>

      {/* Course Categories Flip Cards */}
      <motion.section
        className=" bg-secondary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <section className="bg-secondary/20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Explore by Category */}
            <div className="max-w-3xl mx-auto text-center mb-12">
              <motion.div
                className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/60 text-accent text-xs font-semibold tracking-wide mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Learn what matters
              </motion.div>

              <motion.h2
                className="text-3xl md:text-4xl font-black mb-3 text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Explore by Category
                </span>
              </motion.h2>

              <motion.p
                className="text-base md:text-lg text-secondary font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Discover courses tailored to your interests and career goals.
              </motion.p>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-stretch">
              <div className="flex justify-center lg:justify-start">
                <CategoryCard
                  icon={<Code2 className="w-6 h-6" />}
                  title="Programming"
                  chips={["Web", "Mobile", "Backend"]}
                  description="JavaScript, Python, React, and more."
                />
              </div>

              <div className="flex justify-center">
                <CategoryCard
                  icon={<LineChart className="w-6 h-6" />}
                  title="Data Science"
                  chips={["Analytics", "ML", "SQL"]}
                  description="Python, R, SQL, and Big Data."
                />
              </div>

              <div className="flex justify-center">
                <CategoryCard
                  icon={<PenTool className="w-6 h-6" />}
                  title="Design"
                  chips={["UI/UX", "Branding", "Prototyping"]}
                  description="Figma, Adobe Suite, and more."
                />
              </div>

              <div className="flex justify-center lg:justify-end">
                <CategoryCard
                  icon={<Briefcase className="w-6 h-6" />}
                  title="Business"
                  chips={["Marketing", "Leadership", "Finance"]}
                  description="Digital Marketing, Management, Strategy."
                />
              </div>
            </div>
          </div>
        </section>


      </motion.section>

      {/* Enhanced Filters Section */}
      <motion.section
        className="py-8 bg-white border-b-2 border-subtle top-0 z-20 shadow-subtle backdrop-blur-sm bg-white/95"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-end relative">

            {/* Enhanced Search */}
            <motion.div
              className="relative flex-1 group"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
            >
              <div className="relative bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-xl border border-white/40 shadow-xl rounded-2xl p-1 group-hover:shadow-2xl group-hover:border-accent/50 transition-all duration-500">
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full pl-6 pr-16 py-5 bg-white/70 backdrop-blur-sm border-0 rounded-xl text-lg font-semibold text-primary placeholder:text-secondary/80 focus:placeholder:text-secondary/50 focus:bg-white focus:backdrop-blur-none shadow-inner focus:shadow-xl focus:ring-4 focus:ring-accent/20 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <motion.div
                  className="absolute right-5 top-1/2 -translate-y-1/2 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full p-3 group-hover:scale-110 transition-transform duration-300"
                // animate={{ rotate: 360 }}
                // transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  {/* Search Bar Icon */}
                  <Search className="w-5 h-5 text-accent drop-shadow-sm" />
                </motion.div>
                {/* Floating label - left aligned */}
                {/* <motion.span
                  className="absolute -top-3 left-5 px-3 py-1 bg-gradient-to-r from-accent to-primary text-xs font-bold text-dark rounded-full shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Quick Search
                </motion.span> */}
              </div>

            </motion.div>

            {/* Category Filter */}
            <motion.div
              className="relative w-full lg:w-auto lg:flex-1 max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label className="block text-xs font-bold text-primary/90 uppercase tracking-wider mb-2.5">Category</label>
              <div className="relative group">
                <div className="bg-gradient-to-r from-white/80 via-white/60 to-white/80 backdrop-blur-xl border border-white/40 shadow-lg rounded-xl p-1 hover:shadow-xl hover:border-accent/30 transition-all duration-300">
                  <select
                    className="appearance-none w-full bg-white/90 backdrop-blur-sm pl-5 pr-12 py-5 border-0 rounded-lg text-primary font-semibold text-base shadow-sm hover:shadow-md focus:shadow-xl focus:ring-4 focus:ring-accent/20 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-400"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className="bg-white/95 text-primary font-semibold">
                        {category}
                      </option>
                    ))}
                  </select>
                  <motion.div
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    animate={{ rotate: selectedCategory ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Filter className="w-5 h-5 text-accent drop-shadow-sm group-hover:scale-110 transition-transform duration-200" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Level Filter */}
            <motion.div
              className="relative w-full lg:w-auto lg:flex-1 max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <label className="block text-xs font-bold text-primary/90 uppercase tracking-wider mb-2.5">Level</label>
              <div className="relative group">
                <div className="bg-gradient-to-r from-white/80 via-white/60 to-white/80 backdrop-blur-xl border border-white/40 shadow-lg rounded-xl p-1 hover:shadow-xl hover:border-accent/30 transition-all duration-300">
                  <select
                    className="appearance-none w-full bg-white/90 backdrop-blur-sm pl-5 pr-12 py-5 border-0 rounded-lg text-primary font-semibold text-base shadow-sm hover:shadow-md focus:shadow-xl focus:ring-4 focus:ring-accent/20 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-400"
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                  >
                    {levels.map(level => (
                      <option key={level} value={level} className="bg-white/95 text-primary font-semibold">
                        {level}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent drop-shadow-sm group-hover:scale-110 transition-transform duration-200" />
                </div>
              </div>
            </motion.div>

            {/* Sort By */}
            <motion.div
              className="relative w-full lg:w-auto lg:flex-1 max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label className="block text-xs font-bold text-primary/90 uppercase tracking-wider mb-2.5">Sort By</label>
              <div className="relative group">
                <div className="bg-gradient-to-r from-accent/5 to-primary/5 backdrop-blur-xl border-2 border-accent/20 shadow-xl rounded-xl p-1 hover:shadow-2xl hover:border-accent/40 transition-all duration-400">
                  <select
                    className="appearance-none w-full bg-gradient-to-r from-white via-white/90 to-white pl-5 pr-12 py-5 border-0 rounded-lg text-primary font-bold text-base shadow-sm hover:shadow-md focus:shadow-2xl focus:ring-4 focus:ring-accent/30 focus:ring-offset-2 focus:ring-offset-accent/10 transition-all duration-400"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="popular" className="bg-white/95 text-primary font-semibold">Most Popular</option>
                    <option value="rating" className="bg-white/95 text-primary font-semibold">Highest Rated</option>
                    <option value="price-low" className="bg-white/95 text-primary font-semibold">Price: Low → High</option>
                    <option value="price-high" className="bg-white/95 text-primary font-semibold">Price: High → Low</option>
                  </select>
                  <ArrowUpDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent drop-shadow-sm group-hover:scale-110 transition-transform duration-200" />
                </div>
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
          {/* Enhanced Header with Stats */}
          <motion.div
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-16 lg:mb-20 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {/* Background shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5 -skew-x-12 -translate-x-1/2 opacity-50" />

            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-accent/80 to-primary/80 text-dark text-sm font-bold uppercase tracking-wider mb-4 shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {sortedCourses.length} Course{sortedCourses.length !== 1 ? 's' : ''} Found
              </motion.div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 bg-gradient-to-r from-primary via-accent to-dark bg-clip-text text-transparent leading-tight">
                Curated Collection
              </h2>
              <p className="text-xl text-secondary/90 font-semibold max-w-md">
                Choose from our expertly curated selection of {sortedCourses.length} premium courses
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-4 flex-wrap lg:flex-nowrap">
              <motion.div
                className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/50 min-w-[120px] text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <div className="text-2xl lg:text-3xl font-black text-primary mb-1">
                  {sortedCourses.length}
                </div>
                <div className="text-xs uppercase tracking-wider text-secondary/80 font-bold">Results</div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-accent/10 to-primary/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-accent/20 min-w-[120px] text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <div className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text mb-1">
                  4.8⭐
                </div>
                <div className="text-xs uppercase tracking-wider text-accent font-bold">Avg Rating</div>
              </motion.div>
            </div>
          </motion.div>

          {sortedCourses.length === 0 ? (
            /* Premium Empty State */
            <motion.div
              className="relative bg-gradient-to-br from-white/60 via-white/20 to-secondary/10 backdrop-blur-3xl rounded-3xl shadow-2xl border border-white/30 p-16 lg:p-24 max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {/* Animated background elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/10 rounded-3xl blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-tr from-secondary/20 to-accent/10 rounded-2xl blur-2xl animate-pulse delay-1000" />

              <motion.div
                className="relative w-28 h-28 bg-gradient-to-br from-accent/20 via-primary/10 to-secondary/20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl border-4 border-white/50 backdrop-blur-xl group"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", bounce: 0.4, delay: 0.6 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <BookOpen className="w-14 h-14 text-accent drop-shadow-xl group-hover:scale-110 transition-transform duration-300" />
              </motion.div>

              <motion.h3
                className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-primary via-accent to-dark bg-clip-text text-transparent mb-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                No courses match your search
              </motion.h3>

              <motion.p
                className="text-xl text-secondary/90 mb-8 max-w-lg mx-auto font-semibold leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                Try adjusting your filters or explore our full catalog of premium courses
              </motion.p>

              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-accent via-primary to-dark text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl border-2 border-transparent hover:border-white/50 overflow-hidden transition-all duration-400 transform hover:scale-105 hover:-translate-y-1"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Clear All Filters
                  <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -skew-x-12 transform -rotate-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </motion.button>

              <motion.div
                className="mt-12 flex flex-wrap gap-3 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                {categories.slice(0, 4).map((category, i) => (
                  <motion.button
                    key={category}
                    className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-semibold text-primary border border-white/50 hover:bg-white hover:shadow-md transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 + i * 0.1 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            /* Enhanced Grid */
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              {sortedCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      delay: 1 + index * 0.08,
                      type: "spring",
                      bounce: 0.3
                    }
                  }}
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
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


function CategoryCard({ icon, title, chips, description }) {
  return (
    <div className="w-full max-w-[260px]">
      <div className="relative bg-white rounded-2xl p-6 shadow-subtle border border-subtle/70
                      hover:border-accent hover:shadow-hover transition-all duration-300
                      group overflow-hidden cursor-pointer h-full">
        {/* soft corner light */}
        <div className="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full bg-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center
                          text-primary group-hover:bg-accent group-hover:text-white transition-all duration-300">
            {icon}
          </div>
          <h4 className="text-lg font-black text-primary">{title}</h4>
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {chips.map((chip) => (
            <span
              key={chip}
              className="px-2.5 py-1 rounded-full bg-secondary/70 text-[11px] font-semibold text-primary/90"
            >
              {chip}
            </span>
          ))}
        </div>

        <p className="text-xs text-secondary/80 font-medium">
          {description}
        </p>

        <div className="mt-4 pt-3 border-t border-subtle/60 flex items-center justify-between text-[11px] text-secondary/80">
          <span className="font-semibold">View courses</span>
          <span className="inline-flex items-center text-accent font-semibold group-hover:translate-x-1 transition-transform duration-300">
            Start now
            <span className="ml-1">→</span>
          </span>
        </div>
      </div>
    </div>
  );
}