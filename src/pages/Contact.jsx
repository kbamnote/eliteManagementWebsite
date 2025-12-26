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
import AnimatedPageWrapper from '../components/AnimatedPageWrapper';
import { AnimatedOnScroll } from '../hooks/useScrollAnimations';

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
    <AnimatedPageWrapper>
      {/* Enhanced Hero Section */}
        <AnimatedOnScroll 
          className="relative content-center py-40 overflow-hidden bg-secondary"
          direction="up"
          delay={0}
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-accent rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent rounded-full opacity-20 blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl py-18 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <AnimatedOnScroll 
                className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight text-primary"
                direction="up"
                delay={0.1}
              >
                <span className="text-primary">Get In </span>
                <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-[#2ab07f]">Touch</span>
              </AnimatedOnScroll>
              <AnimatedOnScroll 
                className="mt-6 text-xl text-secondary font-medium max-w-2xl mx-auto leading-relaxed"
                direction="up"
                delay={0.2}
              >
                Have questions or want to learn more? Reach out to us and our team will get back to you as soon as possible.
              </AnimatedOnScroll>
            </div>
          </div>
        </AnimatedOnScroll>

        {/* Enhanced Contact Info & Form */}
        <AnimatedOnScroll 
          className="py-20 bg-white"
          direction="up"
          delay={0}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Enhanced Contact Information */}
              <AnimatedOnScroll
                className=""
                direction="left"
                delay={0.1}
              >
                <AnimatedOnScroll 
                  className="text-4xl font-black mb-8 text-primary"
                  direction="up"
                  delay={0.2}
                >
                  Contact Information
                </AnimatedOnScroll>
                
                <div className="space-y-6">
                  <AnimatedOnScroll 
                    className="flex items-start bg-secondary rounded-3xl p-6 shadow-subtle border-2 border-subtle transform transition-all duration-150 hover:-translate-y-1"
                    direction="up"
                    delay={0.3}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0 shadow-subtle">
                      <MapPin className="w-8 h-8 text-primary" />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-black text-primary mb-2">Our Location</h3>
                      <p className="text-secondary font-medium">
                        123 Education Street<br />
                        San Francisco, CA 94103<br />
                        United States
                      </p>
                    </div>
                  </AnimatedOnScroll>
                  
                  <AnimatedOnScroll 
                    className="flex items-start bg-secondary rounded-3xl p-6 shadow-subtle border-2 border-subtle transform transition-all duration-150 hover:-translate-y-1"
                    direction="up"
                    delay={0.4}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0 shadow-subtle">
                      <Phone className="w-8 h-8 text-primary" />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-black text-primary mb-2">Phone Number</h3>
                      <p className="text-secondary font-medium">
                        +1 (555) 123-4567<br />
                        +1 (555) 987-6543
                      </p>
                    </div>
                  </AnimatedOnScroll>
                  
                  <AnimatedOnScroll 
                    className="flex items-start bg-secondary rounded-3xl p-6 shadow-subtle border-2 border-subtle transform transition-all duration-150 hover:-translate-y-1"
                    direction="up"
                    delay={0.5}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0 shadow-subtle">
                      <Mail className="w-8 h-8 text-primary" />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-black text-primary mb-2">Email Address</h3>
                      <p className="text-secondary font-medium">
                        info@elitemanagement.com<br />
                        support@elitemanagement.com
                      </p>
                    </div>
                  </AnimatedOnScroll>
                  
                  <AnimatedOnScroll 
                    className="flex items-start bg-secondary rounded-3xl p-6 shadow-subtle border-2 border-subtle transform transition-all duration-150 hover:-translate-y-1"
                    direction="up"
                    delay={0.6}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0 shadow-subtle">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-black text-primary mb-2">Working Hours</h3>
                      <p className="text-secondary font-medium">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </AnimatedOnScroll>
                </div>
                
                {/* Enhanced Map Placeholder */}
                <AnimatedOnScroll 
                  className="mt-8 rounded-3xl overflow-hidden border-2 border-subtle bg-secondary h-80 flex items-center justify-center shadow-subtle"
                  direction="up"
                  delay={0.7}
                >
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-subtle">
                      <MapPin className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-black text-primary mb-2">Interactive Map</h3>
                    <p className="text-secondary mb-4 font-medium">Our location on Google Maps</p>
                    <button className="px-8 py-3 bg-[#008248] text-white rounded-xl hover:bg-dark transition-all duration-150 font-bold shadow-subtle transform hover:scale-105">
                      View on Map
                    </button>
                  </div>
                </AnimatedOnScroll>
              </AnimatedOnScroll>
              
              {/* Enhanced Contact Form */}
              <AnimatedOnScroll
                className="bg-secondary rounded-3xl p-8 shadow-subtle border-2 border-subtle"
                direction="right"
                delay={0.1}
              >
                <AnimatedOnScroll 
                  className="text-4xl font-black mb-8 text-accent"
                  direction="up"
                  delay={0.2}
                >
                  <span className="text-primary">Send us a </span>
                  <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Message</span>
                </AnimatedOnScroll>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <AnimatedOnScroll
                    className=""
                    direction="up"
                    delay={0.3}
                  >
                    <label htmlFor="name" className="block text-sm font-bold text-primary mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white border-2 border-subtle rounded-xl text-primary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-100 shadow-subtle font-medium"
                      placeholder="Enter your full name"
                    />
                  </AnimatedOnScroll>
                  
                  <AnimatedOnScroll
                    className=""
                    direction="up"
                    delay={0.4}
                  >
                    <label htmlFor="email" className="block text-sm font-bold text-primary mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white border-2 border-subtle rounded-xl text-primary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-100 shadow-subtle font-medium"
                      placeholder="Enter your email address"
                    />
                  </AnimatedOnScroll>
                  
                  <AnimatedOnScroll
                    className=""
                    direction="up"
                    delay={0.5}
                  >
                    <label htmlFor="subject" className="block text-sm font-bold text-primary mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white border-2 border-subtle rounded-xl text-primary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-100 shadow-subtle font-medium"
                      placeholder="Enter subject"
                    />
                  </AnimatedOnScroll>
                  
                  <AnimatedOnScroll
                    className=""
                    direction="up"
                    delay={0.6}
                  >
                    <label htmlFor="message" className="block text-sm font-bold text-primary mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 bg-white border-2 border-subtle rounded-xl text-primary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-100 resize-none shadow-subtle font-medium"
                      placeholder="Enter your message"
                    ></textarea>
                  </AnimatedOnScroll>
                  
                  <AnimatedOnScroll
                    className="w-full px-6 py-4 bg-[#008248] text-white font-black rounded-xl hover:bg-dark transition-all duration-150 shadow-subtle flex items-center justify-center transform hover:scale-105"
                    direction="up"
                    delay={0.7}
                  >
                    <button type="submit" className="w-full justify-center flex">
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </button>
                  </AnimatedOnScroll>
                </form>
              </AnimatedOnScroll>
            </div>
          </div>
        </AnimatedOnScroll>

        {/* Enhanced FAQ Section */}
        <AnimatedOnScroll 
          className="py-20 bg-secondary"
          direction="up"
          delay={0}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <AnimatedOnScroll 
                className="text-4xl md:text-5xl font-black mb-4 text-primary"
                direction="up"
                delay={0.1}
              >
                <span className="text-primary">Frequently Asked </span>
                <span className="text-gradient bg-gradient-to-r from-[#008248] to-accent bg-clip-text text-transparent">Questions</span>
              </AnimatedOnScroll>
              <AnimatedOnScroll 
                className="mt-4 text-xl text-secondary font-medium"
                direction="up"
                delay={0.2}
              >
                Find answers to common questions about our courses and services
              </AnimatedOnScroll>
            </div>
            
            <div className="space-y-6">
              {[{
                question: 'How do I enroll in a course?',
                answer: 'You can enroll in any course by clicking the "Enroll Now" button on the course page. You\'ll need to create an account if you don\'t have one already, and then proceed to payment.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards including Visa, MasterCard, and American Express. We also support PayPal and bank transfers for select regions.'
              },
              {
                question: "Can I get a refund if I'm not satisfied?",
                answer: "Yes, we offer a 30-day money-back guarantee on all courses. If you're not satisfied with your purchase, contact our support team within 30 days for a full refund."
              },
              {
                question: 'How long do I have access to course materials?',
                answer: 'Once enrolled, you have lifetime access to all course materials, including future updates and additions to the course content.'
              }].map((faq, index) => (
                <AnimatedOnScroll
                  key={index}
                  className="bg-white rounded-3xl p-8 border-2 border-subtle shadow-subtle transform transition-all duration-100 hover:-translate-y-1"
                  direction="up"
                  delay={0.3 + index * 0.1}
                >
                  <h3 className="text-xl font-black text-primary mb-3">{faq.question}</h3>
                  <p className="text-secondary font-medium">{faq.answer}</p>
                </AnimatedOnScroll>
              ))}
            </div>
          </div>
        </AnimatedOnScroll>

        {/* Testimonials Section */}
        <AnimatedOnScroll 
          className="py-20 bg-white"
          direction="up"
          delay={0}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <AnimatedOnScroll 
                className="text-4xl md:text-5xl font-black mb-4 text-primary"
                direction="up"
                delay={0.1}
              >
                <span className="text-primary">What Our </span>
                <span className="text-gradient bg-gradient-to-r from-[#008248] to-accent bg-clip-text text-transparent">Students Say</span>
              </AnimatedOnScroll>
              <AnimatedOnScroll 
                className="mt-4 text-xl text-secondary font-medium max-w-2xl mx-auto"
                direction="up"
                delay={0.2}
              >
                Don't just take our word for it - hear from our satisfied students
              </AnimatedOnScroll>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Marketing Professional",
                  content: "The courses at Elite Management transformed my career. The practical approach and expert guidance helped me land my dream job in digital marketing.",
                  rating: 5
                },
                {
                  name: "Michael Chen",
                  role: "Software Developer",
                  content: "I've taken multiple courses here and each one exceeded my expectations. The instructors are industry experts who really care about student success.",
                  rating: 5
                },
                {
                  name: "Priya Sharma",
                  role: "Business Owner",
                  content: "The business management course was a game-changer for my startup. I learned practical strategies that I could immediately apply to my business.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <AnimatedOnScroll
                  key={index}
                  className="bg-secondary rounded-3xl p-8 shadow-subtle border-2 border-subtle"
                  direction="up"
                  delay={0.3 + index * 0.1}
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-secondary font-medium mb-6">{testimonial.content}</p>
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-accent">{testimonial.role}</p>
                  </div>
                </AnimatedOnScroll>
              ))}
            </div>
          </div>
        </AnimatedOnScroll>

        {/* Social Media & Additional Contact Section */}
        <AnimatedOnScroll 
          className="py-20 bg-secondary"
          direction="up"
          delay={0}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <AnimatedOnScroll 
                className="text-4xl md:text-5xl font-black mb-4 text-primary"
                direction="up"
                delay={0.1}
              >
                <span className="text-primary">Connect With </span>
                <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Us</span>
              </AnimatedOnScroll>
              <AnimatedOnScroll 
                className="mt-4 text-xl text-secondary font-medium max-w-2xl mx-auto"
                direction="up"
                delay={0.2}
              >
                Follow us on social media for the latest updates and insights
              </AnimatedOnScroll>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <AnimatedOnScroll
                className=""
                direction="left"
                delay={0.3}
              >
                <h3 className="text-2xl font-black mb-6 text-primary">Follow Our Journey</h3>
                <div className="space-y-4">
                  {[
                    { platform: "LinkedIn", url: "#", icon: "💼", description: "Connect with our professional network" },
                    { platform: "Twitter", url: "#", icon: "🐦", description: "Get the latest industry updates" },
                    { platform: "Instagram", url: "#", icon: "📸", description: "See behind-the-scenes content" },
                    { platform: "Facebook", url: "#", icon: "📘", description: "Join our community of learners" }
                  ].map((social, index) => (
                    <AnimatedOnScroll
                      key={index}
                      className="flex items-center bg-white rounded-2xl p-4 shadow-subtle border border-subtle transform transition-all duration-100 hover:-translate-y-1 hover:shadow-hover"
                      direction="up"
                      delay={0.4 + index * 0.1}
                    >
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-xl mr-4">
                        {social.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-primary">{social.platform}</h4>
                        <p className="text-sm text-secondary">{social.description}</p>
                      </div>
                    </AnimatedOnScroll>
                  ))}
                </div>
              </AnimatedOnScroll>
              
              <AnimatedOnScroll
                className=""
                direction="right"
                delay={0.3}
              >
                <h3 className="text-2xl font-black mb-6 text-primary">Other Contact Options</h3>
                <div className="space-y-4">
                  {[
                    { 
                      title: "Technical Support", 
                      contact: "support@elitemanagement.com", 
                      description: "For course technical issues and platform support",
                      icon: "💻"
                    },
                    { 
                      title: "Admissions", 
                      contact: "admissions@elitemanagement.com", 
                      description: "For course enrollment and program inquiries",
                      icon: "🎓"
                    },
                    { 
                      title: "Corporate Enquiries", 
                      contact: "corporate@elitemanagement.com", 
                      description: "For business training and corporate partnerships",
                      icon: "🏢"
                    },
                    { 
                      title: "Career Services", 
                      contact: "careers@elitemanagement.com", 
                      description: "For job placement and career guidance",
                      icon: "🚀"
                    }
                  ].map((contact, index) => (
                    <AnimatedOnScroll
                      key={index}
                      className="flex items-start bg-white rounded-2xl p-4 shadow-subtle border border-subtle transform transition-all duration-100 hover:-translate-y-1 hover:shadow-hover"
                      direction="up"
                      delay={0.4 + index * 0.1}
                    >
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-xl mr-4 mt-1">
                        {contact.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-primary">{contact.title}</h4>
                        <p className="text-accent font-medium">{contact.contact}</p>
                        <p className="text-sm text-secondary mt-1">{contact.description}</p>
                      </div>
                    </AnimatedOnScroll>
                  ))}
                </div>
              </AnimatedOnScroll>
            </div>
          </div>
        </AnimatedOnScroll>
      </AnimatedPageWrapper>
    );
  }