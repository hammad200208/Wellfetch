import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto">

        {/* ---------- BREADCRUMB ---------- */}
        <p className="text-sm text-gray-500 mb-6">
          Shop <span className="mx-1">›</span>
          <span className="text-black font-medium">Allergy Soft Chews</span>
        </p>

        {/* ---------- MAIN CONTENT ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ---------- LEFT: IMAGES ---------- */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="flex flex-col gap-3">
              <img src="/user1.png" alt="" className="w-16 h-16 border rounded-lg cursor-pointer" />
              <img src="/user2.png" alt="" className="w-16 h-16 border rounded-lg cursor-pointer" />
              <img src="/user3.png" alt="" className="w-16 h-16 border rounded-lg cursor-pointer" />
              <img src="/user4.png" alt="" className="w-16 h-16 border rounded-lg cursor-pointer" />
            </div>

            {/* Main Image */}
            <div className="flex-1 border rounded-xl p-6 flex items-center justify-center">
              <img
                src="/product1.png"
                alt="Allergy Soft Chews"
                className="max-h-95 object-contain"
              />
            </div>
          </div>

          {/* ---------- RIGHT: DETAILS ---------- */}
          <div>
            <h1 className="text-3xl font-bold text-black mb-2">
              Allergy Soft Chews
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex text-[#D8A85B]">
                ★★★★★
              </div>
              <span className="text-sm text-gray-500">(345)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold text-black">$100</span>
              <span className="line-through text-gray-400">$139</span>
              <span className="text-sm text-red-500 font-medium">-28%</span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-5 leading-relaxed">
              Our scientifically formulated Allergy Soft Chews are designed to help
              dogs struggling with seasonal allergies. Packed with Omega-3s and
              Colostrum, they support a healthy immune system and maintain normal
              histamine levels.
            </p>

            {/* Key Ingredients */}
            <div className="mb-6">
              <h4 className="font-semibold text-black mb-2">Key ingredients</h4>
              <div className="flex gap-3 flex-wrap">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">
                  Colostrum
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">
                  Omega-3
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">
                  Zinc
                </span>
              </div>
            </div>

            {/* Subscription Box */}
            <div className="border border-red-300 rounded-xl p-4 mb-5">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-semibold text-black text-sm">
                    Subscribe & Save 15%
                  </p>
                  <p className="text-xs text-gray-500">
                    Delivered every 30 days. Cancel anytime.
                  </p>
                </div>
                <span className="font-bold text-red-500">$100</span>
              </div>

              <div className="flex items-center justify-between mt-3">
                <label className="flex items-center gap-2 text-sm">
                  <input type="radio" checked readOnly />
                  One-time purchase
                </label>
                <span className="text-sm font-semibold">$139</span>
              </div>
            </div>

            {/* Quantity + Button */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-full px-4 py-2">
                <button className="text-lg px-2">−</button>
                <span className="px-3">1</span>
                <button className="text-lg px-2">+</button>
              </div>

              <button className="flex-1 bg-black text-white py-3 rounded-full text-sm font-semibold hover:opacity-90 transition">
                Start Subscription
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
