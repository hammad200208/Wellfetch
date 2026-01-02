import React, { useState } from "react";
import Footer from "../../components/Footer.jsx";

const Billing = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <section>
      <div className="w-full bg-white pt-25 pb-10 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <p className="text-sm text-black/60 mb-4">
            Shop &gt; Cart &gt; <span className="text-black">Checkout</span>
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* LEFT: BILLING FORM */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-6 text-black">
                Billing Details
              </h2>

              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-black">
                    First Name<span className="text-[#FF3333]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-full mt-1 px-4 py-3 rounded-lg bg-[#F0F0F0] text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-black">
                    Country
                  </label>
                  <div className="relative mt-1">
                    <select className="w-full px-4 py-3 rounded-lg bg-[#F0F0F0] text-sm appearance-none outline-none">
                      <option>Select Country</option>
                    </select>
                    <img
                      src="/downarrow3.png"
                      alt="arrow"
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-black">
                    Street Address<span className="text-[#FF3333]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Street no."
                    className="w-full mt-1 px-4 py-3 rounded-lg bg-[#F0F0F0] text-sm outline-none"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Apartment, floor etc. (optional)"
                  className="w-full px-4 py-3 rounded-lg bg-[#F0F0F0] text-sm outline-none"
                />

                <div>
                  <label className="text-sm font-medium text-black">
                    Town/City<span className="text-[#FF3333]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter City"
                    className="w-full mt-1 px-4 py-3 rounded-lg bg-[#F0F0F0] text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-black">
                    Phone Number<span className="text-[#FF3333]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="+123456789"
                    className="w-full mt-1 px-4 py-3 rounded-lg bg-[#F0F0F0] text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-black">
                    Email Address<span className="text-[#FF3333]">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="rimelm@gmail.com"
                    className="w-full mt-1 px-4 py-3 rounded-lg bg-[#F0F0F0] text-sm outline-none"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input type="checkbox" className="accent-red-500" />
                  <p className="text-sm text-black/60">
                    Save this information for faster check-out next time
                  </p>
                </div>
              </form>
            </div>

            {/* RIGHT: ORDER SUMMARY */}
            <div className="border border-[#0000001A] rounded-xl p-6 h-fit">
              <h3 className="font-bold mb-4 text-black">Order Summary</h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-black/60">Subtotal</span>
                  <span className="font-bold">$565</span>
                </div>

                <div className="flex justify-between text-[#FF3333]">
                  <span className="text-black/60">Discount (-20%)</span>
                  <span className="font-bold">-$113</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-black/60">Delivery Fee</span>
                  <span className="font-bold">$15</span>
                </div>

                <hr className="border-[#0000001A]" />

                <div className="flex justify-between text-base">
                  <span>Total</span>
                  <span className="font-bold">$467</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-5">
                <div className="flex items-center gap-2 bg-[#F0F0F0] rounded-full px-4 py-2 w-full">
                  <img src="/tag.png" alt="" className="w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Add promo code"
                    className="bg-transparent outline-none text-sm w-full"
                  />
                </div>

                <button className="bg-black text-white px-5 py-2 rounded-full text-sm">
                  Apply
                </button>
              </div>

              <div className="mt-5 space-y-3 text-sm">
                <label className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input type="radio" name="payment" className="accent-black" />
                    <span>Bank</span>
                  </div>
                  <div className="flex gap-2">
                    <img src="/visa.png" className="h-4" />
                    <img src="/mastercard.png" className="h-4" />
                  </div>
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    defaultChecked
                    className="accent-black"
                  />
                  <span>Cash on delivery</span>
                </label>
              </div>

              <button
                onClick={() => setShowSuccess(true)}
                className="w-full bg-black text-white rounded-full py-3 mt-6 flex items-center justify-center gap-2"
              >
                Place Order
                <img src="/rightarrow.png" alt="" className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 text-center">
            <div className="flex justify-center mb-4">
              <img src="/greentickmark.png" className="w-14 h-14" />
            </div>

            <h2 className="text-lg font-bold mb-2">Order Confirmed!</h2>

            <p className="text-sm text-black/60 mb-5 max-w-xl mx-auto">
              Thank you for your purchase. We’ve sent a confirmation email to
              your inbox. Your package is going to love it!
            </p>

            <div className="flex items-start gap-3 bg-[#F5F5F5] rounded-xl p-4 mb-5 text-left">
              <img src="/date.png" className="w-6 h-6 mt-3" />
              <div>
                <p className="text-sm font-medium text-[#4A4A4A]">Order #WF-9923</p>
                <p className="text-sm font-medium">
                  Estimated Delivery: 2–3 Business Days
                </p>
                <p className="text-xs text-black/50">
                  You’ll receive a tracking link once shipped.
                </p>
              </div>
            </div>

            <button className="w-full bg-black text-white rounded-full py-3 flex items-center justify-center gap-2 mb-3">
              Manage Subscription
              <img src="/rightarrow.png" className="w-3 h-3" />
            </button>

            <button
              onClick={() => setShowSuccess(false)}
              className="text-sm text-[#4A4A4A] hover:text-black"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}

      <Footer />
    </section>
  );
};

export default Billing;
