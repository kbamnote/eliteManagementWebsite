/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail,
  Clock,
  Send
} from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import AnimatedPageWrapper from '../components/AnimatedPageWrapper';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
            <div className="text-center max-w-3xl mx-auto">
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Get In </span>
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Touch</span>
              </motion.h1>
              <motion.p 
                className="mt-6 text-xl text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Have questions or want to learn more? Reach out to us and our team will get back to you as soon as possible.
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Enhanced Contact Info & Form */}
        <motion.section 
          className="py-20 bg-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Enhanced Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Contact Information</h2>
                
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start bg-gradient-to-br from-white to-indigo-50 rounded-3xl p-6 shadow-xl border-2 border-indigo-100 transform transition-all duration-300 hover:-translate-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center flex-shrink-0 shadow-md">
                      <MapPin className="w-8 h-8 text-indigo-600" />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-black text-slate-800 mb-2">Our Location</h3>
                      <p className="text-slate-600 font-medium">
                        123 Education Street<br />
                        San Francisco, CA 94103<br />
                        United States
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start bg-gradient-to-br from-white to-purple-50 rounded-3xl p-6 shadow-xl border-2 border-purple-100 transform transition-all duration-300 hover:-translate-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center flex-shrink-0 shadow-md">
                      <Phone className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-black text-slate-800 mb-2">Phone Number</h3>
                      <p className="text-slate-600 font-medium">
                        +1 (555) 123-4567<br />
                        +1 (555) 987-6543
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start bg-gradient-to-br from-white to-blue-50 rounded-3xl p-6 shadow-xl border-2 border-blue-100 transform transition-all duration-300 hover:-translate-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center flex-shrink-0 shadow-md">
                      <Mail className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-black text-slate-800 mb-2">Email Address</h3>
                      <p className="text-slate-600 font-medium">
                        info@elitemanagement.com<br />
                        support@elitemanagement.com
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start bg-gradient-to-br from-white to-teal-50 rounded-3xl p-6 shadow-xl border-2 border-teal-100 transform transition-all duration-300 hover:-translate-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center flex-shrink-0 shadow-md">
                      <Clock className="w-8 h-8 text-teal-600" />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-black text-slate-800 mb-2">Working Hours</h3>
                      <p className="text-slate-600 font-medium">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                {/* Enhanced Map Placeholder */}
                <motion.div 
                  className="mt-8 rounded-3xl overflow-hidden border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50 h-80 flex items-center justify-center shadow-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <MapPin className="w-10 h-10 text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-800 mb-2">Interactive Map</h3>
                    <p className="text-slate-600 mb-4 font-medium">Our location on Google Maps</p>
                    <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-bold shadow-lg transform hover:scale-105">
                      View on Map
                    </button>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Enhanced Contact Form */}
              <motion.div
                className="bg-gradient-to-br from-white to-indigo-50 rounded-3xl p-8 shadow-xl border-2 border-indigo-200"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white border-2 border-indigo-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 shadow-md font-medium"
                      placeholder="Enter your full name"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white border-2 border-purple-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-md font-medium"
                      placeholder="Enter your email address"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="subject" className="block text-sm font-bold text-slate-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white border-2 border-blue-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-md font-medium"
                      placeholder="Enter subject"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 bg-white border-2 border-cyan-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none shadow-md font-medium"
                      placeholder="Enter your message"
                    ></textarea>
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-black rounded-xl hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl flex items-center justify-center transform hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    whileHover={{ y: -2 }}
                    viewport={{ once: true }}
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Enhanced FAQ Section */}
        <motion.section 
          className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl md:text-5xl font-black mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Frequently Asked </span>
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">Questions</span>
              </motion.h2>
              <motion.p 
                className="mt-4 text-xl text-slate-600 font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Find answers to common questions about our courses and services
              </motion.p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: 'How do I enroll in a course?',
                  answer: 'You can enroll in any course by clicking the "Enroll Now" button on the course page. You\'ll need to create an account if you don\'t have one already, and then proceed to payment.'
                },
                {
                  question: 'What payment methods do you accept?',
                  answer: 'We accept all major credit cards including Visa, MasterCard, and American Express. We also support PayPal and bank transfers for select regions.'
                },
                {
                  question: 'Can I get a refund if I\'m not satisfied?',
                  answer: 'Yes, we offer a 30-day money-back guarantee on all courses. If you\'re not satisfied with your purchase, contact our support team within 30 days for a full refund.'
                },
                {
                  question: 'How long do I have access to course materials?',
                  answer: 'Once enrolled, you have lifetime access to all course materials, including future updates and additions to the course content.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-3xl p-8 border-2 border-indigo-100 shadow-xl transform transition-all duration-300 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-black text-slate-800 mb-3">{faq.question}</h3>
                  <p className="text-slate-600 font-medium">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </AnimatedPageWrapper>
    </Layout>
  );
}