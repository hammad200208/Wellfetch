import React from "react";
import { FiEye, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, image: "/product1.png", title: "Allergy Soft Chews", price: "$132.93" },
  { id: 2, image: "/product2.png", title: "Probiotic Soft Chews", price: "$132.93" },
  { id: 3, image: "/product3.png", title: "Allergy Soft Chews", price: "$132.93" },
  { id: 4, image: "/product4.png", title: "Probiotic Soft Chews", price: "$132.93" },
  { id: 5, image: "/product1.png", title: "Allergy Soft Chews", price: "$132.93" },
  { id: 6, image: "/product2.png", title: "Probiotic Soft Chews", price: "$132.93" },
  { id: 7, image: "/product3.png", title: "Allergy Soft Chews", price: "$132.93" },
  { id: 8, image: "/product4.png", title: "Probiotic Soft Chews", price: "$132.93" },
];

const Product = () => {
  const navigate = useNavigate();

  const handleAddToCart = (id) => {
    if (id === 1) {
      navigate("/allergy");
    }
  };

  return (
    <section className="w-full bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto">

        {/* PRODUCTS GRID */}
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

              <h4 className="text-black font-medium mb-1">
                {item.title}
              </h4>
              <p className="text-md text-[#4A4A4A] font-bold mb-4">
                {item.price}
              </p>

              {/* ADD TO CART */}
              <button
                onClick={() => handleAddToCart(item.id)}
                className="flex items-center gap-2 font-bold text-sm text-[#A37E65] border border-[#A37E65] px-4 py-2 rounded-full hover:bg-[#A37E65] hover:text-white transition"
              >
                Add to cart
              </button>

              <button className="mt-4 flex items-center gap-2 text-xs text-black hover:text-[#D8A85B] transition">
                View Details <FiEye className="text-sm" />
              </button>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex items-center justify-between mt-12 w-full max-w-4xl mx-auto">
          <button className="flex items-center gap-2 px-4 py-2 border border-[#0000001A] rounded-full text-sm font-semibold text-black hover:bg-gray-100 transition">
            <FiArrowLeft className="text-sm" /> Previous
          </button>

          <div className="flex items-center gap-2 text-sm">
            <button className="w-8 h-8 rounded-md bg-gray-100 font-medium">1</button>
            <button className="w-8 h-8 rounded-md hover:bg-gray-100">2</button>
            <button className="w-8 h-8 rounded-md hover:bg-gray-100">3</button>
            <span className="px-2">...</span>
            <button className="w-8 h-8 rounded-md hover:bg-gray-100">8</button>
            <button className="w-8 h-8 rounded-md hover:bg-gray-100">9</button>
            <button className="w-8 h-8 rounded-md hover:bg-gray-100">10</button>
          </div>

          <button className="flex items-center gap-2 px-6 py-2 border border-[#0000001A] rounded-xl text-sm font-semibold text-black hover:bg-gray-100 transition">
            Next <FiArrowRight className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
