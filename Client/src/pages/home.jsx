
import header from "../images/header.png";
import About from "../component/home/About";
import Service from "../component/home/service";
import Industries from "../component/home/industries";
import Work from "../component/home/Works";
import Process from "../component/home/workProcess";
import WhyChooseUs from "../component/home/WhyChooseUs";
import Contact from "../component/home/Contact";
import Hero from "../component/home/hero";


const Home = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* ================= HERO ================= */}
       <Hero />
     
      {/* ================= ABOUT ================= */}
      <About />
      
      {/* ================= SERVICES ULTRA ================= */}
      <Service />
    
      {/* ================= INDUSTRIES ================= */}
      <Industries />

      {/* ================= WORKS ================= */}
       <Work/>

      {/* ================= HOW WE WORK ================= */}
      <Process />
     
      {/* ================= WHY CHOOSE US ================= */}
      <WhyChooseUs />

      {/* ================= GET IN TOUCH ================= */}
      <Contact />
      
    </main>
  );
};

export default Home;
