import React from 'react'
import header from "../../images/header.png";

const Hero = () => {
  return (
     <>
        {/* ================= HERO ================= */}
      <section className="bg-[#0b1b34] text-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-block bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-sm text-gray-200 mb-6">
              Premium Software Solutions
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Grow Your Business with <br />
              <span className="text-blue-400">Smart Digital Marketing</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-gray-300 max-w-xl">
              We build scalable, high-performance web and marketing systems
              designed to elevate your brand and generate consistent leads.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:opacity-90 px-7 py-3 rounded-xl font-semibold text-black transition"
              >
                Get a Quote
              </a>

              <a
                href="/services"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 px-7 py-3 rounded-xl font-semibold text-black transition"
              >
                View Service
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-[380px] md:w-[360px] aspect-square">
              {/* rotating border glow */}
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl animate-pulse"></div>

              {/* Rotating Image */}
              <img
                src={header}
                alt="hero"
                className="w-full h-full object-contain animate-spin-slow"
              />
            </div>
          </div>
        </div>
      </section>
     </>
  )
}

export default Hero
