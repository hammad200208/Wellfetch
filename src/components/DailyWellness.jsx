const DailyWellnes = () => {
  return (
    <section
      className="w-full bg-[#AA335B] bg-repeat bg-center py-20"
      style={{
        backgroundImage: "url('/Paws.png')",
        fontFamily: "'ABeeZee', sans-serif",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
        
        <div className="text-center max-w-3xl">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-normal leading-tight">
            <span className="text-[#D8A85B]">Daily wellness,</span>{" "}
            <span className="text-white italic">delivered monthly.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-white text-sm md:text-base">
            Premium, science-backed supplements for your dog.
            <br />
            Subscribe today and save 15% on every order.
          </p>

          {/* Button */}
          <button className="mt-8 bg-white text-[#AA335B] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#D8A85B] hover:text-white transition inline-flex items-center gap-2">
            Shop Now →
          </button>
        </div>

      </div>
    </section>
  );
};

export default DailyWellnes;
