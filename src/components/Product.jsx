import React from "react";
import { FiArrowRight, FiEye } from "react-icons/fi";

const products = [
  {
    id: 1,
    image: "/product1.png",
    title: "Allergy Soft Chews",
    price: "$132.93",
  },
  {
    id: 2,
    image: "/product2.png",
    title: "Probiotic Soft Chews",
    price: "$132.93",
  },
  {
    id: 3,
    image: "/product3.png",
    title: "Allergy Soft Chews",
    price: "$132.93",
  },
  {
    id: 4,
    image: "/product4.png",
    title: "Probiotic Soft Chews",
    price: "$132.93",
  },
];

const Product = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* ---------- HEADER ---------- */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#D8A85B]">
            Featured Product
          </h2>
          <button className="flex items-center gap-2 text-sm text-black hover:text-[#D8A85B] transition">
            View all <FiArrowRight />
          </button>
        </div>

        {/* ---------- PRODUCTS GRID ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-xl p-5 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-44 object-contain mb-4"
              />

              <h4 className="text-[#000000] font-medium mb-1">
                {item.title}
              </h4>
              <p className="text-md text-[#4A4A4A] font-bold mb-4">{item.price}</p>

              <button className="flex items-center gap-2 font-bold text-sm text-[#A37E65] border border-[#A37E65] px-4 py-2 rounded-full hover:bg-[#A37E65] hover:text-white transition">
                
                Add to cart
              </button>

              <button className="mt-4 flex items-center gap-2 text-xs text-[#000000] hover:text-[#D8A85B] transition">
                View Details <FiEye className="text-sm" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;