import {
  CheckCircle,
  Rocket,
  BarChart3,
  Globe,
  HeartPulse,
  Building2,
  GraduationCap,
  ShoppingCart,
  UtensilsCrossed,
} from "lucide-react";
import {
  PenTool,
  Brain,
  Cpu,
  Layers,
  MonitorSmartphone,
  Smartphone,
  Megaphone,
  TrendingUp,
} from "lucide-react";

import { Target, Eye } from "lucide-react";
import header from "../images/header.png";
import About from "../component/home/About";
import Service from "../component/home/service";
import Industries from "../component/home/industries";
import Plans from "../component/home/Plans";
import Work from "../component/home/Works";


const Home = () => {
  return (
    <main className="bg-white text-gray-800">
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

      {/* ================= ABOUT ================= */}
      <About />
      
      {/* ================= SERVICES ULTRA ================= */}
      <Service />
    
      {/* ================= INDUSTRIES ================= */}
      <Industries />
      {/* ================= PLANS ================= */}
      <Plans />

      {/* ================= WORKS ================= */}
       <Work/>

      {/* ================= HOW WE WORK ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">How We Work</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {["Research", "Strategy", "Execution", "Optimization"].map(
              (step, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-blue-600 font-bold text-xl mb-2">
                    0{i + 1}
                  </div>
                  <p>{step}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {["ROI Focused", "Expert Team", "Transparent Reporting"].map(
              (item, i) => (
                <div key={i} className="border p-6 rounded-xl">
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ================= GET IN TOUCH ================= */}
      <section className="bg-[#0b1b34] text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Grow Your Business?
        </h2>
        <p className="text-gray-300 mb-8">
          Get your free strategy consultation today.
        </p>

        <a
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium transition"
        >
          Get In Touch
        </a>
      </section>
    </main>
  );
};

export default Home;
