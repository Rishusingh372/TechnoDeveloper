import React from "react";

const steps = [
  {
    number: "01",
    title: "Idea & Requirement",
    desc: "We start by understanding your vision, goals, and specific requirements to lay a solid foundation.",
  },
  {
    number: "02",
    title: "Planning & Design",
    desc: "We create detailed roadmaps and intuitive UI/UX designs to visualize the final product.",
  },
  {
    number: "03",
    title: "Development",
    desc: "Our expert developers bring the designs to life using clean, efficient, and scalable code.",
  },
  {
    number: "04",
    title: "Testing",
    desc: "Rigorous testing ensures your software is bug-free, secure, and performs flawlessly.",
  },
  {
    number: "05",
    title: "Launch & Support",
    desc: "We deploy your solution and provide ongoing support to ensure continued success.",
  },
];

const Process = () => {
  return (
    <section className="relative bg-[#071224] text-white py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.15),transparent_40%)]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-blue-400">Process</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-blue-500/50 via-blue-400 to-blue-500/50"></div>

          <div className="space-y-20">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className="md:w-1/2 px-6">
                  <div className="relative bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition duration-300">
                    {/* Step Number */}
                    <span className="absolute top-4 right-6 text-6xl font-bold text-white/5 select-none">
                      {step.number}
                    </span>

                    <h3 className="text-xl font-semibold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full border-4 border-[#071224] shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>
                </div>

                {/* Spacer */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;