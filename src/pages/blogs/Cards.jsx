import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <section>
        <div className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* CARD 1 */}
        <div className=" bg-white">
          <img
            src="/dog1.jpg"
            alt="dog"
            className="w-full h-48 object-cover"
          />

          <div className="py-3">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/author1.jpg"
                alt="author"
                className="w-7 h-7 rounded-full object-cover"
              />
              <p className="text-xs text-gray-500">
                <span className="font-medium text-gray-700">Author</span> Nov 29,
                2025
              </p>
            </div>

            <h3 className="text-[15px] font-semibold text-gray-900 mb-2">
              Premium, vet-formulated.
            </h3>

            <p className=" text-[13px] text-gray-600 leading-relaxed mb-5">
              In today’s hyperconnected world, the lines between work, leisure, and rest have.
            </p>

            <button className="flex bg-[#F4F4F4] p-4 items-center gap-2 text-xs font-semibold">
              READ MORE
              <img src="/greater.png" alt="arrow" className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className=" bg-white">
          <img
            src="/dog2.jpg"
            alt="dog"
            className="w-full h-48 object-cover"
          />

          <div className="py-3">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/author2.jpg"
                alt="author"
                className="w-7 h-7 rounded-full object-cover"
              />
              <p className="text-xs text-gray-500">
                <span className="font-medium text-gray-700">Author</span> Nov 29,
                2025
              </p>
            </div>

            <h3 className="text-[15px] font-semibold text-gray-900 mb-2">
              Premium, vet-formulated.
            </h3>

            <p className="text-[13px] text-gray-600 leading-relaxed mb-5">
              The real estate industry is undergoing a significant transformation as eco-friendly 
            </p>

            <button className="flex items-center bg-[#F4F4F4] p-4 gap-2 text-xs font-semibold">
              READ MORE
              <img src="/greater.png" alt="arrow" className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* CARD 3 */}
        <div className=" bg-white">
          <img
            src="/culinary.jpg"
            alt="culinary"
            className="w-full h-48 object-cover"
          />

          <div className="py-3">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/author3.jpg"
                alt="author"
                className="w-7 h-7 rounded-full object-cover"
              />
              <p className="text-xs text-gray-500">
                <span className="font-medium text-gray-700">Author</span> Nov 29,
                2025
              </p>
            </div>

            <h3 className="text-[15px] font-semibold text-gray-900 mb-2">
              Premium, vet-formulated.
            </h3>

            <p className="text-[13px] text-gray-600 leading-relaxed mb-5">
              Europe is a treasure trove of culinary delights, offering a diverse array of flavor...
            </p>

            <button className="flex items-center bg-[#F4F4F4] p-4 gap-2 text-xs font-semibold">
              READ MORE
              <img src="/greater.png" alt="arrow" className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* CARD 4 */}
        <div className=" bg-white">
          <img
            src="/dog3.jpg"
            alt="dog"
            className="w-full h-48 object-cover"
          />

          <div className="py-3">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/author4.jpg"
                alt="author"
                className="w-7 h-7 rounded-full object-cover"
              />
              <p className="text-xs text-gray-500">
                <span className="font-medium text-gray-700">Author</span> Nov 29,
                2025
              </p>
            </div>

            <h3 className="text-[15px] font-semibold text-gray-900 mb-2">
              Premium, vet-formulated.
            </h3>

            <p className="text-[13px] text-gray-600 leading-relaxed mb-5">
              Black-and-white photography is a timeless art form that transcends tren..
            </p>
            <Link to="/premium">
            <button className="flex items-center p-4 bg-[#F4F4F4] gap-2 text-xs font-semibold">
              READ MORE
              <img src="/greater.png" alt="arrow" className="w-3 h-3" />
            </button>
            </Link>
          </div>
        </div>

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
              <Footer />
    </section>
  );
};

export default Cards;
