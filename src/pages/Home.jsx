import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  Award, 
  TrendingUp,
  ChevronRight,
  PlayCircle
} from 'lucide-react';
import Layout from '../components/Layout';
import CourseCard from '../components/CourseCard';
import logo from '../assets/logo-em1.png';

const features = [
  {
    icon: BookOpen,
    title: 'Comprehensive Courses',
    description: 'Access hundreds of courses across various domains taught by industry experts.',
    details: 'From beginner to advanced levels, our curriculum is designed to take you from foundational concepts to expert skills.',
    stats: '200+ Courses'
  },
  {
    icon: Users,
    title: 'Expert Instructors',
    description: 'Learn from professionals with years of industry experience and proven track records.',
    details: 'Our instructors are industry leaders who bring real-world experience to the classroom.',
    stats: '50+ Experts'
  },
  {
    icon: Award,
    title: 'Certification',
    description: 'Earn recognized certificates upon course completion to boost your career prospects.',
    details: 'Get industry-recognized certifications that employers value and respect.',
    stats: '95% Placement'
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Advance your career with skills that are in high demand in today\'s job market.',
    details: 'Join our alumni network and access exclusive career services and job placement assistance.',
    stats: '10,000+ Graduates'
  }
];

const courses = [
  { id: 1, title: 'Web Development', level: 'Beginner', duration: '12 weeks' },
  { id: 2, title: 'Data Science', level: 'Intermediate', duration: '16 weeks' },
  { id: 3, title: 'Digital Marketing', level: 'Beginner', duration: '8 weeks' },
  { id: 4, title: 'UI/UX Design', level: 'Intermediate', duration: '10 weeks' },
  { id: 5, title: 'Mobile App Development', level: 'Advanced', duration: '14 weeks' },
  { id: 6, title: 'Cloud Computing', level: 'Intermediate', duration: '12 weeks' }
];

export default function Home() {
  return (
    <Layout>
      {/* Simple Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                Transform Your{' '}
                <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                  Career
                </span>{' '}
                With Expert Learning
              </h1>
              
              <p className="text-xl text-gray-700 max-w-2xl mb-8">
                Join thousands of students who have advanced their careers with our comprehensive online courses designed by industry experts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/courses" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  Explore Courses
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
                
                <button 
                  className="px-8 py-4 bg-white text-purple-700 font-medium rounded-lg hover:bg-purple-50 transition-all duration-300 border border-purple-200 flex items-center justify-center"
                >
                  <PlayCircle className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-purple-100 bg-white">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 aspect-video flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                    <img src={logo} alt="Elite Management Logo" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Interactive Learning Experience
                  </h3>
                  <p className="mt-2 text-gray-300">
                    Engaging content with hands-on projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10,000+', label: 'Students Enrolled' },
              { number: '200+', label: 'Courses Available' },
              { number: '95%', label: 'Job Placement Rate' },
              { number: '50+', label: 'Industry Experts' }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="mt-2 text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Choose <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Elite Management</span>?
            </h2>
            <p className="mt-4 text-xl text-gray-700">
              We provide everything you need to advance your career and achieve your goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-purple-100 hover:border-purple-300 transition-all duration-300 group shadow-sm"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-gray-600">{feature.description}</p>
                <div className="mt-4 pt-4 border-t border-purple-50">
                  <p className="text-sm text-gray-500">{feature.details}</p>
                  <div className="mt-3 inline-block px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">
                    {feature.stats}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Popular Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Popular <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Courses</span>
              </h2>
              <p className="mt-4 text-gray-700 max-w-2xl">
                Discover our most sought-after courses that have helped thousands of students achieve their career goals.
              </p>
            </div>
            <Link 
              to="/courses" 
              className="mt-4 md:mt-0 px-6 py-3 bg-white text-purple-700 rounded-lg hover:bg-purple-50 transition-all duration-300 border border-purple-200 flex items-center"
            >
              View All Courses
              <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="course-card"
              >
                <CourseCard course={{
                  id: course.id,
                  title: course.title,
                  level: course.level,
                  duration: course.duration,
                  instructor: 'Course Instructor',
                  rating: 4.5,
                  students: 1200,
                  price: 99,
                  category: 'General'
                }} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-purple-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 border border-purple-200">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Learning Journey</span>?
            </h2>
            <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with our courses.
            </p>
            <div className="mt-10">
              <Link 
                to="/courses" 
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}