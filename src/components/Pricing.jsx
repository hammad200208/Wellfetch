const plans = [
  {
    title: "Monthly Plan",
    price: "$29/Month",
    features: ["Exclusive Discounts", "Free shipping", "Cancel Anytime"],
  },
  {
    title: "Quarterly Plan",
    price: "$79/Month",
    features: ["Exclusive Discounts", "Free shipping", "Cancel Anytime"],
  },
  {
    title: "Annual Plan",
    price: "$279/Month",
    features: ["Exclusive Discounts", "Free shipping", "Cancel Anytime"],
  },
];

export default function Pricing() {
  return (
    <section className="bg-[#191A20] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl  text-white mb-3">
          Get Monthly Deliveries and <br /> Save More
        </h2>
        <p className="text-sm text-gray-300 max-w-md mx-auto mb-16">
          Never run out of your dog’s essentials again. Convenient, reliable,
          and delivered right to your door.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-8 pb-16 text-white flex flex-col items-center"
              style={{
                background:
                  "linear-gradient(180deg, #B695FF 0%, #502CA2 100%)",
              }}
            >
              {/* Title & Price */}
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-lg font-medium mb-6">{plan.price}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8 self-start">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm"
                  >
                    <img
                      src="/Vector3.png"
                      alt="tick"
                      className="w-4 h-4"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Floating Button */}
              <button
                className="absolute -bottom-4 left-1/2 -translate-x-1/2
                           bg-[#D8A85B] text-black text-sm font-medium
                           px-8 py-2 rounded-full
                           hover:opacity-90 transition"
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
