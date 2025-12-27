/* eslint-disable no-unused-vars */
import React from 'react';
import { 
  Building2, 
  Users, 
  TrendingUp,
  Award,
  MapPin,
  Calendar,
  CheckCircle,
  ArrowRight,
  Zap,
  Network,
  TrendingUp as GrowthIcon,
  Heart
} from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedPageWrapper from '../components/AnimatedPageWrapper';
import FlipCard from '../components/FlipCard';

const placementServices = [
  {
    icon: Building2,
    title: 'Job Matching',
    description: 'We connect you with top companies that match your skills and career goals.',
    features: [
      'Company partnerships',
      'Job matching algorithm',
      'Career guidance',
      'Placement assistance'
    ]
  },
  {
    icon: Users,
    title: 'Resume & Portfolio Building',
    description: 'Create a professional resume and portfolio that highlights your strengths and impresses recruiters.',
    features: [
      'Professional resume creation',
      'Portfolio development',
      'LinkedIn optimization',
      'Personal branding'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Interview Preparation',
    description: 'Practice with mock interviews and receive expert feedback to boost your confidence.',
    features: [
      'Mock interviews',
      'Technical interview prep',
      'Behavioral interview training',
      'Feedback and improvement strategies'
    ]
  }
];

const placementProcess = [
  {
    number: '01',
    title: 'Skills Assessment',
    description: 'Evaluate your technical and soft skills to identify placement opportunities.'
  },
  {
    number: '02',
    title: 'Resume & Profile Optimization',
    description: 'Enhance your resume and online profiles to attract top employers.'
  },
  {
    number: '03',
    title: 'Interview Preparation',
    description: 'Intensive training to excel in technical and HR interviews.'
  },
  {
    number: '04',
    title: 'Job Placement',
    description: 'Direct placement assistance with our industry partners.'
  }
];

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

export default function Placements() {
  return (
    <AnimatedPageWrapper>
        {/* Enhanced Hero Section */}
        <motion.section 
          className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-secondary to-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent rounded-full opacity-10 blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent rounded-full opacity-10 blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent rounded-full opacity-5 blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                  <span className="text-accent font-semibold text-sm">PROFESSIONAL PLACEMENT SERVICES</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-primary">
                  <span className="block text-primary mb-2">Secure Your</span>
                  <span className="block text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-accent to-dark bg-clip-text text-transparent">
                    Dream Job
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-secondary font-medium max-w-2xl leading-relaxed">
                  We don't just teach skills - we connect you with top companies and help you land your dream job. Our comprehensive placement program ensures your success in the professional world.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <motion.button 
                    className="px-8 py-4 bg-gradient-to-l from-[#08ff86] to-[#187648] text-white font-bold rounded-xl hover:from-accent hover:to-accent transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    style={{backgroundColor:'#187648ff'}}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ y: -2 }}
                  >
                    View Job Openings
                  </motion.button>
                  
                  <motion.button 
                    className="px-8 py-4 bg-white text-primary font-bold rounded-xl border-2 border-subtle hover:border-accent transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ y: -2 }}
                  >
                    Explore Services
                  </motion.button>
                </div>
                
                <div className="flex items-center space-x-8 pt-4">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-accent">95%</div>
                    <div className="text-secondary text-sm mt-1">Placement Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-accent">$85K</div>
                    <div className="text-secondary text-sm mt-1">Avg. Salary</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-accent">500+</div>
                    <div className="text-secondary text-sm mt-1">Companies</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-gradient-to-br from-[#5f9ea017] to-secondary aspect-video flex items-center justify-center relative p-8">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212, 236, 229,0.1)_0%,rgba(212, 236, 229,0)_70%)]"></div>
                    
                    <div className="text-center relative z-10 space-y-6">
                      <div className="w-32 h-32 bg-gradient-to-br from-accent to-dark rounded-full flex items-center justify-center mx-auto shadow-2xl">
                        <Building2 className="w-16 h-16" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-3">Professional Placement Support</h3>
                        <p className="text-secondary font-medium text-lg mb-6">Direct connections to top employers</p>
                        <div className="flex justify-center space-x-4">
                          <div className="w-3 h-3 bg-accent rounded-full"></div>
                          <div className="w-3 h-3 bg-accent/60 rounded-full"></div>
                          <div className="w-3 h-3 bg-accent/30 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
              </motion.div>
            </div>
          </div>
        </motion.section>
        
        {/* Enhanced Services */}
        <motion.section 
          className="py-16 md:py-20 bg-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4 text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-primary">Our Professional </span>
                <span className="text-accent">Placement Services</span>
              </motion.h2>
              <motion.p 
                className="mt-4 text-lg md:text-xl text-secondary font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Comprehensive placement services designed to accelerate your career growth
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {placementServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden border border-subtle hover:border-accent transition-all duration-300 group shadow-lg hover:shadow-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -8 }}
                  viewport={{ once: true }}
                >
                  <div className="p-8">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center group-hover:from-accent group-hover:to-dark transition-all duration-300 shadow-lg group-hover:shadow-xl">
                      <service.icon className="w-8 h-8 text-primary group-hover:text-white" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-primary">{service.title}</h3>
                    <p className="mt-3 text-secondary font-medium">{service.description}</p>
                    <ul className="mt-5 space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-secondary font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-4">
                      <div className="flex justify-center">
                        <div className="w-12 h-1 rounded-full" style={{backgroundColor:'#069a3c'}}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        
        {/* Enhanced Flip Cards Section */}
        <motion.section 
          className="py-16 md:py-20 bg-gradient-to-br from-white to-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4 text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-primary">Placement </span>
                <span className="text-accent">Insights</span>
              </motion.h2>
              <motion.p 
                className="mt-4 text-lg md:text-xl text-secondary font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Discover key aspects of job placement through our interactive cards
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex justify-center">
                <FlipCard 
                  frontTitle="Skills" 
                  frontText="Essential abilities for placement success" 
                  backTitle="Development" 
                  backText="Continuous learning and improvement strategies" 
                  icon={<Zap className="text-[#ffe300]" size={35} />}
                />
              </div>
              <div className="flex justify-center">
                <FlipCard 
                  frontTitle="Interview" 
                  frontText="Mastering the interview process" 
                  backTitle="Preparation" 
                  backText="Tips and techniques for interview success" 
                  icon={<Network className="text-[#10cfb0]" size={35} />}
                />
              </div>
              <div className="flex justify-center">
                <FlipCard 
                  frontTitle="Resume" 
                  frontText="Crafting the perfect resume" 
                  backTitle="Optimization" 
                  backText="Making your resume stand out to recruiters" 
                  icon={<GrowthIcon className="text-[#fd6a49]" size={35} />}
                />
              </div>
              <div className="flex justify-center">
                <FlipCard 
                  frontTitle="Placement" 
                  frontText="Securing your dream job" 
                  backTitle="Success" 
                  backText="Strategies for successful job placement" 
                  icon={<Heart className="text-[#ff0000]" size={35} />}
                />
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Enhanced Stats */}
        <motion.section 
          className="py-16 md:py-20 bg-gradient-to-br from-white to-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-12 text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-primary">Our Placement </span>
                <span className="text-accent">Success</span>
              </motion.h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-secondary font-bold">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Enhanced Companies Hiring Marquee */}
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
                className="text-3xl md:text-4xl font-bold mb-4 text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-primary">Companies </span>
                <span className="text-accent">Hiring Our Graduates</span>
              </motion.h2>
              <motion.p 
                className="mt-4 text-lg md:text-xl text-secondary font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Leading organizations trust our graduates with critical roles
              </motion.p>
            </div>
            
            <div className="relative overflow-hidden py-8">
              <div className="flex animate-marquee whitespace-nowrap">
                {[...companies, ...companies].map((company, index) => (
                  <motion.div
                    key={index}
                    className="mx-6 bg-secondary rounded-2xl p-8 border border-subtle hover:border-accent transition-all duration-300 flex flex-col items-center justify-center text-center group shadow-lg hover:shadow-2xl"
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-dark flex items-center justify-center group-hover:from-dark group-hover:to-accent transition-all duration-300 mb-4 shadow-lg group-hover:shadow-xl">
                      <Building2 className="w-8 h-8 text-dark" />
                    </div>
                    <h3 className="text-lg font-bold text-primary">{company.name}</h3>
                    <p className="mt-2 text-accent text-sm font-bold">{company.positions} positions</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Enhanced Success Stories */}
        <motion.section 
          className="py-20 bg-gradient-to-br from-white to-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4 text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-primary">Success </span>
                <span className="text-accent">Stories</span>
              </motion.h2>
              <motion.p 
                className="mt-4 text-lg md:text-xl text-secondary font-medium"
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
                  className="bg-white rounded-2xl overflow-hidden border border-subtle hover:border-accent transition-all duration-300 group shadow-lg hover:shadow-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -8 }}
                  viewport={{ once: true }}
                >
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center group-hover:from-accent group-hover:to-dark transition-all duration-300 shadow-lg group-hover:shadow-xl">
                        <Users className="w-8 h-8 text-primary group-hover:text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-primary">{story.name}</h3>
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
                      <span className="font-bold text-primary">Course:</span> {story.course}
                    </p>
                    
                    <p className="text-secondary italic font-medium">"{story.testimonial}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        
        {/* Enhanced Process */}
        <motion.section 
          className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-white to-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
          </div>
                  
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <motion.div
                className="inline-block px-6 py-3 bg-accent/10 rounded-full border border-accent/20 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-accent font-bold text-lg">OUR METHOD</span>
              </motion.div>
                      
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Our Placement Process
              </motion.h2>
                            
              <motion.p 
                className="text-lg md:text-xl text-secondary font-medium max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                A structured approach to job placement that delivers exceptional results
              </motion.p>
            </div>
                    
            <div className="relative">
              {/* Enhanced Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-accent to-transparent hidden md:block transform -translate-x-1/2"></div>
                      
              <div className="space-y-16">
                {placementProcess.map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <div className="md:w-5/12 flex justify-center">
                      <div className="text-center md:text-right max-w-sm">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-dark flex items-center justify-center text-dark font-bold text-3xl shadow-2xl mx-auto md:mx-0">
                          {step.number}
                        </div>
                        <h3 className="mt-6 text-xl md:text-2xl font-bold text-primary">{step.title}</h3>
                        <p className="mt-3 text-secondary font-medium">{step.description}</p>
                      </div>
                    </div>
                                        
                    <div className="md:w-2/12 flex justify-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff9134] to-secondary border-4 border-[#ff9134] shadow-2xl z-10 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-[#ff9134]"></div>
                      </div>
                    </div>
                                        
                    <div className="md:w-5/12 flex justify-center">
                      <div className="bg-gradient-to-br from-white to-secondary rounded-3xl p-8 border border-subtle shadow-2xl hover:shadow-2xl transition-all duration-500 max-w-md w-full">
                        <div className="flex items-center mb-6">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-dark flex items-center justify-center shadow-xl mr-4">
                            {index === 0 && <TrendingUp className="w-7 h-7 text-dark" />}
                            {index === 1 && <Users className="w-7 h-7 text-dark" />}
                            {index === 2 && <Building2 className="w-7 h-7 text-dark" />}
                            {index === 3 && <Calendar className="w-7 h-7 text-dark" />}
                          </div>
                          <h4 className="font-bold text-primary text-xl">What to Expect</h4>
                        </div>
                        <p className="text-secondary font-medium text-lg">
                          {index === 0 && "We evaluate your technical and soft skills to identify the best placement opportunities for your profile."}
                          {index === 1 && "We enhance your resume and online profiles to make them attractive to top employers and recruiters."}
                          {index === 2 && "We provide intensive training to help you excel in both technical and HR interview rounds."}
                          {index === 3 && "We connect you directly with our industry partners for placement opportunities."}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Enhanced CTA */}
        <motion.section 
          className="py-16 md:py-20 bg-gradient-to-br from-accent to-primary relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Ready to Launch Your <span className="bg-gradient-to-r from-white to-secondary bg-clip-text text-[#23cccc]">Dream Job?</span>
              </h2>
              <p className="mt-3 text-lg text-dark/90 font-medium max-w-2xl mx-auto">
                Join thousands of successful graduates who found their dream jobs through our placement program.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-white to-secondary text-primary font-bold rounded-xl hover:from-white hover:to-secondary transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ y: -2 }}
                  viewport={{ once: true }}
                >
                  Get Started Today
                  <ArrowRight className="ml-3 w-5 h-5" />
                </motion.button>
                <motion.button 
                  className="px-8 py-4 bg-transparent text-dark font-bold rounded-xl hover:bg-white/10 transition-all duration-300 border-2 border-primary transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -2 }}
                  viewport={{ once: true }}
                >
                  View Job Openings
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </AnimatedPageWrapper>
    );
  }