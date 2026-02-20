import {
  HeartPulse,
  Building2,
  GraduationCap,
  Home,
  ShoppingCart,
  UtensilsCrossed,
} from "lucide-react";

const industries = () => {
  return (
    <>
      {/* ================= INDUSTRIES ================= */}
      <section className="bg-[#071224] text-white py-24 relative overflow-hidden">
        {/* background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_40%)]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-blue-400 font-semibold mb-2 tracking-wide">
              Industries We Serve
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Digital Solutions for Every Industry
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              We provide specialized marketing and development solutions
              tailored for high-growth industries.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: HeartPulse,
                title: "Healthcare",
                desc: "Marketing and lead generation solutions for doctors, clinics, and hospitals.",
              },
              {
                icon: Building2,
                title: "Real Estate",
                desc: "High-quality property leads and campaigns for builders and agents.",
              },
              {
                icon: GraduationCap,
                title: "Education & Coaching",
                desc: "Student lead generation and enrollment growth strategies.",
              },
              {
                icon: Home,
                title: "Home Services",
                desc: "Local lead generation for repair, AC service, and technicians.",
              },
              {
                icon: ShoppingCart,
                title: "E-commerce & Retail",
                desc: "Performance marketing to boost online sales and ROAS.",
              },
              {
                icon: UtensilsCrossed,
                title: "Hospitality & Restaurants",
                desc: "Customer acquisition campaigns for hotels and restaurants.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
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

                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.desc}
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

export default industries;
