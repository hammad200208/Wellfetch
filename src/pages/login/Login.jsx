import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* Top Bar */}
      <div className="w-full bg-[#DDB370] py-4 flex justify-center">
        <img src="/logo1.png" alt="WellFood Logo" className="h-7" />
      </div>

      {/* Content */}
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-sm text-start">

          {/* Headings */}
          <h1 className="text-2xl font-bold text-black">Hello,</h1>
          <h2 className="text-2xl font-bold text-black mt-1">
            Welcome Back!
          </h2>
          <p className="text-sm text-[#9B9B9B] mt-2">
            We are very happy to see you back!
          </p>

          {/* Form */}
          <form className="mt-8 space-y-4 text-left">

            {/* Email */}
            <div>
              <label className="text-xs font-semibold text-[#323A46]">
                Email
              </label>
              <input
                type="email"
                placeholder="lorem@gmail.com"
                className="w-full mt-1 px-4 py-2 text-[#CBD1D8] bg-[#FAFAFC] border border-[#CBD1D8] rounded-md text-sm outline-none focus:ring-2 focus:ring-[#E6B676]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-xs font-semibold text-[#323A46]">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Please Enter Your Password"
                  className="w-full mt-1 px-4 py-2 text-[#CBD1D8] pr-10 bg-[#FAFAFC] border border-[#CBD1D8] rounded-md text-sm outline-none focus:ring-2 focus:ring-[#E6B676]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <img
                    src="/eye.png"
                    alt="Toggle password"
                    className="w-4 h-4 opacity-70"
                  />
                </button>
              </div>

              <div className="text-right mt-1">
                <span className="text-xs text-gray-500 cursor-pointer hover:underline">
                  Forgot Password
                </span>
              </div>
            </div>

            {/* Login Button */}
            <Link to="/">
            <button
              type="submit"
              className="w-full bg-[#DDB370] text-[#FFFFFF] py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
            >
              Login
            </button>
            </Link>
          </form>

          {/* OR */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-[#7E8B9E]" />
            <span className="text-xs text-[#7E8B9E]">OR</span>
            <div className="flex-1 h-px bg-[#7E8B9E]" />
          </div>

          {/* Social Login */}
          <div className="flex gap-3">
            <button className="flex-1 text-[#7E8B9E] border border-[#E0E3E8] rounded-md py-2 text-md flex items-center justify-center gap-2 hover:bg-gray-50">
              <img src="/Google.png" alt="Google" className="w-6 h-6" />
              Login with Google
            </button>

            <button className="flex-1 text-[#7E8B9E] border border-[#E0E3E8] rounded-md py-2 text-md flex items-center justify-center gap-2 hover:bg-gray-50">
              <img src="/Microsoft.png" alt="Microsoft" className="w-6 h-6" />
              Login with Microsoft
            </button>
          </div>

          {/* Footer */}
          <p className="text-md text-[#7E8B9E] mt-8">
            Don’t have an account?{" "}
            <span className="text-[#DDB370] font-medium cursor-pointer hover:underline">
              Sign up here
            </span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;
