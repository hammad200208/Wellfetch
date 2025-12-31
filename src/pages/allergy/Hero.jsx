import React, { useState } from "react";


const Hero = () => {
  const [plan, setPlan] = useState("subscribe");

  return (
    <section className="w-full bg-white pt-30 pb-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ---------- BREADCRUMB ---------- */}
        <p className="text-sm text-gray-500 mb-6">
          Shop <span className="mx-1">›</span>
          <span className="text-black font-medium">Allergy Soft Chews</span>
        </p>

        {/* ---------- MAIN CONTENT ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ---------- LEFT: IMAGES ---------- */}
          <div className="flex gap-3">
            {/* Thumbnails */}
            <div className="flex flex-col gap-13">
              <img src="/user1.png" alt="" className="w-30 h-30 border border-[#C9C9C9] rounded-lg cursor-pointer" />
              <img src="/product1.png" alt="" className="w-30 h-30 border border-[#C9C9C9] rounded-lg cursor-pointer" />
              <img src="/user2.jpg" alt="" className="w-30 h-30 border border-[#C9C9C9] rounded-lg cursor-pointer" />
            </div>

            {/* Main Image */}
            <div className="flex-1 border border-[#C9C9C9] rounded-xl p-6 flex items-center justify-center">
              <img
                src="/user3.jpg"
                alt="Allergy Soft Chews"
                className="max-h-95 object-contain"
              />
            </div>
          </div>

          {/* ---------- RIGHT: DETAILS ---------- */}
          <div>
            <h1 className="text-3xl font-bold text-[#000000] mb-2">
              Allergy Soft Chews
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex text-[#D8A85B]">
                <img src="/star.png" alt="" className="w-5 h-5 bg-cover" />
                <img src="/star.png" alt="" className="w-5 h-5 bg-cover" />
                <img src="/star.png" alt="" className="w-5 h-5 bg-cover" />
                <img src="/star.png" alt="" className="w-5 h-5 bg-cover" />
                <img src="/halfstar.png" alt="" className="w-3 h-5 bg-cove" />
              </div>
             <p>4.5/<span className="text-sm text-gray-500">5</span></p>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold text-[#000000]">$100</span>
              <span className="line-through font-bold text-black/30">$139</span>
              <span className="text-sm bg-red-500/10 px-4 py-2 rounded-xl text-[#FF3333] font-medium">-20%</span>
            </div>

            {/* Description */}
            <p className="text-sm text-black/60 mb-5 leading-relaxed">
              Our scientifically formulated Allergy Soft Chews are designed to help
              dogs struggling with seasonal allergies. Packed with Omega-3s and
              Colostrum, they support a healthy immune system and maintain normal
              histamine levels.
            </p>

            {/* Key Ingredients */}
            <div className="mb-6">
              <h4 className="font-semibold text-[#000000] mb-2">Key ingredients</h4>
              <div className="flex gap-3 flex-wrap">
                <span className="px-3 py-1 text-[#FFFFFF] bg-[#D8A85B] rounded-full text-xs">
                  Salmon Oil
                </span>
                <span className="px-3 py-1 text-[#FFFFFF] bg-[#D8A85B] rounded-full text-xs">
                  Enzymes
                </span>
                <span className="px-3 py-1 text-[#FFFFFF] bg-[#D8A85B] rounded-full text-xs">
                  Fibres
                </span>
                <span className="px-3 py-1 text-[#FFFFFF] bg-[#D8A85B] rounded-full text-xs">
                  Protein
                </span>
              </div>
            </div>

            <div className="space-y-3 mb-6">

  {/* SUBSCRIBE OPTION */}
  <div
    onClick={() => setPlan("subscribe")}
    className={`cursor-pointer rounded-xl p-4 border transition-all
      ${plan === "subscribe"
        ? "border-[#FF3333] bg-[#D8A85B]/20"
        : "border-transparent bg-[#D8A85B]/10"
      }`}
  >
    <div className="flex justify-between items-start">
      <label className="flex items-start gap-3 cursor-pointer">
        {/* Radio */}
        <span
          className={`mt-1 w-4 h-4 rounded-full border flex items-center justify-center
            ${plan === "subscribe"
              ? "border-[#FF3333]"
              : "border-black/30"
            }`}
        >
          {plan === "subscribe" && (
            <span className="w-2 h-2 rounded-full bg-[#FF3333]" />
          )}
        </span>

        <div>
          <p className="font-semibold text-black text-sm">
            Subscribe & Save 15%
          </p>
          <p className="text-xs text-black/60">
            Delivered every 30 days. Cancel anytime.
          </p>
        </div>
      </label>

      <div className="text-right">
        <p className="font-bold text-black">$100</p>
        <p className="text-xs line-through text-black/30">$139</p>
      </div>
    </div>
  </div>

  {/* ONE-TIME PURCHASE */}
  <div
    onClick={() => setPlan("oneTime")}
    className={`cursor-pointer rounded-xl p-4 border transition-all
      ${plan === "oneTime"
        ? "border-[#FF3333] bg-[#D8A85B]/20"
        : "border-transparent bg-[#D8A85B]/10"
      }`}
  >
    <div className="flex justify-between items-center">
      <label className="flex items-center gap-3 cursor-pointer text-sm text-black">
        <span
          className={`w-4 h-4 rounded-full border flex items-center justify-center
            ${plan === "oneTime"
              ? "border-[#FF3333]"
              : "border-black/30"
            }`}
        >
          {plan === "oneTime" && (
            <span className="w-2 h-2 rounded-full bg-[#FF3333]" />
          )}
        </span>
        One-time purchase
      </label>

      <span className="text-sm font-semibold text-black/60">$139</span>
    </div>
  </div>

</div>



            {/* Quantity + Button */}
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-[#F0F0F0] rounded-full px-4 py-2">
                <button className="text-lg text-[#000000] px-2">−</button>
                <span className="px-3 text-[#000000]">1</span>
                <button className="text-lg text-[#000000] px-2">+</button>
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
