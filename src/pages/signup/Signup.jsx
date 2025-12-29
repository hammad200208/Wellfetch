import React, { useState } from "react";
import { Link } from "react-router-dom"; 


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF]">
      
      {/* Top Bar */}
      <div className="w-full bg-[#DDB370] py-4 flex justify-center">
        <img src="/logo1.png" alt="WellFood Logo" className="h-8" />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl p-8">
          
          {/* Heading */}
          <h1 className="text-2xl font-semibold text-black">Hello,</h1>
          <h2 className="text-2xl font-bold text-black mt-1">
            Welcome User!
          </h2>
          <p className="text-sm text-black mt-2">
            We are very happy to see you here!
          </p>

          {/* Form */}
          <form className="mt-6 space-y-4">
            
            {/* Name */}
            <div>
              <label className="text-sm font-bold text-[#323A46]">Name</label>
              <input
                type="text"
                placeholder="Jack"
                className="w-full mt-1 bg-[#FAFAFC] px-4 py-2 border border-[#CBD1D8] rounded-md text-sm outline-none focus:ring-2 focus:ring-[#DDB370]"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="text-sm font-bold text-[#323A46]">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="9454751221454"
                className="w-full mt-1 bg-[#FAFAFC] px-4 py-2 border border-[#CBD1D8] rounded-md text-sm outline-none focus:ring-2 focus:ring-[#DDB370]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-bold text-[#323A46]">Email</label>
              <input
                type="email"
                placeholder="hello@gmail.com"
                className="w-full mt-1 bg-[#FAFAFC] px-4 py-2 border border-[#CBD1D8] rounded-md text-sm outline-none focus:ring-2 focus:ring-[#DDB370]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-bold text-[#323A46]">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Please Enter Your Password"
                  className="w-full mt-1 bg-[#FAFAFC] px-4 py-2 pr-10 border border-[#CBD1D8] rounded-md text-sm outline-none focus:ring-2 focus:ring-[#DDB370]"
                />

                {/* Eye Icon */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <img
                    src="/eye.png"
                    alt="Toggle password"
                    className="w-5 h-5"
                  />
                </button>
              </div>

              <div className="text-right mt-1">
                <span className="text-xs text-[#4A4A4A] cursor-pointer hover:underline">
                  Forgot Password
                </span>
              </div>
            </div>

            {/* Signup Button */}
            <Link to="/login">
            <button
              type="submit"
              className="w-full bg-[#DDB370] text-[#FFFFFF] py-2 rounded-md font-medium hover:opacity-90 transition"
            >
              Signup
            </button>
            </Link>
          </form>

          {/* OR */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-[#7E8B9E]" />
            <span className="text-xs text-[#7E8B9E]">OR</span>
            <div className="flex-1 h-px bg-[#7E8B9E]" />
          </div>

          {/* Social Signup */}
          <div className="flex gap-3">
            <button className="flex-1 border border-[#E0E3E8] text-[#7E8B9E] rounded-md py-2 text-sm flex items-center justify-center gap-2 hover:bg-gray-50">
              <img src="/Google.png" alt="Google" className="w-5 h-5" />
              Signup with Google
            </button>

            <button className="flex-1 border border-[#E0E3E8] text-[#7E8B9E] rounded-md py-2 text-sm flex items-center justify-center gap-2 hover:bg-gray-50">
              <img src="/Microsoft.png" alt="Microsoft" className="w-5 h-5" />
              Signup with Microsoft
            </button>
          </div>

          {/* Footer Text */}
          <p className="text-center font-medium text-sm text-[#7E8B9E] mt-6">
            Already have an account?{" "}
            <span className="text-[#D8A85B] cursor-pointer hover:underline">
              Sign in here
            </span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Signup;
