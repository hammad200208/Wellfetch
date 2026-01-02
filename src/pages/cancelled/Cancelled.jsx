import React from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiCreditCard,} from "react-icons/fi";
import Footer from "../../components/Footer";

const Cancelled = () => {
  return (
    <section>
      {/* Main wrapper */}
      <div className="w-full bg-white px-4 pt-20 pb-10 md:pt-15 lg:pt-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Flex layout for left & right columns */}
          <div className="flex flex-col lg:flex-row gap-10">

            {/* LEFT COLUMN */}
            <aside className="space-y-6 lg:w-1/4 my-4 md:my-6 lg:my-8">
             {/* Breadcrumb */}
          <p className="text-sm text-black/60 mb-6">
            Home &gt; <span className="text-black">My Account</span>
          </p>
              {/* Manage My Account */}
              <div>
                <h3 className="text-sm font-semibold mb-3">Manage My Account</h3>
                <ul className="space-y-2 text-sm text-black/60">
                  <Link to="/profile">
                    <li className="cursor-pointer hover:text-black">My Profile</li>
                  </Link>
                  <Link to="/address">
                    <li className="cursor-pointer hover:text-black">Address Book</li>
                  </Link>
                  <li className="cursor-pointer hover:text-black">My Payment Options</li>
                </ul>
              </div>

              {/* My Subscriptions */}
              <div>
                <h3 className="text-sm font-semibold mb-3">My Subscriptions</h3>
                <ul className="space-y-2 text-sm text-black/60">
                  <Link to="/active">
                    <li className="cursor-pointer hover:text-black">Active</li>
                  </Link>
                  <Link to="/paused">
                    <li className="cursor-pointer hover:text-black">Paused</li>
                  </Link>
                  <Link to="/cancelled">
                    <li className="text-[#D8A85B] font-medium cursor-pointer">Cancelled</li>
                  </Link>
                </ul>
              </div>
            </aside>

            {/* RIGHT COLUMN */}
            <div className="lg:w-3/4 bg-white rounded-xl shadow-md p-6 md:p-8 lg:p-10 my-4 md:my-6 lg:my-8">
              
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-[#D8A85B]">Cancelled Subscriptions</h2>
                <p className="text-sm text-black">
                  Manage your recurring wellness plans and delivery schedules.
                </p>
              </div>

              {/* CARD 1 */}
              <div className="border border-black/10 rounded-xl p-5">
                <div className="flex flex-col md:flex-row gap-5">
                  <img
                    src="/product5.png"
                    alt="product"
                    className="w-24 h-24 object-contain"
                  />

                  <div className="flex-1">
                    <p className="text-xs text-black/40 mb-1">ORDER #WF-9923</p>
                    <h3 className="font-bold">Allergy Soft Chews</h3>
                    <p className="text-sm text-black/60 mb-4">
                      Delivery Frequency: <span className="font-bold text-black">30 Days</span>
                    </p>

                    <div className="flex flex-wrap gap-3 mb-4">
                      <div className="flex items-center gap-3 bg-[#F5F5F5] px-3 py-2 rounded-lg text-xs">
                        <FiCalendar className="text-sm shrink-0" />
                        <div className="flex flex-col leading-tight">
                          <span className="text-[#4A4A4A] text-[11px]">Next Order Date</span>
                          <span className="font-bold">1 Jan 2026</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 bg-[#F5F5F5] px-3 py-2 rounded-lg text-xs">
                        <FiCreditCard className="text-sm shrink-0" />
                        <div className="flex flex-col leading-tight">
                          <span className="text-[#4A4A4A] text-[11px]">Payment Method</span>
                          <span className="font-bold">Visa •••• 4242</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <button className="px-4 py-2 rounded-full text-xs bg-black border border-[#000000] text-white font-bold flex items-center gap-1">
                        <img src="arrows.png" alt="" className="w-4 h-4" />
                        Reactivate Subscription
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-[#FF3333] font-bold">$565</p>
                    <p className="text-xs text-black/50">Per Delivery</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
       {/* Footer */}
        <Footer />
    </section>
  );
};

export default Cancelled;
