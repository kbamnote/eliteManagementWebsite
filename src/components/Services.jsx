import ServiceCard from './ServiceCard';
import ScrollAnimation from './ScrollAnimation';

const Services = () => {
  const services = [
    {
      icon: '📚',
      title: 'Management Courses',
      description: 'Comprehensive programs covering strategic planning and business management.',
      image: '/images/resource/about-2.jpg'
    },
    {
      icon: '🎯',
      title: 'Leadership Training',
      description: 'Develop essential leadership skills for modern business environments.',
      image: '/images/resource/user1.webp'
    },
    {
      icon: '📈',
      title: 'Digital Marketing',
      description: 'Complete guide to modern digital marketing strategies and tools.',
      image: '/images/resource/video-bg-1.jpg'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
              LEARNING SOLUTIONS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive Learning Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse course offerings ensure you can find the right program for your career goals
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                image={service.image}
                delay={index * 0.1}
              />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;