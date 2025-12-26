import { useState } from "react";

const images = [
  "/hero.png",
  "/hero2.png",
  "/hero3.png",
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full">
      
      {/* Full Width Image */}
      <img
        src={images[activeIndex]}
        alt="Hero"
        className="w-full h-auto object-cover"
      />

      {/* Dots BELOW the image */}
      <div className="flex justify-center gap-2 py-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              activeIndex === index
                ? "bg-[#D8A85B]" // active brown
                : "bg-black"     // inactive black
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;
