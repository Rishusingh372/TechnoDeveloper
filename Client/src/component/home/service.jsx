import React from "react";
import {
  PenTool,
  Brain,
  Cpu,
  Layers,
  MonitorSmartphone,
  Smartphone,
  BarChart3,
  Megaphone,
  TrendingUp,
} from "lucide-react";

const service = () => {
  return (
    <>
      {/* ================= SERVICES ULTRA ================= */}
      <section className="bg-[#071224] text-white py-24 relative overflow-hidden">
        {/* background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%)]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-blue-400 font-semibold mb-2 tracking-wide">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Premium Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              Performance marketing and modern development solutions designed to
              accelerate your business growth.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Google Ads",
                desc: "High-converting campaigns that maximize ROI and generate quality leads.",
              },
              {
                icon: Megaphone,
                title: "Meta Ads",
                desc: "Facebook & Instagram ads that boost brand visibility and sales.",
              },
              {
                icon: TrendingUp,
                title: "Business Growth",
                desc: "Data-driven strategies to scale revenue and customer acquisition.",
              },
              {
                icon: PenTool,
                title: "Product Design",
                desc: "Intuitive and modern product experiences for web and mobile.",
              },
              {
                icon: Brain,
                title: "AI Development",
                desc: "AI-powered systems that automate workflows and decisions.",
              },
              {
                icon: Cpu,
                title: "IoT & Analytics",
                desc: "Connected platforms with real-time actionable insights.",
              },
              {
                icon: Layers,
                title: "Custom Software",
                desc: "Tailored solutions for complex business workflows.",
              },
              {
                icon: MonitorSmartphone,
                title: "Web Applications",
                desc: "High-performance apps built with modern frameworks.",
              },
              {
                icon: Smartphone,
                title: "Mobile Development",
                desc: "Native and cross-platform apps for iOS and Android.",
              },
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-blue-500/40 via-transparent to-blue-400/40 hover:from-blue-500 hover:to-blue-400 transition duration-300"
                >
                  {/* inner card */}
                  <div
                    className="bg-white/5 backdrop-blur-xl rounded-2xl p-7 h-full border border-white/10
                            group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)]
                            transition duration-300"
                  >
                    {/* icon */}
                    <div
                      className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5
                              group-hover:bg-blue-500/20 transition"
                    >
                      <Icon
                        className="text-blue-400 group-hover:scale-110 transition"
                        size={28}
                      />
                    </div>

                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default service;
