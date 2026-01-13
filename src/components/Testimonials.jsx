import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Marketing Manager',
      company: 'TechCorp Solutions',
      rating: 5,
      content: 'The digital marketing course transformed my career. The practical approach and expert instructors made complex concepts easy to understand and apply.'
    },
    {
      name: 'Priya Sharma',
      role: 'Operations Director',
      company: 'InnovateX',
      rating: 5,
      content: 'The leadership course was exceptional. I gained valuable insights that helped me lead my team more effectively and advance in my career.'
    },
    {
      name: 'Amit Patel',
      role: 'Finance Analyst',
      company: 'Global Enterprises',
      rating: 5,
      content: 'Outstanding course content and practical exercises. The real-world case studies helped me understand complex financial concepts easily.'
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Student Success Stories
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            What Our Students Say
          </p>
          <div className="flex justify-center items-center space-x-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-2xl text-foreground">★</span>
            ))}
            <span className="ml-4 text-muted-foreground">Based on 5000+ reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        <div className="text-center">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors duration-300">
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;