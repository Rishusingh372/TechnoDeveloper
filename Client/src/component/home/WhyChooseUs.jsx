import React from "react";
import {
  CheckCircle,
  BadgeCheck,
  Users,
  TrendingUp,
  Clock,
} from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#071224] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <p className="text-blue-400 uppercase tracking-widest text-sm mb-4">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              We Build Software That{" "}
              <span className="text-blue-400">Matters</span>
            </h2>

            <p className="text-gray-400 mb-8 max-w-xl">
              At StackVix, we don’t just deliver code; we deliver value.
              Our team is committed to understanding your business and
              providing solutions that drive real results.
            </p>

            {/* BULLET POINTS */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Custom Solutions",
                "Scalable Architecture",
                "Business-Oriented Approach",
                "Long-Term Support",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-blue-400" size={20} />
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="grid sm:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-md hover:border-blue-500/40 transition">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-blue-500/10 flex items-center justify-center">
                <BadgeCheck className="text-blue-400" size={28} />
              </div>
              <h3 className="text-3xl font-bold mb-1">100+</h3>
              <p className="text-gray-400 text-sm">Projects Completed</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-md hover:border-blue-500/40 transition">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Users className="text-blue-400" size={28} />
              </div>
              <h3 className="text-3xl font-bold mb-1">50+</h3>
              <p className="text-gray-400 text-sm">Happy Clients</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-md hover:border-blue-500/40 transition">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-blue-500/10 flex items-center justify-center">
                <TrendingUp className="text-blue-400" size={28} />
              </div>
              <h3 className="text-3xl font-bold mb-1">98%</h3>
              <p className="text-gray-400 text-sm">Success Rate</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-md hover:border-blue-500/40 transition">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Clock className="text-blue-400" size={28} />
              </div>
              <h3 className="text-3xl font-bold mb-1">24/7</h3>
              <p className="text-gray-400 text-sm">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;