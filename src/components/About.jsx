import ScrollAnimation from './ScrollAnimation';

const About = () => {
  return (
    <section className="py-20 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4">
              ABOUT OUR ACADEMY
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Strategic Learning, Personalized Growth
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At Elite Management, we bridge the gap between knowledge and practical application, 
              fostering growth and success through our comprehensive educational programs.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ScrollAnimation animationClass="slide-in-left">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Excellence in Education
              </h3>
              <p className="text-muted-foreground mb-6">
                Founded in 2011, Elite Management has evolved into a premier educational institution, 
                specializing in connecting passionate learners with expert instructors to foster growth and success.
              </p>
              <p className="text-muted-foreground mb-6">
                Our commitment to excellence and personalized approach has made us a trusted partner for 
                professionals seeking to advance their careers through quality education.
              </p>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover-lift">
                LEARN MORE
              </button>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animationClass="slide-in-right">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/images/resource/about-2.jpg" 
                alt="Learning environment" 
                className="rounded-lg shadow-lg object-cover h-64 hover-lift transition-all duration-300"
              />
              <img 
                src="/images/resource/user1.webp" 
                alt="Students learning" 
                className="rounded-lg shadow-lg mt-8 object-cover h-64 hover-lift transition-all duration-300"
              />
            </div>
          </ScrollAnimation>
        </div>

        {/* Founder quote card */}
        <ScrollAnimation>
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto hover-lift transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  EG
                </div>
              </div>
              <div className="text-center md:text-left">
                <p className="text-xl italic text-foreground mb-4">
                  "Our mission is to create meaningful learning experiences that empower individuals 
                  to achieve their professional goals and make a positive impact in their fields."
                </p>
                <h4 className="text-lg font-bold text-foreground">Educational Director</h4>
                <p className="text-muted-foreground">Elite Management</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default About;