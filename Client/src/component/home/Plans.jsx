import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

const Plans = () => {
  const [yearly, setYearly] = useState(false);
  const [activeTab, setActiveTab] = useState("website");

  /* ================= WEBSITE PLANS ================= */
  const websitePlans = [
    {
      name: "Starter",
      price: 14999,
      popular: false,
      features: [
        "Up to 5 Pages Website",
        "Mobile Responsive",
        "Basic SEO Setup",
        "Contact Form",
        "Fast Delivery",
      ],
    },
    {
      name: "Business",
      price: 29999,
      popular: true,
      features: [
        "Up to 10 Pages",
        "Premium Design",
        "Speed Optimization",
        "Lead Forms",
        "Basic Animations",
      ],
    },
    {
      name: "Premium",
      price: 59999,
      popular: false,
      features: [
        "Custom MERN Website",
        "Advanced Animations",
        "Admin Panel",
        "API Integration",
        "Full SEO Structure",
      ],
    },
  ];

  /* ================= ADS PLANS ================= */
  const adsPlans = [
    {
      name: "Starter Ads",
      monthly: 9999,
      yearly: 7999,
      popular: false,
      features: [
        "Google OR Meta Ads Setup",
        "Keyword/Audience Research",
        "1 Campaign",
        "Conversion Tracking",
        "Monthly Report",
      ],
    },
    {
      name: "Growth Ads",
      monthly: 14999,
      yearly: 12999,
      popular: true,
      features: [
        "Google + Meta Ads",
        "Up to 4 Campaigns",
        "Retargeting Setup",
        "A/B Testing",
        "Bi-weekly Optimization",
      ],
    },
    {
      name: "Scale Ads",
      monthly: 24999,
      yearly: 21999,
      popular: false,
      features: [
        "Unlimited Campaigns",
        "Advanced Funnel Strategy",
        "Creative Guidance",
        "Weekly Scaling",
        "Priority Support",
      ],
    },
  ];

  const currentPlans = activeTab === "website" ? websitePlans : adsPlans;

  return (
    <section className="bg-[#071224] text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_40%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-blue-400 font-semibold mb-2 tracking-wide">
            Pricing Plans
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Flexible Pricing for Every Business
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white/5 border border-white/10 rounded-full p-1 flex">
            <button
              onClick={() => setActiveTab("website")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                activeTab === "website" ? "bg-blue-600" : "text-gray-400"
              }`}
            >
              Website
            </button>
            <button
              onClick={() => setActiveTab("ads")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                activeTab === "ads" ? "bg-blue-600" : "text-gray-400"
              }`}
            >
              Google & Meta Ads
            </button>
          </div>
        </div>

        {/* Yearly toggle only for Ads */}
        {activeTab === "ads" && (
          <div className="flex justify-center mb-14">
            <div className="bg-white/5 border border-white/10 rounded-full p-1 flex">
              <button
                onClick={() => setYearly(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  !yearly ? "bg-blue-600" : "text-gray-400"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  yearly ? "bg-blue-600" : "text-gray-400"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        )}

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {currentPlans.map((plan, i) => {
            const price =
              activeTab === "ads"
                ? yearly
                  ? plan.yearly
                  : plan.monthly
                : plan.price;

            return (
              <div
                key={i}
                className={`group relative rounded-2xl p-[1px] transition ${
                  plan.popular
                    ? "bg-gradient-to-br from-blue-500 via-blue-400 to-blue-500"
                    : "bg-gradient-to-br from-blue-500/30 via-transparent to-blue-400/30"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-4 py-1 rounded-full font-semibold shadow-lg">
                    MOST POPULAR
                  </div>
                )}

                {/* Card */}
                <div className="bg-[#0b1b34] rounded-2xl p-8 h-full border border-white/10 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)] transition">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>

                  <div className="text-3xl font-bold text-blue-400 mb-6">
                    ₹{price}
                    {activeTab === "ads" && (
                      <span className="text-sm text-gray-400">/mo</span>
                    )}
                  </div>

                  <ul className="space-y-3 text-sm text-gray-300">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-2">
                        <CheckCircle
                          size={16}
                          className="text-blue-400 mt-0.5"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3 mt-8">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition">
                      Get Started
                    </button>

                    <a
                      href="https://wa.me/919341897481"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center border border-white/20 hover:bg-white/10 py-3 rounded-lg text-sm transition"
                    >
                      WhatsApp Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Plans;