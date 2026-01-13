import Hero from '../components/Hero';
import About from '../components/About';
import ClientLogos from '../components/ClientLogos';
import Benefits from '../components/Benefits';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import ScrollAnimation from '../components/ScrollAnimation';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ScrollAnimation>
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Why Choose Elite Management?</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                We provide the highest quality education with industry experts and practical learning experiences that make a real difference in your career.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card rounded-xl shadow-lg p-8 text-center hover-lift transition-all duration-300">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-6">1</div>
                <h3 className="text-xl font-bold text-foreground mb-4">Expert Instructors</h3>
                <p className="text-muted-foreground">Learn from industry professionals with real-world experience.</p>
              </div>
              <div className="bg-card rounded-xl shadow-lg p-8 text-center hover-lift transition-all duration-300">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center text-accent text-2xl font-bold mx-auto mb-6">2</div>
                <h3 className="text-xl font-bold text-foreground mb-4">Practical Learning</h3>
                <p className="text-muted-foreground">Apply concepts through real-world projects and case studies.</p>
              </div>
              <div className="bg-card rounded-xl shadow-lg p-8 text-center hover-lift transition-all duration-300">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-6">3</div>
                <h3 className="text-xl font-bold text-foreground mb-4">Flexible Schedule</h3>
                <p className="text-muted-foreground">Study at your own pace with 24/7 access to materials.</p>
              </div>
              <div className="bg-card rounded-xl shadow-lg p-8 text-center hover-lift transition-all duration-300">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center text-accent text-2xl font-bold mx-auto mb-6">4</div>
                <h3 className="text-xl font-bold text-foreground mb-4">Career Support</h3>
                <p className="text-muted-foreground">Get guidance and support for your professional development.</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
      <About />
      <ClientLogos />
      <Benefits />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;