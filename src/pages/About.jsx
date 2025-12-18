/* eslint-disable no-unused-vars */
import React from 'react';
import { 
  Users, 
  Award, 
  Globe,
  Target,
  Lightbulb,
  Heart
} from 'lucide-react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import Layout from '../components/Layout';
import AnimatedPageWrapper from '../components/AnimatedPageWrapper';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    bio: 'Former tech executive with 15+ years of experience in education technology.',
    image: 'team-1'
  },
  {
    name: 'Sarah Williams',
    role: 'Chief Academic Officer',
    bio: 'PhD in Education with expertise in curriculum development and learning science.',
    image: 'team-2'
  },
  {
    name: 'Michael Chen',
    role: 'Head of Technology',
    bio: 'Full-stack developer and cloud architect with passion for educational platforms.',
    image: 'team-3'
  },
  {
    name: 'Priya Sharma',
    role: 'Director of Operations',
    bio: 'Operations specialist focused on student success and platform optimization.',
    image: 'team-4'
  }
];

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for the highest standards in education and service delivery.'
  },
  {
    icon: Heart,
    title: 'Student-Centered',
    description: 'Everything we do is focused on empowering student success and growth.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace cutting-edge technology to enhance learning experiences.'
  }
];

export default function About() {
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
            <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-20 blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">About </span>
                  <span className="block text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
                    Elite Management
                  </span>
                </h1>
                <p className="mt-6 text-xl text-slate-700 font-medium max-w-2xl leading-relaxed">
                  We're on a mission to democratize education and empower learners worldwide with accessible, high-quality courses.
                </p>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-indigo-200">
                  <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 aspect-video flex items-center justify-center relative">
                    {/* Decorative gradient overlays */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_70%)]"></div>
                    
                    <div className="text-center p-8 relative z-10">
                      <div className="w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <Globe className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-black text-white mb-2">Global Learning Platform</h3>
                      <p className="mt-2 text-indigo-200 font-medium">Connecting learners and educators worldwide</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
        
        {/* Enhanced Mission & Vision */}
        <motion.section 
          className="py-20 bg-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                className="bg-gradient-to-br from-white to-indigo-50 rounded-3xl p-8 shadow-xl border-2 border-indigo-100 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-indigo-600" />
                </div>
                <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Our Mission
                </h2>
                <p className="text-slate-700 text-lg leading-relaxed mb-6 font-medium">
                  To provide accessible, high-quality education to learners everywhere, breaking down barriers to knowledge and empowering individuals to reach their full potential through innovative online learning experiences.
                </p>
                <div className="mt-4 pt-4 border-t-2 border-indigo-100">
                  <p className="text-indigo-600 italic font-semibold">"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela</p>
                </div>
              </motion.div>
              
              <motion.div
                className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 shadow-xl border-2 border-purple-100 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Our Vision
                </h2>
                <p className="text-slate-700 text-lg leading-relaxed mb-6 font-medium">
                  To become the world's leading online learning platform, where anyone, anywhere can access the education they need to build the career they've always wanted, fostering a global community of lifelong learners.
                </p>
                <div className="mt-4 pt-4 border-t-2 border-purple-100">
                  <p className="text-purple-600 italic font-semibold">Creating a borderless world of education</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
        
        {/* Enhanced Values */}
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
                <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Our Core </span>
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">Values</span>
              </motion.h2>
              <motion.p 
                className="mt-4 text-xl text-slate-600 font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                The principles that guide everything we do
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-3xl p-8 border-2 border-indigo-100 hover:border-indigo-400 transition-all duration-300 group text-center shadow-xl transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  viewport={{ once: true }}
                >
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mx-auto group-hover:from-indigo-200 group-hover:to-purple-200 transition-all duration-300 mb-6 shadow-md">
                    <value.icon className="w-10 h-10 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-800 mb-3">{value.title}</h3>
                  <p className="text-slate-600 font-medium">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        
        {/* Enhanced Team */}
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
                <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Meet Our </span>
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Team</span>
              </motion.h2>
              <motion.p 
                className="mt-4 text-xl text-slate-600 font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                The passionate people behind our success
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-white to-indigo-50 rounded-3xl overflow-hidden border-2 border-indigo-100 hover:border-indigo-400 transition-all duration-300 group shadow-xl transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  viewport={{ once: true }}
                >
                  <div className="p-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-black text-center text-slate-800">{member.name}</h3>
                    <p className="text-indigo-600 text-center font-bold mt-2">{member.role}</p>
                    <p className="text-slate-600 text-center mt-3 text-sm font-medium">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        
        {/* Enhanced Stats */}
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
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Our Impact in <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">Numbers</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: 10000, label: 'Students Enrolled', icon: Users, suffix: '+' },
                { number: 200, label: 'Courses Available', icon: Award, suffix: '+' },
                { number: 50, label: 'Expert Instructors', icon: Users, suffix: '+' },
                { number: 95, label: 'Job Placement Rate', icon: Target, suffix: '%' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-6 shadow-xl border-2 border-white/20 transform transition-all duration-300 hover:-translate-y-2 hover:bg-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-white mb-2">
                    <CountUp end={stat.number} suffix={stat.suffix} duration={2.5} />
                  </div>
                  <div className="text-lg font-bold text-white/90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </AnimatedPageWrapper>
    </Layout>
  );
}