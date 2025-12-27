import { FaAmazon, FaWhatsapp, FaFacebookF, FaArrowRight } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="bg-no-repeat bg-cover bg-center mt-2"
      style={{ backgroundImage: "url('/footer.png')" }}
    >
      <div className="max-w-7xl mx-auto px-6 pt-12">
        {/* WHITE FOOTER CARD */}
        <div className="bg-white rounded-2xl px-10 py-12 grid grid-cols-1 md:grid-cols-6 gap-10">
          
          {/* BRAND */}
          <div className="md:col-span-2">
            <img src="/Logo.png" alt="Wellfetch" className="w-36 mb-4" />
            <p className="text-sm text-black max-w-xs leading-relaxed">
              Premium, vet-formulated supplements for dogs.
              Keeping tails wagging since 2025.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="md:col-span-1">
            <h4 className="text-xs font-semibold text-gray-500 mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-black">
              <li>Home</li>
              <li>Shop</li>
              <li>Allergy Chews</li>
              <li>Probiotic Chews</li>
              <li>Blogs</li>
            </ul>
          </div>

          {/* HELP */}
          <div className="md:col-span-1">
            <h4 className="text-xs font-semibold text-gray-500 mb-4 uppercase tracking-wider">
              Help
            </h4>
            <ul className="space-y-2 text-sm text-black">
              <li>Manage Subscription</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="md:col-span-2 text-sm text-black flex flex-col md:items-end md:text-right">
            <button className="bg-black text-white text-xs px-6 py-2 rounded-full mb-4">
              Request a call
            </button>

            <p className="mb-1">+1 (999) 999-99-99</p>
            <p className="mb-1">info@wellfetch.com</p>
            <p className="mb-1 leading-snug">
              Pet Store Ltd, 123 High Street <br /> Manchester, M1 2AB United Kingdom
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3 mt-4">
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#D8A85B] text-black">
                <FaAmazon size={14} />
              </span>
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#D8A85B] text-black">
                <FaWhatsapp size={14} />
              </span>
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#D8A85B] text-black">
                <FaFacebookF size={14} />
              </span>
            </div>
          </div>
        </div>

        {/* GRADIENT BOTTOM BAR */}
        <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <p className="text-3xl font-bold max-w-md">
            Get 10% off your first order plus
            expert dog health tips.
          </p>

          {/* EMAIL INPUT */}
          <div className="flex items-center border border-white/40 rounded-full px-5 py-2 w-full max-w-sm">
            <input
              type="email"
              placeholder="yourmail@gmail.com"
              className="bg-transparent outline-none text-sm text-white flex-1 placeholder-white/60"
            />
            <FaArrowRight className="text-white w-4 h-4 cursor-pointer" />

          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 flex justify-between text-xs text-white/60 pb-6">
          <span>© 2025 • Copyright</span>
          <span>Privacy</span>
        </div>
      </div>
    </footer>
  );
}
