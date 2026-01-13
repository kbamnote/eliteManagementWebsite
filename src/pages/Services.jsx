/* eslint-disable no-unused-vars */
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      id: 'corporate',
      title: 'Corporate Hiring',
      description: 'Comprehensive corporate recruitment solutions tailored to your organization\'s specific needs and culture.',
      details: 'Our corporate hiring services include detailed job analysis, targeted candidate sourcing, thorough screening processes, and strategic placement to ensure the best fit for your organization. We understand the unique challenges of corporate environments and provide solutions that align with your long-term goals.',
      icon: '🏢'
    },
    {
      id: 'evaluation',
      title: 'Profile Evaluation',
      description: 'Thorough assessment and evaluation of candidate profiles to ensure quality and fit.',
      details: 'Our profile evaluation process includes comprehensive background checks, skill assessments, experience verification, and cultural fit analysis. We provide detailed reports that help you make informed hiring decisions with confidence.',
      icon: '📋'
    },
    {
      id: 'interview',
      title: 'Interview Setup',
      description: 'Professional interview coordination and management services.',
      details: 'We handle all aspects of the interview process, from scheduling and coordination to preparation and follow-up. Our services ensure a smooth, professional experience for both candidates and hiring managers, maximizing the effectiveness of each interaction.',
      icon: '👤'
    },
    {
      id: 'talent',
      title: 'Talent Assurance',
      description: 'Guaranteed quality talent acquisition with comprehensive support.',
      details: 'Our talent assurance program provides ongoing support and quality guarantees. We ensure that placed candidates meet your expectations and provide backup support if needed, giving you peace of mind with every placement.',
      icon: '✅'
    },
    {
      id: 'cv',
      title: 'CV Revamping',
      description: 'Professional resume enhancement and optimization services.',
      details: 'Our CV revamping service transforms your resume into a compelling document that highlights your strengths and achievements. We optimize for both human readers and Applicant Tracking Systems (ATS) to maximize your chances of getting noticed.',
      icon: '👔'
    }
  ];

  return (
    <div className="min-h-screen bg-muted">
      {/* Hero Banner */}
      <div className="relative h-96 bg-primary flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4 text-primary-foreground">Our Services</h1>
          <p className="text-xl text-primary-foreground">Comprehensive HR Solutions for Your Success</p>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Inspiring Staffing Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              We offer a comprehensive suite of HR services designed to meet the diverse needs of both job seekers and employers, 
              ensuring successful outcomes at every stage of the recruitment process.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className="bg-card rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="text-sm text-muted-foreground">
                  <p>{service.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Service Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A streamlined approach to delivering exceptional HR solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Consultation', desc: 'Understanding your specific needs' },
              { step: 2, title: 'Strategy', desc: 'Developing a tailored approach' },
              { step: 3, title: 'Execution', desc: 'Implementing the solution' },
              { step: 4, title: 'Support', desc: 'Ongoing assistance and follow-up' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Why Choose Our Services?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-primary-foreground text-sm mr-4 mt-1">✓</div>
                  <span className="text-muted-foreground">Industry expertise with over a decade of experience</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-primary-foreground text-sm mr-4 mt-1">✓</div>
                  <span className="text-muted-foreground">Personalized approach tailored to your needs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-primary-foreground text-sm mr-4 mt-1">✓</div>
                  <span className="text-muted-foreground">Extensive network of qualified professionals</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-primary-foreground text-sm mr-4 mt-1">✓</div>
                  <span className="text-muted-foreground">Quality assurance and ongoing support</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-primary-foreground text-sm mr-4 mt-1">✓</div>
                  <span className="text-muted-foreground">Transparent and efficient processes</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="HR Consultation" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;