import { useState } from "react";

const faqs = [
  {
    question: "What are enzyme blends, and why are they included?",
    answer:
      "Enzyme blends help break down proteins, fats, and carbohydrates, making it easier for your dog to digest food and absorb nutrients effectively.",
  },
  {
    question: "Are the ingredients in this product natural?",
    answer: "Yes, all ingredients are sourced from natural origins.",
  },
  {
    question: "Is this suitable for dogs of all ages?",
    answer: "Yes, it is formulated to be safe for dogs of all life stages.",
  },
  {
    question: "Can I use this with my dog’s current food?",
    answer: "Absolutely. It can be mixed with any existing dog food.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Most pet owners notice improvements within a few weeks.",
  },
  {
    question: "Does it contain artificial flavors or preservatives?",
    answer: "No, it does not contain artificial flavors or preservatives.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#F6F6F6] mt-4">
      <div className="max-w-3xl mx-auto  py-16 px-4">
        {/* Header */}
        <h2 className="text-3xl max-w-sm mx-auto  text-center text-black">
          Everything You Need to Know About Us
        </h2>
        <p className="text-center text-[#4A4A4A] mt-2 max-w-md mx-auto">
          We’ve gathered the most common questions to help you understand how
          Wellfetch works
        </p>

        {/* FAQ List */}
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all ${
                  isActive
                    ? "bg-[#AA335B] text-white border-[#AA335B]"
                    : "bg-white border-gray-200"
                }`}
              >
                <button
  onClick={() => setActiveIndex(isActive ? null : index)}
  className="w-full flex justify-between items-center p-4 text-left"
>
  <span
    className={`font-medium ${
      isActive ? "text-[#D8A85B]" : "text-black"
    }`}
  >
    {faq.question}
  </span>

  <span
  className={`w-8 aspect-square shrink-0 rounded-full
    border-2 flex items-center justify-center
    transition-colors
    ${isActive ? "border-[#D8A85B] text-[#D8A85B]" : "border-black text-black"}
  `}
>
  <span className="block text-[18px] leading-none font-semibold -translate-y-px">
    {isActive ? "−" : "+"}
  </span>
</span>


</button>


                {isActive && (
                  <div className="px-4 pb-4 text-white text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
