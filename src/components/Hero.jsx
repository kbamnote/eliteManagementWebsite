/* eslint-disable no-useless-escape */
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import ContactModal from "./ContactModal";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showContact, setShowContact] = useState(false);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&q=80",
      title: "LEARNING EXCELLENCE",
      subtitle: "Transform Your Knowledge",
      description:
        "Elite Management provides comprehensive educational programs, connecting passionate learners with expert instructors to foster growth and success.",
      buttonText: "ENROLL NOW",
    },
    {
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80",
      title: "CAREER ADVANCEMENT",
      subtitle: "Master New Skills",
      description:
        "Our courses are designed to help you advance your career with practical, industry-relevant knowledge and skills.",
      buttonText: "START LEARNING",
    },
    {
      image:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1920&q=80",
      title: "INDUSTRY READY",
      subtitle: "Learn From Experts",
      description:
        "Gain real-world exposure with curriculum designed by industry professionals and hands-on learning modules.",
      buttonText: "VIEW COURSES",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1920&q=80",
      title: "SUCCESS JOURNEY",
      subtitle: "Build Your Future",
      description:
        "Join thousands of successful learners who transformed their careers with Elite Managements.",
      buttonText: "JOIN TODAY",
    },
  ];

  /* AUTO SLIDE */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [slides.length]);

  const getTextDelay = (index) => `${index * 0.12}s`;

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            index === currentSlide
              ? "opacity-100 z-10"
              : "opacity-0 z-0"
          }`}
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Content */}
          <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
            <div className="max-w-4xl w-full">
              <h1
                key={`title-${currentSlide}`}
                className="text-5xl md:text-7xl font-bold mb-6 slide-in-left"
                style={{ animationDelay: getTextDelay(0) }}
              >
                {slide.title}
              </h1>

              <h2
                key={`subtitle-${currentSlide}`}
                className="text-2xl md:text-4xl font-semibold mb-6 slide-in-left"
                style={{ animationDelay: getTextDelay(1) }}
              >
                {slide.subtitle}
              </h2>

              <p
                key={`desc-${currentSlide}`}
                className="text-lg md:text-xl mb-8 max-w-2xl mx-auto slide-in-left"
                style={{ animationDelay: getTextDelay(2) }}
              >
                {slide.description}
              </p>

              <button
                key={`btn-${currentSlide}`}
                type="button"
                onClick={() => setShowContact(true)}
                className="bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-full text-lg slide-in-left flex items-center mx-auto hover-lift"
                style={{ animationDelay: getTextDelay(3) }}
              >
                {slide.buttonText}
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* DOT INDICATORS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
      <ContactModal
        open={showContact}
        onClose={() => setShowContact(false)}
        onSubmit={(data) => {
          console.log("Contact form submitted:", data);
        }}
      />
    </div>
  );
};

export default Hero;
