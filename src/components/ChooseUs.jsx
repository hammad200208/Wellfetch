import React from "react";

const ChooseUs = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* ---------- LEFT CONTENT ---------- */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#D8A85B] mb-4">
            Why Choose Us ?
          </h2>
          <p className="text-[#9A9A9A] mb-10 max-w-md">
            Your pet’s health and well‑being are our top priority.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="flex items-start gap-3">
              <img src="/born.png" alt="icon" className="w-6 h-4 mt-1" />
              <div>
                <h4 className="text-black font-semibold mb-1">EASE ALLERGIES</h4>
                <p className="text-sm text-[#9A9A9A]">
                  Provides relief from environmental triggers.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-3">
              <img src="/born.png" alt="icon" className="w-6 h-4 mt-1" />
              <div>
                <h4 className="text-black font-semibold mb-1">NATURAL INGREDIENTS</h4>
                <p className="text-sm text-[#9A9A9A]">
                  Carefully selected, naturally nutritious ingredients.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-3">
              <img src="/born.png" alt="icon" className="w-6 h-4 mt-1" />
              <div>
                <h4 className="text-black font-semibold mb-1">REDUCE ITCHING</h4>
                <p className="text-sm text-[#9A9A9A]">
                  Soothes skin irritation and discomfort.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-3">
              <img src="/born.png" alt="icon" className="w-6 h-4 mt-1" />
              <div>
                <h4 className="text-black font-semibold mb-1">ENZYME BLENDS</h4>
                <p className="text-sm text-[#9A9A9A]">
                  Supports healthy digestion and nutrient absorption.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- RIGHT IMAGE ---------- */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/dog.png"
            alt="Dog"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
