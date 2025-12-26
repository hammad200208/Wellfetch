import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    image: "/user1.png",
    name: "Jack",
    text: "WeFetch’s AI vet helped me pick the right probiotics. The delivery is always on time. Highly recommend.",
  },
  {
    id: 2,
    image: "/user2.png",
    name: "Bryson Eaton",
    text: "The subscription model is flawless. I never run out of the allergy chews, and Alfie has stopped scratching completely!",
  },
  {
    id: 3,
    image: "/user3.png",
    name: "Jerry Doe",
    text: "The subscription model is flawless. I never run out of the allergy chews, and Alfie has stopped scratching completely!",
  },
];

const Testimonial = () => {
  // default is -1 meaning no card selected
  const [activeIndex, setActiveIndex] = useState(-1);

  const prev = () => {
    if (activeIndex === -1) {
      setActiveIndex(0); // select first card if none selected
    } else {
      setActiveIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
    }
  };

  const next = () => {
    if (activeIndex === -1) {
      setActiveIndex(0); // select first card if none selected
    } else {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <section
      className="w-full py-20 px-4 bg-[#24263C] bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/Paws1.png')" }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Testimonials
        </h2>
        <p className="text-sm text-gray-300 max-w-md mx-auto mb-14">
          See real experiences and feedback from our clients as they share how
          our products has helped them
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 mb-12 max-w-5xl mx-auto">
          {testimonials.map((item, index) => {
            const isActive = index === activeIndex; // check if active
            return (
              <div
                key={item.id}
                className={`relative rounded-xl px-6 pt-16 pb-20 text-left text-white overflow-visible transition-transform duration-300
                  ${isActive ? "scale-105 border-2 border-white/20" : "border-3 border-white/20 scale-100"}`}
                style={{
                  backgroundColor: "#4b4e60",
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* AVATAR */}
                <div className="absolute -top-7 left-4 w-14 h-14 z-30">
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white/20 backdrop-blur-md rounded-b-full" />
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-1 w-12 h-12 rounded-full object-cover"
                  />
                </div>

                {/* Quote Icon */}
                <img
                  src="/Vector.png"
                  alt="quote"
                  className="absolute bottom-3 -left-0.5 w-20"
                />

                {/* Text */}
                <p className="text-sm text-gray-200 leading-relaxed relative z-10 mb-6">
                  {item.text}
                </p>

                {/* Name */}
                <h4 className="absolute bottom-6 left-6 text-sm font-medium text-gray-300 z-20">
                  {item.name}
                </h4>
              </div>
            );
          })}
        </div>

        {/* NAV BUTTONS */}
        <div className="flex justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
