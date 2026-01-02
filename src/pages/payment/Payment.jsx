import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <section>
      <div className="w-full bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <p className="text-sm text-black/60 mb-6">
            Home &gt; <span className="text-black">My Account</span>
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* LEFT SIDEBAR */}
            <aside className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold mb-3">
                  Manage My Account
                </h3>
                <ul className="space-y-2 text-sm text-black/60">
                  <Link to="/profile">
                    <li className="cursor-pointer">My Profile</li>
                  </Link>
                  <Link to="/address">
                    <li className="cursor-pointer">Address Book</li>
                  </Link>

                  <li className="text-[#D8A85B] font-medium cursor-pointer">
                    My Payment Options
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-3">
                  My Subscriptions
                </h3>
                <ul className="space-y-2 text-sm text-black/60">
                  <Link to="/active">
                  <li className="cursor-pointer">Active</li>
                  </Link>
                  <Link to="/paused">
                  <li className="cursor-pointer">Paused</li>
                  </Link>
                  <Link to="/cancelled">
                  <li className="cursor-pointer">Cancelled</li>
                  </Link>
                </ul>
              </div>
            </aside>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-3  shadow-md rounded-xl p-6 max-w-4xl">
              <h2 className="text-lg font-semibold text-[#D8A85B] mb-6">
                Edit Your Address
              </h2>

              <form className="space-y-4">
                {/* Card Type */}
                <div>
                  <label className="text-sm text-black">Card</label>
                  <select className="w-full mt-1 px-4 py-3 bg-[#F0F0F0] rounded-lg text-sm outline-none">
                    <option>Select Country</option>
                  </select>
                </div>

                {/* Name on Card */}
                <div>
                  <label className="text-sm text-black">Name on Card</label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-full mt-1 px-4 py-3 bg-[#F0F0F0] rounded-lg text-sm outline-none"
                  />
                </div>

                {/* Card Number */}
                <div>
                  <label className="text-sm text-black">Card Number</label>
                  <input
                    type="text"
                    placeholder="78945-45456"
                    className="w-full mt-1 px-4 py-3 bg-[#F0F0F0] rounded-lg text-sm outline-none"
                  />
                </div>

                {/* Expiry & CVC */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-black">Expire Date</label>
                    <input
                      type="text"
                      placeholder="08/25"
                      className="w-full mt-1 px-4 py-3 bg-[#F0F0F0] rounded-lg text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-black">CVC</label>
                    <input
                      type="text"
                      placeholder="9254"
                      className="w-full mt-1 px-4 py-3 bg-[#F0F0F0] rounded-lg text-sm outline-none"
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-4 pt-6">
                  <button
                    type="button"
                    className="text-sm text-black/60 hover:text-black"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="bg-[#D8A85B] hover:bg-[#C09040] text-white text-sm px-6 py-2 rounded-md"
                  >
                    Add Card
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Payment;
