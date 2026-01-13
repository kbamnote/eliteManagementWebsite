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
    <AnimatedPageWrapper>
        {/* Enhanced Hero Section */}
        <motion.section 
          className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-secondary to-primary"
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
                  <span className="text-accent font-semibold text-sm">PROFESSIONAL CAREER GUIDANCE</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-primary">
                  <span className="block text-primary mb-2">Transform Your</span>
                  <span className="block text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-accent to-dark bg-clip-text text-transparent">
                    Career Journey
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-secondary font-medium max-w-2xl leading-relaxed">
                  Unlock your potential with personalized career guidance from industry experts. Navigate your professional journey with confidence through our comprehensive counseling services.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <motion.button 
                    className="px-8 py-4 bg-gradient-to-r from-[#08ff86] to-[#187648] text-white font-bold rounded-xl hover:from-accent hover:to-accent transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ y: -2 }}
                  >
                    Book Free Consultation
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
                    <div className="text-3xl md:text-4xl font-bold text-accent">500+</div>
                    <div className="text-secondary text-sm mt-1">Students Guided</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-accent">95%</div>
                    <div className="text-secondary text-sm mt-1">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-accent">10+</div>
                    <div className="text-secondary text-sm mt-1">Years Experience</div>
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
                  <div className="bg-gradient-to-br from-primary to-secondary aspect-video flex items-center justify-center relative p-8">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212, 236, 229,0.1)_0%,rgba(212, 236, 229,0)_70%)]"></div>
                    
                    <div className="text-center relative z-10 space-y-6">
                      <div className="w-32 h-32 bg-gradient-to-br from-accent to-dark rounded-full flex items-center justify-center mx-auto shadow-2xl">
                        <Briefcase className="w-16 h-16" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-3">Professional Career Guidance</h3>
                        <p className="text-secondary font-medium text-lg mb-6">Personalized plans for your success journey</p>
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
                <span className="text-accent">Services</span>
              </motion.h2>
              <motion.p 
                className="mt-4 text-lg md:text-xl text-secondary font-medium"
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
                        <div className="w-12 h-1 rounded-full" style={{backgroundColor:'#069a3cff'}}></div>
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
          className="py-16 md:py-20 bg-gradient-to-br from-primary to-secondary"
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
                <span className="text-primary">Career </span>
                <span className="text-accent">Insights</span>
              </motion.h2>
              <motion.p 
                className="mt-4 text-lg md:text-xl text-secondary font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Discover key aspects of career development through our interactive cards
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex justify-center">
                <FlipCard 
                  frontTitle="Skills" 
                  frontText="Essential abilities for career success" 
                  backTitle="Development" 
                  backText="Continuous learning and improvement strategies" 
                  icon={<Zap className="text-[#ffe300]" size={35} />}
                />
              </div>
              <div className="flex justify-center">
                <FlipCard 
                  frontTitle="Networking" 
                  frontText="Building professional relationships" 
                  backTitle="Opportunities" 
                  backText="Creating valuable connections in your field" 
                  icon={<Network className="text-[#10cfb0]" size={35} />}
                />
              </div>
              <div className="flex justify-center">
                <FlipCard 
                  frontTitle="Growth" 
                  frontText="Advancing in your career path" 
                  backTitle="Strategies" 
                  backText="Effective approaches for professional advancement" 
                  icon={<GrowthIcon className="text-[#fd6a49]" size={35} />}
                />
              </div>
              <div className="flex justify-center">
                <FlipCard 
                  frontTitle="Balance" 
                  frontText="Managing work and personal life" 
                  backTitle="Wellness" 
                  backText="Maintaining health and satisfaction in all areas" 
                  icon={<Heart className="text-[#ff0000]" size={35} />}
                />
              </div>
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
                Our Professional Process
              </motion.h2>
                      
              <motion.p 
                className="text-lg md:text-xl text-secondary font-medium max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                A structured approach to career development that delivers exceptional results
              </motion.p>
            </div>
                    
            <div className="relative">
              {/* Enhanced Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-accent to-transparent hidden md:block transform -translate-x-1/2"></div>
                      
              <div className="space-y-16">
                {processSteps.map((step, index) => (
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
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-dark flex items-center justify-center font-bold text-3xl shadow-2xl mx-auto md:mx-0">
                          {step.number}
                        </div>
                        <h3 className="mt-6 text-xl md:text-2xl font-bold text-primary">{step.title}</h3>
                        <p className="mt-3 text-secondary font-medium">{step.description}</p>
                      </div>
                    </div>
                            
                    <div className="md:w-2/12 flex justify-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-secondary border-4 border-accent shadow-2xl z-10 flex items-center justify-center" style={{backgroundColor:'#4ecf95ff', borderColor: '#11a85fff'}}>
                        <div className="w-6 h-6 rounded-full bg-accent" style={{backgroundColor:'#39c586ff'}}></div>
                      </div>
                    </div>
                            
                    <div className="md:w-5/12 flex justify-center">
                      <div className="bg-gradient-to-br from-white to-secondary rounded-3xl p-8 border border-subtle shadow-2xl hover:shadow-2xl transition-all duration-500 max-w-md w-full">
                        <div className="flex items-center mb-6">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-dark flex items-center justify-center shadow-xl mr-4">
                            {index === 0 && <Calendar className="w-7 h-7" />}
                            {index === 1 && <TrendingUp className="w-7 h-7" />}
                            {index === 2 && <Briefcase className="w-7 h-7" />}
                            {index === 3 && <Users className="w-7 h-7" />}
                          </div>
                          <h4 className="font-bold text-primary text-xl">What to Expect</h4>
                        </div>
                        <p className="text-secondary font-medium text-lg">
                          {index === 0 && "During our initial meeting, we'll discuss your career aspirations, current challenges, and what you hope to achieve through counseling."}
                          {index === 1 && "We'll conduct a thorough assessment using validated tools to understand your strengths, weaknesses, interests, and values."}
                          {index === 2 && "Based on our findings, we'll create a customized career development plan with actionable steps and timelines."}
                          {index === 3 && "We'll provide ongoing support as you implement your plan, with regular check-ins and adjustments as needed."}
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
          className="py-16 md:py-20 bg-gradient-to-br from-secondary to-primary relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00f5b3] rounded-full opacity-10 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00f5b3] rounded-full opacity-10 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Ready to Transform Your <span className="bg-gradient-to-r from-white to-secondary bg-clip-text" style={{color:'#23ccccff'}}>Career?</span>
              </h2>
              <p className="mt-3 text-lg text-dark/90 font-medium max-w-2xl mx-auto">
                Take the first step towards a fulfilling career with our expert guidance.
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
                  Schedule Free Consultation
                  <ArrowRight className="ml-3 w-5 h-5" />
                </motion.button>
                <motion.button 
                  className="px-8 py-4 bg-transparent font-bold rounded-xl hover:bg-white/10 transition-all duration-300 border-2 border-dark transform hover:scale-105"
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
    );
  }