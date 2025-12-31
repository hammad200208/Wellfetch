import React from "react";
import Footer from "../../components/Footer.jsx";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <section>
        <div className="w-full bg-white pt-30 pb-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-400 mb-4">
          Shop &gt; <span className="text-black">Cart</span>
        </p>

        <h2 className="text-2xl text-[#000000] font-bold mb-8">Your cart</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT: CART ITEMS */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cart Item */}
            <div className="flex items-center justify-between border border-[#0000001A] rounded-xl p-4">
              <div className="flex items-center gap-4">
                <img
                  src="/product5.png"
                  alt="Allergy Soft Chews"
                  className="w-20 h-20 object-contain"
                />

                <div>
                  <h3 className="font-bold text-md text-[#000000]">
                    Allergy Soft Chews
                  </h3>
                  <p className="text-xs text-[#000000]">
                    Quantity: <span className="text-black/60"> 05 </span> <br /> <span className="text-[#000000]"> Net wt: </span> <span className="text-black/60"> 300g </span>
                  </p>
                  <p className="font-bold mt-1">$565</p>
                </div>
              </div>

              <div className="flex flex-col items-end gap-3">
                <img
                  src="/bin.png"
                  alt="remove"
                  className="w-4 h-4 cursor-pointer"
                />

                {/* Quantity Control */}
                <div className="flex items-center bg-[#F0F0F0] rounded-full px-3 py-1 gap-6">
                  <button className="text-lg">-</button>
                  <span className="text-sm font-medium">4</span>
                  <button className="text-lg">+</button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: ORDER SUMMARY */}
          <div className="border border-[#0000001A] rounded-xl p-6 h-fit">
            <h3 className="font-bold text-[#000000] mb-4">Order Summary</h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-black/60">Subtotal</span>
                <span className="font-bold">$565</span>
              </div>

              <div className="flex justify-between text-red-500">
                <span className="text-black/60">Discount (-20%)</span>
                <span className="font-bold">-$113</span>
              </div>

              <div className="flex justify-between">
                <span className="text-black/60">Delivery Fee</span>
                <span className="font-bold">$15</span>
              </div>

              <hr className="border-black/10" />

              <div className="flex justify-between font-normal text-base">
                <span className="text-[#000000]">Total</span>
                <span className="font-bold">$467</span>
              </div>
            </div>

            {/* Promo Code */}
            <div className="flex items-center gap-2 mt-5">
              <div className="flex items-center gap-2 bg-[#F0F0F0] rounded-full px-4 py-2 w-full">
                <img src="/tag.png" alt="promo" className="w-4 h-4" />
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="outline-none text-sm w-full"
                />
              </div>

              <button className="bg-black text-white px-5 py-2 rounded-full text-sm">
                Apply
              </button>
            </div>

            {/* Checkout Button */}
            <Link to="/billing">
            <button className="w-full bg-black text-white rounded-full py-3 mt-6 flex items-center justify-center gap-2">
              Go to Checkout <img src="rightarrow.png" alt="" className="w-3 h-3" />
            </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </section>
    

  );
};

export default Cart;
