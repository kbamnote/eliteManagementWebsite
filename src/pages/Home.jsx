import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  Award, 
  TrendingUp,
  ChevronRight,
  PlayCircle,
  Clock,
  Star
} from 'lucide-react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import Layout from '../components/Layout';
import AnimatedPageWrapper from '../components/AnimatedPageWrapper';
import FlipCard from '../components/FlipCard';
import c1 from '../assets/c1.jfif';
import c2 from '../assets/c2.jfif';
import c3 from '../assets/c3.jfif';

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

// Connected Particles Component
function ConnectedParticles() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    // Create particles
    const particleCount = 80;
    particlesRef.current = [];

    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      });
    }

    // Mouse move handler
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Move particle
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        // Mouse attraction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 150) {
          particle.x += dx * 0.02;
          particle.y += dy * 0.02;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(99, 102, 241, 0.6)';
        ctx.fill();

        // Draw connections
        particlesRef.current.forEach((otherParticle, j) => {
          if (i !== j) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(99, 102, 241, ${0.3 * (1 - distance / 120)})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ width: '100%', height: '100%' }}
    />
  );
}

export default function Home() {
  return (
    <Layout>
      <AnimatedPageWrapper>
        {/* Enhanced Hero Section with Connected Particles */}
        <motion.section 
          className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden flex items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Connected Particle Background */}
          <div className="absolute inset-0 z-0">
            <ConnectedParticles />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
              <motion.div
                className="flex flex-col justify-center"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                  Transform Your Career
                  <span className="block text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent mt-3">
                    With Expert Learning
                  </span>
                </h1>
                                      
                <p className="text-xl md:text-2xl text-slate-700 font-medium max-w-2xl mb-8 leading-relaxed">
                  Join thousands of students who have advanced their careers with our comprehensive online courses designed by industry experts.
                </p>
                                      
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Courses
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </motion.button>
                                  
                  <motion.button
                    className="px-8 py-4 bg-white text-indigo-700 font-bold border-2 border-indigo-300 rounded-xl hover:bg-indigo-50 transition-all duration-300 flex items-center justify-center text-base shadow-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <PlayCircle className="mr-2 w-5 h-5" />
                    Watch Demo
                  </motion.button>
                </div>
              </motion.div>
              
              {/* Floating decorative spheres */}
              <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-25 blur-xl"></div>
                                  
              <motion.div 
                className="rounded-3xl overflow-hidden shadow-2xl border border-indigo-200 bg-white relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 min-h-[400px] flex items-center justify-center relative p-8 rounded-2xl">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_70%)] rounded-2xl"></div>
                  
                  <div className="w-full max-w-6xl mx-auto overflow-hidden relative z-20">
                    <h3 className="text-4xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent text-center mb-10">
                      Featured Courses
                    </h3>
                                        
                    <motion.div
                      className="flex gap-8"
                      animate={{ x: [0, -350 * 3] }}
                      transition={{
                        x: {
                          duration: 10,
                          repeat: Infinity,
                          ease: 'linear'
                        }
                      }}
                    >
                      {[c1, c2, c3, c1, c2, c3, c1, c2, c3].map((image, index) => (
                        <motion.div
                          key={index}
                          className="flex-shrink-0 w-72 h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30"
                          whileHover={{ 
                            y: -12,
                            scale: 1.05,
                            transition: { duration: 0.3 }
                          }}
                        >
                          <img 
                            src={image} 
                            alt={`Course ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
        
        {/* Stats Section */}
        <motion.section 
          className="py-12 bg-gradient-to-r from-slate-50 via-indigo-50 to-purple-50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: 10000, label: 'Students Enrolled', suffix: '+' },
                { number: 200, label: 'Courses Available', suffix: '+' },
                { number: 95, label: 'Job Placement Rate', suffix: '%' },
                { number: 50, label: 'Industry Experts', suffix: '+' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white rounded-2xl p-6 shadow-lg border border-indigo-200 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      {stat.suffix === '%' ? stat.number + stat.suffix : stat.number.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-lg font-bold text-slate-800">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        
        {/* Features Section */}
        <motion.section 
          className="py-20 bg-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 
                className="text-4xl md:text-5xl font-black mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Why Choose </span>
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Elite Management</span>
                <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">?</span>
              </motion.h2>
              <motion.p 
                className="mt-4 text-xl text-slate-600 font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                We provide everything you need to advance your career and achieve your goals.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-6 border-2 border-indigo-100 hover:border-indigo-400 transition-all duration-300 group shadow-lg hover:shadow-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center group-hover:from-indigo-200 group-hover:to-purple-200 transition-all duration-300 mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 text-center mb-3">{feature.title}</h3>
                  <p className="text-slate-600 text-center mb-4">{feature.description}</p>
                  <div className="pt-4 border-t border-indigo-100">
                    <p className="text-sm text-slate-500 text-center mb-3">{feature.details}</p>
                    <div className="mt-2 inline-block px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-xs font-bold w-full text-center">
                      {feature.stats}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        
        {/* Popular Courses with Flip Cards */}
        <motion.section 
          className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <motion.h2 
                  className="text-4xl md:text-5xl font-black mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Popular </span>
                  <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">Courses</span>
                </motion.h2>
                <motion.p 
                  className="mt-4 text-slate-600 font-medium max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Discover our most sought-after courses that have helped thousands of students achieve their career goals.
                </motion.p>
              </div>
              <Link 
                to="/courses" 
                className="mt-4 md:mt-0 px-6 py-3 bg-white text-indigo-700 rounded-lg hover:bg-indigo-50 transition-all duration-300 border-2 border-indigo-200 flex items-center font-bold shadow-md hover:shadow-lg"
              >
                View All Courses
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <FlipCard 
                    frontTitle={course.title}
                    frontText={`${course.level} • ${course.duration}`}
                    backTitle="Course Details"
                    backText={`${course.students} students • Rating: ${course.rating}/5 • Instructor: ${course.instructor} • ${course.description}`}
                    icon={<BookOpen size={32} />}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        
        {/* CTA Section */}
        <motion.section 
          className="py-20 bg-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500 rounded-full opacity-30"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-500 rounded-full opacity-30"></div>
              
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Ready to Start Your <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">Learning Journey</span>?
                </h2>
                <p className="text-xl text-indigo-100 font-medium max-w-2xl mx-auto mb-10">
                  Join thousands of students who have transformed their careers with our courses.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/courses" 
                    className="inline-block px-8 py-4 bg-white text-indigo-700 font-bold rounded-lg hover:bg-indigo-50 transition-all duration-300 shadow-lg transform hover:scale-105"
                  >
                    Get Started Today
                  </Link>
                  <Link 
                    to="/contact" 
                    className="inline-block px-8 py-4 bg-transparent text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 border-2 border-white transform hover:scale-105"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </AnimatedPageWrapper>
    </Layout>
  );
}