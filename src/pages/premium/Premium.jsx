import { FaRegClock } from "react-icons/fa";
import Footer from "../../components/Footer";

const Premium = () => {
  return (
    <section>
    <div className="pt-20 pb-10">
      <div className="max-w-3xl mx-auto bg-white rounded-xl p-2">

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <img
            src="/author4.jpg"
            alt="Author"
            className="w-9 h-9 rounded-full object-cover"
          />

          {/* Author + Date (same line) */}
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium text-[#D8A85B]">Author</span>
            <span className="text-gray-400">Nov 28, 2025</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Premium, vet-formulated..
        </h2>

       {/* Meta Row – single badge */}
<div className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-full mb-6">

  {/* Read time text */}
  <span className="text-xs text-gray-500">
    6 Min Read
  </span>

  {/* Social Icons inside same badge */}
  <div className="flex items-center gap-3">
    <img
      src="/insta.png"
      alt="Instagram"
      className="w-4 h-4 cursor-pointer"
    />
    <img
      src="/fb.png"
      alt="Facebook"
      className="w-4 h-4 cursor-pointer"
    />
    <img
      src="/x.png"
      alt="X"
      className="w-4 h-4 cursor-pointer"
    />
    <img
      src="/vvector.png"
      alt="Share"
      className="w-4 h-4 cursor-pointer"
    />
  </div>

</div>

        {/* Image */}
        <div className="mb-5">
          <img
            src="/dog4.png"
            alt="Golden dog"
            className="w-full h-85 object-cover rounded-lg"
          />
        </div>

        {/* Content */}
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
        </p>

        <p className="text-gray-800 text-sm font-semibold border-l-2 border-[#4A4A4A] pl-4">
          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </p>

      </div>
    </div>
    <Footer />
    </section>
  );
};

export default Premium;
