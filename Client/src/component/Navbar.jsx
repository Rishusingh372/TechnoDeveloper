import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "../images/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);

  return (
    <nav className="bg-[#0b1b34] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* ✅ Logo + Brand */}
          <div className="flex items-center gap-3 cursor-pointer">
            <img src={Logo} alt="logo" className="h-20 w-auto" />
            <span className="text-xl font-semibold tracking-wide">
              TechnoDeveloper
            </span>
          </div>

          {/* ✅ Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium">

            <a href="/" className="hover:text-blue-400 transition">
              Home
            </a>

            {/* ✅ Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-blue-400 transition">
                Services <ChevronDown size={16} />
              </button>

              <div
                className={`absolute left-0 top-10 bg-[#0b1b34] text-white rounded-xl shadow-xl w-56 py-3 transition-all duration-200 ${
                  serviceOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <a href="/google-ads" className="block px-4 py-2 hover:bg-gray-600">
                  Google Ads
                </a>
                <a href="/meta-ads" className="block px-4 py-2 hover:bg-gray-600">
                  Meta Ads
                </a>
                <a href="/website-development" className="block px-4 py-2 hover:bg-gray-600">
                  Website Development
                </a>
              </div>
            </div>

            {/* ✅ Industries Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIndustryOpen(true)}
              onMouseLeave={() => setIndustryOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-blue-400 transition">
                Industries <ChevronDown size={16} />
              </button>

              <div
                className={`absolute left-0 top-10 bg-[#0b1b34] text-white rounded-xl shadow-xl w-64 py-3 transition-all duration-200 ${
                  industryOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <a href="/healthcare-marketing" className="block px-4 py-2 hover:bg-gray-600">
                  Healthcare Marketing
                </a>
                <a href="/real-estate-marketing" className="block px-4 py-2 hover:bg-gray-600">
                  Real Estate Marketing
                </a>
                <a href="/education-marketing" className="block px-4 py-2 hover:bg-gray-600">
                  Education Marketing
                </a>
                <a href="/home-services-marketing" className="block px-4 py-2 hover:bg-gray-600">
                  Home Services Marketing
                </a>
              </div>
            </div>

            <a href="/contact" className="hover:text-blue-400 transition">
              Contact
            </a>

            <a href="/blog" className="hover:text-blue-400 transition">
              Blog
            </a>
            <Link to="/plans" className="hover:text-blue-400 transition">
              Plans
            </Link>
          </div>

          {/* ✅ Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0b1b34] px-6 pb-6 space-y-4 font-medium">
          <a href="/" className="block">
            Home
          </a>

          <div>
            <p className="font-semibold">Services</p>
            <div className="ml-4 mt-2 space-y-2 text-gray-300">
              <a href="/google-ads" className="block">Google Ads</a>
              <a href="/meta-ads" className="block">Meta Ads</a>
              <a href="/website-development" className="block">
                Website Development
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold">Industries</p>
            <div className="ml-4 mt-2 space-y-2 text-gray-300">
              <a href="/healthcare-marketing" className="block">Healthcare</a>
              <a href="/real-estate-marketing" className="block">Real Estate</a>
              <a href="/education-marketing" className="block">Education</a>
              <a href="/home-services-marketing" className="block">
                Home Services
              </a>
            </div>
          </div>

          <a href="/contact" className="block">Contact</a>
          <a href="/blog" className="block">Blog</a>
          <Link to="/plans" className="block">Plans</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
