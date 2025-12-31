import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <section>
        <div className="w-full bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <p className="text-sm text-black/60 mb-6">
          Home &gt; <span className="text-black">My Account</span>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* LEFT SIDEBAR */}
          <aside className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold mb-3">
                Manage My Account
              </h3>
              <ul className="space-y-2 text-sm text-black/60">
                <li className="text-[#D8A85B] font-medium cursor-pointer">
                  My Profile
                </li>
                <Link to="/address">
                <li className="cursor-pointer">Address Book</li>
                </Link>
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
          <div className="lg:col-span-3 shadow-md rounded-xl p-8">
            <h2 className="text-lg font-semibold text-[#D8A85B] mb-6">
              Edit Your Profile
            </h2>

            <form className="space-y-5">
              {/* First Name */}
              <div>
                <label className="text-sm text-black">First Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full mt-1 px-4 py-3 bg-[#F0F0F0] rounded-lg text-sm outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-black">Email</label>
                <input
                  type="email"
                  placeholder="rimelm@gmail.com"
                  className="w-full mt-1 px-4 py-3 bg-[#F0F0F0] rounded-lg text-sm outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm text-black">Phone Number*</label>
                <input
                  type="text"
                  placeholder="+123456789"
                  className="w-full mt-1 px-4 py-3 bg-[#F0F0F0] rounded-lg text-sm outline-none"
                />
              </div>

              {/* Password Change */}
              <div className="pt-4">
                <p className="text-sm font-medium mb-3">
                  Password Changes
                </p>

                <div className="space-y-3">
                  <input
                    type="password"
                    placeholder="Current Password"
                    className="w-full px-4 py-3 bg-[#F0F0F0] rounded-lg text-sm outline-none"
                  />
                  <input
                    type="password"
                    placeholder="New Password"
                    className="w-full px-4 py-3 bg-[#F0F0F0] rounded-lg text-sm outline-none"
                  />
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    className="w-full px-4 py-3 bg-[#F0F0F0] rounded-lg text-sm outline-none"
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

export default Profile;
