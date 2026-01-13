import ScrollAnimation from './ScrollAnimation';

const Benefits = () => {
  const benefits = [
    {
      icon: '🎓',
      title: 'Certification',
      description: 'Earn industry-recognized certificates upon completion',
      color: 'bg-primary/20 text-primary'
    },
    {
      icon: '⏰',
      title: 'Flexible Learning',
      description: 'Study at your own pace with 24/7 access',
      color: 'bg-accent/20 text-accent'
    },
    {
      icon: '💰',
      title: 'Career Growth',
      description: 'Enhance your career prospects with new skills',
      color: 'bg-primary/20 text-primary'
    },
    {
      icon: '📍',
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with real experience',
      color: 'bg-accent/20 text-accent'
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Learn With Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive learning solutions that make the educational journey seamless and effective
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div 
                className="bg-card rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover-lift"
              >
                <div className={`${benefit.color} w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-6`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;