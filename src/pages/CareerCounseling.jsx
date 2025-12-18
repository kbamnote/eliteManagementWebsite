/* eslint-disable no-unused-vars */
import React from 'react';
import { 
  Briefcase, 
  TrendingUp, 
  Users,
  Calendar,
  CheckCircle,
  ArrowRight,
  Zap,
  Network,
  TrendingUp as GrowthIcon,
  Heart
} from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import AnimatedPageWrapper from '../components/AnimatedPageWrapper';
import FlipCard from '../components/FlipCard';

const services = [
  {
    icon: Briefcase,
    title: 'Career Assessment',
    description: 'Comprehensive evaluation of your skills, interests, and personality to identify ideal career paths.',
    features: [
      'Personality assessment',
      'Skills evaluation',
      'Interest mapping',
      'Detailed report with recommendations'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Skill Development Planning',
    description: 'Personalized roadmap to acquire the skills needed for your target career.',
    features: [
      'Gap analysis',
      'Learning pathway',
      'Resource recommendations',
      'Progress tracking'
    ]
  },
  {
    icon: Users,
    title: 'Mentorship Program',
    description: 'Connect with industry professionals for guidance and networking opportunities.',
    features: [
      'One-on-one mentoring sessions',
      'Industry insights',
      'Networking events',
      'Career advice and support'
    ]
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'Free 30-minute consultation to discuss your career goals and challenges.'
  },
  {
    number: '02',
    title: 'Comprehensive Assessment',
    description: 'In-depth evaluation using industry-standard tools and techniques.'
  },
  {
    number: '03',
    title: 'Personalized Plan',
    description: 'Custom roadmap tailored to your unique situation and aspirations.'
  },
  {
    number: '04',
    title: 'Implementation Support',
    description: 'Ongoing guidance as you execute your career development plan.'
  }
];

export default function CareerCounseling() {
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
            <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full opacity-20 blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Career </span>
                  <span className="block text-5xl md:text-6xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
                    Counseling
                  </span>
                </h1>
                <p className="mt-6 text-xl text-slate-700 font-medium max-w-2xl leading-relaxed">
                  Unlock your potential with personalized career guidance from industry experts. Navigate your professional journey with confidence.
                </p>
                <div className="mt-10">
                  <motion.button 
                    className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-xl transform hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ y: -2 }}
                  >
                    Schedule Free Consultation
                  </motion.button>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-indigo-200">
                  <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 aspect-video flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_70%)]"></div>
                    
                    <div className="text-center p-8 relative z-10">
                      <div className="w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <Briefcase className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-black text-white mb-2">Professional Career Guidance</h3>
                      <p className="mt-2 text-indigo-200 font-medium">Personalized plans for your success</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
        
        {/* Enhanced Services */}
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
                <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Our </span>
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
              </motion.h2>
              <motion.p 
                className="mt-4 text-xl text-slate-600 font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Comprehensive career counseling services designed to accelerate your professional growth
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-white to-indigo-50 rounded-3xl overflow-hidden border-2 border-indigo-100 hover:border-indigo-400 transition-all duration-300 group shadow-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                  viewport={{ once: true }}
                >
                  <div className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center group-hover:from-indigo-200 group-hover:to-purple-200 transition-all duration-300 shadow-md">
                      <service.icon className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="mt-6 text-xl font-black text-slate-800">{service.title}</h3>
                    <p className="mt-3 text-slate-600 font-medium">{service.description}</p>
                    <ul className="mt-6 space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0" />
                          <span className="text-slate-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        
        {/* Enhanced Flip Cards Section */}
        <motion.section 
          className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50"
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
                <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Career </span>
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">Insights</span>
              </motion.h2>
              <motion.p 
                className="mt-4 text-xl text-slate-600 font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Discover key aspects of career development through our interactive cards
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <FlipCard 
                frontTitle="Skills" 
                frontText="Essential abilities for career success" 
                backTitle="Development" 
                backText="Continuous learning and improvement strategies" 
                icon={<Zap size={40} />}
              />
              <FlipCard 
                frontTitle="Networking" 
                frontText="Building professional relationships" 
                backTitle="Opportunities" 
                backText="Creating valuable connections in your field" 
                icon={<Network size={40} />}
              />
              <FlipCard 
                frontTitle="Growth" 
                frontText="Advancing in your career path" 
                backTitle="Strategies" 
                backText="Effective approaches for professional advancement" 
                icon={<GrowthIcon size={40} />}
              />
              <FlipCard 
                frontTitle="Balance" 
                frontText="Managing work and personal life" 
                backTitle="Wellness" 
                backText="Maintaining health and satisfaction in all areas" 
                icon={<Heart size={40} />}
              />
            </div>
          </div>
        </motion.section>
        
        {/* Enhanced Process */}
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
                <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Our </span>
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">Process</span>
              </motion.h2>
              <motion.p 
                className="mt-4 text-xl text-slate-600 font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                A structured approach to career development that delivers results
              </motion.p>
            </div>
            
            <div className="relative">
              {/* Enhanced Timeline line */}
              <div className="absolute left-8 top-12 bottom-12 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 hidden md:block rounded-full"></div>
              
              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative grid grid-cols-1 md:grid-cols-12 gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="md:col-span-5 flex items-center">
                      <div className={`flex items-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        <div className="md:text-right md:pr-8">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-black text-xl shadow-xl">
                            {step.number}
                          </div>
                          <h3 className="mt-4 text-xl font-black text-slate-800">{step.title}</h3>
                          <p className="mt-2 text-slate-600 font-medium">{step.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2 hidden md:flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 border-4 border-white shadow-lg z-10"></div>
                    </div>
                    
                    <div className="md:col-span-5 flex items-center">
                      <div className="md:pl-8">
                        <div className="bg-gradient-to-br from-white to-indigo-50 rounded-3xl p-6 border-2 border-indigo-100 h-full shadow-xl hover:shadow-2xl transition-all duration-300">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center shadow-md">
                              {index === 0 && <Calendar className="w-6 h-6 text-indigo-600" />}
                              {index === 1 && <TrendingUp className="w-6 h-6 text-purple-600" />}
                              {index === 2 && <Briefcase className="w-6 h-6 text-pink-600" />}
                              {index === 3 && <Users className="w-6 h-6 text-cyan-600" />}
                            </div>
                            <h4 className="ml-4 font-black text-slate-800">What to Expect</h4>
                          </div>
                          <p className="text-slate-600 font-medium">
                            {index === 0 && "During our initial meeting, we'll discuss your career aspirations, current challenges, and what you hope to achieve through counseling."}
                            {index === 1 && "We'll conduct a thorough assessment using validated tools to understand your strengths, weaknesses, interests, and values."}
                            {index === 2 && "Based on our findings, we'll create a customized career development plan with actionable steps and timelines."}
                            {index === 3 && "We'll provide ongoing support as you implement your plan, with regular check-ins and adjustments as needed."}
                          </p>
                        </div>
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
          className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Decorative elements */}
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
                Ready to Transform Your <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">Career?</span>
              </h2>
              <p className="mt-4 text-xl text-indigo-100 font-medium max-w-2xl mx-auto">
                Take the first step towards a fulfilling career with our expert guidance.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  className="px-8 py-4 bg-white text-indigo-700 font-bold rounded-xl hover:bg-indigo-50 transition-all duration-300 shadow-xl flex items-center justify-center transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ y: -2 }}
                  viewport={{ once: true }}
                >
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
                <motion.button 
                  className="px-8 py-4 bg-transparent text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 border-2 border-white transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -2 }}
                  viewport={{ once: true }}
                >
                  View Pricing Plans
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </AnimatedPageWrapper>
    </Layout>
  );
}