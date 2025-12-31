import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Address = () => {
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
                  <li className="text-[#D8A85B] font-medium cursor-pointer">
                    Address Book
                  </li>
                  <Link to="/payment">
                  <li className="cursor-pointer">My Payment Options</li>
                  </Link>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-3">
                  My Subscriptions
                </h3>
                <ul className="space-y-2 text-sm text-black/60">
                  <li className="cursor-pointer">Active</li>
                  <li className="cursor-pointer">Paused</li>
                </ul>
              </div>
            </aside>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-3 shadow-md rounded-xl p-6 max-w-4xl">
              <h2 className="text-lg font-semibold text-[#D8A85B] mb-6">
                Edit Your Address
              </h2>

              <form className="space-y-4">
                {/* Country */}
                <div>
                  <label className="text-sm text-black">Country</label>
                  <select
                    className="w-full mt-1 px-4 py-3 bg-[#F0F0F0] rounded-lg text-sm outline-none"
                  >
                    <option>Select Country</option>
                  </select>
                </div>

                {/* Street Address */}
                <div>
                  <label className="text-sm text-black">
                    Street Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Street no."
                    className="w-full mt-1 px-4 py-3 bg-[#F0F0F0] rounded-lg text-sm outline-none"
                  />
                </div>

                {/* Apartment */}
                <div>
                  <input
                    type="text"
                    placeholder="Apartment, floor etc. (optional)"
                    className="w-full px-4 py-3 bg-[#F0F0F0] rounded-lg text-sm outline-none"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="text-sm text-black">
                    Town/City<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter City"
                    className="w-full mt-1 px-4 py-3 bg-[#F0F0F0] rounded-lg text-sm outline-none"
                  />
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
                    Save Changes
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

export default Address;
