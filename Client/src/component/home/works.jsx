import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const projects = [
  {
    title: "FinTech Mobile App",
    tag: "MOBILE APP",
    img: "/images/p1.jpg",
    desc: "Secure mobile banking application with biometric authentication.",
  },
  {
    title: "Portfolio Website",
    tag: "WEB DESIGN",
    img: "/images/p2.jpg",
    desc: "Modern portfolio with smooth animations and responsive design.",
  },
  {
    title: "The Chef Kart",
    tag: "WEB APPLICATION",
    img: "/images/p3.jpg",
    desc: "Chef booking system with login/signup authentication.",
  },
  {
    title: "Analytics Dashboard",
    tag: "SAAS",
    img: "/images/p4.jpg",
    desc: "Data visualization dashboard for business insights.",
  },
];

const Card = ({ item }) => (
  <div className="bg-[#141E2F] rounded-2xl overflow-hidden border border-white/10">
    <img
      src={item.img}
      alt={item.title}
      className="h-48 w-full object-cover"
    />

    <div className="p-6">
      <p className="text-blue-400 text-sm font-semibold">{item.tag}</p>
      <h3 className="text-white text-xl font-bold mt-2">{item.title}</h3>
      <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
    </div>
  </div>
);

const Work = () => {
  return (
    <section className="bg-[#071224] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-14">
          Featured <span className="text-blue-400">Projects</span>
        </h2>

        {/* ===== ROW 1 (LEFT → RIGHT) ===== */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={24}
          loop={true}
          speed={6000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mb-8"
        >
          {projects.map((item, i) => (
            <SwiperSlide key={i}>
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ===== ROW 2 (RIGHT → LEFT) ===== */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={24}
          loop={true}
          speed={6000}
          dir="rtl"
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((item, i) => (
            <SwiperSlide key={i}>
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Work;