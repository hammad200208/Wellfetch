import Footer from "../../components/Footer";

const Contact = () => {
  return (
    <section>
    <div className="pb-10 pt-20 px-4 bg-white max-w-6xl mx-auto">

      {/* Header OUTSIDE the box */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-[#D8A85B] mb-2">
          Contact Us
        </h2>
        <p className="text-sm text-[#000000] md:max-w-md">
          we are committed to processing the information in order to contact you
        </p>
      </div>

      {/* Box */}
      <div
        className="rounded-2xl p-8"
        style={{
          background:
            "linear-gradient(90deg, #F7FAFF 0%, #FFF8EE 100%)",
          boxShadow:
            "0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004D",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="text-sm text-[#000000]">First Name</label><span className="text-red-500">*</span>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#F4A640]"
              />
            </div>

            <div>
              <label className="text-sm text-[#000000]">Phone Number</label><span className="text-red-500">*</span>
              <input
                type="text"
                placeholder="+1234567889"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#F4A640]"
              />
            </div>

            <div>
              <label className="text-sm text-[#000000]">Email Address</label><span className="text-red-500">*</span>
              <input
                type="email"
                placeholder="rimelll@gmail.com"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#F4A640]"
              />
            </div>

            <div>
              <label className="text-sm text-[#000000]">Country</label>
              <select className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#F4A640]">
                <option> Select Country</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-[#000000]">Message</label>
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-sm resize-none bg-white focus:outline-none focus:ring-1 focus:ring-[#F4A640]"
              />
            </div>

            <button
              type="submit"
              className="bg-[#D8A85B] text-white px-8 py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
            >
              Submit
            </button>
          </form>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/dog.png"
              alt="Dog"
              className="max-w-xs w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </section>
  );
};

export default Contact;
