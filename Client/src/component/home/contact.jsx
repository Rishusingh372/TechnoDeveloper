import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-[#071224] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch rounded-3xl border border-white/10 p-2">
          
          {/* ================= MAP ================= */}
          <div className="w-full h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-[#141E2F]">
            <iframe
              title="location"
              src="https://www.google.com/maps?q=Ghaziabad&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>

          {/* ================= FORM ================= */}
          <div className="bg-[#141E2F] rounded-2xl p-8 md:p-10 flex flex-col justify-center border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
              Get Your Free Consultation Today!
            </h2>

            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full px-6 py-4 rounded-full bg-white text-[#071224] outline-none focus:ring-2 focus:ring-white/40"
                />
              </div>

              {/* Number */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter Your Number"
                  className="w-full px-6 py-4 rounded-full bg-white text-[#071224] outline-none focus:ring-2 focus:ring-white/40"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#071224] border border-white/20 text-white font-semibold py-4 rounded-full hover:bg-[#0a1630] transition duration-300"
              >
                Request to call
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;