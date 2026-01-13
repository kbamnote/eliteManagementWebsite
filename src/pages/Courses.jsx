/* eslint-disable no-unused-vars */
import { useState} from 'react';
import Footer from '../components/Footer';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [scrollY, setScrollY] = useState(0);

  

  const courseCategories = [
    { id: 'all', name: 'All Courses', icon: '📚' },
    { id: 'management', name: 'Management', icon: '📊' },
    { id: 'leadership', name: 'Leadership', icon: '👔' },
    { id: 'marketing', name: 'Marketing', icon: '📱' },
    { id: 'finance', name: 'Finance', icon: '💰' },
    { id: 'hr', name: 'HR Management', icon: '👥' }
  ];

  const courses = [
    {
      id: 1,
      title: 'Strategic Management',
      category: 'management',
      instructor: 'Dr. Sarah Johnson',
      duration: '12 weeks',
      level: 'Advanced',
      rating: 4.8,
      students: 1250,
      price: 299,
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: 'Master strategic planning and implementation techniques for business success.',
      tags: ['Strategy', 'Planning', 'Leadership']
    },
    {
      id: 2,
      title: 'Leadership Excellence',
      category: 'leadership',
      instructor: 'Prof. Michael Chen',
      duration: '8 weeks',
      level: 'Intermediate',
      rating: 4.9,
      students: 980,
      price: 249,
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: 'Develop essential leadership skills for modern business environments.',
      tags: ['Leadership', 'Communication', 'Team Management']
    },
    {
      id: 3,
      title: 'Digital Marketing Mastery',
      category: 'marketing',
      instructor: 'Emma Rodriguez',
      duration: '10 weeks',
      level: 'Beginner',
      rating: 4.7,
      students: 1500,
      price: 199,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive digital marketing strategies for the modern era.',
      tags: ['SEO', 'Social Media', 'Content Marketing']
    },
    {
      id: 4,
      title: 'Financial Management',
      category: 'finance',
      instructor: 'Dr. Robert Williams',
      duration: '14 weeks',
      level: 'Advanced',
      rating: 4.6,
      students: 870,
      price: 349,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
      description: 'Advanced financial planning and management techniques.',
      tags: ['Finance', 'Investment', 'Analysis']
    },
    {
      id: 5,
      title: 'HR Management Essentials',
      category: 'hr',
      instructor: 'Dr. Lisa Anderson',
      duration: '6 weeks',
      level: 'Beginner',
      rating: 4.8,
      students: 1100,
      price: 179,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: 'Essential HR management skills for modern workplaces.',
      tags: ['HR', 'Recruitment', 'Employee Relations']
    },
    {
      id: 6,
      title: 'Project Management',
      category: 'management',
      instructor: 'James Wilson',
      duration: '9 weeks',
      level: 'Intermediate',
      rating: 4.7,
      students: 1320,
      price: 229,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: 'Master project planning, execution, and delivery techniques.',
      tags: ['Project Management', 'Planning', 'Execution']
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const handleEnroll = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses([...enrolledCourses, courseId]);
      alert('Successfully enrolled in the course!');
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-500' : 'text-muted-foreground'}>★</span>
    ));
  };

  return (
    <div className="max-h-screen ">
      
      {/* ENHANCED HERO BANNER */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background with Parallax */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-90" />
          <img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1920&q=80"
            alt="Courses"
            className="w-full h-full object-cover opacity-30"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          
          {/* Animated gradient orbs */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

       
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <span className="inline-block mb-6 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm tracking-widest uppercase font-semibold animate-fade-in">
            Explore Our Courses
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Transform Your Career <br />
            <span className="text-blue-600">With Expert Training</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Choose from 500+ expertly designed courses to master new skills and advance your professional journey
          </p>
        </div>

        {/* Bottom gradient fade */}
      </section>

      {/* COURSE CATEGORIES */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Browse by Category
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Explore Course Categories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from a wide range of expertly designed courses to advance your career
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {courseCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group px-6 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-xl scale-105'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                <span className="text-2xl">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* COURSE GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <div 
                key={course.id} 
                className="group bg-card border border-border rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {course.level}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-1">
                    <span className="text-yellow-500 text-lg">★</span>
                    <span className="font-bold text-foreground">{course.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{course.description}</p>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-4 gap-2">
                    <span className="text-primary">👨‍🏫</span>
                    <span className="font-medium">{course.instructor}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mb-6 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <span>⏱️</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>👥</span>
                      <span>{course.students} students</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <span className="text-3xl font-bold text-primary">${course.price}</span>
                    <button 
                      onClick={() => handleEnroll(course.id)}
                      disabled={enrolledCourses.includes(course.id)}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        enrolledCourses.includes(course.id)
                          ? 'bg-green-600 text-white cursor-not-allowed'
                          : 'bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 shadow-lg'
                      }`}
                    >
                      {enrolledCourses.includes(course.id) ? '✓ Enrolled' : 'Enroll Now'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED COURSES SECTION */}
      <section className="py-24 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Top Rated
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Featured Courses</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our most popular and highly-rated courses chosen by thousands of students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.slice(0, 3).map((course, index) => (
              <div 
                key={course.id} 
                className={`group bg-card border-2 border-border rounded-3xl shadow-xl p-8 hover:shadow-2xl hover:border-primary transition-all duration-500 ${index === 1 ? 'md:scale-105' : 'hover:scale-105'}`}
              >
                <div className="text-center">
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {index === 1 && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                          🏆 BEST SELLER
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{course.description}</p>
                  
                  <div className="flex justify-center items-center mb-6 gap-2">
                    <div className="flex text-yellow-500 text-lg">
                      {renderStars(Math.floor(course.rating))}
                    </div>
                    <span className="text-muted-foreground font-semibold">({course.rating})</span>
                  </div>
                  
                  <div className="mb-6 flex justify-center gap-6 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <span>⏱️</span>
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>👥</span>
                      <span className="text-sm">{course.students}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-primary">${course.price}</span>
                  </div>
                  
                  <button 
                    onClick={() => handleEnroll(course.id)}
                    disabled={enrolledCourses.includes(course.id)}
                    className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                      enrolledCourses.includes(course.id)
                        ? 'bg-green-600 text-white cursor-not-allowed'
                        : 'bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 shadow-lg'
                    }`}
                  >
                    {enrolledCourses.includes(course.id) ? '✓ Enrolled' : 'Start Learning'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Our Benefits
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Why Choose Our Courses?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide the highest quality education with industry experts and practical learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '👨‍🏫', title: 'Expert Instructors', desc: 'Learn from industry professionals with real-world experience' },
              { icon: '⚡', title: 'Flexible Learning', desc: 'Study at your own pace with 24/7 access' },
              { icon: '🎓', title: 'Certification', desc: 'Earn certificates to boost your career' },
              { icon: '💼', title: 'Career Support', desc: 'Get career guidance and job placement assistance' }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group text-center bg-card border border-border rounded-2xl p-8 hover:border-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-4 bg-muted">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-3xl opacity-20" />
            <div className="relative bg-card border-2 border-primary/20 rounded-3xl p-12 md:p-16 text-center hover:border-primary/50 transition-all">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Join over 10,000 students who are already transforming their careers with Elite Management
              </p>
              <button className="px-10 py-5 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 hover:scale-105 transition-all shadow-xl">
                Browse All Courses
              </button>
            </div>
          </div>
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

export default Courses;