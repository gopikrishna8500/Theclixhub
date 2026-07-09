import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const slides = [
    {
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Welcome to Clix Consultants Pvt Ltd",
      subtitle: "Your Trusted IT Staffing & Consulting Partner",
      description: "We enable organizations to scale efficiently by connecting top-tier talent with high-impact roles.",
      button: "READ MORE",
      link: "/about",
    },
    {
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Strategic Workforce & Talent Solutions",
      subtitle: "Empowering Businesses to Grow & Innovate",
      description: "We deliver skilled professionals who strengthen teams, drive transformation, and accelerate success.",
      button: "READ MORE",
      link: "/about",
    },
    {
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=60",
      title: "Consulting • Staffing • Business Services",
      subtitle: "Building Long-Term Client & Talent Partnerships",
      description: "We are committed to trust, transparency, performance, and sustainable growth.",
      button: "GET STARTED",
      link: "/about",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[800px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
        >
          <img src={slide.image} alt="" className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-black/10 flex items-center justify-center text-center px-6">
            <div className="text-white max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-extrabold mb-3 drop-shadow-md">
                {slide.title}
              </h1>
              <h2 className="text-lg md:text-2xl font-semibold mb-3 opacity-90">
                {slide.subtitle}
              </h2>
              <p className="text-sm md:text-lg mb-5 opacity-90 leading-relaxed">
                {slide.description}
              </p>

              <button
                className="px-7 py-3 bg-slate-900 hover:bg-slate-700 transition rounded-md text-sm font-semibold uppercase tracking-wide shadow-md"
                onClick={() => navigate(slide.link)}
              >
                {slide.button}
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2 bg-black/80 hover:bg-black/40 p-2 rounded-full text-white"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 -translate-y-1/2 bg-black/80 hover:bg-black/40 p-2 rounded-full text-white"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
};

export default HeroSection;
