const TestimonialCard = ({ name, role, company, rating, content }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? 'text-foreground' : 'text-foreground'}>★</span>
    ));
  };

  return (
    <div className="bg-card rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      <div className="text-center">
        <div className="text-2xl mb-4">
          {renderStars(rating)}
        </div>
        <p className="text-foreground italic mb-6">"{content}"</p>
        <div className="border-t pt-6">
          <h4 className="font-bold text-foreground">{name}</h4>
          <p className="text-foreground text-sm">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;