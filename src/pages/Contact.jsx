/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Code, Database, Cloud, Smartphone } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import Footer from '../components/Footer';
import { apiPost } from '../utils/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setLoading(true);
    setSubmitStatus(null);
    
    try {
      // Submit form data using our API utility
      const response = await apiPost('/contact', formData);
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setSubmitStatus({ type: 'success', message: 'Thank you! Our admissions team will contact you within 24 hours.' });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({ type: 'error', message: 'Failed to submit form. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Admissions Hotline',
      content: '+91 99589 13539',
      description: 'Mon-Sat 8:00 AM - 8:00 PM IST'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Support',
      content: 'admissions@techbootcamps.in',
      description: 'Response within 12 hours'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Training Center',
      content: 'Gurgaon, Haryana',
      description: 'India - 122001'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Support Hours',
      content: '24/7 Chat Support',
      description: 'Live chat available all week'
    }
  ];

  
  return (
    <div className="min-h-screen bg-muted">
     {/* Hero Banner */}
<ScrollAnimation>
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-black/90"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
      }}
    />



    {/* Content */}
    <div className="relative z-10 text-center px-6 max-w-4xl">
      <span className="inline-block mb-6 px-6 py-2 rounded-full bg-white/10 text-white text-sm tracking-widest uppercase">
        Admissions Open
      </span>

      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
        Ready to <span className="text-gradient">Start Your Journey?</span>
      </h1>

      <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
        Get in touch with our admissions team to explore bootcamp details,
        scholarship opportunities, and career-focused learning paths.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-10 py-4 rounded-xl bg-white text-primary font-bold text-lg hover:scale-105 hover:shadow-xl transition-all">
          Talk to Admissions
        </button>

        <button className="px-10 py-4 rounded-xl border border-white/40 text-white font-semibold text-lg hover:bg-white/10 transition-all">
          View Programs
        </button>
      </div>
    </div>

  </section>
</ScrollAnimation>



      {/* Contact Content */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get Bootcamp Info</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Speak with our career counselors about course details, placement records, and flexible payment options.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Contact Details</h2>
              </ScrollAnimation>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                    <div className="group flex items-start p-6 bg-card border border-border rounded-2xl hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                      <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground p-4 rounded-xl mr-6 flex-shrink-0 group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-1">{info.title}</h3>
                        <p className="text-primary font-semibold text-lg mb-1 truncate">{info.content}</p>
                        <p className="text-muted-foreground text-sm">{info.description}</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ScrollAnimation>
                <div className="sticky top-24 bg-card rounded-3xl shadow-2xl border border-border/50 p-8 lg:p-10">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Quick Enquiry</h2>
                    <p className="text-muted-foreground text-lg">
                      Fill out 30 seconds form → Get callback from counselor
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-foreground font-semibold mb-3 text-sm uppercase tracking-wide">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-5 py-4 bg-background border-2 border-input rounded-xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-lg"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-foreground font-semibold mb-3 text-sm uppercase tracking-wide">Email / WhatsApp *</label>
                        <input
                          type="text"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-5 py-4 bg-background border-2 border-input rounded-xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-lg"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-foreground font-semibold mb-3 text-sm uppercase tracking-wide">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 bg-background border-2 border-input rounded-xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-lg"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      
                    </div>

                    <div>
                      <label className="block text-foreground font-semibold mb-3 text-sm uppercase tracking-wide">Message (Optional)</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-5 py-4 bg-background border-2 border-input rounded-xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-lg resize-vertical"
                        placeholder="Any specific questions about course, fees, or placement?"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-bold py-5 px-8 rounded-2xl text-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-2 border-transparent hover:border-primary/50 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Submitting...' : 'Get Free Counseling Call →'}
                    </button>
                                          
                    {/* Status Message */}
                    {submitStatus && (
                      <div className={`mt-4 p-4 rounded-xl text-center ${submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {submitStatus.message}
                      </div>
                    )}
                  </form>

                  {/* Trust Indicators */}
                  <div className="mt-8 pt-8 border-t border-border grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">94%</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">Placement Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">28K+</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">Graduates</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">Rs 25LPA</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">Avg Package</div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
