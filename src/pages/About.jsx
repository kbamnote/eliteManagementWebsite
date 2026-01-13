import { useState, useEffect } from "react";
import Footer from '../components/Footer';
import CountUp from "../components/CountUp";
import ScrollAnimation from "../components/ScrollAnimation";

const About = () => {
  const [activeTab, setActiveTab] = useState("vision");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const values = [
    { 
      title: "Excellence", 
      description: "We maintain excellence in all our courses and learning experiences.",
      icon: "⚡"
    },
    { 
      title: "Innovation", 
      description: "We continuously innovate to provide the best learning methods.",
      icon: "🚀"
    },
    { 
      title: "Accessibility", 
      description: "We make quality education accessible to everyone.",
      icon: "🌍"
    },
    { 
      title: "Growth", 
      description: "We foster personal and professional growth for all learners.",
      icon: "📈"
    },
  ];

 const stats = [
  { value: 12000, label: "Students Trained" },
  { value: 150, label: "Expert Mentors" },
  { value: 300, label: "Courses Offered" },
  { value: 95, label: "Placement Success (%)" },
];

  const journey = [
  {
    year: "2011",
    title: "Foundation",
    desc: "Elite Management was established with a vision to deliver quality education."
  },
  {
    year: "2014",
    title: "Course Expansion",
    desc: "Expanded into professional and career-focused training programs."
  },
  {
    year: "2018",
    title: "Industry Partnerships",
    desc: "Collaborated with industry leaders to deliver practical learning."
  },
  {
    year: "2022",
    title: "Digital Transformation",
    desc: "Introduced hybrid and online learning platforms."
  },
  {
    year: "2025",
    title: "Pan-India Presence",
    desc: "Reached thousands of learners across the country."
  }
];


  return (
    <div className="min-h-screen bg-muted">

      {/* ENHANCED HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/80" />
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80"
            alt="Elite Management"
            className="w-full h-full object-cover opacity-30"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          
         
        </div>

        

        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl px-6">
          <span className="inline-block mb-6 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm tracking-widest uppercase font-semibold animate-fade-in">
            About Elite Management
          </span>

          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Shaping Futures Through <br />
            <span className="text-blue-600">Quality Education</span>
          </h1>

        

          <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 hover:scale-105 transition-all shadow-xl">
              Explore Courses
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
              Learn More
            </button>
          </div>
        </div>

       
        {/* Bottom gradient fade */}
      </section>

      {/* ================= STATS SECTION ================= */}
<section className="py-24 px-4 bg-background">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="text-center group cursor-pointer"
        >
          <h3 className="text-5xl md:text-6xl font-extrabold text-primary mb-4 transition-transform group-hover:scale-110">
            <CountUp end={stat.value} />
          </h3>

          <p className="text-muted-foreground text-lg font-medium">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* WELCOME SECTION - Enhanced */}
      <section className="py-24 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Welcome to Elite Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Founded in 2011, Elite Management has evolved into a premier educational institution,
              bridging the gap between academic knowledge and practical industry skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-25 group-hover:opacity-50 transition" />
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                alt="Elite Learning"
                className="relative rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Our Academy Story
              </h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                With over a decade of experience, we've built a reputation for excellence,
                innovation, and outcome-driven education.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Today, we continue to evolve with industry trends while maintaining our
                commitment to quality learning and career success.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-card rounded-xl border border-border hover:border-primary transition">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-muted-foreground text-sm mt-1">Courses</div>
                </div>
                <div className="text-center p-4 bg-card rounded-xl border border-border hover:border-accent transition">
                  <div className="text-3xl font-bold text-accent">100+</div>
                  <div className="text-muted-foreground text-sm mt-1">Companies</div>
                </div>
                <div className="text-center p-4 bg-card rounded-xl border border-border hover:border-primary transition">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-muted-foreground text-sm mt-1">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* ================= JOURNEY TIMELINE ================= */}
<section className="py-28 px-4 bg-background">
  <div className="max-w-6xl mx-auto">
    
    {/* Heading */}
    <ScrollAnimation animation="fade-up">
      <div className="text-center mb-20">
        <span className="inline-block px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-5">
          Our Journey
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Milestones of Excellence
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          A decade-long journey of innovation, growth, and educational impact
        </p>
      </div>
    </ScrollAnimation>

    {/* Timeline */}
    <div className="relative">
      
      {/* Center Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />

      {journey.map((item, i) => (
        <ScrollAnimation
          key={i}
          animation={i % 2 === 0 ? "fade-left" : "fade-right"}
          delay={i * 120}
        >
          <div className="relative mb-20">
            <div
              className={`flex flex-col md:flex-row items-center ${
                i % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Card */}
              <div className="flex-1 md:px-8">
                <div
                  className={`group bg-card border border-border rounded-2xl p-8 transition-all duration-500
                    hover:border-primary hover:shadow-2xl hover:-translate-y-2
                    ${i % 2 === 0 ? "md:text-right" : "md:text-left"}
                  `}
                >
                  <div className="text-6xl font-extrabold text-primary/80 mb-4 group-hover:text-primary transition-colors">
                    {item.year}
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Dot */}
              <div className="hidden md:flex relative z-10 items-center justify-center">
                <div className="w-6 h-6 dash-full bg-primary border-4 border-background shadow-xl " />
              </div>

              <div className="flex-1" />
            </div>
          </div>
        </ScrollAnimation>
      ))}
    </div>
  </div>
</section>


      {/* LEARNING ENHANCEMENT */}
      <section className="py-24 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Learning Enhancement
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Helping professionals advance through structured, practical education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Skill Development", desc: "Industry-aligned skill building programs", icon: "🎯" },
              { title: "Expert Instruction", desc: "Learn from real-world professionals", icon: "👨‍🏫" },
              { title: "Career Growth", desc: "Clear learning paths with outcomes", icon: "📈" },
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary hover:shadow-xl hover:-translate-y-2 transition-all">
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-6">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Our Purpose
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Vision & Mission
            </h2>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-muted rounded-2xl p-2 flex gap-2 border border-border">
              {["vision", "mission"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all ${
                    activeTab === tab
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab === "vision" ? "Our Vision" : "Our Mission"}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-3xl shadow-2xl p-12 hover:border-primary transition-all">
            {activeTab === "vision" ? (
              <div>
                <div className="text-7xl mb-6 text-center">🎯</div>
                <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed text-center">
                  To become a leading institution that transforms ambition into
                  achievement through education.
                </p>
              </div>
            ) : (
              <div>
                <div className="text-7xl mb-6 text-center">🚀</div>
                <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed text-center">
                  To deliver practical, personalized learning experiences that
                  empower career success.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              What Drives Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary hover:shadow-2xl hover:-translate-y-2 transition-all h-full">
                  <div className="text-6xl mb-6">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-3xl opacity-20" />
            <div className="relative bg-card border-2 border-primary/20 rounded-3xl p-12 md:p-16 text-center hover:border-primary/50 transition-all">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Transform Your Future?
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Join thousands of successful professionals who chose Elite Management for their career transformation.
              </p>
              <button className="px-10 py-5 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 hover:scale-105 transition-all shadow-xl">
                Start Your Journey Today
              </button>
            </div>
          </div>
        </div>
      </section>

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
            <Footer />

    </div>
  );
};

export default About;