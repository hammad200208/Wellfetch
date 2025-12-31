import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-white pt-20 pb-10">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Heading */}
        <h1
          className="text-4xl font-bold mb-3 text-[#D8A85B]"
        >
          Our Products
        </h1>

        {/* Subtitle */}
        <p
          className="text-sm mb-8 text-[#000000] max-w-xl mx-auto"
        >
          From allergy relief to tummy tamers, explore our range of
          vet-formulated soft chews designed to keep your dog happy and healthy.
        </p>

        {/* Search + Filters */}
        <div className="flex items-center gap-3">
          {/* Search Bar */}
          <div className="flex items-center w-full bg-[#F0F0F0] rounded-full px-4 py-3">
            <img
              src="/search.png"
              alt="search"
              className="w-4 h-4 mr-3"
            />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          {/* Latest Dropdown */}
          <button className="flex items-center gap-2 bg-black text-white text-sm px-6 py-3 rounded-full font-medium">
            latest
            <img
              src="/downarrow.png"
              alt="down arrow"
              className="w-3 h-3"
            />
          </button>

          {/* Filter Button */}
          <button className="flex items-center justify-center w-12 h-12 min-w-12 min-h-12 bg-black rounded-full">
            <img
              src="/filter.png"
              alt="filter"
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
