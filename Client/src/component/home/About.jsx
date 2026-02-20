import React from "react";
import { Target, Eye, Rocket } from "lucide-react";

const About = () => {
  return (
    <>
      {/* ================= ABOUT ================= */}
      <section className="bg-[#0b1b34] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              About Techno Developer
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto mt-4">
              We are a team of passionate developers and marketers dedicated to
              building digital products that drive real business growth and
              measurable results.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#5b74b4]/90 hover:bg-[#5b74b4] transition rounded-2xl p-8 relative group">
              <div className="w-14 h-14 rounded-full bg-[#0b1b34] flex items-center justify-center mb-6">
                <Target className="text-white" size={26} />
              </div>

              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-100 text-sm leading-relaxed">
                To empower businesses with cutting-edge technology and
                performance marketing solutions that drive growth, efficiency,
                and innovation in a digital-first world.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#5b74b4]/90 hover:bg-[#5b74b4] transition rounded-2xl p-8 relative group">
              <div className="w-14 h-14 rounded-full bg-[#0b1b34] flex items-center justify-center mb-6">
                <Eye className="text-white" size={26} />
              </div>

              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-gray-100 text-sm leading-relaxed">
                To be the leading global partner for digital marketing and
                custom software development, recognized for transparency,
                quality, and client success.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#5b74b4]/90 hover:bg-[#5b74b4] transition rounded-2xl p-8 relative group">
              <div className="w-14 h-14 rounded-full bg-[#0b1b34] flex items-center justify-center mb-6">
                <Rocket className="text-white" size={26} />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Why TechnoDeveloper
              </h3>
              <p className="text-gray-100 text-sm leading-relaxed">
                We combine technical expertise with business strategy. We don’t
                just build websites or run ads — we create scalable systems that
                generate real revenue growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
