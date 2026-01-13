import { useState, useEffect } from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import Footer from '../components/Footer';

const Placements = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const successStories = [
    {
      id: 1,
      name: 'Ananya Desai',
      course: 'Advanced Data Science',
      position: 'Data Science Lead',
      company: 'NexGen Analytics',
      story: 'Ananya mastered machine learning algorithms through our Data Science program and now leads a 20-member analytics team, delivering AI solutions for Fortune 500 clients.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      salary: '₹28 LPA'
    },
    {
      id: 2,
      name: 'Rahul Mehra',
      course: 'Full Stack Development',
      position: 'Senior Software Engineer',
      company: 'InnovateTech Solutions',
      story: 'Rahul built enterprise-grade applications using React, Node.js & MongoDB from our bootcamp. He now architects scalable microservices for global e-commerce platforms.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      salary: '₹25 LPA'
    },
    {
      id: 3,
      name: 'Sneha Kapoor',
      course: 'Cloud Architecture',
      position: 'Cloud Solutions Architect',
      company: 'CloudSphere Technologies',
      story: 'Sneha deployed multi-cloud infrastructure using AWS, Azure & GCP through our certification. She now designs resilient cloud architectures for banking sector.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      salary: '₹32 LPA'
    }
  ];

  const courseStats = [
    { title: 'Active Learners', value: '28,500+', description: 'Students currently enrolled in programs', icon: '👨‍💻' },
    { title: 'Course Completion', value: '92%', description: 'Students successfully completing programs', icon: '🏆' },
    { title: 'Placement Success', value: '94%', description: 'Graduates placed in top companies', icon: '🚀' },
    { title: 'Industry Partners', value: '150+', description: 'Leading companies hiring our graduates', icon: '🤝' }
  ];

  const testimonials = [
    {
      name: 'Karthik Raman',
      role: 'Full Stack Developer',
      course: 'MERN Stack Bootcamp',
      content: 'From zero coding experience to landing a ₹22 LPA job at a unicorn startup in just 6 months. The live projects and interview prep were game-changers.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Divya Sharma',
      role: 'DevOps Engineer',
      course: 'DevOps & Cloud Engineering',
      content: 'The hands-on Kubernetes and Terraform labs prepared me perfectly for my AWS DevOps role. Mentorship sessions were invaluable for certifications.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-muted">
      
      {/* ENHANCED HERO BANNER */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background with Parallax */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/90" />
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80"
            alt="Career Success"
            className="w-full h-full object-cover opacity-30"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          
          {/* Animated gradient orbs */}
        </div>

        

        {/* Content */}
        <div className="relative z-9 text-center px-6 max-w-5xl">
          <span className="inline-block mb-6 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm tracking-widest uppercase font-semibold animate-fade-in">
            Career Transformations
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Tech Career Success <br />
            <span className="text-blue-600">Real Results</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            See how our intensive bootcamps transformed beginners into high-paying tech professionals
          </p>
        </div>

        {/* Bottom gradient fade */}
      </section>

      {/* STATS SECTION */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Proven Results
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Bootcamp Impact</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Thousands of students launched successful tech careers with our industry-focused training
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courseStats.map((stat, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="group bg-card border border-border rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 hover:border-primary transition-all duration-300">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{stat.title}</h3>
                  <p className="text-muted-foreground">{stat.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="py-24 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Featured Graduates
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Success Stories</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real students, real companies, real career breakthroughs
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <ScrollAnimation key={story.id} animation="fade-up" delay={index * 100}>
                <div className="group bg-card border border-border rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.name} 
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        {story.salary}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {story.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-primary font-semibold">💻</span>
                      <p className="text-primary font-medium">Course: {story.course}</p>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-accent font-semibold">🔥</span>
                      <p className="text-foreground font-semibold">{story.position}</p>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-muted-foreground">🏢</span>
                      <p className="text-muted-foreground font-medium">{story.company}</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{story.story}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT TESTIMONIALS */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Student Voices
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">What Graduates Say</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Authentic reviews from students who transformed their careers
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 150}>
                <div className="bg-card border border-border rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:border-primary transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                    />
                    <div>
                      <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="text-yellow-500 text-2xl mb-4">
                    {'★'.repeat(5)}
                  </div>
                  
                  <p className="text-muted-foreground italic text-lg mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-2 pt-4 border-t border-border">
                    <span className="text-primary">📚</span>
                    <span className="text-sm text-muted-foreground font-medium">{testimonial.course}</span>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING PROCESS */}
      <section className="py-24 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Your Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Bootcamp Roadmap</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Structured path from beginner to job-ready professional
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Tech Foundations', desc: 'Master programming fundamentals & tools', icon: '💻' },
              { step: 2, title: 'Core Skills', desc: 'Build real-world projects & portfolio', icon: '🚀' },
              { step: 3, title: 'Advanced Training', desc: 'Learn enterprise-grade technologies', icon: '⚡' },
              { step: 4, title: 'Job Ready', desc: 'Mock interviews & placement support', icon: '🎯' }
            ].map((step, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="group text-center bg-card border border-border rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 hover:border-primary transition-all duration-300">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* COURSE CATEGORIES */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Specializations
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Tech Tracks</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose your specialization and launch your tech career
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Data Science', desc: 'ML, AI, Python, Statistics & Analytics', icon: '📈' },
              { name: 'Full Stack Web', desc: 'React, Node.js, MongoDB & DevOps', icon: '🌐' },
              { name: 'Cloud Computing', desc: 'AWS, Azure, GCP & Kubernetes', icon: '☁️' },
              { name: 'Cybersecurity', desc: 'Ethical Hacking, Network Security', icon: '🔒' },
              { name: 'Mobile Development', desc: 'React Native, Flutter & iOS/Android', icon: '📱' },
              { name: 'Blockchain', desc: 'Solidity, Web3, Smart Contracts & DApps', icon: '🔗' }
            ].map((category, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <div className="group bg-card border border-border rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 hover:border-primary transition-all duration-300">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{category.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-4 bg-muted">
        <div className="max-w-5xl mx-auto">
          <ScrollAnimation>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-3xl opacity-20" />
              <div className="relative bg-card border-2 border-primary/20 rounded-3xl p-12 md:p-16 text-center hover:border-primary/50 transition-all">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Launch Your Tech Career Today
                </h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                  Join 28K+ students who became job-ready developers, data scientists and cloud engineers
                </p>
                <button className="px-10 py-5 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 hover:scale-105 transition-all shadow-xl">
                  Start Your Bootcamp
                </button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes float {
         0%, 100% { transform: translateY(0px); }
         50% { transform: translateY(-20px); }
        }
        
        @keyframes fade-in {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
        }
        
        .animate-fade-in {
        animation: fade-in 1s ease-out forwards;
        opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Placements;
