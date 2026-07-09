
import React from "react";
import { Link } from "react-router-dom";
import backgroundVideo from "../assets/digital-marketing-bg6.mp4";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-start overflow-hidden"
    >
      {/* 🔹 Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover brightness-auto"
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay */}

      </div>
      <div className="absolute inset-0 bg-black/20"></div>

      {/* 🔹 Content */}
      <div className="relative z-10 w-full max-w-10xl mx-auto px-6 sm:px-10 lg:px-20 py-20 text-center lg:text-left">
        <h1 className="text-transparent bg-clip-text bg-linear-to-r from-white to-blue-400 text-2xl sm:text-3xl lg:text-5xl font-extrabold mb-4 leading-tight">
          Welcome to Clix Consultants Pvt Ltd
        </h1>


        
         <p className="text-white text-lg sm:text-3xl font-semibold mb-6">
          <b>Architecting The Digital Change</b>
        </p>
         <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-8xl mb-8">
          At Clix Consultants Pvt Ltd, we leverage the latest technology to
          propel your business forward to make it scalable, secure, and
          future-ready. Powered by engineers with a problem-solving mindset, we
          deliver outcomes that go beyond expectations. 
Explore our open positions to find roles that align with your interests and expertise. From entry-level positions to leadership roles.
        </p>

        <Link
          to="/about"
          className="inline-block bg-gray-300 hover:bg-slate-900 hover:text-white text-black font-semibold text-lg px-8 py-3 rounded-md shadow-md transition-all duration-300 hover:scale-105"
        >
          Read More
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;