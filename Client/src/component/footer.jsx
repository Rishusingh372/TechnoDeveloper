import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Logo from "../images/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#081428] text-gray-300 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* 🔷 Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ✅ Brand */}
          <div>
            <img
              src={Logo}
              alt="TechnoDeveloper logo"
              className="h-20 mb-4"
            />

            <p className="text-sm leading-relaxed">
              Performance-driven digital marketing and MERN development
              services to help businesses scale faster with high-converting
              strategies.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="p-2 bg-white/5 rounded-lg hover:bg-blue-600 transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 rounded-lg hover:bg-pink-600 transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 rounded-lg hover:bg-blue-500 transition"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* ✅ Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="/google-ads" className="hover:text-white transition">
                  Google Ads Management
                </a>
              </li>
              <li>
                <a href="/meta-ads" className="hover:text-white transition">
                  Meta Ads (Facebook & Instagram)
                </a>
              </li>
              <li>
                <a
                  href="/website-development"
                  className="hover:text-white transition"
                >
                  Website Development
                </a>
              </li>
              <li>
                <a href="/landing-page" className="hover:text-white transition">
                  Landing Page Design
                </a>
              </li>
              <li>
                <a
                  href="/performance-marketing"
                  className="hover:text-white transition"
                >
                  Performance Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* ✅ Industries */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Industries
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/healthcare-marketing"
                  className="hover:text-white transition"
                >
                  Healthcare Marketing
                </a>
              </li>
              <li>
                <a
                  href="/real-estate-marketing"
                  className="hover:text-white transition"
                >
                  Real Estate Marketing
                </a>
              </li>
              <li>
                <a
                  href="/education-marketing"
                  className="hover:text-white transition"
                >
                  Education & Coaching
                </a>
              </li>
              <li>
                <a
                  href="/home-services-marketing"
                  className="hover:text-white transition"
                >
                  Home Services
                </a>
              </li>
              <li>
                <a href="/ecommerce-marketing" className="hover:text-white transition">
                  E-commerce & Retail
                </a>
              </li>
            </ul>
          </div>

          {/* ✅ Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Contact Us
            </h3>

            <div className="space-y-3 text-sm">
              <a
                href="mailto:rishu272018@gmail.com"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Mail size={16} /> rishu272018@gmail.com
              </a>

              <a
                href="tel:+919341897481"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Phone size={16} /> +91 9341897481
              </a>

              <p className="text-gray-400">India</p>
            </div>

            {/* CTA */}
            <a
              href="/contact"
              className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg text-white text-sm font-medium transition"
            >
              Get Free Consultation
            </a>
          </div>
        </div>

        {/* 🔷 Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} TechnoDeveloper. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
