import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Search, 
  Filter,
  ChevronDown,
  ArrowUpDown
} from 'lucide-react';
import Layout from '../components/Layout';
import CourseCard from '../components/CourseCard';

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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-purple-100 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Explore Our <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Courses</span>
            </h1>
            <p className="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
              Discover hundreds of courses designed to help you master new skills and advance your career.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-purple-50 border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses..."
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
              <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
            
            {/* Level Filter */}
            <div className="relative">
              <select
                className="appearance-none pl-4 pr-10 py-3 bg-white border border-purple-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                {levels.map(level => (
                  <option key={level} value={level} className="bg-white">{level}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
            
            {/* Sort By */}
            <div className="relative">
              <select
                className="appearance-none pl-4 pr-10 py-3 bg-white border border-purple-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popular" className="bg-white">Most Popular</option>
                <option value="rating" className="bg-white">Highest Rated</option>
                <option value="price-low" className="bg-white">Price: Low to High</option>
                <option value="price-high" className="bg-white">Price: High to Low</option>
              </select>
              <ArrowUpDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-bold">
              {sortedCourses.length} Course{sortedCourses.length !== 1 ? 's' : ''} Found
            </h2>
          </div>
          
          {sortedCourses.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No courses found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more courses.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sortedCourses.map((course) => (
                <div
                  key={course.id}
                >
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}