const ClientLogos = () => {
  const clients = [
    { name: 'Roca', logo: '/images/client/logo-roca-white.webp' },
    { name: 'Serviie', logo: '/images/client/logo-servile-white.webp' },
    { name: 'Creative Plastics', logo: '/images/client/logo-creative-plastics-white.webp' },
    { name: 'Tea Trails', logo: '/images/client/logo-teatrails-white.webp' },
    { name: 'UltraTech', logo: '/images/client/logo-ultratech-white.webp' },
    { name: 'Owens', logo: '/images/client/logo-owens-white.webp' },
    { name: 'Bharat', logo: '/images/client/logo-bharat-white.webp' },
    { name: 'Cambay', logo: '/images/client/logo-cambay-white.webp' },
    { name: 'Healthtotal', logo: '/images/client/logo-healthtotal-white.webp' },
    { name: 'Heinz', logo: '/images/client/logo-heinz-white.webp' },
    { name: 'Nilkamal', logo: '/images/client/logo-nilkamal-white.webp' },
    { name: 'Nova', logo: '/images/client/logo-nova-white.webp' },
    { name: 'Oasis', logo: '/images/client/logo-oasis-white.webp' },
    { name: 'Oneleph', logo: '/images/client/logo-oneleph-white.webp' },
    { name: 'Puneet', logo: '/images/client/logo-puneet-white.webp' },
    { name: 'Sahayak Trust', logo: '/images/client/logo-sahayak-trust-white.webp' },
    { name: 'Shree Renuka', logo: '/images/client/logo-shree-renuka-white.webp' },
    { name: 'Urbanetek', logo: '/images/client/logo-urbanetek-white.webp' },
    { name: 'Vora Ceramics', logo: '/images/client/logo-vora-ceramics-white.webp' },
    { name: 'Westcoast', logo: '/images/client/logo-westcoast-white.webp' },
  ];

  // Duplicate the clients array to create a continuous marquee effect
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-8xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Esteemed Learning Partners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're proud to partner with industry leaders who trust our expertise in education
          </p>
        </div>
        
        <div className="overflow-hidden py-9">
          <div className="flex animate-marquee whitespace-nowrap">
            {duplicatedClients.map((client, index) => (
              <div 
                key={index} 
                className="flex justify-center items-center opacity-80 hover:opacity-200 transition-all duration-400 hover:scale-500 mx-12 flex-shrink-0 p-4"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="min-h-21 object-contain filter grayscale hover:grayscale-0 transition-all duration-800 max-h-28 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;