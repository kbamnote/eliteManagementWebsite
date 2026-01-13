const ServiceCard = ({ icon, title, description, image, delay = 0 }) => {
  return (
    <div 
      className="relative bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="text-4xl mb-2">{icon}</div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;