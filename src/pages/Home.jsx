/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { Link, Route } from 'react-router-dom';
import {
  BookOpen,
  Users,
  Award,
  TrendingUp,
  ChevronRight,
  PlayCircle,
  Clock,
  Star,
  GraduationCap,
  RouteIcon,
  CrownIcon
} from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import AnimatedPageWrapper from '../components/AnimatedPageWrapper';
import FlipCard from '../components/FlipCard';
import { AnimatedOnScroll, StaggerContainer, StaggerItem, ParallaxElement } from '../hooks/useScrollAnimations.jsx';
import c1 from '../assets/c1.jfif';
import c2 from '../assets/c2.jfif';
import c3 from '../assets/c3.jfif';

const HeroSection = () => {
  // Sample course images - replace with your actual images
  const courses = [
    { id: 1, title: "Web Development", students: "2.5k", rating: 4.9 },
    { id: 2, title: "Data Science", students: "1.8k", rating: 4.8 },
    { id: 3, title: "UI/UX Design", students: "3.2k", rating: 4.9 },
    { id: 4, title: "Digital Marketing", students: "2.1k", rating: 4.7 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2F8F6] via-[#E6F3EF] to-[#D4ECE5] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-[#048E6C] rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-[#035642] rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#DDEAE6] shadow-sm"
            >
              <TrendingUp className="w-4 h-4 text-[#048E6C]" />
              <span className="text-sm font-semibold text-[#023F32]">
                #1 Online Learning Platform
              </span>
            </motion.div>

            {/* Main Heading */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-[#023F32] leading-tight"
              >
                Learn Today,
                <span className="block mt-2 bg-gradient-to-r from-[#035642] to-[#048E6C] bg-clip-text text-transparent">
                  Lead Tomorrow
                </span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-[#3E4F4B] leading-relaxed max-w-xl"
            >
              Master in-demand skills with expert-led courses. Join 50,000+ learners transforming their careers through quality education.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#035642] to-[#048E6C] flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#023F32]">50k+</div>
                  <div className="text-sm text-[#3E4F4B]">Active Students</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#035642] to-[#048E6C] flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#023F32]">200+</div>
                  <div className="text-sm text-[#3E4F4B]">Expert Courses</div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(3, 86, 66, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-[#035642] to-[#048E6C] text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl transition-all"
              >
                Get Started Free
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/60 backdrop-blur-sm text-[#035642] px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 border-2 border-[#DDEAE6] hover:border-[#048E6C] hover:bg-white transition-all"
              >
                <PlayCircle className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Course Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-[#DDEAE6] overflow-hidden"
                >
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#035642]/5 to-[#048E6C]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    {/* Icon/Image Placeholder */}
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#035642] to-[#048E6C] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Course Title */}
                    <h3 className="text-lg font-bold text-[#023F32] mb-3">
                      {course.title}
                    </h3>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-[#3E4F4B]">
                        <Users className="w-4 h-4" />
                        <span>{course.students}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#048E6C] font-semibold">
                        <Star className="w-4 h-4 fill-current" />
                        <span>{course.rating}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#048E6C] to-[#035642] rounded-2xl rotate-12 opacity-20 blur-sm"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#035642] to-[#048E6C] rounded-full opacity-20 blur-sm"
            />
          </motion.div>
        </div>
      </div>

      {/* Wave Decoration at Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
            fillOpacity="0.3"
          />
        </svg>
      </div>
    </div>
  );
};

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
  {
    id: 1,
    title: 'Web Development',
    level: 'Beginner',
    duration: '12 weeks',
    image: c1,
    description: 'Master HTML, CSS, JavaScript and modern frameworks',
    instructor: 'John Smith',
    rating: 4.8,
    students: 1200
  },
  {
    id: 2,
    title: 'Data Science',
    level: 'Intermediate',
    duration: '16 weeks',
    image: c2,
    description: 'Learn Python, Machine Learning and Data Analysis',
    instructor: 'Sarah Johnson',
    rating: 4.9,
    students: 980
  },
  {
    id: 3,
    title: 'Digital Marketing',
    level: 'Beginner',
    duration: '8 weeks',
    image: c3,
    description: 'Social Media, SEO, Content Marketing strategies',
    instructor: 'Mike Chen',
    rating: 4.7,
    students: 1500
  },
  {
    id: 4,
    title: 'UI/UX Design',
    level: 'Intermediate',
    duration: '10 weeks',
    image: c1,
    description: 'Design beautiful user interfaces and experiences',
    instructor: 'Emma Wilson',
    rating: 4.8,
    students: 850
  },
  {
    id: 5,
    title: 'Mobile App Development',
    level: 'Advanced',
    duration: '14 weeks',
    image: c2,
    description: 'Build iOS and Android apps with React Native',
    instructor: 'David Lee',
    rating: 4.9,
    students: 720
  },
  {
    id: 6,
    title: 'Cloud Computing',
    level: 'Intermediate',
    duration: '12 weeks',
    image: c3,
    description: 'AWS, Azure and cloud architecture fundamentals',
    instructor: 'Lisa Brown',
    rating: 4.7,
    students: 950
  }
];


export default function Home() {
  // Animation controls for stats section
  const statsControls = useAnimation();
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation controls for features section
  const featuresControls = useAnimation();
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation controls for courses section
  const coursesControls = useAnimation();
  const [coursesRef, coursesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation controls for CTA section
  const ctaControls = useAnimation();
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Trigger animations when elements come into view
  useEffect(() => {
    if (statsInView) {
      statsControls.start({ opacity: 1, y: 0 });
    }
    if (featuresInView) {
      featuresControls.start({ opacity: 1, y: 0 });
    }
    if (coursesInView) {
      coursesControls.start({ opacity: 1, y: 0 });
    }
    if (ctaInView) {
      ctaControls.start({ opacity: 1, y: 0 });
    }
  }, [statsInView, featuresInView, coursesInView, ctaInView, statsControls, featuresControls, coursesControls, ctaControls]);

  return (
    <AnimatedPageWrapper>
      <HeroSection />

      {/* Stats Section */}
      <AnimatedOnScroll
        className="py-12 bg-secondary"
        direction="up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: 10000, label: 'Students Enrolled', suffix: '+' },
                { number: 200, label: 'Courses Available', suffix: '+' },
                { number: 95, label: 'Job Placement Rate', suffix: '%' },
                { number: 50, label: 'Industry Experts', suffix: '+' }
              ].map((stat, index) => (
                <StaggerItem key={index} delay={index * 0.1}>
                  <motion.div
                    className="text-center bg-white rounded-2xl p-6 shadow-subtle border border-subtle transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-2xl font-black text-accent">
                        <CountUp
                          end={stat.number}
                          duration={2}
                          suffix={stat.suffix === '%' ? stat.suffix : '+'}
                          separator={","}
                          className="text-2xl font-black text-accent"
                        />
                      </div>
                    </div>
                    <div className="text-lg font-bold text-primary">{stat.label}</div>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </AnimatedOnScroll>

      {/* Features Section */}
      <AnimatedOnScroll
        className="py-20 bg-white"
        direction="up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedOnScroll
              className="text-4xl md:text-5xl font-black mb-4 text-primary"
              direction="up"
              delay={0}
            >
              Why Choose <span className="text-accent">Elite Management</span>?
            </AnimatedOnScroll>
            <AnimatedOnScroll
              className="mt-4 text-xl text-secondary font-medium"
              direction="up"
              delay={0.1}
            >
              We provide everything you need to advance your career and achieve your goals.
            </AnimatedOnScroll>
          </div>

          <StaggerContainer staggerDelay={0.1}>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <StaggerItem key={index} delay={index * 0.1}>
                    <motion.div
                      className="bg-white rounded-2xl p-6 border-2 border-subtle hover:border-accent transition-all duration-300 group shadow-subtle hover:shadow-hover"
                      whileHover={{ y: -10 }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-accent transition-all duration-300 mx-auto mb-6">
                        <feature.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-primary text-center mb-3">{feature.title}</h3>
                      <p className="text-secondary text-center mb-4">{feature.description}</p>
                      <div className="pt-4 border-t border-subtle">
                        <p className="text-sm text-secondary text-center mb-3">{feature.details}</p>
                        <div className="mt-2 inline-block px-4 py-2 bg-accent text-white rounded-full text-xs font-bold w-full text-center">
                          {feature.stats}
                        </div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <StaggerItem key={index} delay={index * 0.08}>
                  <motion.div
                    className="group relative glass-card p-6 lg:p-8 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/20 hover:border-accent/50 hover:shadow-3xl hover:shadow-accent/20 overflow-hidden h-full transition-all duration-500 cursor-pointer"
                    whileHover={{
                      y: -12,
                      scale: 1.02,
                      rotateX: 2,
                      rotateY: 2
                    }}
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    {/* Animated background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Floating glow orb */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000 -z-10" />

                    {/* Icon container with glass effect */}
                    <div className="relative z-10 w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-6 bg-white/20 backdrop-blur-xl rounded-3xl border-2 border-white/30 shadow-2xl flex items-center justify-center group-hover:bg-accent/90 group-hover:border-accent/50 group-hover:shadow-accent/25 transition-all duration-500 group-hover:scale-110">
                      <motion.div>
                        <feature.icon className="w-10 h-10 lg:w-12 lg:h-12 text-primary group-hover:text-white drop-shadow-2xl" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center">
                      <h3 className="text-2xl lg:text-3xl font-black mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-lg">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-secondary/90 font-medium mb-6 leading-relaxed max-w-xs mx-auto">
                        {feature.description}
                      </p>

                      {/* Details & Stats Section */}
                      <div className="pt-6 border-t border-white/20">
                        {/* <p className="text-sm text-secondary/80 mb-4 font-medium leading-relaxed">
                          {feature.details}
                        </p> */}

                        {/* Premium Stat Badge */}
                        <motion.div
                          className="group/stat relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent to-primary rounded-2xl font-bold shadow-2xl hover:shadow-3xl hover:shadow-accent/30 transition-all duration-400 overflow-hidden transform hover:scale-105"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="relative z-10 text-sm lg:text-base tracking-wide">
                            {feature.stats}
                          </span>

                          {/* Shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform"
                            initial={{ x: -100 }}
                            animate={{ x: '120%' }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          />

                          {/* Arrow accent */}
                          <motion.div
                            className="absolute right-3 flex items-center opacity-0 group-hover/stat:opacity-100 transition-all duration-300"
                            initial={{ x: 4 }}
                            animate={{ x: 0 }}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>

          </StaggerContainer>
        </div>
      </AnimatedOnScroll>

      {/* Popular Courses with Flip Cards */}
      <AnimatedOnScroll
        className="py-20 bg-secondary"
        direction="up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <AnimatedOnScroll
                className="text-4xl md:text-5xl font-black mb-4 text-primary"
                direction="up"
                delay={0}
              >
                Popular <span className="text-accent">Courses</span>
              </AnimatedOnScroll>
              <AnimatedOnScroll
                className="mt-4 text-secondary font-medium max-w-2xl"
                direction="up"
                delay={0.1}
              >
                Discover our most sought-after courses that have helped thousands of students achieve their career goals.
              </AnimatedOnScroll>
            </div>
            <AnimatedOnScroll
              className="mt-4 md:mt-0"
              direction="up"
              delay={0.2}
            >
              <Link
                to="/courses"
                className="btn btn-secondary px-6 py-3 shadow-subtle hover:shadow-hover"
              >
                View All Courses
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </AnimatedOnScroll>
          </div>

          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <StaggerItem key={course.id} delay={index * 0.1}>
                  <FlipCard
                    frontTitle={course.title}
                    frontText={`${course.level} • ${course.duration}`}
                    backTitle="Course Details"
                    backText={`${course.students} students • Rating: ${course.rating}/5 • Instructor: ${course.instructor} • ${course.description}`}
                    icon={<BookOpen size={32} />}
                  />
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </AnimatedOnScroll>

      {/* Testimonials Section */}
      <AnimatedOnScroll
        className="py-20 bg-white"
        direction="up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedOnScroll
              className="text-4xl md:text-5xl font-black mb-4 text-primary"
              direction="up"
              delay={0}
            >
              What Our <span className="text-accent">Students</span> Say
            </AnimatedOnScroll>
            <AnimatedOnScroll
              className="mt-4 text-xl text-secondary font-medium"
              direction="up"
              delay={0.1}
            >
              Hear from thousands of students who transformed their careers with our courses.
            </AnimatedOnScroll>
          </div>

          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Web Developer",
                  image: c1,
                  quote: "The course content was comprehensive and up-to-date. I landed my dream job within 2 months of completion!",
                  rating: 5
                },
                {
                  name: "Michael Chen",
                  role: "Data Scientist",
                  image: c2,
                  quote: "Excellent instructors and hands-on projects that really prepared me for the industry.",
                  rating: 5
                },
                {
                  name: "Priya Sharma",
                  role: "UX Designer",
                  image: c3,
                  quote: "The career services and mentorship were invaluable. I couldn't have made the career switch without this program.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <StaggerItem key={index} delay={index * 0.1}>
                  <motion.div
                    className="bg-secondary rounded-2xl p-8 border border-subtle shadow-subtle hover:shadow-hover transition-all duration-300 h-full"
                    whileHover={{ y: -10 }}
                  >
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-accent"
                      />
                      <div>
                        <h4 className="font-bold text-primary">{testimonial.name}</h4>
                        <p className="text-accent text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-accent fill-current" />
                      ))}
                    </div>
                    <p className="text-secondary italic">"{testimonial.quote}"</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </AnimatedOnScroll>

      {/* Learning Paths Section */}
      <AnimatedOnScroll
        className="py-20 bg-secondary"
        direction="up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedOnScroll
              className="text-4xl md:text-5xl font-black mb-4 text-primary"
              direction="up"
              delay={0}
            >
              Your <span className="text-accent">Learning Path</span>
            </AnimatedOnScroll>
            <AnimatedOnScroll
              className="mt-4 text-xl text-secondary font-medium"
              direction="up"
              delay={0.1}
            >
              Choose the right path for your career goals and skill level.
            </AnimatedOnScroll>
          </div>

          <StaggerContainer staggerDelay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Beginner Path",
                  description: "Start from scratch with foundational concepts",
                  icon: <GraduationCap className="w-12 h-12 text-accent" />,
                  courses: 8,
                  duration: "3-6 months"
                },
                {
                  title: "Intermediate Path",
                  description: "Advance your skills with practical projects",
                  icon: <RouteIcon className="w-12 h-12 text-accent" />,
                  courses: 12,
                  duration: "6-9 months"
                },
                {
                  title: "Expert Path",
                  description: "Master advanced concepts and industry practices",
                  icon: <CrownIcon className="w-12 h-12 text-accent" />,
                  courses: 15,
                  duration: "9-12 months"
                }
              ].map((path, index) => (
                <StaggerItem key={index} delay={index * 0.15}>
                  <motion.div
                    className="bg-white rounded-2xl p-8 border border-subtle shadow-subtle hover:shadow-hover transition-all duration-300 text-center"
                    whileHover={{ y: -10 }}
                  >
                    <div className="flex justify-center mb-6">
                      {path.icon}
                    </div>
                    <h3 className="text-2xl font-black text-primary mb-4">{path.title}</h3>
                    <p className="text-secondary mb-6">{path.description}</p>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-secondary">Courses:</span>
                        <span className="font-bold text-primary">{path.courses}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary">Duration:</span>
                        <span className="font-bold text-primary">{path.duration}</span>
                      </div>
                    </div>
                    <Link
                      to="/courses"
                      className="btn btn-primary w-full"
                    >
                      Start Path
                    </Link>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </AnimatedOnScroll>

      {/* CTA Section */}
      <AnimatedOnScroll
        className="py-20 bg-white"
        direction="up"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedOnScroll
            className="bg-primary rounded-3xl p-12 shadow-subtle relative overflow-hidden"
            direction="up"
            delay={0}
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent rounded-full opacity-30"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent rounded-full opacity-30"></div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <AnimatedOnScroll
                className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight"
                direction="up"
                delay={0.1}
              >
                Ready to Start Your <span className="text-accent">Learning Journey</span>?
              </AnimatedOnScroll>
              <AnimatedOnScroll
                className="text-xl text-secondary font-medium max-w-2xl mx-auto mb-10"
                direction="up"
                delay={0.2}
              >
                Join thousands of students who have transformed their careers with our courses.
              </AnimatedOnScroll>
              <StaggerContainer staggerDelay={0.1}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <StaggerItem delay={0.3}>
                    <Link
                      to="/courses"
                      className="btn btn-primary px-8 py-4"
                    >
                      Get Started Today
                    </Link>
                  </StaggerItem>
                  <StaggerItem delay={0.4}>
                    <Link
                      to="/contact"
                      className="btn btn-secondary px-8 py-4"
                    >
                      Contact Us
                    </Link>
                  </StaggerItem>
                </div>
              </StaggerContainer>
            </div>
          </AnimatedOnScroll>
        </div>
      </AnimatedOnScroll>

      {/* Industry Partners Section */}
      <AnimatedOnScroll
        className="py-20 bg-secondary"
        direction="up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedOnScroll
              className="text-4xl md:text-5xl font-black mb-4 text-primary"
              direction="up"
              delay={0}
            >
              Trusted by <span className="text-accent">Industry Leaders</span>
            </AnimatedOnScroll>
            <AnimatedOnScroll
              className="mt-4 text-xl text-secondary font-medium"
              direction="up"
              delay={0.1}
            >
              Our graduates are hired by top companies worldwide.
            </AnimatedOnScroll>
          </div>

          <div className="py-8">
            <Marquee speed={50} gradient={false}>
              {[
                { name: "Google", image: c1 },
                { name: "Microsoft", image: c2 },
                { name: "Amazon", image: c3 },
                { name: "Meta", image: c1 },
                { name: "Apple", image: c2 },
                { name: "Netflix", image: c3 }
              ].map((company, index) => (
                <div key={`${company.name}-${index}`} className="mx-8 flex flex-col items-center">
                  <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center p-4 border border-subtle shadow-subtle">
                    <img
                      src={company.image}
                      alt={company.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="mt-4 font-bold text-primary text-sm">{company.name}</span>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </AnimatedOnScroll>
    </AnimatedPageWrapper>
  );
}