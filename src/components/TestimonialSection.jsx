import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import image from '../assets/client-testi.jpg';

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Clix Consultants Pvt. Ltd. provided highly skilled professionals who aligned perfectly with our project needs. Their dedication and responsiveness ensured our staffing requirements were consistently met. I strongly recommend Clix Consultants Pvt. Ltd. to organizations looking for reliable and quality talent solutions.",
      author: "Chris A",
      image: image
    },
    {
      text: "The team at Clix Consultants Pvt. Ltd. took the time to understand my experience, skills, and long-term career goals. They guided me throughout the hiring process with clarity and professionalism. I confidently recommend them to anyone seeking meaningful career opportunities.",
      author: "Robert R",
      image: image
    },
    {
      text: "For our fast-paced and high-value project, Clix Consultants Pvt. Ltd. played a crucial role in delivering capable talent on time. Their continued support has helped us maintain efficiency and exceed client expectations. We truly appreciate their partnership.",
      author: "Matt D",
      image: image
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-2">What Our Clients Say</h2>
          <div className="w-16 h-1 bg-blue-900 mx-auto mb-8"></div>
          <p className="text-black mb-12">
            Trusted by professionals and businesses across industries.
          </p>

          <div className="relative">
            <div className="flex items-center justify-center mb-8">
              <button
                onClicFk={prevTestimonial}
                className="p-2 rounded-full hover:bg-gray-300 transition-colors mr-8"
       F       >
                <ChevronLeft className="w-6 h-6 text-black" />
              </button>

              <div className="w-20 h-20 rounded-full overflow-hidden mx-8 bg-black">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].author}
                  className="w-full h-full object-cover"
                />
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full hover:bg-gray-300 transition-colors ml-8"
              >
                <ChevronRight className="w-6 h-6 text-black" />
              </button>
            </div>

            <blockquote className="text-black text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
              "{testimonials[currentTestimonial].text}"
            </blockquote>

            <div className="text-black text-8xl font-serif mb-4">"</div>

            <cite className="text-black font-semibold text-xl">
              {testimonials[currentTestimonial].author}
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
