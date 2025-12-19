/* eslint-disable no-unused-vars */
import React from 'react';
import { 
  Building2, 
  Users, 
  TrendingUp,
  Award,
  MapPin,
  Calendar,
  CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedPageWrapper from '../components/AnimatedPageWrapper';

const companies = [
  { name: 'Google', logo: 'google', positions: 12 },
  { name: 'Microsoft', logo: 'microsoft', positions: 8 },
  { name: 'Amazon', logo: 'amazon', positions: 15 },
  { name: 'Apple', logo: 'apple', positions: 6 },
  { name: 'Meta', logo: 'meta', positions: 9 },
  { name: 'Netflix', logo: 'netflix', positions: 4 }
];

const successStories = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Senior Software Engineer',
    company: 'Google',
    salary: '$145,000',
    course: 'Full Stack Web Development',
    testimonial: 'The skills I learned at Elite Management directly led to my dream job at Google. The career support team was instrumental in my success.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Data Scientist',
    company: 'Amazon',
    salary: '$132,000',
    course: 'Data Science with Python',
    testimonial: 'Elite Management not only taught me the technical skills I needed, but also helped me build a portfolio that impressed recruiters.'
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Product Manager',
    company: 'Microsoft',
    salary: '$158,000',
    course: 'Product Management',
    testimonial: 'The mentorship program connected me with industry professionals who guided me throughout my career transition.'
  }
];

const stats = [
  { number: '95%', label: 'Job Placement Rate' },
  { number: '$85K', label: 'Average Starting Salary' },
  { number: '500+', label: 'Companies Hiring Our Graduates' },
  { number: '10,000+', label: 'Successful Placements' }
];

const processSteps = [
  {
    icon: CheckCircle,
    title: 'Career Assessment',
    description: 'Evaluate your skills and interests to identify suitable career paths.'
  },
  {
    icon: Users,
    title: 'Resume Building',
    description: 'Create a professional resume that highlights your strengths.'
  },
  {
    icon: Building2,
    title: 'Interview Preparation',
    description: 'Practice with mock interviews and receive expert feedback.'
  },
  {
    icon: TrendingUp,
    title: 'Job Matching',
    description: 'Get matched with positions that align with your skills and goals.'
  }
];

export default function Placements() {
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight text-primary">
                  <span className="text-primary">Career </span>
                  <span className="block text-5xl md:text-6xl font-black text-accent mt-2">
                    Placement
                  </span>
                </h1>
                <p className="mt-6 text-xl text-secondary font-medium max-w-2xl leading-relaxed">
                  We don't just teach skills - we connect you with top companies and help you land your dream job.
                </p>
                <div className="mt-10">
                  <motion.button 
                    className="px-8 py-4 bg-accent text-white font-bold rounded-xl hover:bg-dark transition-all duration-300 shadow-subtle transform hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ y: -2 }}
                  >
                    View Job Openings
                  </motion.button>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-subtle border-2 border-subtle">
                  <div className="bg-primary aspect-video flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212, 236, 229,0.1)_0%,rgba(212, 236, 229,0)_70%)]"></div>
                    
                    <div className="text-center p-8 relative z-10">
                      <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-subtle">
                        <Building2 className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-black text-primary mb-2">Industry Partnerships</h3>
                      <p className="mt-2 text-secondary font-medium">Direct connections to top employers</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
        
        {/* Enhanced Stats */}
        <motion.section 
          className="py-16 bg-accent relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-white rounded-full opacity-5 blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-6 border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl md:text-5xl font-black text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="mt-2 text-white/90 font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        
        {/* Enhanced Companies Hiring */}
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
                className="text-4xl md:text-5xl font-black mb-4 text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-primary">Companies </span>
                <span className="text-accent">Hiring Our Graduates</span>
              </motion.h2>
              <motion.p 
                className="mt-4 text-xl text-secondary font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Leading organizations trust our graduates with critical roles
              </motion.p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {companies.map((company, index) => (
                <motion.div
                  key={index}
                  className="bg-secondary rounded-3xl p-8 border-2 border-subtle hover:border-accent transition-all duration-300 flex flex-col items-center justify-center text-center group shadow-subtle"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent transition-all duration-300 mb-4 shadow-subtle">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-black text-primary">{company.name}</h3>
                  <p className="mt-2 text-accent text-sm font-bold">{company.positions} positions</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        
        {/* Enhanced Success Stories */}
        <motion.section 
          className="py-20 bg-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 
                className="text-4xl md:text-5xl font-black mb-4 text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-primary">Success </span>
                <span className="text-accent">Stories</span>
              </motion.h2>
              <motion.p 
                className="mt-4 text-xl text-secondary font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Hear from our graduates who have transformed their careers
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  className="bg-white rounded-3xl p-8 border-2 border-subtle hover:border-accent transition-all duration-300 shadow-subtle"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center shadow-subtle">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-black text-primary">{story.name}</h3>
                      <p className="text-secondary font-bold">{story.role}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6 space-y-2">
                    <div className="flex items-center text-accent">
                      <Building2 className="w-4 h-4 mr-2" />
                      <span className="font-bold">{story.company}</span>
                    </div>
                    <div className="flex items-center text-accent">
                      <Award className="w-4 h-4 mr-2" />
                      <span className="font-bold">{story.salary}</span>
                    </div>
                  </div>
                  
                  <p className="text-secondary mb-4 font-medium">
                    <span className="font-black text-primary">Course:</span> {story.course}
                  </p>
                  
                  <p className="text-secondary italic font-medium">"{story.testimonial}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        
        {/* Enhanced Placement Process */}
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
                className="text-4xl md:text-5xl font-black mb-4 text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-primary">Our </span>
                <span className="text-accent">Placement Process</span>
              </motion.h2>
              <motion.p 
                className="mt-4 text-xl text-secondary font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                A structured approach to help you secure your dream job
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-secondary rounded-3xl p-8 border-2 border-subtle hover:border-accent transition-all duration-300 text-center group shadow-subtle"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent transition-all duration-300 mx-auto mb-6 shadow-subtle">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-black mb-3 text-primary">{step.title}</h3>
                  <p className="text-secondary font-medium">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        
        {/* Enhanced CTA */}
        <motion.section 
          className="py-20 bg-accent relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-white rounded-full opacity-5 blur-3xl"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Ready to Launch Your <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">Career?</span>
              </h2>
              <p className="mt-4 text-xl text-white/90 font-medium max-w-2xl mx-auto">
                Join thousands of successful graduates who found their dream jobs through our placement program.
              </p>
              <div className="mt-10">
                <motion.button 
                  className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-secondary transition-all duration-300 shadow-subtle transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ y: -2 }}
                  viewport={{ once: true }}
                >
                  Get Started Today
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </AnimatedPageWrapper>
    );
  }